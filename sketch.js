
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof1;
var bobDiameter=40;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new roof(420,50,300,15);

	bobObject1=new bob(300,350,30);
	bobObject2=new bob(360,350,30);
	bobObject3=new bob(420,350,30);
	bobObject4=new bob(480,350,30);
	bobObject5=new bob(540,350,30);

	rope1=new rope(bobObject1.body,roof1.body,-bobDiameter*3,0);
	rope2=new rope(bobObject2.body,roof1.body,-bobDiameter*1.5,0);
	rope3=new rope(bobObject3.body,roof1.body,bobDiameter*0,0);
	rope4=new rope(bobObject4.body,roof1.body,bobDiameter*1.5,0);
	rope5=new rope(bobObject5.body,roof1.body,bobDiameter*3,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();   
  drawSprites();
 
}



