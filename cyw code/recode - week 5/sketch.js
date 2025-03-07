let numCir = 8;  // Total number of stationary circles
let radius = 250;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noFill();
  //noStroke();
}

function draw() {
  background(0);

  let centerX = width / 2;
  let centerY = height / 2;
  
  let cirSize = width/7

  // stationary circles
  for (let i = 0; i < numCir; i++) {
    let angleOffset = map(i, 0, numCir, 0, TWO_PI);
    let x = centerX + cos(angleOffset) * radius;
    let y = centerY + sin(angleOffset) * radius;
    
    fill(255, x/2.5);
    stroke(x/2.5); //random to creat shaking effect
    
    ellipse(x, y, cirSize);  // draw stationary circles
  }

  // moving circles with gradual offset (one less than stationary for moon cycle effect)
  for (let i = 0; i < numCir - 1; i++) {  // one less circle
    
    let movingAngle = angle + (i * TWO_PI) / numCir + (i * 0.1);  // gradual shifting for each moving circle
    
    let x = centerX + cos(movingAngle) * radius;
    let y = centerY + sin(movingAngle) * radius;
    
    fill(0);
    noStroke();
    ellipse(x, y, cirSize);  // Draw moving circles
  }

  angle += 0.01; // Adjust speed of movement here
}