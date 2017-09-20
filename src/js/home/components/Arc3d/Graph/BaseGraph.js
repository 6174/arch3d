import {
    angle,
    PI_2,
    EPS,
    v
} from '../common/util';
import svgpath from '../common/svgpath';
import TextSprite from './TextSprite';
import TextPlane from './TextPlane';

/**
 * Graph
 */
class BaseGraph {
    constructor(props) {
        this.data = props.graphData;
        this.stage = props.stage;
    }
    update() {}
    render() {
        const {
            nodeDataArray,
            linkDataArray
        } = this.data;
        let group = new THREE.Group;
        nodeDataArray.forEach((node) => {
            if (node.isGroup) {
                if (node.text) {
                    group.add(this.renderGroup(node));
                }
                return;
            }
            let cube = this.renderCube(node) 
            group.add(cube);
        });

        linkDataArray.forEach((link) => {
            group.add(this.renderLink(link));
        });

        // group.add(this.renderRandomLink());
        group.position.y = 3;
        group.castShadow = true;
        group.position.x = -350;
        group.position.z = -250;
        group.name = "graph";
        return group;
    }

    renderGroup(node) {
        const {
            x,
            y,
            width,
            height
        } = node.bounds;
        let group = new THREE.Group();
        group.add(renderBackgruond());
        group.add(renderText());
        group.position.set(x, 0, y);

        return group;

        function renderBackgruond() {
            // yellow 0xFFC107;
            // aliceblue 0xF0F8FF
            // blue 0x1EADFF;
            const color = 0x1EADFF;
            // 0xdddddd;
            const borderColor = 0x1EADFF;
            let group = new THREE.Group();

            const lambertMaterial = new THREE.MeshLambertMaterial({
                color: color,
                opacity: .2,
                transparent: true
            });

            // const lineDashedMaterial = new THREE.LineDashedMaterial({
            //     color: color,
            //     linecap: 'round',
            //     dashSize: 4, 
            //     gapSize: 2, 
            //     linewidth: 2
            // });
            // 
             
            const lineDashedMaterial = new THREE.LineBasicMaterial({
                color: borderColor,
            });

            /**
             * create cube as ground
             * @type {THREE}
             */
            const geometry = new THREE.BoxBufferGeometry(width, 14, height);
            const mesh = new THREE.Mesh(geometry, lambertMaterial);
            mesh.renderDepth = -1;
            group.add(mesh);

            /**
             * create dashed line
             * @type {[type]}
             */
            const points = svgpath(`M0 0 H ${width} V ${height} H 0 V 0 `);
            const lineGeometry = new THREE.Geometry();
            points.forEach((point) => {
                lineGeometry.vertices.push(v(point));
            });
            lineGeometry.computeLineDistances();
            const line = new THREE.Line(lineGeometry, lineDashedMaterial);
            line.position.set(-width/2, 2, -height/2);
            group.add(line);

            group.position.set(width / 2, 0, height/ 2);

            return group;
        }

        function renderText() {
            var textSprite = new TextPlane(node.text , {
                fontsize: 24,
                borderColor: {
                    r: 150,
                    g: 150,
                    b: 150,
                    a: 1.0
                }
            });

            var text = textSprite.element;

            const scale = .3;
            text.position.x = (textSprite.bound.width / 2 ) * scale + 3;
            text.position.z = 11;
            text.position.y = 7;
            text.rotation.x = angle(-90);
            text.scale.set(scale, scale, scale);
            return text;
        }
    }

    renderCube(node) {
        const loc = node.bounds;
        const daeModels = this.stage.daeModels;

        // cube.position.addScalar()
        let group = new THREE.Group();
        renderCube();
        renderText();

        group.position.x = loc.x + loc.width / 2 + 53;
        group.position.z = loc.y;
        
        return group;

        function renderCube() {
            const cube = daeModels['test-icon'].scene.clone();
            const scale = 20;
            cube.position.set(0, 0, 0);
            cube.scale.set(scale, scale, scale);
            cube.updateMatrix();
            // let cubeGeometry = new THREE.BoxBufferGeometry(30, 20, 30);
            // let cubeMaterial = new THREE.MeshLambertMaterial({
            //  color: 0xCC0000
            // });
            // let cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
            // cubeMesh.castShadow = true;
            cube.position.z += 40;

            /**
             * hover effect
             * @type {THREE}
             */
            var box = new THREE.BoxHelper( cube );
            box.material = new THREE.LineBasicMaterial({
                color: 0xFF0000,
                opacity: 0,
                transparent: true
            });


            /**
             * for raycaster
             * @type {THREE}
             */
            var sphereGeo = new THREE.SphereGeometry(16, 16, 16);
            var sphere = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0
            }));

            sphere.name = 'graph-node';
            sphere.userData = node;
            sphere.position.set(-47, 4, 40);

            sphere.hover = function() {
                box.material.opacity = 1;
            }

            sphere.unhover = function() {
                box.material.opacity = 0;
            }

            group.add(box);
            group.add(cube);
            group.add(sphere);
            
            node._threeObj = sphere;
        }

        function renderText() {
            var textSprite = new TextSprite(node.name , {
                fontsize: 20,
                borderColor: {
		            r: 3,
		            g: 132,
		            b: 245,
		            a: 1.0
		        },
		        backgroundColor: {
		            r: 3,
		            g: 132,
		            b: 245,
		            a: 0.4
		        }
            });

            var text = textSprite.element;
            text.position.x = -45;
            text.position.z = 70; 

            text.position.y = 10;

            group.add(text);
        }
    }

    renderLink(link) {
        if (!link.points) {
            console.log(link.points.length);
            link.points = [
                [0, 0],
                [1, 1]
            ]
        };
        const SUBDIVISIONS = 20;
        const pts = link.points;
        // const curve = new THREE.CubicBezierCurve3(v(points[0]), v(points[1]), v(points[2]), v(points[3]));

        // console.log(points);
        const geometry = new THREE.Geometry();
        const pathPoints = svgpath(`M${pts[0][0]} ${pts[0][1]} L ${pts[1][0]} ${pts[1][1]}`);
        pathPoints.forEach((point) => {
        	geometry.vertices.push(v(point));
        })
        
        // for (let j = 0; j < SUBDIVISIONS; j++) {
        //     geometry.vertices.push(curve.getPoint(j / SUBDIVISIONS));
        // }
        // console.log(geometry.vertices);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x0384F5
        });

        const line = new THREE.Line(geometry, lineMaterial);

        line.position.y = 14;
        line.position.x = 4;
        line.position.z = 25
        return line;
    }
    renderRandomLink() {
        let points = svgpath('M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10');
        const geometry = new THREE.Geometry();
        points.forEach((point) => {
            geometry.vertices.push(v(point));
        });
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00ee00,
            linecap: 'round',
            linewidth: 1
        });
        const line = new THREE.Line(geometry, lineMaterial);
        return line;
    }
}

export default BaseGraph;