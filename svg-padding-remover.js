var fs = require('fs');
var system = require('system');

console.error = function () {
    system.stderr.write(Array.prototype.join.call(arguments, ' ') + '\n');
};

var args = system.args;

if (args.length === 1) {
    console.error('Pass path to svg as argument!');
    phantom.exit();
}

var page = require('webpage').create();
var url = 'file://' + fs.absolute(args[1]);

var webPage = require('webpage');
var page = webPage.create();

var svgPaddingRemover = function () {
    var svg = document.querySelector("svg");
    var svgall = svg.querySelectorAll("*");
    var l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;

    for (i = 0; i < svgall.length; i++) {
        var elem = svgall[i];
        var bb = elem.getBBox();

        if (bb.width && bb.height) {
            l = Math.min(l, bb.x);
            t = Math.min(t, bb.y);
            r = Math.max(r, bb.x + bb.width);
            b = Math.max(b, bb.y + bb.height);
        }


    }

    svg.setAttribute("viewBox", l + ' ' + t + ' ' + (r - l) + ' ' + ' ' + (b - t));
    svg.removeAttribute("width");
    svg.removeAttribute("height");
};

page.open(url, function (status) {
    if (status !== "success") {
        console.error("Failed to open svg.");
        phantom.exit();
    }
    page.evaluate(svgPaddingRemover);
    console.log(page.content);
    phantom.exit();
});
