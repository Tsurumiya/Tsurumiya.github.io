function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  noStroke();
  smooth();
}

function draw() {
  background(0);
  for (let x = 50; x <= 450; x += 25) {
    for (let y = 50; y <= 450; y += 25) {
      angle = atan2(mouseY - y, mouseX - x);
      push();
      translate(x, y);
      rotate(angle);
      ellipse(-20,-8,random(5,20));
      pop();
    }
  }
}