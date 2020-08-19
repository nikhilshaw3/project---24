
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball;
var ground;
var d1;
var d2;
var d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

d1 = createSprite(600,425,150,20);
d1.shapeColor = "white";
d2 = createSprite(520,380,20,100);
d2.shapeColor = "white";
d3 = createSprite(680,380,20,100);
d3.shapeColor = "white";

ground = createSprite(100,450,4000,20);
ground.shapeColor = "yellow";

ball = Bodies.circle(200,400,20,options);

	


var options={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ellipseMODE(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30)



drawSprites();
 
}

function key(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}

