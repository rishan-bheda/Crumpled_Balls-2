
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin1, dustbinImage, dustbin;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(610,600,20,20);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.4;

	//Create the Bodies Here.
	
	paper1 = new Paper(150,350);
	ground = new Ground(400,675,800,20);
	dustbin1 = new Dustbin(610,660,100,10);
	dustbin2 = new Dustbin(560,610,10,100);
	dustbin3 = new Dustbin(660,610,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:59, y:-59})

	}

}



