var fixedRect, movingRect;
var p1,p2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  p1 = createSprite(100,300,50,50)
  p2= createSprite(500,300,70,70)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (collide(p1,movingRect)){
  movingRect.shapeColor = "red";
 p1.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  p1.shapeColor = "green";
 }
  drawSprites();
}
