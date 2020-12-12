"use strict";

// game variables
let ss = {
    dimensions: [640, 480],
    segment_height: 10,
    road_width: 0,      // calc'ed below
    draw_distance: 48,

    colors: {
      "white": 'rgb(255, 255, 255)',
      "light_grey": 'rgb(193, 193, 193)',
      "dark_grey": 'rgb(123, 123, 123)'
    }
}
ss.road_width = ss.dimensions[0] / 2;   // road_width = 1/2 canvas width
