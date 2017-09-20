/**
 * Layer Stack
 */
class LayerConnect {
	constructor(props) {
		this.state = {
			connects: props.connects,
			stage: props.stage
		}

		// self three element instance
		this.el = new THREE.Group();
	}

	// render children
	render(props) {
		const connects = this.state.connects;
		const stage = this.state.stage;
		let el = this.el;

		let test = [{
			from: {bounds:{x: 0, y: 1000}},
			to: {bounds: {x: 100, y: 1000}}
		}];
		stage.scene.updateMatrixWorld();
		connects.forEach(connect => {
			const {
				from,
				to
			} = connect;

			let geometry = new THREE.Geometry();

			geometry.vertices.push(getNodePosition(from));
			geometry.vertices.push(getNodePosition(to));

			let lineMaterial = new THREE.LineBasicMaterial({
	            color: 0xee0000
	        });		

			const line = new THREE.Line(geometry, lineMaterial);

			el.add(line);

			function getNodePosition(node) {
				const threeObj = node._threeObj;

				// threeObj.updateMatrixWorld()
				// v.setFromMatrixPosition(threeObj.matrixWorld)
				let v = new THREE.Vector3();
				v.applyMatrix4(threeObj.matrixWorld);
				return v;
			}
		});

        return el;
	}

}


function update(node) {

	let parent = [];

}
export default LayerConnect;