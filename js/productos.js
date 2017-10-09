$(document).ready(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var headerHeight = $("#main").offset().top;

    var productContainerHeight = windowHeight - headerHeight;
    $(".product-container").css({
        "height": (productContainerHeight) + "px"
    });

});
