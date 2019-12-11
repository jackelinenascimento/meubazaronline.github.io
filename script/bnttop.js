$(document).ready(function () {

    $("#subirTopo").hide();

    $('a#subirTopo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#subirTopo').fadeIn();
        } else {
            $('#subirTopo').fadeOut();
        }
    });
});
