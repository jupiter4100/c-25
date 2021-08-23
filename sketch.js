
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papela
var bar1
var bar2

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	papela=new papel(200,450,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

if(keyWentDown(UP_ARROW)){
	Matter.Body.applyForce(papela.body,papela.body.position,{x:270,y:-500})

}

  groundObject.display();
  dustbinObj.display();
papela.display()
drawSprites()
}

