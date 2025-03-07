let x = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  fill(255, 100, 100);
  circle(x, 200, 100);

  x++

  console.log(x);

  if (x > width) {
    x = 0
  }
}
