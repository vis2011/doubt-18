var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snowfall=100;
var bg;
var ground;
maxsnow = 10;
var pushSnow=[];
var image,image_image;

function preload(){
  bg=loadImage("snow2.jpg");
  image_image=loadImage("boy1.jpg");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);
  image=Bodies.rectangle(20,20,20,20);

  if(frameCount % 20 === 0){
    for(var i=0; i<maxsnow; i++){
        pushSnow.push(new snow(random(0,1200), 0));
    }
}
 
}


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();          
   image(image_image,image.position.x,image.poistion.y,image.position.width,image.position.height);
                  

    for(var i = 0; i<maxsnow; i++){
      pushSnow[i].display();
      pushSnow[i].updateY();
  }
  createSnow();
}

function createSnow(){
  if(World.frameCount % 75 === 0 ){
    var snow=createSprite(math.round(random(70,1000),80,50,5));
    snow.addImage("snow5.webp");
    snow.scale=0.04;
    snow.velocityY=20;
    snow.lifetime=33;
  }
}