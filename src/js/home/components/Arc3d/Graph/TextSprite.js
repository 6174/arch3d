/**
 * [makeTextSprite description]
 * @param  {[type]} message    [description]
 * @param  {[type]} parameters [description]
 * @return {[type]}            [description]
 */

import CanvasTexture from './CanvasTexture';

class TextSprite extends CanvasTexture {
    constructor(message, parameters) {
        super();

        // message = 'x';
        // meseaure text size
        // and set the canvas size
        var metrics = this.context.measureText(message);
        var textWidth = metrics.width;
        var textHeight = 40;
        this.canvas.width = Math.max(metrics.width * 4, 200);
        this.canvas.height = textHeight;

        // find the real imageData size
        this.draw(message, parameters);

        const bound = this.measureImageSize();
        const scale = .4;

        this.bound = bound;
        this.scale = scale;

        // document.body.appendChild(this.canvas);
        // this.canvas.style = "position: absolute; top: 0; left: 0;"

        // canvas contents will be used for a texture
        let texture = new THREE.Texture(this.context.getImageData(0, 0, bound.width, bound.height));
        texture.needsUpdate = true;
        texture.nroundRecteedsUpdate = true;
        texture.minFilter = THREE.LinearFilter;
        this.texture = texture;

        let spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
            color: 0xffffff, 
            fog: true
        });

        let sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.normalize();
        sprite.scale.set(bound.width * scale, bound.height * scale , 1.0);

        this.element = sprite;
    }

    draw(message, parameters) {
        if (parameters === undefined) parameters = {};
        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 2;
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
        const context = this.context;
        context.font = "Bold " + fontsize + "px " + fontface;
        // get size data (height depends only on font size)
        var metrics = context.measureText(message);
        var textWidth = metrics.width;
        
        // background color
        context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        // border color
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
        context.lineWidth = borderThickness;
        roundRect(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
        context.fillStyle = "rgba(0, 0, 0, 1.0)";
        context.fillText(message, borderThickness, fontsize + borderThickness); 

        // function for drawing rounded rectangles
        function roundRect(ctx, x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
}

export default TextSprite;