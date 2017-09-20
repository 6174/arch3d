const manager = new THREE.LoadingManager();
const jsonLoader = new THREE.JSONLoader(manager);
const colladaLoader = new THREE.ColladaLoader();
colladaLoader.options.convertUpAxis = true;

/**
 * [load description]
 * @param [map] [ {key: path}]
 * @return {Promise} [description]
 */
function load(map) {

	manager.onProgress = (item, loaded, total) => {
		console.log(`loading ${loaded} / ${total} `)
	}

	const targets = Object.keys(map).map((key) => {
		return loadOneModel(key, map);
	});

	return Promise.all(targets).then((arr = []) => {
		let map = {};
		arr.forEach((it) => {
			map[it.key] = it.obj
		});
		return map;
	});
}

/**
 * There seems to be a known issue when re-using the same instance of the collada loader to load multiple collada files.
 * https://github.com/mrdoob/three.js/issues/5721
 * @return {[type]} [description]
 */
function loadOneModel(key, map) {
	const path = map[key];
    return new Promise(function(resolve, reject) {
        const ext = path.split(".").pop();
        let loader = null;
        if (ext === "js") {
            loader = jsonLoader;
        } else if (ext === "dae") {
            loader = colladaLoader;
        } else {
            console.error("error loading " + path + ", extension supported are .dae (collada) and .js (Three.js JSON) ");
            return reject();
        }

        loader.load(path, (obj) => {
        	resolve({
        		key,
        		obj
        	});
        });
    })
}
export default load;