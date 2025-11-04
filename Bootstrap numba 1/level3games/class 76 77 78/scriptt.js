//p5.play.js is a sub library of p5.js. It has all the game functions inside that.
//----------------------------create sprite for every object which has image--------------------
//To create a player, enemy, obstacle or any type of object we use create sprite function
//Its like creating a body
//It has to be always in the setup as it has to be created once.


//-------------------------------------Steps to create sprite and give image on it--------------
//1. first create variable for spritebody at top before setup
//2. inside setup create sprite using : createSprite(x, y, width, height).
//3. first store image in variable using func loadImage(). All images/sounds are stored/loaded in variable in function preload. 
//4. attach image on body use : addImage() 
//5. to adjust image size use : scale
//6. all sprites will not come unless we draw them at the end iin function draw : drawSprites
//--------------------------------------------------------
//Goal of the game: create a spaceship which will be controlled with the arrow keys
//And infinite space background which keeps on going from top to bottom
let space;
let spaceimage;
let bg; // for scrolling background we set the initial position of background
let bgimg
let bg2
let en
let enimg
let enemy
//-------------------------inside this we store all media file : images/sounds------------------
function preload() {
  spaceimage = loadImage("cartoonship blue.png") //space image is stored in variable
  bgimg=loadImage("Capture.PNG");
}

//----------------------in set up we create sprites, add image, adjust size-------------------
function setup() {
  createCanvas(1460, 720);
 
  //Create a background sprite and give the image on top of it.
  bg =createSprite(width/2,height/2); //tale x and y as half of width and height
  bg.addImage(bgimg);  
  //size
  bg.scale=1.6;

  //We create an infinite background that will keep on running. We need to create an illusion and for that we use a second background. The background moves from bottom to top.
  //Once the first background goes out of the screen from the top, then, second background is shown. And when second background goes out from the top then first background is shown and this keeps on repeating.
  let scaledH=  bgimg.height * bg.scale
  bg2=createSprite(width/2,height/2-scaledH);
  bg2.addImage(bgimg)
  bg2.scale=1.6

 //create sprite body
  space = createSprite(200, 300, 50, 50) //x,y,w,h
  //give image on top of sprite body
  space.addImage(spaceimage);
  //to adjust size
  space.scale = 0.2;
  enemy=new Group();

}

//---------------any if then else, draw sprites, player movement, bg movement is done here------------
function draw() {
  background(220);

  //Movement of spaceship
  if (keyDown("LEFT_ARROW")) {
    space.position.x -= 4
  }
  else if (keyDown("RIGHT_ARROW")) {
    space.position.x += 4
  }

  if (keyDown("UP_ARROW")) {
    space.position.y -= 4
  }
  else if (keyDown("DOWN_ARROW")) {
    space.position.y += 4
  }
  //Movement of bg and bg2
  bg.position.y-=2
  bg2.position.y-=2
//if bg is out of the screen then set bg2 to one screen and vice versa 
  //to show all sprites we use this
  //first background : bg
  //second background : bg2
  let scaleHeight=bgimg.height * bg.scale
  if(bg.position.y< -scaleHeight/2){
    
    bg.position.y=bg2.position.y+scaleHeight// set bg2 on screen
  }
  if(bg2.position.y< -scaleHeight/2){
    bg2.position.y=bg.position.y+scaleHeight
  }
  

  //--------------------create infinite enemies till teh games does not ends-------
  //1. use creatSprites() in draw and as ia loop infinite loop so any code done here will repeat.
  //so it will automatically create multiple enemysprite. 
  //2. and we will use random() to place it all at random position
  //3. so we want that there should be gap between sprites. so we can draw sprites after 10 second or when 10 frames are gone.
  //inbuilt function frameCount whcih ahs all frames(all seconds). so when frameCound is 10, 20, 30 sprite will come so on.
// 4. give velocity to move 
//5. as there are so many or infinite sprites so they have to be placed in group so that they come one by one
// use new Group() and then use .add to add en sprite in that

//create group in setup as draw will repeat

//---------------------------------------------------------------
if(frameCount % 20 ==0){ // means when 20 is divides by any number and when remiander is 0 tehn sprite id drawn.
  //after every 20 seconds
  var a=random(50, 1400)
  en=createSprite(a, -60, 60, 60);//x, y, width,height
  //scale is used to adjust size
  en.scale=0.2;
  en.velocityY=3;
  en.addImage(spaceimage);
  enemy.add(en);
}
  drawSprites();

}
//-------------------------------Assignment-------------------
//create 2 sprites one will be a rabbit which will control with arrow keys and second will be background sprite.