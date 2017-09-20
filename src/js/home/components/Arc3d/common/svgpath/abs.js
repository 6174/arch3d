module.exports = absolutize

/**
 * https://github.com/jkroso/abs-svg-path
 * redefine `path` with absolute coordinates
 *
 *  eg: 
 *  	abs([['l',10,20],['l',30,40]]) 
 *  	
 *  	to
 *  	
 *  	[['L',10,20],['L',40,60]]
 *
 * 
		abs([
		  ['q', 1,2, 33,44],
		  ['L', 50,60],
		  ['c', 1,2, 3,4, 33,44]
		]) 

	    to

		[
			['Q',1,2,33,44],
			['L', 50, 60],
			['C',51,62, 53,64, 83,104]
		]
 * @param {Array} path
 * @return {Array}
 */

function absolutize(path){
	var startX = 0
	var startY = 0
	var x = 0
	var y = 0

	return path.map(function(seg){
		seg = seg.slice()
		var type = seg[0]
		var command = type.toUpperCase()

		// is relative
		if (type != command) {
			seg[0] = command
			switch (type) {
				case 'a':
					seg[6] += x
					seg[7] += y
					break
				case 'v':
					seg[1] += y
					break
				case 'h':
					seg[1] += x
					break
				default:
					for (var i = 1; i < seg.length;) {
						seg[i++] += x
						seg[i++] += y
					}
			}
		}

		// update cursor state
		switch (command) {
			case 'Z':
				x = startX
				y = startY
				break
			case 'H':
				x = seg[1]
				break
			case 'V':
				y = seg[1]
				break
			case 'M':
				x = startX = seg[1]
				y = startY = seg[2]
				break
			default:
				x = seg[seg.length - 2]
				y = seg[seg.length - 1]
		}

		return seg
	})
}