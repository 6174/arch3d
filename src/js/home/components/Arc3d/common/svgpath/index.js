import bezier from './bezier-curve';
import norm from './normalize';
import parse from './parser';
import abs from './abs';


/**
 * [svgPathPoints description]
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
function svgPathPoints(path, scale = 1) {
	const svgSegments = norm(abs(parse(path)));
	let points = [];

	let pen = [0, 0];

	svgSegments.forEach((segment, i) => {
		if (segment[0] === 'M') {
			let current = segment.slice(1);
			points.push(copy([0, 0], current));
            copy(pen, current);
        } else if (segment[0] === 'C') {
            bezierTo(points, scale, pen, segment);
            copy(pen, [segment[5], segment[6]]);
        } else {
            throw new Error('illegal type in SVG: '+segment[0])
        }
	});

	return points;
}


let tmp1 = [0,0],
    tmp2 = [0,0],
    tmp3 = [0,0];

function bezierTo(points, scale, start, seg) {
    bezier(
    	start, 
        copy(tmp1, [seg[1], seg[2]]), 
        copy(tmp2, [seg[3], seg[4]]),
        copy(tmp3, [seg[5], seg[6]]), 
        scale, 
        points
    );
}

function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}


export default svgPathPoints;