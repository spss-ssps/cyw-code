//sketch week 2, inspo from decode 5

let endX;
let endY;

let num = 0;
let total = 700;

let tx = 0;
let ty = 1000; //used for the noise function to get a random start point(?)

let startX, startY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  getStartPoint();
  getEndPoint();
}

function draw() {

  //singular continous line while num is less than 350
  while (num < total / 2) {
    stroke(random(0, 255), endY, endX);
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
    getEndPoint();
    num++;
  }

  //multiple lines starting from center, organic shaped
  while (num < total) {
    stroke(random(0, 255), endX, endY);
    line(width / 2, height / 2, endX, endY);
    getEndPoint();
    num++;
  }

//interative element
  if (mouseIsPressed) {
  //when the mouse is Pressed, the ending point of the continuous line gets taken over by the user, giving them the liberty to control its look
    stroke(random(0, 255), endY, endX);
    line(startX, startY, mouseX, mouseY);
    startX = mouseX;
    startY = mouseY;
    
    //the main flowing shape continues to grow unpromtply
    stroke(random(0, 255), endX, endY);
    line(width / 2, height / 2, endX, endY);
    getEndPoint();
    num++;
  }
}

//these are same as original
function getStartPoint() {
  startX = map(noise(tx), 0, 1, 0, width);
  startY = map(noise(ty), 0, 1, 0, height);
}


function getEndPoint() {
  endX = map(noise(tx), 0, 1, 0, width);
  endY = map(noise(ty), 0, 1, 0, height);

//same as modification
  tx += 0.008;
  ty += 0.008;
}