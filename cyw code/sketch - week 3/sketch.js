//checking

let cellSize;
let seed = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  randomSeed(seed);
  cellSize = min(width / 8, height / 8);

  console.log(cellSize);

  for (let x = 0; x <= width; x += cellSize) {
    for (let y = 0; y <= height; y += cellSize) {
      stroke(253, 218, 13);
      fill(255);
      circle(x, y, cellSize / 2);
    }
  }

  for (let x = (cellSize * 2) / 5; x <= width; x += cellSize*2) {
    for (let y = (cellSize * 2) / 5; y <= height; y += cellSize*2) {
      push();

      translate(x, y);
      let angles = [0, 90];https://www.google.com/imgres?q=new%20york%20transit%20museum%20logo&imgurl=https%3A%2F%2Fryanmelendez.com%2Fwp-content%2Fuploads%2FNY-Transit-Museum-Logo.png&imgrefurl=https%3A%2F%2Fryanmelendez.com%2Fproject%2Fnew-york-transit-museum%2F&docid=WQIUNzUmlbTspM&tbnid=IlG8lJq82vbfjM&vet=12ahUKEwiO9PGYzc2LAxVmAHkGHaf2DMEQM3oFCIUBEAA..i&w=2560&h=1110&hcb=2&ved=2ahUKEwiO9PGYzc2LAxVmAHkGHaf2DMEQM3oFCIUBEAA
      let angle = random(angles);
      rotate(angle);

      fill(255);
      noStroke();
      let rectMax = [1, 2, 2.5, 3, 3.5, 4]
      rect(0, 0, cellSize / 4, cellSize * random(rectMax), 100);

      pop();
      
      push()
      if (random(1) > 0.6) {;
        fill(0);
        stroke(253, 218, 13);
        circle(x +cellSize / 9, y + cellSize / 9, cellSize / 2.5);
                            
      } else if ((random(1) < 0.6)) {
        fill(255);
        stroke(253, 218, 13);
        circle(x+cellSize / 8, y +cellSize / 8, cellSize / 3);
      }
          pop();
    }
  }
}

function mousePressed() {
  seed = random(50000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
