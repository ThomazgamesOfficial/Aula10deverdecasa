function setup() 
{
  

}
function draw() {
 background("yellow") ;
 
 
 if (keyDown("left")) {
  background("red")
  }
  
  if (keyDown("up")) {
  background("green")
  } 
    
  if (keyDown("down")) {
  background("white")
  }  
  
  if (keyDown("right")) {
  background("blue")
  } 
  
  if (keyDown("space")) {
  background(rgb(255, 0, 0, 0.5))
  } 
  
  drawSprites();
}

