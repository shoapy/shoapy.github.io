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
    });

    var divTextHeight = 0.15 * windowHeight;
    var divImgHeight = 0.85 * windowHeight;

    $("#second-main-title").css({
        "height": (divTextHeight) + "px"
    });

    $("#second-main").css({
        "height": (divImgHeight) + "px"
    });

    $("#second-main-left").css({
        "height": (divImgHeight * 0.75) + "px",
        "width": (divImgHeight * 0.75) + "px"
    });

    $(".overlay").css({
        "width": "100%",
        "height": "100%"
    });

    $("#third-main-title").css({
        "height": (divTextHeight) + "px"
    });

    $("#third-main").css({
        "height": (divImgHeight) + "px"
    });

    $("#third-main-right").css({
        "height": (divImgHeight * 0.75) + "px",
        "width": (divImgHeight * 0.75) + "px"
    });

    var overlayTop = $(".overlay").height() / 2 - $(".overlay").children().height() / 2;
    $(".overlay").children().css({
        "margin-top": (overlayTop) + "px"
    });

    var secondMainCanvas = $("#second-main-left")[0];
    secondMainCanvas.width = secondMainCanvas.scrollWidth;
    secondMainCanvas.height = secondMainCanvas.scrollHeight;

    var secondMainContext = secondMainCanvas.getContext("2d");

    var cx = secondMainCanvas.width / 2;
    var cy = secondMainCanvas.height / 2;
    var r = cx * 0.95;
    var amp = cx * 0.05;
    var freq = 10;

    secondMainContext.beginPath();
    secondMainContext.fillStyle = "#89FFFA";

    secondMainContext.moveTo(cx, r + cy + amp);
    for (var rad = 0.0; rad <= 2 * Math.PI; rad = rad + 0.001) {
        var x = - Math.sin(rad) * (r + amp * Math.cos(freq * rad));
        var y = Math.cos(rad) * (r + amp * Math.cos(freq * rad));
        secondMainContext.lineTo(x + cx, y + cy);
    }
    secondMainContext.fill();

    var r = cx * 0.85;

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

    var thirdMainCanvas = $("#third-main-right")[0];
    thirdMainCanvas.width = thirdMainCanvas.scrollWidth;
    thirdMainCanvas.height = thirdMainCanvas.scrollHeight;

    var thirdMainContext = thirdMainCanvas.getContext("2d");

    

});

function det (a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    res = a11 * a22 * a33 +
          a12 * a23 * a31 +
          a21 * a32 * a13 -
          a13 * a22 * a31 -
          a23 * a32 * a11 -
          a12 * a21 * a33;

    return res;
}

function parabola_fin (x0, y0, x1, y1) {
    var a = det(y0, x0, 1, y1, x1, 1, 0, 1, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x1, 1, 0);
    var b = det(x0 * x0, y0, 1, x1 * x1, y1, 1, 2 * x1, 0, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x1, 1, 0);
    var c = det(x0 * x0, x0, y0, x1 * x1, x1, y1, 2 * x1, 1, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x1, 1, 0);

    return [a, b, c];
}

function parabola_ini (x0, y0, x1, y1) {
    var a = det(y0, x0, 1, y1, x1, 1, 0, 1, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x0, 1, 0);
    var b = det(x0 * x0, y0, 1, x1 * x1, y1, 1, 2 * x0, 0, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x0, 1, 0);
    var c = det(x0 * x0, x0, y0, x1 * x1, x1, y1, 2 * x0, 1, 0) /
            det(x0 * x0, x0, 1, x1 * x1, x1, 1, 2 * x0, 1, 0);

    return [a, b, c];
}
