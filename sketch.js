
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400); 

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill("white");

  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime : "+survivalTime,100,50);
  
  if(frameCount%80 == 0){
    FoodGroup();
  }
  
  if(frameCount%300 == 0){
    obstaclesGroup();
  }
  
  if(ground.x>0){
     ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y > 290){
    monkey.velocityY = -13       
    console.log(monkey.y)
   
  }
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
  
  
  drawSprites();
}
function FoodGroup(){
        banana=createSprite(200,Math.round(random(120,200)),20,20)
  banana.addImage(bananaImage)
  banana.scale = 0.09
  banana.velocityX = -4 
  banana.liftime = 200
}


function obstaclesGroup(){
  obstacle=createSprite(670,320,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
}




