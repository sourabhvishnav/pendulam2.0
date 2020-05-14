const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ball,ground,base;
var chain;

function setup(){ 
  
  engine = Engine.create();
    world = engine.world;

    var ground_options={
      isStatic : true
    }
  
    var base_options={
      isStatic: true
    }
  
    ground = Bodies.rectangle(200,390,400,15,ground_options)
    World.add(world,ground);
  
  base = Bodies.rectangle(200,10,200,10,base_options);
  World.add(world,base);
  
  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }
  
  ball  = Bodies.circle(180,200,20,ball_options);
  World.add(world,ball);


}

function draw() {
  background(2);

  fill ("brown");
rectMode(CENTER);
rect(base.position.x,base.position.y,200,15);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

strokeWeight(5);
  stroke("white");
  line(ball.position.x,ball.position.y,base.position.x,base.position.y)

  if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }

  drawSprites();
}