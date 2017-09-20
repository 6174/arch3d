/**
 * light manager
 */
class LightManager {

	lightup(scene) {
		var hemiLight = this.addHemisphereLight(0xffffff, 0xffffff, 1.25, scene);
        hemiLight.color.setHSL(0.6, 1, 0.75);
        hemiLight.groundColor.setHSL(0.6, 1, 0.75);
        hemiLight.position.y = 5100;

        this.addDirectionalLight("#ffffff", 1, { x: 0 , y : 0 , z :10}, scene);
        this.addDirectionalLight("#ffffff", 1, { x: 0 , y : 0 , z : -10}, scene);
        this.addDirectionalLight("#ffffff", 1, { x: 0 , y : 0 , z :1500}, scene);
        this.addDirectionalLight("#ffffff", 1, { x: 0 , y : 0  , z :-1500}, scene);
	}

	addAmbientLight(color, scene) {
        var light = new THREE.AmbientLight(color);
        scene.add(light);
        return light;
    }

    addDirectionalLight(color, intensity, pos, scene) {
        var light = new THREE.DirectionalLight(color, intensity);
        light.position.set(pos.x, pos.y, pos.z);
        scene.add(light);

        var helper = new THREE.DirectionalLightHelper( light, 3 );
        // scene.add( helper );
        return light;
    }

    addHemisphereLight(skyColorHex, groundColorHex, intensity, scene) {
        var light = new THREE.HemisphereLight(skyColorHex, groundColorHex, intensity)
        scene.add(light);
        return light;
    }

    addPointLight(hex, intensity, distance, decay, pos, scene) {
        var light = new THREE.PointLight(hex, intensity, distance, decay);
        light.position.set(pos.x, pos.y, pos.z);
        scene.add(light);

        // let light = new THREE.PointLight(0xffffff, .4, 0);
        // light.position.set(0, 1000, -200);
        // light.castShadow = true;
        // light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 200, 2500 ) );
        // light.shadow.bias = 0.0001;

        // light.shadow.mapSize.width = 1024;
        // light.shadow.mapSize.height = 1024;
        
        var pointLightHelper = new THREE.PointLightHelper( light, 1 );
        scene.add( pointLightHelper );
        return light;
    }

    addSpotLight(color, pos, castShadow, scene) {
        var light = new THREE.SpotLight(0xffffff);
        light.position.set(pos.x, pos.y, pos.z);

        light.castShadow = castShadow;

        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;

        light.shadowCameraNear = 500;
        light.shadowCameraFar = 4000;
        light.shadowCameraFov = 30;

        scene.add(light);


        var spotLightHelper = new THREE.SpotLightHelper( light );
        scene.add( spotLightHelper );

        return light;
    }
}

export default new LightManager();