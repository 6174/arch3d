/**
 * Director control
 * - objecs animate
 * - camera move
 */

const CAMERA_POSITION = {
	initial: [0, 0, 5000],
	normal: [0, 320, 1200],
};

const LAYERS_POSITION = {
	normal: [
		[0, 300, 0],
		[0, 10, 0],
		[0, -280, 0]
	]
}

class Director {
	constructor(param) {
		let stage = this.stage = param.stage;
		this.scene = stage.scene;
		this.camera = stage.camera;
		this.cameraManager = stage.cameraManager;
	}

	playInitialAnimation() {
		const cameraManager = this.cameraManager;

		this.resetCameraPosition();
		this.resetLayersPosition();

		const from = {
			x: 0,
			y: 0,
			z: 5000
		};

		let tween = TweenLite.to(from, 2, {
			z: 1200,
			y: 320,
			x: 0,
			// ease: Linear.easeNone,
			onUpdate: () => {
				cameraManager.setPosition([from.x, from.y, from.z])
			}
		});

		tween.play();
	}

	resetLayersPosition() {
		const layers = this.stage.layers;  
		// 层位置复原
		layers.forEach((layer, i) => {
			const pos = LAYERS_POSITION.normal[i];
			layer.el.position.x = pos[0];
			layer.el.position.y = pos[1];
			layer.el.position.z = pos[2];  
		});
	}

	resetCameraPosition() {
		// 相机复原位置
		this.cameraManager.setPosition(CAMERA_POSITION.normal)
	}

	zoomToLayer(layerIndex) {
		const layers = this.stage.layers;  
		const cameraManager = this.cameraManager;
		const stage = this.stage;
		let tl = new TimelineLite();

		this.resetCameraPosition();
		this.resetLayersPosition();

		let from = {
			layer1: {
				x: 0
			},
			layer2: {
				x: 0
			},
			layer3: {
				x: 0
			},
			cameraRotation: {
				rotateWorldX: 0,
			},
			cameraY: {
				y: cameraManager.camera.position.y
			}
		}

		let layer1 = layers[0];
		let layer2 = layers[1];
		let layer3 = layers[2];

		tl.to(from.layer1, .8, {
			x: 2000,
			onUpdate: () => {
				layer1.el.position.x = from.layer1.x
			}
		});

		tl.to(from.layer2, .8, {
			x: -2000,
			onUpdate: () => {
				layer2.el.position.x = from.layer2.x
			}
		}, '-=0.7')

		tl.to(from.cameraRotation, .8, {
			rotateWorldX: 155,
			onUpdate: () => {
				cameraManager.rotateWorld(0, -1.5);
			},
			onComplete: () => {
				from.cameraY.y = cameraManager.camera.position.y;
				from.cameraY.z = cameraManager.camera.position.z;
				tl.to(from.cameraY, .8, {
					y: 450,
					z: 0,
					onUpdate: () => {
						const pos = cameraManager.camera.position;
						cameraManager.setPosition([pos.x, from.cameraY.y, from.cameraY.z]);
					},
					onComplete: () => {
						setTimeout(() => {
							stage.updateLoop();
						}, 10)
					}
				})
			}
		})

	}
}

export default Director;