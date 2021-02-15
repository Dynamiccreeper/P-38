//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

//var engine, world;
//var box1, pig1;
//var backgroundImg,platform;
var PLAY = 1;
//var END = 0;
var rocket;
 var obstacle;
 var gamestate=PLAY;
 var obstaclesGroup;
 var score=0;
function preload() {
  //  //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
  canvas = createCanvas(1360,650);
    //engine = Engine.create();
    //world = engine.world;
    rocket=createSprite(675,500);


   /* ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 500, 270);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);*/

    obstaclesGroup = new Group();

}

function draw(){
    background("black");

    if(keyWentDown("RIGHT_ARROW")){
    
        rocket.velocityX = 15;
        rocket.velocityY=0;
      }
      if(keyWentUp("RIGHT_ARROW")){
        
        rocket.velocityX=0;
        rocket.velocityY=0;
      }
      
      if(keyWentDown("LEFT_ARROW")){
        
        rocket.velocityX = -15;
        rocket.velocityY=0;
      }
      if(keyWentUp("LEFT_ARROW")){
        
        rocket.velocityX= 0;
        rocket.velocityY=0;
      }
       if(keyWentDown("UP_ARROW")){
        
        rocket.velocityY = -15;
        rocket.velocityX=0;
        
      }
      if(keyWentUp("UP_ARROW")){
        
        rocket.velocityY=0;
        rocket.velocityX=0;
      }
      
      if(keyWentDown("DOWN_ARROW")){
        
        rocket.velocityY=15;
        rocket.velocityX = 0;
        
      }
      if(keyWentUp("DOWN_ARROW")){
        rocket.velocityY=0;
        rocket.velocityX= 0;
      }
    


    /*Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();*/
spawnObstacles();

if(obstaclesGroup.isTouching(rocket)){

  score=score+1
  obstaclesGroup.destroyEach();
  }
  
  if(keyWentDown("r")){
  
  rocket.x=675;
  rocket.y=500;
  
  
  }


          camera.position.x = rocket.position.x;
          camera.position.y = rocket.position.y;
  
    drawSprites();
text("Score"+score,1200,50);
}


    function spawnObstacles() {
        if(frameCount % 60 === 0) {
          var obstacle = createSprite(Math.round(random(displayWidth - 20)),165,40,40);
          //obstacle.debug = true;
          obstacle.velocityY = +(6 + 3* 50/100);
          //obstacle.lifetime = 300;

          obstaclesGroup.add(obstacle);
          
          }
          
          //assign scale and lifetime to the obstacle           
          //obstacle.scale = 0.5;
          
          //add each obstacle to the group
         
        }


