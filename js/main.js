$(document).ready(function () {

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var headerHeight = $("#main").offset().top;

    var mainHeight = windowHeight - headerHeight;
    $("#main").css({
        "height": (mainHeight) + "px"
    });

    var mainTitleMarginTop = 0.25 * mainHeight;
    $("#main-title").css({
        "margin-top": (mainTitleMarginTop) + "px"
    })

    var divTextHeight = 0.15 * windowHeight;
    var divImgHeight = 0.85 * windowHeight;

    $("#second-main-title").css({
        "height": (divTextHeight) + "px"
    })

    $("#second-main").css({
        "height": (divImgHeight) + "px"
    })

    $("#second-main-left").css({
        "height": (divImgHeight * 0.7) + "px",
        "width": (divImgHeight * 0.7) + "px"
    })

    var secondMainCanvas = $("#second-main-left")[0];
    secondMainCanvas.width = secondMainCanvas.scrollWidth;
    secondMainCanvas.height = secondMainCanvas.scrollHeight;

    var secondMainContext = secondMainCanvas.getContext("2d");

    var cx = secondMainCanvas.width / 2;
    var cy = secondMainCanvas.height / 2;
    var r = cx * 0.8;
    var amp = cx * 0.05;
    var freq = 10;

    secondMainContext.beginPath();
    secondMainContext.strokeStyle = "white";
    secondMainContext.lineWidth = "5";

    secondMainContext.moveTo(cx, r + cy + amp);
    for (var rad = 0.0; rad <= 2 * Math.PI; rad = rad + 0.001) {
        var x = - Math.sin(rad) * (r + amp * Math.cos(freq * rad));
        var y = Math.cos(rad) * (r + amp * Math.cos(freq * rad));
        secondMainContext.lineTo(x + cx, y + cy);
    }

    secondMainContext.stroke();

});
