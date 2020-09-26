var helicopterIMG, helicopterSprite, packageSprite,packageIMG,leftSprite,bottomSprite,rightSprite;
var packageBody,ground,leftBody,rightBody,BottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BottomRect,Right,Left;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {


	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	
	BottomRect=new Bottom(400,650,200,20,PI/2);
	Right=new Bottom(500,560,200,20,PI/4);
	Left=new Bottom(290,560,200,20,PI/4);
	
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

   
	
	

    leftSprite=createSprite(290,560,20,200);
	leftSprite.shapeColor=color(255,0,0);
	leftBody = Bodies.rectangle(290, 560, 20, 200 , {isStatic:true} );
 	World.add(world, leftBody);
	
	rightSprite=createSprite(500,560,20,200);
	rightSprite.shapeColor=color(255,0,0);
	rightBody = Bodies.rectangle(500, 560, 20, 200 , {isStatic:true} );
 	World.add(world, rightBody);
	
	 bottomSprite=createSprite(400,665,200,20);
	 bottomSprite.shapeColor=color(255,0,0);
	BottomBody = Bodies.rectangle(400, 665, 200, 20 , {isStatic:true} );
 	World.add(world, BottomBody);
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	
	Engine.run(engine);
  
}


function draw() {
	debugger;
  rectMode(CENTER);

  Engine.update(engine);
  background(0);
  
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y ;

/*BottomRect.display();
 Right.display();
 Left.display();*/


  keyPressed();
  drawSprites();
 
 

  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic( packageBody , false);
        
  }
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
}



