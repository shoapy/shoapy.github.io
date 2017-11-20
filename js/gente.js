$(document).ready(function () {

    var windowHeight = $(window).height();

    if ($("#main").height() < windowHeight) {
        $("#main").css({"height": (windowHeight) + "px"});
    }

});
