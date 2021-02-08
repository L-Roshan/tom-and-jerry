var tom,tomI;
var jerry,jerryI;
var backGround,backGroundImg;

function preload() {
    //load the images here
    tomI = loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
    jerryI = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
    backGroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(400,200,50,50);
tom.addAnimation("tom",cat1.png);

jerry = createSprite(200,200,30,30);
jerry.addAnimation("jerry",mouse1.png);

backGround = createSprite(600,600);
backGround.addImage("garden",backGroundImg);

}

function draw() {
  createCanvas(600,600);
    background(255);
    //Write condition here to evalute if tom and jerry collide
       if(tom.x - mouse.x < (cat.width - mouse.width)/2){
              tom.addAnimation("tomLastImage",cat3.png);
              tom.changeAnimation("tomLastImage");

       }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
     tom.velocityX =-5;
     tom.addAnimation("tomRunning",cat2.png);
     tom.changeAnimation("tomRunning");

}

}
