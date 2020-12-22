const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
   var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,200,200,20,object_options);
    World.add(world,object);

    var ground_option ={
        isStatic: true
    }
   ground= Bodies.rectangle(200,390,400,10,ground_option);
   World.add(world,ground);

   var ball_option= {
    restitution:1.0   
   }

   ball = Bodies.circle(100,100,40,ball_option);
   World.add(world,ball);
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
    

}
