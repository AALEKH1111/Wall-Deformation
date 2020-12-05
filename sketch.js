var wall,bullet,hascollided;
var speed,weight,thickness;

function setup() 
{
  createCanvas(1600,400);

  speed=random(50,200)
  weight=random(400,1500)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(800,200,thickness,height/2)
  wall.shapeColor=color(80)
}

function draw() 
{
  background(0);  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
  
  bullet.velocityX=speed;

  var hascollided=0.5*weight*speed*speed/22509;
  
  if(hascollided>180)
  {
  wall.shapeColor=color(255,0,0);
  }
  
  if(hascollided<180&&hascollided>100)
  {
  wall.shapeColor=color(230,230,0);
  }
  
  if(hascollided<100)
  {
  wall.shapeColor=color(0,255,0);
  }
  
  }
  drawSprites();
}

