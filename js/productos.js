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
    $("#third").css({
        "height": (productContainerHeight) + "px"
    });

    $(".product-pic-container").css({
        "height": (productContainerHeight * 0.9) + "px",
        "width": (productContainerHeight * 0.9) + "px",
    });

    var topPicPos1 = productContainerHeight / 2 - $("#product-pic-1").height() / 2;
    $("#product-pic-1").css({
        "margin-top": (topPicPos1) + "px",
    });

    var topPicPos2 = productContainerHeight / 2 - $("#product-pic-2").height() / 2;
    $("#product-pic-2").css({
        "margin-top": (topPicPos2) + "px"
    });

    var topPicPos3 = productContainerHeight / 2 - $("#product-pic-3").height() / 2;
    $("#product-pic-3").css({
        "margin-top": (topPicPos3) + "px"
    });

    var infoHeight1 = $("#product-info-1").height();
    var infoTop1 = headerHeight + productContainerHeight / 2 - infoHeight1 / 2;
    $("#product-info-1").css({
        "top": (infoTop1) + "px"
    });

    var infoHeight2 = $("#product-info-2").height();
    var infoTop2 = headerHeight + productContainerHeight / 2 - infoHeight2 / 2;
    $("#product-info-2").css({
        "top": (infoTop2) + "px"
    });

    var infoHeight3 = $("#product-info-3").height();
    var infoTop3 = headerHeight + productContainerHeight / 2 - infoHeight3 / 2;
    $("#product-info-3").css({
        "top": (infoTop3) + "px"
    });

    $(window).scroll(function () {
        var distance = $(window).scrollTop() - headerHeight;

        if (distance <= (productContainerHeight / 4 - infoHeight1 / 2)) {
            $("#product-info-1").css({"opacity": "1"});
        } else if (distance <= (productContainerHeight / 2 - infoHeight1 / 2)) {
            var m = -1 / ((productContainerHeight / 2 - infoHeight1 / 2) - (productContainerHeight / 4 - infoHeight1 / 2));
            $("#product-info-1").css({
                "opacity": "" + (m * (distance - (productContainerHeight / 2 - infoHeight1 / 2)))
            });
        } else {
            $("#product-info-1").css({"opacity": "0"});
        }

        if (distance <= (productContainerHeight / 2 - infoHeight2 / 2)) {
            $("#product-info-2").css({"opacity": "0"});
        } else if (distance <= (3 * productContainerHeight / 4 - infoHeight2 / 2)) {
            var m = 1 / ((3 * productContainerHeight / 4 - infoHeight2 / 2) - (productContainerHeight / 2 - infoHeight2 / 2));
            $("#product-info-2").css({
                "opacity": "" + (m * (distance - (productContainerHeight / 2 - infoHeight2 / 2)))
            });
        } else if (distance <= (5 * productContainerHeight / 4 - infoHeight2 / 2)) {
            $("#product-info-2").css({"opacity": "1"});
        } else if (distance <= (3 * productContainerHeight / 2 - infoHeight2 / 2)) {
            var m = -1 / ((3 * productContainerHeight / 2 - infoHeight2 / 2) - (5 * productContainerHeight / 4 - infoHeight2 / 2));
            $("#product-info-2").css({
                "opacity": "" + (m * (distance - (3 * productContainerHeight / 2 - infoHeight2 / 2)))
            });
        } else {
            $("#product-info-2").css({"opacity": "0"});
        }

        if (distance <= (3 * productContainerHeight / 2 - infoHeight2 / 2)) {
            $("#product-info-3").css({"opacity": "0"});
        } else if (distance <= (7 * productContainerHeight / 4 - infoHeight3 / 2)) {
            var m = 1 / ((7 * productContainerHeight / 4 - infoHeight3 / 2) - (3 * productContainerHeight / 2 - infoHeight2 / 2));
            $("#product-info-3").css({
                "opacity": "" + (m * (distance - (3 * productContainerHeight / 2 - infoHeight2 / 2)))
            });
        } else {
            $("#product-info-3").css({"opacity": "1"});
        }
    });

});
