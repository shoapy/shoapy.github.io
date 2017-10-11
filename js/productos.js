$(document).ready(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var headerHeight = $("#first").offset().top;

    var productContainerHeight = windowHeight - headerHeight;
    $("#first").css({
        "height": (productContainerHeight) + "px"
    });
    $("#second").css({
        "height": (productContainerHeight) + "px"
    });

    $(".product-pic").css({
        "height": (productContainerHeight * 0.9) + "px",
        "width": (productContainerHeight * 0.9) + "px",
    });

    var topInfoPos1 = productContainerHeight / 2 - $("#product-info-1").height() / 2;
    $("#product-info-1").css({
        "margin-top": (topInfoPos1) + "px",
        "padding-left": "50px"
    });

    var topPicPos1 = productContainerHeight / 2 - $("#product-pic-1").height() / 2;
    $("#product-pic-1").css({
        "margin-top": (topPicPos1) + "px",
    });

    var topInfoPos2 = productContainerHeight / 2 - $("#product-info-2").height() / 2;
    $("#product-info-2").css({
        "margin-top": (topInfoPos2) + "px",
        "padding-left": "50px"
    });

    var topPicPos2 = productContainerHeight / 2 - $("#product-pic-2").height() / 2;
    $("#product-pic-2").css({
        "margin-top": (topPicPos2) + "px"
    });

});
