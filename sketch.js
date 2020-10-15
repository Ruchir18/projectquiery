
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(200,500,25);
	bobObj2 = new Bob(250,500,25);
	bobObj3 = new Bob(300,500,25);
	bobObj4 = new Bob(350,500,25);
	bobObj5 = new Bob(400,500,25);
	roof = new Roof(300,300,200,50);
//	string = new Chain(roof,bobObj1);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

drawSprites();
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();
roof.display();
//string.display();
}