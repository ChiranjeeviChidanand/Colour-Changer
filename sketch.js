var ball = createSprite(200,200,10,10)
ball.shapeColour="red"


function setup() {
  createCanvas(400,400);
}

function draw() 
{

  if (keyIsDown(UP_ARROW)){
    background("yellow")
  }
  
  if (keyIsDown(DOWN_ARROW)){
    background("red")
  }
  
  if (keyIsDown(LEFT_ARROW)){
    background("green")
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    background("blue")
  }
    
  
  drawSprites()
}




