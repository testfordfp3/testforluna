(function() {
	if ((window.navigator.userAgent.indexOf('MSIE 7.0') < 0)
			&& (window.navigator.userAgent.indexOf('MSIE 8.0') < 0)
			&& (window.navigator.userAgent.indexOf('MSIE 9.0') < 0)
			&& (window.navigator.userAgent.indexOf('Android 2.') < 0)
			&& (window.navigator.userAgent.indexOf('NetReader') < 0)) {

		var ichiba_step5_coupon_frame_js = document.createElement('script');
		ichiba_step5_coupon_frame_js.type = 'text/javascript';
		ichiba_step5_coupon_frame_js.src = '/ichiba_step5_coupon_video_frame_multiple.js?v=1.1';
		document.body.appendChild(ichiba_step5_coupon_frame_js);
	}
})(this);
