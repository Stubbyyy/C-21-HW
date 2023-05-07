
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball;
var groundObj, leftside;
var rightside;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;



groundObj = new Ground(width/2,670,width,20);
leftside = new Ground(1100,600,20,120);
rightside = new Ground(1300,600,20,120);

var ball_options = {
	isStatic: false,
	restitution:0.3,
	density:1.2,
	friction:0,
		}

	
	ball = Bodies.circle(width/2,height/2,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  groundObj.display();
leftside.display();
rightside.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce (ball,{x:0,y:0},{x:10,y:-5})
}
}




