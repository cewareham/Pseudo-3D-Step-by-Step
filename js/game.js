"use strict";

// Game class
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.road = new Road(canvas, ss.draw_distance);
  }

  update = () => {

  }

  render = () => {
    background(ss.colors.white);
    this.road.render();
  }
}
