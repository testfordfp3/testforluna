(function() {
    if(window.navigator.userAgent.indexOf('iPhone') > 0 || window.navigator.userAgent.indexOf('Android') > 0){
        if((window.navigator.userAgent.indexOf('Android 1.') < 0)
                 && (window.navigator.userAgent.indexOf('Android 2.') < 0)
                 && (window.navigator.userAgent.indexOf('Android 3.') < 0)
                 && (window.navigator.userAgent.indexOf('Android 4.1') < 0)
                 && (window.navigator.userAgent.indexOf('Android 4.2') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 2') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 3') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 4') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 5') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 6') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 7') < 0)
                 && (window.navigator.userAgent.indexOf('iPhone OS 8') < 0))
        {

            var ichiba_step5_coupon_frame_js = document.createElement('script');
            ichiba_step5_coupon_frame_js.type = 'text/javascript';
            ichiba_step5_coupon_frame_js.src = '//ias.r10s.jp/asg/lib/ichiba_step5_coupon_video_frame_multiple_sp.js?v=1.0';
            document.body.appendChild(ichiba_step5_coupon_frame_js);
        }
    }
})(this);
