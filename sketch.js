
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var bin1;
var ground;
var base;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.

	
	
	
	
	


	Engine.run(engine);
	
	bin1= new Bin(509,605,20,100);
	bin2= new Bin(650,605,20,100);
	bin3= new Bin(580,650,160,20);
	ground= new Ground(width/2, height-35, width,10);
	base= new Base(100,540);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground.display();

bin1.display();
bin2.display();
bin3.display();
base.display();

drawSprites();
 
}

function keyPressed(){

	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(base.body,base.body.position,{x:85,y:-85});
	}
}



