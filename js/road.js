"use strict";

// Road class
class Road {
    constructor(canvas, drawDistance) {
        this.canvas = canvas;
        this.drawDistance = drawDistance
        this.segments = [];
        for (let ii=0; ii<this.drawDistance; ii++) {
            let seg = new Segment(canvas, ii, ss.segment_height, ss.colors.dark_grey, ss.colors.light_grey);
            this.segments.push(seg);
        }
    }

    update = () => {

    }

    render = () => {
        for (let nn=0; nn<this.drawDistance; nn++) {
            let segment = this.segments[nn];
            segment.project(ss.road_width);
            let pointlist = segment.pointList();
            drawPolygon(drawingContext, segment.color, pointlist);
        }

        console.log("Road -> render()");
    }
}
