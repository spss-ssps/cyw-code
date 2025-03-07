/*
Inspired by Vera Molnár's Dispersion, 1985, and simliar works
*/

let columnWidth;
let total = 30; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  columnWidth = width / total;
  noFill();
  stroke(255);
  strokeWeight(3);
}

function draw() {
  background(255);

  let colHeight = height / 3;

  for (let counter = 0; counter < total; counter++) {
    let x = counter * columnWidth;
    let y = height / 4 + random(-20, 20); // Randomly move up or down
    
    stroke(random(255), random(255), random(255)); // Set random color
    //fill(counter); // Set random color
    rect(x, y, columnWidth, colHeight);
    console.log(counter)
  }

  noLoop();
}