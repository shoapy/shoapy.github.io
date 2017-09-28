$(document).ready(function () {

    var windowHeight = $(window).height();
    var headerHeight = $("#main").offset().top;

    $("#main").css({"height": (windowHeight - headerHeight) + "px"});

});
