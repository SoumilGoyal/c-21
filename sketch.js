var fixedRect,movingRect;
var gameObj1;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "blue";
  //gameObj1 = createSprite(400, 200, 80, 30);
  //gameObj1.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(255,255,255);
  //movingRect.x = World.mouseX
 // movingRect.y = World.mouseY;

//  if(isTouching(movingRect,fixedRect)){
//   movingRect.shapeColor = "red";
//   fixedRect.shapeColor = "red";
//  }
//  else{
//   movingRect.shapeColor = "green";
//   fixedRect.shapeColor = "green";
//  }

bounceOff(movingRect,fixedRect);

  drawSprites();
}