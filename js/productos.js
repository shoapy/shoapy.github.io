$(document).ready(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var headerHeight = $("#first").offset().top;

    var productContainerHeight = windowHeight - headerHeight;
    $("#first").css({
        "height": (productContainerHeight) + "px"
    });

    var topInfoPos1 = productContainerHeight / 2 - $("#product-info-1").height() / 2;
    $("#product-info-1").css({
        "margin-top": (topInfoPos1) + "px",
        "margin-left": "50px"
    });

    $("#product-pic-1").css({
        "height": (productContainerHeight * 0.9) + "px",
        "width": (productContainerHeight * 0.9) + "px",
    });

    var topPicPos1 = productContainerHeight / 2 - $("#product-pic-1").height() / 2;
    $("#product-pic-1").css({
        "margin-top": (topPicPos1) + "px",
        "margin-left": "50px"
    });

});
