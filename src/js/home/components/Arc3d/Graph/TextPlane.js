import CanvasTexture from './CanvasTexture';

class TextPlane extends CanvasTexture {
	constructor(message, parameters) {
		super();

		// init canvas size
		const metrics = this.context.measureText(message);
        const textWidth = metrics.width;
        const textHeight = 40;
        this.canvas.width = Math.max(metrics.width * 3, 50);
        this.canvas.height = textHeight;

        // draw text and measure text real size
        this.draw(message, parameters);

        const bound = this.measureImageSize();
        this.bound = bound;
        // create text plane 
        let texture = new THREE.Texture(this.context.getImageData(0, 0, bound.width, bound.height));
        texture.needsUpdate = true;
        texture.minFilter = THREE.NearestFilter;

        let material = new THREE.MeshBasicMaterial( {
        	map: texture, 
        	side:THREE.DoubleSide,
		    transparent: true
        });

	    let mesh = new THREE.Mesh(
	        new THREE.PlaneGeometry(bound.width, bound.height),
	        material
	    );

	    this.element = mesh;
	}

	draw(message, parameters) {
		const context = this.context;

		if (parameters === undefined) parameters = {};

        const metrics = context.measureText(message);
        const textWidth = metrics.width;

        const fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        const fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 12;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : {
            r: 0,
            g: 0,
            b: 0,
            a: 1.0
        };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : {
            r: 255,
            g: 255,
            b: 255,
            a: 1.0
        };

        context.font = "Bold " + fontsize + "px " + fontface;
        context.fillStyle = "rgba(0, 0, 0, 1.0)";
        context.fillText(message, borderThickness, fontsize + borderThickness); 
	}
}

export default TextPlane;