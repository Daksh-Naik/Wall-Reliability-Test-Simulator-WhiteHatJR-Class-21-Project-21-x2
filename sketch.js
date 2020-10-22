//Wall reliability test simulator BETA
//This simulator is to test the reliability of the wall, when bullets are fired on it. If the wall turns 
//green, the wall hasn't got any damage, if it's red, then that's alotta damage
//This may contain some bugs.

//WhiteHatJR Project Class-21,  1 October 2020

//You were at changing and assigning a new hasCollided() function! ~~~~~~~

var wall;
var seperatedParams, param1, param2, param3;
var bullet;
var blocks, block1, block2, block3, block4, block5, block6, block7, block8, block9;

var wallThickness;
var bulletSpeed, bulletWeight;

function setup() {
  createCanvas(1600,400);

  block1 = createSprite(140, 200, 130, 190);
  block1.shapeColor="black";
  block2 = createSprite(270, 200, 130, 190);
  block2.shapeColor="yellow";
  block3 = createSprite(400, 200, 130, 190);
  block3.shapeColor="black";
  block4 = createSprite(530, 200, 130, 190);
  block4.shapeColor="yellow";
  block5 = createSprite(660, 200, 130, 190);
  block5.shapeColor="black";
  block6 = createSprite(790, 200, 130, 190);
  block6.shapeColor="yellow";
  block7 = createSprite(920, 200, 130, 190);
  block7.shapeColor="black";
  block8 = createSprite(1050, 200, 130, 190);
  block8.shapeColor="yellow";
  block9 = createSprite(1180, 200, 130, 190);
  block9.shapeColor="black";
  block10 = createSprite(1310, 200, 130, 190);
  block10.shapeColor="yellow";
  block11 = createSprite(1440, 200, 130, 190);
  block11.shapeColor="black";

  wallThickness=random(22, 83);
  wall = createSprite(1500, 200, wallThickness, height/2);
  wall.shapeColor=(80, 80, 80);
  param1 = createSprite(815, 120, 1350, 5);
  param2 = createSprite(815, 280, 1350, 5);

  bulletWeight=random(30, 52);
  bulletSpeed=random(223, 321);

  bullet = createSprite(250, 200, 30, 5);
  bullet.shapeColor="white";

  //zenia = createSprite(250, 100, 15, 15);
  //zenia.shapeColor="white";

  //tourus = createSprite(250, 200, 15, 15);
  //tourus.shapeColor="white";

  //cyclap = createSprite(250, 300, 15, 15);
  //cyclap.shapeColor="white";
  
}

function draw() {
  background(50, 50, 50);
  

  fill(300);
  text("Press SPACE to start", 600, 50);
 

  if (keyDown("SPACE")) {    
    bullet.velocityX=bulletSpeed;
    fill(300);
    text("Starting... .. ..   Started", 600, 80);

  }


if (hasCollided(bullet, wall)) {

  bullet.velocityX=0;

  text("Wall tested, press F5 to restart", 1100, 80) 
  var damage=0.5 * bulletWeight * bulletSpeed* bulletSpeed/(wallThickness *wallThickness *wallThickness);
  
  if (damage>10){
    wall.shapeColor=(color(255, 0, 0));
  }

  if (damage<10){
    wall.shapeColor=(color(0, 255, 0));
  }

}


  drawSprites();
 
}

function hasCollided(bullet, wall) {

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }

  return false;
}


