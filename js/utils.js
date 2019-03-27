function StringFormat() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

function jcolor2int(color) {
    return {
        r: parseInt(color.r * 255),
        g: parseInt(color.g * 255),
        b: parseInt(color.b * 255)
    }
}

function jcolor2hex(color) {
    var intColor = jcolor2int(color);
    var rhex = intColor.r.toString(16);
    rhex = rhex.length < 2 ? ('0'+rhex):rhex;
    var ghex = intColor.g.toString(16);
    ghex = ghex.length < 2 ? ('0'+ghex):ghex;
    var bhex = intColor.b.toString(16);
    bhex = bhex.length < 2 ? ('0'+bhex):bhex;
    return '#' + rhex + ghex + bhex;
}

function jcolor2css(color) {
    var c = jcolor2int(color);
    return `rgb(${c.r},${c.g},${c.b})`;
}