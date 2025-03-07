function setup() {
  createCanvas(windowWidth, windowHeight);
  background(193, 153, 45);
  //noFill();
}

function draw() {
  let xstart = random(10);
  let ty = random(20);

  // Random variables for rectangles
  let rectWidth = random(30, 150); // Random width for each rectangle
  let rectHeight = random(30, 150); // Random height for each rectangle

  let outline = [(66, 70, 63), 200];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      
      // Randomly calculate the position for each rectangle on the canvas
      let x = i + random(width / 3, (width / 3) * 2); // Random x position
      let y = j + random(height / 3, (height / 3) * 2); // Random y position

      stroke(random(outline));
      strokeWeight(4)
      fill(212, 179, 62);
      rect(x, y, rectWidth, rectHeight); 
      //rect(x, y, rectWidth / 2, rectHeight / 2);

      // Draws bigger circles on the previous rectangle
      if (y > height / 2) {
      noStroke();
      fill(99, 139, 3);
      circle(x + rectWidth / 2, y + rectHeight / 2, rectWidth / random(1, 3));
      fill(110, 87, 21);
      circle(x + rectWidth / 2, y + rectHeight / 2, rectWidth / random(2, 6));
      }

      // Green left side of background
      fill(99, 139, 3);
      rect(width / 2, 0, width, height);
    }
  }
  
  
  translate(width / 2, height / 2);

  // Nested loop. This part is used to establish the height size of the circles
  for (let y = -height / 2; y <= height / 2; y += 8) {
    ty += 0.02;
    let tx = xstart;

    // Used to establish the width size of the circles
    for (let x = -width / 6; x <= width / 6; x += 5) {
      tx += 0.04;
      let noiseFactor = noise(tx, ty);
      drawCircle(x, y, noiseFactor, 200);
      drawCircle(y, x, noiseFactor, 50);
    }
  }

  noLoop();
}

function drawCircle(newX, newY, newNoise, opa) {
  push();
  // Established how tight or separated the circles are drawn from each other
  translate(newX * newNoise * 3, newY * newNoise * 3);
  strokeWeight(1)
  stroke(214, 171, 4, opa);
  fill(random(255), random(255), random(255), opa);
  circle(0, 0, newNoise * 10);
  pop();
}

function mousePressed() {
  background(193, 153, 45);
  // colorMode(HSB);
  // background(45, random(40,100), 100) // Changes the background when mouse pressed
  loop(); // Loops the drawing
}

