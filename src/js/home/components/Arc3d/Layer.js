import svgpath from './common/svgpath';
import {angle, PI_2, EPS, v} from './common/util';
import BaseGraph from './Graph/BaseGraph';

/**
 * Layer class
 */
class Layer {
	constructor(props) {
		this.state = {
			margin: {
				top: 10,
				bottom: 10,
			},
			width: 800,
			height: 800,
			thick: 68,
			opacity: .9,
			color: 0xcccccc, 
		}

		this.stage = props.stage;
		this.el = new THREE.Group();
		this.el.name = "layer";
		this.graph = new BaseGraph(props);
	}

	render(props) {
	    let layer = this.el;

	    const grid = new THREE.GridHelper( this.state.width / 2 - 2, 20 );
	    grid.position.y = 2;
        // layer.add(grid);
	    layer.add(this.renderPlane());
	    layer.add(this.graph.render());

	    layer.position.y = props.top;
	    layer.position.x = props.left;
	    return layer;	
	}

	renderPlane() {
		const {
	    	width, 
	    	height,
	    	thick,
	    	opacity,
	    	color
	    } = this.state;

		let materials = {
	    	lambert: new THREE.MeshLambertMaterial({
		        color: color,
		        opacity: opacity,
		        transparent: false
		    }),
		    basic: new THREE.MeshBasicMaterial({
		    	color: 0xdddddd,
		    	wireframe: true
		    }),
		    lineBasic: new THREE.LineBasicMaterial({
	            color: 0x999999,
	            opacity: 0.25,
	            transparent: true
	        })
	    }

	    var boxGeometry = new THREE.BoxBufferGeometry(width, thick, height);
	    // var sphere = new THREE.SphereGeometry();
		var object = new THREE.Mesh( boxGeometry);
		var box = new THREE.BoxHelper( object );
	        box.material = new THREE.LineBasicMaterial({
	            color: 0xaaaaaa,
	            opacity: 0.5,
	            transparent: true
	        });
	        box.name = "boxHelper";
		
		box.name = "layer-box"
		return box;
		 // var box = new THREE.BoxHelper(sphere);
	     //    box.aNumber = num + 1;

	    // let plane = new THREE.Mesh(
	    // 	new THREE.BoxBufferGeometry(width, thick, height), 
	    // 	materials.lineBasic
	    // );

	    // plane.receiveShadow = true;

	    // return plane;
	}
}

export default Layer;