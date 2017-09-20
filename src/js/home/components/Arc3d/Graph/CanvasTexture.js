/**
 * CanvasTexture
 */

class CanvasTexture {
	constructor() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		this.canvas = canvas;
		this.context = context;
	}

	measureImageSize() {
		const {
			context,
			canvas
		} = this;

		const width = canvas.width;
		const height = canvas.height;
		const imageData = context.getImageData(0, 0, width, height);
		const data  = imageData.data;
		const length = data.length;

		let bound = {
			width: width,
			height: height
		};

		let i, j;

		// scan from right to left 
		for (i = width; i > 0; i--) {
			for (j = 1; j <= height; j++) {
				let pIndex = (width * (j - 1) + (i - 1)) * 4;
				let p = data[pIndex + 3];
				if (p > 0) {
					bound.width = i;
					i = 0;
					break;
				}
			}
		}

		// scan from bottom to top
		for (j = height; j > 0; j--) {
			for (i = 1; i <= width; i++) {
				let pIndex = (width * (j - 1) + (i - 1)) * 4;
				let p = [data[pIndex], data[pIndex + 1], data[pIndex + 2], data[pIndex + 3]];
				if (p[0] || p[1] || p[2] || p[3]) {
					bound.height = j;
					j = 0;
					break;
				}
			}
		}

		return bound;
	}

	// default render 
	draw() {}
}

export default CanvasTexture;