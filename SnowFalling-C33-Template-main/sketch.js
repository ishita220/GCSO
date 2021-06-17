const Engine = Matter.Engine
const World = Matter.World



var backgroundImage


function preload () {
backgroundImage = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   
}

function draw() {
  background(backgroundImage);  
  drawSprites();


}

  
 
  
