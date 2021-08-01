var gameState = "Home";

function preload() {
  spaceImage = loadImage("spacebg.png")
  giff = loadImage("andrew.png")
  tobey = loadImage("tobey.png")
  asteroids= loadImage("tom.png")

}
function setup() {
  createCanvas(1362,652);

}

function draw() {
  background(255, 255, 255);

  if (gameState === "Home") {
    background(giff)
    textSize(30);
    fill("red")
    text("Welcome to Space.ɘxɘ", 550, 200)
    fill("blue")
    textSize(20);
    text("Press 'enter' key to continue",580,450)

    if (keyDown("enter")) {
      //console.log("message")
      gameState = "prologue"
    }

  }

  if (gameState === "prologue") {
    //console.log("hi")
    background(tobey)
    fill("green")
    textSize(25)
    text("Basic Multilevel Spaceshooter game", 300, 100)
    text("Press 'w' to continue",400,200)

    if (keyDown("w")) {
      gameState = "begin"
    }

  }
  if (gameState === "begin") {
    background(spaceImage)
    spawnIncoming();
  }
  drawSprites();
}


function spawnIncoming() {
  if (frameCount % 60 === 0) {
    incoming = createSprite(100,100,50,50)
    incoming.velocityY=5;
    incoming.x=Math.round(random(00,1300))
    incoming.addImage(asteroids)
    incoming.scale = 0.12;
  }

}