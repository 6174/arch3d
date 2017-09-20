import {angle, PI_2, EPS} from './common/util';

/**
 * camera manager
 */
class CameraManager {
	constructor(stage) {

		this.state = {
			moveForward: false,
			moveBackward: false,
			moveLeft: false,
			moveRight: false,
			canJump: false,
			velocity: new THREE.Vector3(),
			prevTime: performance.now(),
			target: new THREE.Vector3(),
			scale: 1,
			minPolarAngle: 0, // radians
			maxPolarAngle: Math.PI, // radians
			minDistance: 0,
			maxDistance: Infinity

		};

		this.stage = stage;

		this.onKeyDown = this.onKeyDown.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);

		this.initialization();
		this.addEventListeners();
	}

	initialization() {
        // OrthographicCamera( left, right, top, bottom, near, far )
        // let camera = new THREE.OrthographicCamera( 
        //     window.innerWidth / - 2, 
        //     window.innerWidth / 2,
        //     window.innerHeight/2, 
        //     window.innerHeight / - 2, 
        //     10, 10000 );

		const {
			width,
			height,
			renderer,
			scene
		} = this.stage;

        // PerspectiveCamera( fov, aspect, near, far )
		let camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
        let cameraHelper = new THREE.CameraHelper(camera);
        let el = this.el;

		this.camera = this.el = camera;
		window.cm = this;

		this.cameraHelper = cameraHelper;

        this.setPosition();

        scene.add(camera);
        // scene.add(cameraHelper);

        let controls = new THREE.OrbitControls( camera, renderer.domElement );
		// controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = false;
	}


	setPosition(position = [0, 0, 5000]) {
		const el = this.el;
        el.position.set.apply(el.position, position);
		el.lookAt(this.state.target);
	}

	/**
	 * [rotateWorld description]
	 * @param  {[type]} theta [rotate around y-axis]
	 * @param  {[type]} phi   [rotate around x-axis]
	 * @return {[type]}       [description]
	 */
	rotateWorld(thetaDelta, phiDelta) {
		let el = this.el;
		let {
			target,
			minPolarAngle,
			maxPolarAngle,
			scale,
			minDistance,
			maxDistance
		} = this.state;

		let position = el.position;
		let offset = position.clone().sub(target);

		let theta = 0, phi = 0;
		// angle from z-axis around y-axis
		theta += Math.atan2( offset.x, offset.z );
		// angle from y-axis
		phi += Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		theta += angle(thetaDelta);
		phi += angle(phiDelta);

		// restrict phi to be between desired limits
		phi = Math.max( minPolarAngle, Math.min( maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );


		let radius = offset.length() * scale;
		radius = Math.max( minDistance, Math.min( maxDistance, radius ) );
		// target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( target ).add( offset );
		el.lookAt( target );

		// this.state.scale = 0;
		// this.state.pan.set(0, 0, 0);
	}

	resize(size) {
		let camera = this.camera;
		camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
	}

	addEventListeners() {
		document.addEventListener( 'keydown', this.onKeyDown, false );
		document.addEventListener( 'keyup', this.onKeyUp, false );
		// document.addEventListener( 'mousemove', this.onMouseMove, false );
	}

	onKeyDown(event) {
		let state = this.state;
		switch ( event.keyCode ) {
			case 38: // up
			case 87: // w
				state.moveForward = true;
				break;

			case 37: // left
			case 65: // a
				state.moveLeft = true; break;

			case 40: // down
			case 83: // s
				state.moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				state.moveRight = true;
				break;

			case 32: // space
				if ( state.canJump === true ) state.velocity.y += 350;
				state.canJump = false;
				break;

		}
	}

	onKeyUp(event) {
		let state = this.state;
		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				state.moveForward = false;
				break;

			case 37: // left
			case 65: // a
				state.moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				state.moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				state.moveRight = false;
				break;

		}
	}

	onMouseMove(event) {
		// if ( scope.enabled === false ) return;
		let {
			el,
			camera
		} = this;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		camera.rotation.y -= movementX * 0.0004;
		camera.rotation.x -= movementY * 0.0004;

		camera.rotation.x = Math.max( - PI_2, Math.min( PI_2, camera.rotation.x ) );

	}

	update() {
		let {
			velocity,
			moveForward,
			moveBackward,
			moveLeft,
			moveRight,
			prevTime
		} = this.state;

		let {
			el
		} = this;

		var time = performance.now();
		var delta = ( time - prevTime ) / 500;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;

		// velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

		if ( moveForward ) velocity.z -= 400.00 * delta;
		if ( moveBackward ) velocity.z += 400.0 * delta;

		if ( moveLeft ) velocity.x -= 400.0 * delta;
		if ( moveRight ) velocity.x += 400.0 * delta;

		// if ( isOnObject === true ) {
		// 	velocity.y = Math.max( 0, velocity.y );


		// 	canJump = true;
		// }

		el.translateX( velocity.x * delta );
		el.translateY( velocity.y * delta );
		el.translateZ( velocity.z * delta );
		// if (el.position.y < 10 ) {
		// 	velocity.y = 0;
		// 	el.position.y = 0;
		// }
		this.state.prevTime = time;

	}
}

export default CameraManager;