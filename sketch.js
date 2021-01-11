var player;
var playerImg;
var enemy
var enemyImg;
var ground;
var checkpoint;
var platformGroup;
var flagImg;
var checkpointcounter;

function preload(){
  playerImg = loadAnimation("Placeholder_Player0.png");
  enemyImg = loadAnimation("Placeholder_Enemy0.png");
  flagImg = loadAnimation("Placeholder_Flag0.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,600,windowWidth,10);
  player = createSprite(1000,500,10,10);
  player.addAnimation("default",playerImg);
  player.scale=0.5;

  enemy = createSprite(600,500,10,10);
  enemy.addAnimation("normal",enemyImg);
  enemy.scale = 0.5;

  checkpoint = createSprite(100,500,10,10);
  checkpoint.addAnimation("Flag",flagImg);
  checkpoint.scale = 0.5;

  checkpointcounter = createSprite(1000,500,10,10);
  checkpointcounter.visible = false;
}

function draw() {
  background("Black");

  player.collide(ground);
  enemy.collide(ground);


  if(keyWentDown("W")){
    player.velocityY = -10;
  }
  if(keyWentDown("A")){
    player.velocityX = -10;
  }
  if(keyWentUp("A")){
    player.velocityX = 0;
  }
  if(keyWentDown("D")){
    player.velocityX =10;
  }
  if(keyWentUp("D")){
    player.velocityX = 0;
  }
  player.velocityY = player.velocityY+0.5;

  enemy.velocityY = player.velocityY;

  if(player.x > enemy.x - 100){
    enemy.velocityX = 5;
  }
  else if(player.x < enemy.x + 100){
    enemy.velocityX = -5;
  }
  else{
    enemy.velocityX = 0;
  }




  if(player.isTouching(checkpoint)){
    checkpointcounter.x = checkpoint.x;
    checkpointcounter.y = checkpoint.y;
  }

  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
  }
  drawSprites();
}

