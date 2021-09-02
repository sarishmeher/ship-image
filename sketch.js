var seaImg,shipImage
function preload(){
  seaImg = loadImage("sea.png")
shipImage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  
ship=createSprite(100,200,30,30)
ship.addAnimation("movingship",shipImage1)

sea=createSprite (400,200)
sea.addImage(seaImg);
sea.velocityX= -5;
}

function draw() {
 
  if (sea.x < 0){
sea.x = sea.width/2;

  }
  background("blue");

 drawSprites();
}