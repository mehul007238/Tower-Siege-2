const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var polygon;
var slingShot;


function setup() {
  createCanvas(1365, 625);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(600, 400, 250, 10);
  stand2 = new Stand(1000, 300, 250, 10);

  block1 = new Block(510, 380, 30, 40);
  block2 = new Block(540, 380, 30, 40);
  block3 = new Block(570, 380, 30, 40);
  block4 = new Block(600, 380, 30, 40);
  block5 = new Block(630, 380, 30, 40);
  block6 = new Block(660, 380, 30, 40);
  block7 = new Block(690, 380, 30, 40);
  block8 = new Block(540, 340, 30, 40);
  block9 = new Block(570, 340, 30, 40);
  block10 = new Block(600, 340, 30, 40);
  block11 = new Block(630, 340, 30, 40);
  block12 = new Block(660, 340, 30, 40);
  block13 = new Block(570, 300, 30, 40);
  block14 = new Block(600, 300, 30, 40);
  block15 = new Block(630, 300, 30, 40);
  block16 = new Block(600, 260, 30, 40);
  blocks1 = new Block(940, 260, 30, 40);
  blocks2 = new Block(970, 260, 30, 40);
  blocks3 = new Block(1000, 260, 30, 40);
  blocks4 = new Block(1030, 260, 30, 40);
  blocks5 = new Block(1060, 260, 30, 40);
  blocks6 = new Block(970, 220, 30, 40);
  blocks7 = new Block(1000, 220, 30, 40);
  blocks8 = new Block(1030, 220, 30, 40);
  blocks9 = new Block(1000, 180, 30, 40);
  polygon = new Polygon(150, 350, 40, 40);
  slingShot = new Slingshot(polygon.body, { x: 150, y: 350 });

}
function draw() {
  background(56, 44, 44);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  polygon.display();
  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 100, y: 200 });
    slingShot.attach(polygon.body)
  }
}