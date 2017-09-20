
const PI = Math.PI;

/**
 * [angle description]
 * @param  {[type]} degree [description]
 * @return {[type]}        [description]
 */
export function angle(degree) {
	return PI * (degree/180);
}

export function v(point) {
	return new THREE.Vector3(point[0], 0, point[1]);
}

export const PI_2 = PI / 2;

export const EPS = 0.000001;