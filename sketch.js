
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, bin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground = new Ground(600,height,800,20);
	World.add(world, this.ground);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}



