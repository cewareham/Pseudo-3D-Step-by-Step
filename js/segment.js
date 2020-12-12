"use strict";

// Segment class
class Segment {
    constructor(canvas, index, segHeight, darkColor, lightColor) {
        this.canvas = canvas;
        this.segHeight = segHeight;
        this.darkColor = darkColor;
        this.lightColor = lightColor;
        this.index = index;
        let nn = this.index;
        this.bottom = { "world": { "z": (nn*segHeight)},     "camera": {}, "screen": {}};
        this.top    = { "world": { "z": ((nn+1)*segHeight)}, "camera": {}, "screen": {}};
        this.color  = (toInt(nn%2) == 0) ? darkColor : lightColor;
        this.halfWidth = width / 2;     // 1/2 canvas width
        this.halfHeight = height / 2;   // 1/2 canvas height
    }

    // calc segment screen coords @ 1/2-width distance
    project(roadWidth) {
        let bottom = this.bottom.screen,
            top    = this.top.screen,
            nn     = this.index;

        bottom.x = this.halfWidth;
        bottom.y = height - nn * this.segHeight;
        bottom.w = roadWidth;

        top.x = this.halfWidth;
        top.y = height - (nn + 1) * this.segHeight;
        top.w = roadWidth;
    }

    // return array of 4 screen coords for segment (used by drawPolygon)
    pointList() {
        let bottom = this.bottom.screen,
            top    = this.top.screen;

        return [bottom.x - bottom.w, bottom.y,
                bottom.x + bottom.w, bottom.y,
                top.x + top.w, top.y,
                top.x - top.w, top.y];
    }   
}
