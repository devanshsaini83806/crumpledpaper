
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperImg
var paper;

function preload(){
paperImg=loadImage("paper.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
 paper= new papers(1100,30,50,50)
Mouse = new mouse(20,200,90,20)
 

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);



  
		 

  Mouse.display();
paper.display();
  groundObject.display();
  dustbinObj.display();

}

