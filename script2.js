console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(39,55,70);
}

function draw() {
  noStroke(); // turn off for different experience
  fill(122,231,199); //MINT
  rect(0,0,799,799); //FIRST RECTANGLE
  rect(50,50,700,150); //SECOND RECTANGLE
  rect(100,100,600,50); //THIRD RECTANGLE
  rect(240,240,320,320); //FOURTH RECTANGLE
  rect(320,320,160,160); //FIFTH RECTANGLE

//BIG RECTANGLE
if ((mouseX>0)&&(mouseX<50)) {
    fill(108,128,154); //SLATE BLUE
    rect(0,0,799,799); // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(50,50,700,150); //SECOND RECTANGLE
    rect(100,100,600,50); //THIRD RECTANGLE
  }
  if ((mouseX>750)&&(mouseX<500)) {
    fill(108,128,154); //SLATE BLUE
    rect(0,0,799,799); // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(50,50,700,150); //SECOND RECTANGLE
    rect(100,100,600,50); //THIRD RECTANGLE
  }
  if ((mouseY>0)&&(mouseY<80)) {
    fill(108,128,154); //SLATE BLUE
    rect(0,0,799,799);  // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(50,50,700,150); //SECOND RECTANGLE
    rect(100,100,600,50); //THIRD RECTANGLE
}
  if ((mouseY>750)&&(mouseY<800)) {
    fill(108,128,154); //SLATE BLUE
    rect(0,0,799,799);  // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(50,50,700,150); //SECOND RECTANGLE
    rect(100,100,600,50); //THIRD RECTANGLE
}

// SECOND RECTANGLE
if ((mouseX>80)&&(mouseX<160)) {
    fill(108,128,154); //SLATE BLUE
    rect(50,50,700,150); //SECOND RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(100,100,600,50); //THIRD RECTANGLE
  }
  if ((mouseX>640)&&(mouseX<750)) {
    fill(108,128,154); //SLATE BLUE
    rect(50,50,700,150); //SECOND RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(100,100,600,50); //THIRD RECTANGLE
}
  if ((mouseY>80)&&(mouseY<160)) {
    fill(108,128,154); //SLATE BLUE
    rect(50,50,700,150); //SECOND RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(100,100,600,50); //THIRD RECTANGLE
}
  if ((mouseY>640)&&(mouseY<750)) {
    fill(108,128,154); //SLATE BLUE
    rect(50,50,700,150); //SECOND RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
    rect(100,100,600,50); //THIRD RECTANGLE
}

// THIRD RECTANGLE
if ((mouseX>160)&&(mouseX<240)) {
    fill(108,128,154); //SLATE BLUE
    rect(100,100,600,50); //THIRD RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
  }
  if ((mouseX>560)&&(mouseX<640)) {
    fill(108,128,154); //SLATE BLUE
    rect(100,100,600,50); //THIRD RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
}
  if ((mouseY>160)&&(mouseY<240)) {
    fill(108,128,154); //SLATE BLUE
    rect(100,100,600,50); //THIRD RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
}
  if ((mouseY>560)&&(mouseY<640)) {
    fill(108,128,154); //SLATE BLUE
    rect(100,100,600,50); //THIRD RECTANGLE // COLORED RECTANGLE
    fill(122,231,199); // MINT
  }


// FOURTH RECTANGLE
if ((mouseX>240)&&(mouseX<320)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(122,231,199);
    rect(320,320,160,160);
  }
  if ((mouseX>480)&&(mouseX<560)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(122,231,199);
    rect(320,320,160,160);  }
  if ((mouseY>240)&&(mouseY<320)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(122,231,199);
    rect(320,320,160,160);  }
  if ((mouseY>480)&&(mouseY<560)) {
    fill(249,165,137);
    rect(240,240,320,320); // COLORED RECTANGLE
    fill(122,231,199);
    rect(320,320,160,160);
  }


// SMALLEST RECTANGLE
if ((mouseX>320)&&(mouseX<480)&&(mouseY>320)&&(mouseY<480)) {
    fill(108,128,154); //SLATE BLUE
    rect(320,320,160,160); // COLORED RECTANGLE
  }

}
