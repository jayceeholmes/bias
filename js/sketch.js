var capture;

// GLOBAL VARIABLES
var wH;
var opacity = 300;
var i;
var w;
var h;
var go = true;

function setup() {
  // CANVAS
  createCanvas(windowWidth, windowHeight);

  // CAPTURE
  capture = createCapture(VIDEO);
  capture.hide();

  // DIMENSIONS
  wH = (width*240)/320;
  console.log(windowWidth, windowHeight);
  w = width/2;
  h = height/2;

  // LOAD IMAGES
  img1 = loadImage("/img/words/option1.png");  // Load the image
  img2 = loadImage("/img/words/option2.png");  // Load the image
  img3 = loadImage("/img/words/option3.png");  // Load the image
  img4 = loadImage("/img/words/option4.png");  // Load the image
}

function draw() {
  if (opacity > 127) {

      background(255);

      // OPACITY
      tint(255, opacity);
      opacity -= 0.5;

      image(capture, 0, 0, windowWidth, wH);

  }

  if (opacity <= 127 &&  opacity != 0 && go == true){
    go = false;
    facePhrenology();
  }
}



function facePhrenology(){
  // say hello
  // tracking face
  // loading prophecy

  // you are a type 1-37 person
  var number = floor(random(4));

  // personality horoscopes
  console.log("You are a type " + number + " person");

  if (number == 1){
    image(img1,0,0,windowWidth,windowHeight);
    console.log("i1");
  }

  if (number == 2){
    image(img2,0,0,windowWidth,windowHeight);
    console.log("i2");

  }

  if (number == 3){
    image(img3,0,0,windowWidth,windowHeight);
    console.log("i3");

  }

  if (number == 4){
    image(img4,0,0,windowWidth,windowHeight);
    console.log("i4");

  }

  opacity = 0;

}

function mousePressed(){
  go = false;
  console.log(true);
}
