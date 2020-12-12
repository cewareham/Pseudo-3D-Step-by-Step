"use strict";

// helper functions

function drawPolygon(ctx, color, polyPts) {
  //polyPts [x,y, x,y, x,y.....];
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(polyPts[0], polyPts[1]);
  for ( let item=2; item < polyPts.length-1; item+=2 ) {
      ctx.lineTo( polyPts[item] , polyPts[item+1] );
  }
  ctx.closePath();
  ctx.fill();
}

function toInt(obj, def) {
  if (obj !== null) {
    var x = parseInt(obj, 10);
    if (!isNaN(x)) return x;
  }
  return toInt(def, 0);
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
