const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var tanker,ground;
var canonball,canonImage;

function preload(){
 //canonImage = loadImage("CanonBall.png");
}

function setup() {
   var canvas = createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(200,500,600,20);
   tanker = new Tanker(200,200,20,20);
  // canonball = new CanonBall(400,255,10,10);
   
   shoot = new Shoot(250,400,10,20);

}

function draw() {
    Engine.update(engine);
    tanker.display();
    ground.display();
   // canonball.display();
    shoot.display();


}


