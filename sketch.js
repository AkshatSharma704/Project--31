const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = [];
var plinko = [];
var division = [];
var ground = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,480);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,475,800,10);

  for(var j = 0; j < particle.length; j++){
    particle[j].display();
  }

  for (var k = 0; k < division.length; k++) {
    divisions[k].display(); 
}

}

function draw() {
  background(0);



  ground.display();
  //plinko.display();
  //particle.display();

  drawSprites();
}