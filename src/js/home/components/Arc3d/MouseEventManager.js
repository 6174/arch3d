/**
 * MouseEventManager
 */
class MouseEventManager {
  constructor(params) {
    this.stage = params.stage;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-5000, -5000);
    this.$canvasElement = this.stage.renderer.domElement;

    /**
		 * array of mouse event enbaled object
		 * @type {Array}
		 */
    this.objectRefs = [];

    /**
		 * current intersect obj
		 * @type {[type]}
		 */
    this.INTERSECT = null;

    /**
         * current hovered obj
         * mouse move is fast, so cant set every INTERSECT object as active
         * @type {[type]}
         */
    this.activeObject = null;
    this.activeObjects = [];

    /**
		 * [diabled mouse event]
		 * @type {Boolean}
		 */
    this.diabled = false;

    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);
  }

  /**
     * traverse scene and find all nodes
     * @return {[type]} [description]
     */
  initObjects() {
    let objects = (this.objectRefs = []);
    this.stage.scene.traverse(obj => {
      if (obj.name === "graph-node") {
        objects.push(obj);
      }
    });
  }

  bindEvent() {
    let ele = this.$canvasElement;
    $(ele).on("mousemove", this.onDocumentMouseMove);
    $(ele).on("click", this.onDocumentClick);
    $(ele).on("touchend", this.onDocumentTouchStart);
  }

  onDocumentMouseMove(event) {
    event.preventDefault();

    let ele = this.$canvasElement;
    let mouse = this.mouse;

    let viewportOffset = ele.getBoundingClientRect();

    let top = viewportOffset.top;
    let left = viewportOffset.left;

    let cX = event.clientX - left,
      cY = event.clientY - top;

    mouse.x = cX / viewportOffset.width * 2 - 1;
    mouse.y = -(cY / viewportOffset.height) * 2 + 1;
    mouse.cx = cX;
    mouse.cy = cY;

    this.raycasterCheck();

    const INTERSECT = this.INTERSECT;
    const activeObject = this.activeObject;
    if (INTERSECT && INTERSECT !== activeObject) {
      clearTimeout(this.unhoverTimer);
      clearTimeout(this.hoverTimer);

      this.hoverTimer = setTimeout(() => {
        this.hoverElement(INTERSECT);
      }, 100);
    } else {
      if (this.activeObjects.length > 0) {
        clearTimeout(this.unhoverTimer);
        clearTimeout(this.hoverTimer);
        this.unhoverTimer = setTimeout(() => {
          this.unhoverElement(activeObject);
        }, 100);
      }
    }
  }

  onDocumentTouchStart(event) {
    event.preventDefault();

    let ele = this.$canvasElement;
    let mouse = this.mouse;

    let viewportOffset = ele.getBoundingClientRect();

    let top = viewportOffset.top;
    let left = viewportOffset.left;

    let cX = event.originalEvent.changedTouches[0].clientX - left,
      cY = event.originalEvent.changedTouches[0].clientY - top;

    mouse.x = cX / viewportOffset.width * 2 - 1;
    mouse.y = -(cY / viewportOffset.height) * 2 + 1;
    mouse.cx = cX;
    mouse.cy = cY;

    setTimeout(() => {
      if (this.INTERSECT) {
        this.clickElement(this.INTERSECT);
      }
    }, 10);
  }

  onDocumentClick() {
    if (this.INTERSECT) {
      this.clickElement(this.activeObject);
    }
  }

  hoverElement(obj) {
    document.body.style.cursor = "pointer";
    this.unhoverAll();
    if (obj) {
      obj.hover();
      // this.stage.ui.showObjectHoverTip(obj, this.mouse);
      this.activeObject = obj;
      this.activeObjects.push(obj);
    }
  }

  unhoverElement(obj) {
    document.body.style.cursor = "default";
    this.unhoverAll();
    // this.stage.ui.hideObjectHoverTip();
    this.activeObject = null;
  }

  unhoverAll() {
    /**
         * 通过数组来管理所有 active 过的对象
         * 全部都要 unhover, 避免因 setTimeout 漏网之鱼
         * @param  {[type]} (el [description]
         * @return {[type]}     [description]
         */
    this.activeObjects.forEach(el => {
      el.unhover();
    });

    this.activeObjects = [];
  }

  clickElement(obj) {
    console.log("click ", obj);
  }

  raycasterCheck() {
    const { raycaster, mouse, stage, objectRefs } = this;

    let activeObject = this.activeObject;
    this.raycaster.setFromCamera(mouse, stage.camera);
    const intersects = raycaster.intersectObjects(objectRefs);

    if (intersects.length && !this.disabled) {
      if (this.INTERSECT != intersects[0].object) {
        this.INTERSECT = intersects[0].object;
      }
    } else {
      this.INTERSECT = null;
    }
  }
}

export default MouseEventManager;
