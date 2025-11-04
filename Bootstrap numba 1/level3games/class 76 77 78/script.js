let player;

function setup() {
  createCanvas(400, 400);
  player = createSprite(200, 200, 50, 50);
  player.shapeColor = color(0, 150, 255);
}

function draw() {
  background(200);

  if (keyDown("LEFT_ARROW")) player.position.x -= 4;
  if (keyDown("RIGHT_ARROW")) player.position.x += 4;
  if (keyDown("UP_ARROW")) player.position.y -= 4;
  if (keyDown("DOWN_ARROW")) player.position.y += 4;

  drawSprites();
}
