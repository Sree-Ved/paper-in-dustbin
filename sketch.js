
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, trash1, trash2, trash3, trash4, base1;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(300,580,600,40)
	paper = new Paper(100,200,20)
	base1 = new base(480,490,0,0)
	trash1 = new Trash(480,550,200,20)
	trash2 = new Trash(390,490,20,100)
	trash3 = new Trash(570,490,20,100)
	trash4  = new Trash(100,400,100,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background("orange");

  textSize(20)
  text("Press UP_ARROW only when ball stops bouncing.",70,50)

  rectMode(CENTER);
  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();
  trash4.display();
  base1.display();
  paper.display();

  key_press();

 }

function key_press(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.15,y:-1.2})
	}
}



