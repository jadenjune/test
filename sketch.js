i = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  background(0);
}

function draw() {
  fill(255,0,0,100);
  if(mouseX>=width/2-50 && mouseX<=width/2+50){  
    if(mouseY>=height/2-50 && mouseY<=height/2+50){
      fill(0,0,255,100);
    }
  } else {
    fill(255,0,0,100);
  }
  
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
  rect(width/2,height/2,100,100);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
function mousePressed(){
  if(mouseX>=width/2-50 && mouseX<=width/2+50){  
    if(mouseY>=height/2-50 && mouseY<=height/2+50){
      if(i == true){
    background(250);
    i = false;
  } else{
    background(0);
    i = true;
  }
    }
  }
}