/**
 * app root
 */
import Layer from "./Layer";
import LayerConnect from "./LayerConnect";

import CameraManager from "./CameraManager";
import LightManger from "./LightManager";
import load from "./AssetsLoader";
// import getGraphData from '../services/getGraphData';
// import UI from './UI';
import Director from "./Director";
import MouseEventManager from "./MouseEventManager";

class Arc3d {
  constructor() {
    this.update = this.update.bind(this);
    this.daeModels = {};
    this.initialization();
    // refs
    this.layers = [];
  }

  initialization(params) {
    let renderer,
      camera,
      scene,
      light,
      width,
      height,
      orbitControl,
      cameraManager;
    const _this = this;

    initThree();
    initScene();
    initCamera();
    initLight();
    initDirector();

    this.mouseEventManager = new MouseEventManager({
      stage: this
    });

    window.addEventListener("resize", this.updateSize.bind(this), false);

    function initThree() {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);

      // 解决透明层渲染问题
      // 不过会导致 renderDepth 的配置失效
      // 物体的渲染顺序永远是 add 的顺序
      renderer.sortObjects = false;

      // shadow
      renderer.shadowMap.enabled = true;
      renderer.shadowMapSoft = true;
      renderer.shadowCameraNear = 1;
      renderer.shadowCameraFar = 10000;
      renderer.shadowCameraFov = 50;
      renderer.shadowMapBias = 0.0039;
      renderer.shadowMapDarkness = 0.5;
      renderer.shadowMapWidth = 1024;
      renderer.shadowMapHeight = 1024;

      _this.width = width;
      _this.height = height;
      _this.renderer = renderer;
    }

    function initScene() {
      window.scene = _this.scene = scene = new THREE.Scene();
      // scene.add( new THREE.GridHelper( 1000, 40 ) );
    }

    function initCamera() {
      _this.cameraManager = cameraManager = new CameraManager(_this);
      _this.camera = camera = cameraManager.camera;
      scene.add(cameraManager.el);
    }

    function initLight() {
      LightManger.lightup(scene);
    }

    function initDirector() {
      _this.director = new Director({
        stage: _this
      });
    }
  }

  mount(params) {
    const { $container, graphData } = params;

    this.$container = $container;
    this.updateSize();
    $container.appendChild(this.renderer.domElement);

    if (!graphData) {
      return;
    } else {
      this.graphData = graphData;
      // if (!this.__started) {
      this.start();
      // }
    }
  }

  updateSize() {
    let width = (this.width = this.$container.offsetWidth);
    let height = (this.height = this.$container.offsetHeight);

    this.cameraManager.resize({
      width,
      height
    });

    this.renderer.setSize(width, height);
  }

  start() {
    this.__started = true;
    /**
         * dae objects
         */
    const daePaths = {
      "test-icon": "/assets/dae/3dicon_db.dae"
    };
    const _this = this;

    async function loadThenStart() {
      let map = await load(daePaths);

      _this.daeModels = map;
      _this.render();
      _this.update();
      _this.mouseEventManager.initObjects();
      _this.mouseEventManager.bindEvent();

      setTimeout(() => {
        // 出场动画
        _this.director.playInitialAnimation();
      }, 0);
    }

    loadThenStart();
  }

  render(props) {
    const scene = this.scene;

    if (this.group) {
      scene.remove(this.group);
    }

    const group = (this.group = new THREE.Group());
    group.name = "stage-container";
    scene.add(group);
    var y = 300;
    const graphs = this.graphData.graphs;
    const gridSize = this.graphData.meta.gridSize;

    const layerPoses = initialLayerPos(gridSize);

    for (var i = 0; i < graphs.length; i++) {
      let graph = graphs[i];
      let layer = new Layer({
        stage: this,
        graphData: graph
      });
      layer.el.name = `layer-${i}`;

      const pos = layerPoses[graph.pos];
      group.add(
        layer.render({
          left: pos.x,
          top: pos.y
        })
      );

      this.layers.push(layer);
    }

    let layerConnect = new LayerConnect({
      stage: this,
      connects: this.graphData.layerConnects
    });

    group.add(layerConnect.render());
  }

  updateLoop() {
    const { renderer, scene, camera, cameraManager, mouseEventManager } = this;
    renderer.clear();
    cameraManager.update();
    scene.updateMatrixWorld();
    this.layers = [];

    renderer.render(scene, camera);
  }

  update() {
    this.updateLoop();
    requestAnimationFrame(this.update);
  }
}

function initialLayerPos(gridSize) {
  const width = gridSize[0];
  const height = gridSize[1];
  const layerWidth = 800;
  const layerHeight = 200;
  const layerMarginHorizontal = 40;
  const layerMarginVertical = 100;
  let ret = [];

  const marginBox = {
    width: layerWidth + layerMarginHorizontal,
    height: layerHeight + layerMarginVertical
  };

  let centerIndex = null;
  let size = width * height;

  for (let i = 0; i < size; i++) {
    const pos = {
      x: i % width,
      y: Math.floor(i / width)
    };

    ret.push({
      x: marginBox.width * pos.x,
      y: marginBox.height * pos.y
    });
  }

  // shift to center
  let last = ret[size - 1];
  let first = ret[0];

  const shift = {
    x: (last.x - first.x) / 2,
    y: (last.y - first.y) / 2
  };

  ret.forEach(it => {
    it.x = it.x - shift.x;
    it.y = it.y - shift.y;
  });

  return ret;
}

export default Arc3d;
