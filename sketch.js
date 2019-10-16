var tri = 50;
var circ = 100;
function setup() {
  createCanvas(400, 400);
  frameRate(1.75);
}

function draw() {
  noStroke();
  background(random(100,255), random(100, 255), random(100,255));
  
  //draw random circles
  fill(random(50,260), random(50,260), random(50, 260));
  circle(mouseX, mouseY, random(1,100));
  
  if(mouseIsPressed){
    //Sun
    fill(250, 200, 30);
    stroke(250, 200, 30);
     circle(100, 100, 50);
    strokeWeight(3);
    line(35, 35, 70, 70);
    line(130, 130, 165, 165);
    line(35, 100, 70, 100);
    line(130, 100, 165, 100);
    line(100, 35, 100, 65);
    line(100, 135, 100, 165);
    line(35, 165, 70, 130);
    line(135, 70, 165, 35);
    
    //Snowflake
    stroke(140, 190, 250);
    strokeWeight(8);
    line(300, 225, 300, 375);
    line(225, 300, 375, 300);
    line(260, 260, 340, 340);
    line(340, 260, 260, 340);
    line(275,260, 275, 275);
    line(260, 275, 275, 275);
    line(325, 260, 325, 275);
    line(325, 275, 340, 275);
    line(325, 325, 325, 340);
    line(325, 325, 340, 325);
    line(275, 325, 260, 325);
    line(275, 325, 275, 340);
    line(285, 230, 300, 245);
    line(300, 245, 315, 230);
    line(285, 370, 300, 355);
    line(300, 355, 315, 370);
    line(235, 285, 250, 300);
    line(250, 300, 235, 315);
    line(365, 285, 350, 300);
    line(350, 300, 365, 315);
   
  //Pumpkin
  noStroke();
  fill(20, 250, 0);
  rect(95, 210, 10, 50);
  fill(250, 140, 30);
  circle(100, 300, 125);
  fill(250, 200, 30);
  triangle(tri, tri+230, tri+20, tri+200, tri+40, tri+230);
  triangle(tri+60, tri+230, tri+80, tri+200, tri+100, tri+230);
  circle(circ, circ+200, circ-80);
  arc(100, 315, 80, 80, 0, PI);
  fill(250, 140, 30);
  rect(75, 310, 15, 15);
  rect(110, 310, 20, 20);
  rect(85, 340, 20, 20);
  
  //Flower
  fill(43, 34, 13);
  rect(295, 100, 10, 100);
  
  fill(250, 20, 20);
  circle(280, 75, 60);
  circle(270, 110, 60);
  circle(300, 125, 60);
  circle(325, 105,60);
  circle(310, 75, 60);
  fill(250, 200, 30);
  circle(300, 100, 50);
  
     }
}