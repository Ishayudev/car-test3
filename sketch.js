
let car;
let wei;
let spe;
let wall;
function setup() {
  createCanvas(800,400);
  car=createSprite(400,200,30,40);
  wall=createSprite(770,200,40,400);
  spe=Math.round(random(5,10));
  wei=Math.round(random(900,1500));
}

function draw() {
  background("white");  
  car.x=car.x+spe;
  car.shapeColor="lightgreen";


  if(car.x>=(wall.width/2+car.width/2)&&car.x<=(wall.width/2+carwidth/2&&car.y>=car(car.height/2+wall.height/2))&&car.y<=(car.height/2+wall.height/2)){
  car.shapeColor="red";
  }
  
  drawSprites();
}