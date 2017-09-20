
class UI {
	constructor(param) {
		this.stage = param.stage;
		this.$el = $('.control-panel');
		this.$canvas = $('canvas');
	}

	bindEvent() {
		const stage = this.stage;
		const director = stage.director;
		$('#BtnInitAnim').click((ev) => {
			director.playInitialAnimation();
		});

		$('#BtnZoomToLayer').click(ev => {
			director.zoomToLayer();
		});
	}

	showObjectHoverTip(obj, mouse) {
		const $tip = $('#NodeInfo');
		const $canvas = this.$canvas;
		let x = mouse.cx,
			y = mouse.cy,
			sx = $canvas.offsetWidth,
            sy = $canvas.offsetHeight,
            cw = $tip[0].offsetWidth,
            ch = $tip[0].offsetHeight;


        x = x + cw > sx ? x - cw : x + 20;
        y = y + ch > sy ? y - ch : y + 20;

        const data = obj.userData;
        $tip.find('.info').html(`分组: ${data.group} <br> 名称: ${data.name}`)
		$tip.css({
            zIndex: 30,
            opacity: 1,
            "transform": "translate3d(" + x + "px, " + y + "px, 0px)"
        });
	}

	hideObjectHoverTip() {
		const $tip = $('#NodeInfo');
		$tip.css({
			opacity: 0,
			zIndex: -1
		});
	}
}

export default UI;