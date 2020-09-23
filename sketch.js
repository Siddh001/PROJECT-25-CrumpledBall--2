
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var rectSprite1,rectSprite2,rectSprite3;
var rectBody1,rectBody2,rectBody3;
var ground;
var binImg,binPart1,binPart2,binPart3;

function preload()
{
	binImg = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(255)





ground3=
	{
	 isStatic:true
	}

ground = Bodies.rectangle(width/2, 680, width, 10,ground3 );
	 World.add(world, ground);
	 
	 bin = createSprite(649,581,20,20);
	 bin.addImage(binImg);
	 bin.scale = 0.45;






//rectBody1=Bodies.rectangle(660,660,200,20,{isStatic:true});
//World.add(world,rectBody1);

//rectBody2=Bodies.rectangle(width/2,634,200,20,{isStatic:true});
//World.add(world,rectBody2);

//rectBody3=Bodies.rectangle(width/2,594,200,20,{isStatic:true});
//World.add(world,rectBody3);

paper = new Paper();
    binPart2 = new Dustbin(584,589,10,130);
    binPart1 = new Dustbin(	650,660,130,10);
    binPart3 = new Dustbin(714,589,10,130);



Engine.run(engine);
 keyPressed() ;
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("red");
  paper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display(); 

  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 116, y: -111});
//	this.body={isStatic:false}
	//var object={isStatic:false}
  }
}
