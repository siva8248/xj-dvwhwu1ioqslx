const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gd1,obj,sd1,sl,b1,b2,b3,b4,b5,b6,b7,b8,b9,b0,b10,b11,b12,b13,b14;
var b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31;
var b32,b33,b34,b35,b36,b37,b38;
var backgroundImg;

function preload() {

}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  gd1 = new gd(600,597,1200,10);
  obj = new ply(100,300,80,80);
  sd1 = new sd(600,500,450,10);
  sl = new SlingShot(obj.body,{x:200, y:200});
  b1 = new b(400,460,40,60);
  b2 = new b(440,460,40,60);
  b3 = new b(480,460,40,60);
  b4 = new b(520,460,40,60);
  b5 = new b(560,460,40,60);
  b6 = new b(600,460,40,60);
  b7 = new b(640,460,40,60);
  b8 = new b(680,460,40,60);
  b9 = new b(720,460,40,60);
  b0 = new b(760,460,40,60);
  b11 = new b(800,460,40,60);
  b12 = new b(440,400,40,60);
  b13 = new b(480,400,40,60);
  b14 = new b(520,400,40,60);
  b15 = new b(560,400,40,60);
  b16 = new b(600,400,40,60);
  b17 = new b(640,400,40,60);
  b18 = new b(680,400,40,60);
  b19 = new b(720,400,40,60);
  b20 = new b(760,400,40,60);
  b21 = new b(480,340,40,60);
  b22 = new b(520,340,40,60);
  b23 = new b(560,340,40,60);
  b24 = new b(600,340,40,60);
  b25 = new b(640,340,40,60);
  b26 = new b(680,340,40,60);
  b27 = new b(720,340,40,60);
  b28 = new b(520,280,40,60);
  b29 = new b(560,280,40,60);
  b30 = new b(600,280,40,60);
  b31 = new b(640,280,40,60);
  b32 = new b(680,280,40,60);
  b33 = new b(560,220,40,60);
  b34 = new b(600,220,40,60);
  b35 = new b(640,220,40,60);
  b36 = new b(600,160,40,60);
}

function draw() {
  if(backgroundImg)
      background(backgroundImg);
      Engine.update(engine);
      gd1.display();
      sl.display();
      obj.display(); 
      sd1.display();
      b1.display();
      b2.display();
      b3.display();
      b4.display();
      b5.display();
      b6.display();
      b7.display();
      b8.display();
      b9.display();
      b0.display();
      b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b32.display();
  getTime();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(obj.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
  if(keyCode===32)
  sl.attach(obj.body);
}

function mouseReleased(){
  sl.fly();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=18){
      bg = "bm.jpg";
  }
  else{
      bg = "bn.jpg";
  }

  backgroundImg = loadImage(bg);
}