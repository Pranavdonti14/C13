var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimage = loadImage("cloud.png")
 
  obstacle1Image = loadImage("obstacle1.png")
  obstacle2Image = loadImage("obstacle2.png")
  obstacle3Image = loadImage("obstacle3.png")
  obstacle4Image = loadImage("obstacle4.png")
  obstacle5Image = loadImage("obstacle5.png")
  obstacle6Image = loadImage("obstacle6.png")
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(frameCount)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacles()
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if (frameCount%60 === 0) {
  cloud = createSprite(600,80,40,10)
  cloud.addImage(cloudimage)
  cloud.scale = 0.4
  cloud.velocityX = -4
  cloud.y = Math.round(random(10,80))
  cloud.lifetime = 150
 cloud.depth = trex.depth
 trex.depth = trex.depth+1
}
 
}
function spawnObstacles(){
if (frameCount%60 === 0) {
  obstacle = createSprite(600,165,40,80)
  obstacle.velocityX = -4
var rand = Math.round(random(1,6))
switch(rand){
  case 1 : obstacle.addImage(obstacle1Image)
  break;
  case 2 : obstacle.addImage(obstacle2Image)
  break;
  case 3 : obstacle.addImage(obstacle3Image)
  break;
  case 4 : obstacle.addImage(obstacle4Image)
  break;
  case 5 : obstacle.addImage(obstacle5Image)
  break;
  case 5 : obstacle.addImage(obstacle6Image)
  break;
  default:break
}
obstacle.scale = 0.5
obstacle.lifetime = 150
}
}





