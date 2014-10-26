 function popup(f, g) {
            var c = 500;
            var a = 450;
            var e = (screen.width / 2) - (c / 2);
            var d = (screen.height / 2) - (a / 2) - 30;
            var b = window.open(f, g, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" + c + ", height=" + a + ", top=" + d + ", left=" + e)
};
$(document).ready(function(){
    $('.canimation').canimate({
        totalFrames: 55,
        imagePrefix: 'logo_',
        loop: false,
        fps: 30,
        preload:true
    });
});