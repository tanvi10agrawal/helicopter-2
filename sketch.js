var helImg, hel, pack, packImg;
var packBody, ground
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
 
function preload(){
    helImg=loadImage("helicopter.png")
    packImg=loadImage("package.png")
}
 
function setup(){
    createCanvas(800,700);
    rectMode(CENTER);
 
    pack= createSprite(width/2, 80, 10, 10);
    pack.addImage(packImg);
    pack.scale=0.2
 
    hel=createSprite(width/2,200,10,10);
    hel.addImage(helImg)
    hel.scale=0.6
 
    groundSprite=createSprite(width/2, height-35, width, 10);
    groundSprite.shapeColor=("white")
 
    engine=Engine.create();
    world=engine.world;
 
    packBody= Bodies.circle(width/2, 200, 5, {restitution:1, isStatic:true});
    World.add(world,packBody);
 
    ground= Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
	World.add(world,ground);

	boxPosition=width/2-100;
	boxY=610;

	boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor=color("red");
	boxLeftBody= Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor=color("red");
	boxBottomBody= Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true});
	World.add(world,boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color("red");

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);



 
    Engine.run(engine);
}
 
function draw(){
    rectMode(CENTER);
    background("black");
    pack.x=packBody.position.x
	pack.y=packBody.position.y
	
	keyPressed();
    drawSprites();
}

function keyPressed() {
	if (keyDown("left")) {
    hel.x=hel.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packBody, translation)
  
  
	} else if (keyDown("right")) {
	  hel.x=hel.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packBody, translation)
	}
	else if (keyDown("down")) {
	  Matter.Body.setStatic(packBody,false);
	  
	}
  }

