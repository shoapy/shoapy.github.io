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
        "height": (divImgHeight * 0.5) + "px",
        "width": (divImgHeight * 0.75) + "px"
    });

    var overlayTop1 = $("#overlay1").height() / 2 - $("#overlay1").children().height() / 2;
    $("#overlay1").children().css({
        "margin-top": (overlayTop1) + "px"
    });

    var overlayTop2 = $("#overlay2").height() / 2 - $("#overlay2").children().height() / 2;
    $("#overlay2").children().css({
        "margin-top": (overlayTop2) + "px"
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

    var flagWidth = thirdMainCanvas.width;
    var flagHeight = thirdMainCanvas.height;

    thirdMainContext.beginPath();
    thirdMainContext.fillStyle = "#89FFFA";

    thirdMainContext.moveTo(0, flagHeight * 0.1);

    var coefs = parabola_fin(0, flagHeight * 0.1, flagWidth * 0.4, 0);
    for (var x = 0.0; x <= flagWidth * 0.4; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_ini(flagWidth * 0.4, 0, flagWidth * 0.5, flagHeight * 0.05);
    for (var x = flagWidth * 0.4; x <= flagWidth * 0.5; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_fin(flagWidth * 0.5, flagHeight * 0.05, flagWidth * 0.6, flagHeight * 0.1);
    for (var x = flagWidth * 0.5; x <= flagWidth * 0.6; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_ini(flagWidth * 0.6, flagHeight * 0.1, flagWidth, 0);
    for (var x = flagWidth * 0.6; x <= flagWidth; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    thirdMainContext.lineTo(flagWidth, flagHeight * 0.9);

    coefs = parabola_ini(flagWidth * 0.6, flagHeight, flagWidth, flagHeight * 0.9);
    for (var x = flagWidth; x >= flagWidth * 0.6; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_fin(flagWidth * 0.5, flagHeight * 0.95, flagWidth * 0.6, flagHeight);
    for (var x = flagWidth * 0.6; x >= flagWidth * 0.5; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_ini(flagWidth * 0.4, flagHeight * 0.9, flagWidth * 0.5, flagHeight * 0.95);
    for (var x = flagWidth * 0.5; x >= flagWidth * 0.4; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    coefs = parabola_fin(0, flagHeight, flagWidth * 0.4, flagHeight * 0.9);
    for (var x = flagWidth * 0.4; x >= 0.0; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x, y);
    }

    thirdMainContext.lineTo(0, flagHeight * 0.1);

    thirdMainContext.fill();

    var scaleX = 0.9;
    var scaleY = 0.85;
    var x_add = flagWidth * (1 - scaleX) / 2;
    var y_add = flagHeight * (1 - scaleY) / 2;

    thirdMainContext.beginPath();
    thirdMainContext.strokeStyle = "white";
    thirdMainContext.lineWidth = "5";

    thirdMainContext.moveTo(0 + x_add, flagHeight * 0.1 * scaleY + y_add);

    var coefs = parabola_fin(0, flagHeight * 0.1, flagWidth * 0.4, 0);
    for (var x = 0.0; x <= flagWidth * 0.4; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_ini(flagWidth * 0.4, 0, flagWidth * 0.5, flagHeight * 0.05);
    for (var x = flagWidth * 0.4; x <= flagWidth * 0.5; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_fin(flagWidth * 0.5, flagHeight * 0.05, flagWidth * 0.6, flagHeight * 0.1);
    for (var x = flagWidth * 0.5; x <= flagWidth * 0.6; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_ini(flagWidth * 0.6, flagHeight * 0.1, flagWidth, 0);
    for (var x = flagWidth * 0.6; x <= flagWidth; x += 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    thirdMainContext.lineTo(flagWidth * scaleX + x_add, flagHeight * 0.9 * scaleY + y_add);

    coefs = parabola_ini(flagWidth * 0.6, flagHeight, flagWidth, flagHeight * 0.9);
    for (var x = flagWidth; x >= flagWidth * 0.6; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_fin(flagWidth * 0.5, flagHeight * 0.95, flagWidth * 0.6, flagHeight);
    for (var x = flagWidth * 0.6; x >= flagWidth * 0.5; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_ini(flagWidth * 0.4, flagHeight * 0.9, flagWidth * 0.5, flagHeight * 0.95);
    for (var x = flagWidth * 0.5; x >= flagWidth * 0.4; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    coefs = parabola_fin(0, flagHeight, flagWidth * 0.4, flagHeight * 0.9);
    for (var x = flagWidth * 0.4; x >= 0.0; x -= 0.001) {
        var y = coefs[0] * x * x + coefs[1] * x + coefs[2];
        thirdMainContext.lineTo(x * scaleX + x_add, y * scaleY + y_add);
    }

    thirdMainContext.lineTo(0 + x_add, flagHeight * 0.1 * scaleY + y_add);

    thirdMainContext.stroke();

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
