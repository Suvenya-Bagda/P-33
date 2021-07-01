const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;
var ground, division, plinko, ball;
var score=0;
var count=0;
var gameState="start";

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(0,790,970,10);
  //division= new Division(100,550,10,500);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,375));
  }
}

var particles = [];
var plinkos = [];
var divisions = [];
var ball = [];
var divisionHeight=300;



function draw() {
  background("black");
  textSize(35);
  text("Score: "+score,20,40);
  fill("white");
  textSize(35);
  text("500", 5,550);
  text("500", 80,550);
  text("100", 160,550);
  text("100", 240,550);
  text("200", 320,550);
  text("200", 400,550);

  Engine.update(engine);
   ground.display();
  
   if(gameState=="end"){
     textSize(100);
   text=gameOver(150,250)
   }

   for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
}

   if(ball!=null){
    //ball.display();
    if(ball.body.position.body.y>760){
      if(ball.body.position.x<80){
        score=score+500;
        ball=null;
        if(count>=5){
          gameState="end"
        }
      }
        else if(ball.body.position.x<240 && ball.body.position.x>81){
          score=score+100;
          ball=null;
          if(count>=5){
            gameState="end"
          }
        }
         else if(ball.body.position.x<400 && ball.body.positio.x>241){
            score=score+500;
            ball=null;
            if(count>=5){
              gameState="end"
            }
      }
}
}

  

 /*  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));

  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
 */
  
} 
function mousePressed(){
  if(gameState!=="end"){
    count++
    ball=new Ball(mouseX, 10, 10, 10)
  }
}
