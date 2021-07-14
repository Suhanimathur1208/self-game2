var bg,bgImg;
var tom,tomImg,log,logImg,can,canImg,mushroom,mushroomImg,plant,plantImg,coin,coinImg;

function preload(){
bgImg = loadImage("sprites/Road.png");
tomImg = loadImage("sprites/tom2.png");

}

function setup() {
  createCanvas(1200,600);

 bg = createSprite(600,400,1400,800);
 bg.addImage(bgImg);

 tom = createSprite(600,450,20,20);
 tom.addImage(tomImg);



}

function draw() {
  background(255,255,255);

  bg.velocityY = 10;

  console.log(bg.y);

  if(bg.y>600){
    bg.y = height/2

  }

  if(keyDown(LEFT_ARROW)){
    tom.x -= 7;
  
  }

  if(keyDown(RIGHT_ARROW)){
    tom.x += 7;
  
  }


  drawSprites();
}

