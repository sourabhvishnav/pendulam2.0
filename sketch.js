const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1;
var c1;
var chain;
var c2;

function setup() {
  
  engine = Engine.create();
    world = engine.world;
  
  b1 = new Base(200,15,180,15);
  c1 = new Ball(200,170,45,45);
  c2 = new Ball(150,120,45,45);
  
  
  chain = new Chain(b1.body,c1.body);
  

}

function draw() {
  background(252);
  
  
  b1.display();
  c1.display();
  chain.display();
  c2.display();
  
  drawSprites();
}