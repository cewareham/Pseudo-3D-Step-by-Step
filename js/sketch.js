let game, fsBtn;

function setup() {
  let canvas = createCanvas(ss.dimensions[0], ss.dimensions[1]);
  game = new Game(canvas);
  
  fsBtn = createButton("Play in Fullscreen Mode");
  let cPos = canvas.position();
  // center button @ bottom of canvas
  fsBtn.position(cPos.x+(width-fsBtn.width)/2, cPos.y+height+10);
  fsBtn.mousePressed(btnPressed);
}

function draw() {
  game.update();
  game.render();
}

function btnPressed() {
  openFullscreen(drawingContext.canvas);
}
