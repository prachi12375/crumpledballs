
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400, 590, 2800, 20)
	paper1=new Paper(150, 550, 5);
	box1=new Dustbin(1200, 580, 200, 20);
	box2=new Dustbin(1100, 580, 20, 150);
	box3=new Dustbin(1300, 580, 20, 150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:0.05, y:-0.25});
	}
}



