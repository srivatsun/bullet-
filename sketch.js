var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

  wall=createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(100,200,70,50);

}

function draw() {
  background("black");  
 bullet.velocityX=10;
  
if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight *speed *speed/(thickness *thickness);
  if(damage>10)
    {
      wall.shapeColor(255,0,0);

    }
   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }



  }
  
  drawSprites();

}


function hascollided(lbullet, lwall)
{
lbulletRightEdge=lbullet.x +lbullet.width;
  lwallLeftEdge=wall.x;
  // if(lbulletRightEdge>=lwallLeftEdge)
  // {
  //   return true;
  // }
  // return false;
}