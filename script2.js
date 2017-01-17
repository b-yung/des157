console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 800);
  myCanvas.parent('mySketch');
  background(39,55,70);
}

function draw() {
  noStroke(); // turn off for different experience
  fill(249,118,128); //PINK
  rect(0,0,799,799);
  rect(80,80,640,640);
  rect(160,160,480,480);
  rect(240,240,320,320);
  rect(320,320,160,160);

//BIG RECTANGLE
if ((mouseX>0)&&(mouseX<80)) {
    fill(249,165,137); //ORANGE
    rect(0,0,799,799); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(80,80,640,640);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);
  }
  if ((mouseX>720)&&(mouseX<800)) {
    fill(249,165,137); //ORANGE
    rect(0,0,799,799); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(80,80,640,640);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>0)&&(mouseY<80)) {
    fill(249,165,137); //ORANGE
    rect(0,0,799,799);  // COLORED RECTANGLE
    fill(249,118,128);
    rect(80,80,640,640);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>720)&&(mouseY<800)) {
    fill(249,165,137); //ORANGE
    rect(0,0,799,799);  // COLORED RECTANGLE
    fill(249,118,128);
    rect(80,80,640,640);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);
  }

// SECOND RECTANGLE
if ((mouseX>80)&&(mouseX<160)) {
    fill(249,165,137); //ORANGE
    rect(80,80,640,640); // COLORED RECTANGLE
    fill(249,118,128);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);
  }
  if ((mouseX>640)&&(mouseX<720)) {
    fill(249,165,137); //ORANGE
    rect(80,80,640,640); // COLORED RECTANGLE
    fill(249,118,128);
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>80)&&(mouseY<160)) {
    fill(249,165,137); //ORANGE
    rect(80,80,640,640); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>640)&&(mouseY<720)) {
    fill(249,165,137); //ORANGE
    rect(80,80,640,640); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(160,160,480,480);
    rect(240,240,320,320);
    rect(320,320,160,160);
  }

// THIRD RECTANGLE
if ((mouseX>160)&&(mouseX<240)) {
    fill(249,165,137); //ORANGE
    rect(160,160,480,480); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(240,240,320,320);
    rect(320,320,160,160);
  }
  if ((mouseX>560)&&(mouseX<640)) {
    fill(249,165,137); //ORANGE
    rect(160,160,480,480); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>160)&&(mouseY<240)) {
    fill(249,165,137); //ORANGE
    rect(160,160,480,480); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(240,240,320,320);
    rect(320,320,160,160);  }
  if ((mouseY>560)&&(mouseY<640)) {
    fill(249,165,137); //ORANGE
    rect(160,160,480,480); // COLORED RECTANGLE
    fill(249,118,128); //PINK
    rect(240,240,320,320);
    rect(320,320,160,160);
  }


// FOURTH RECTANGLE
if ((mouseX>240)&&(mouseX<320)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(249,118,128);
    rect(320,320,160,160);
  }
  if ((mouseX>480)&&(mouseX<560)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(249,118,128);
    rect(320,320,160,160);  }
  if ((mouseY>240)&&(mouseY<320)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(249,118,128);
    rect(320,320,160,160);  }
  if ((mouseY>480)&&(mouseY<560)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(249,118,128);
    rect(320,320,160,160);
  }


// SMALLEST RECTANGLE
if ((mouseX>320)&&(mouseX<480)&&(mouseY>320)&&(mouseY<480)) {
    fill(249,165,137); //orange
    rect(320,320,160,160); // COLORED RECTANGLE
  }

}
