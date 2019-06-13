// Made by Jack Rugile on Code Pen: https://codepen.io/jackrugile/pen/bgbdBa
"use strict";

var _this = void 0;

var $ = {};
/*========================================
Utility
========================================*/

$.PI = Math.PI;
$.TAU = $.PI * 2;

$.rand = function (min, max) {
  if (!max) {
    var max = min;
    min = 0;
  }

  return Math.random() * (max - min) + min;
};
/*========================================
Initialize
========================================*/


$.init = function () {
  $.c = document.querySelector('canvas');
  $.ctx = $.c.getContext('2d');
  $.simplex = new SimplexNoise();
  $.reset();
  $.loop();
};
/*========================================
Reset
========================================*/


$.reset = function () {
  $.dpr = window.devicePixelRatio;
  $.w = $.c.width;
  $.h = $.c.height;
  $.cx = $.w / 2;
  $.cy = $.h / 2;
  $.c.width = $.w * $.dpr;
  $.c.height = $.h * $.dpr;
  $.c.style.width = "".concat($.w, "px");
  $.c.style.height = "".concat($.h, "px");
  $.ctx.scale($.dpr, $.dpr);
  $.count = Math.floor($.w / 50);
  $.xoff = 0;
  $.xinc = 0.05;
  $.yoff = 0;
  $.yinc = 0.003;
  $.goff = 0;
  $.ginc = 0.003;
  $.y = $.h * 0.66;
  $.length = $.w + 10;
  $.amp = 40;
};
/*========================================
Wave
========================================*/


$.wave = function () {
  $.ctx.beginPath();
  var sway = $.simplex.noise2D($.goff, 0) * $.amp;

  for (var i = 0; i <= $.count; i++) {
    $.xoff += $.xinc;
    var x = $.cx - $.length / 2 + $.length / $.count * i;
    var y = $.y + $.simplex.noise2D($.xoff, $.yoff) * $.amp + sway;
    $.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
  }

  $.ctx.lineTo($.w, $.h);
  $.ctx.lineTo(0, $.h);
  $.ctx.closePath();
  $.ctx.fillStyle = 'rgba(104, 61, 225, 0.5)';
  $.ctx.fill();
};
/*========================================
Loop
========================================*/


$.loop = function () {
  requestAnimationFrame($.loop);
  $.ctx.clearRect(0, 0, $.w, $.h);
  $.xoff = 0;
  $.wave();
  $.wave();
  $.wave();
  $.wave();
  $.yoff += $.yinc;
  $.goff += $.ginc;
};
/*========================================
Start
========================================*/


$.init();
