var movingRect,fixedRect,rect1,rect2,rect3


function setup() {
  var canvas=createCanvas(1200,800);
   movingRect=createSprite(100, 700, 50, 80);
   fixedRect=createSprite(400,300,80,50);
rect1=createSprite(100,200,80,50);
rect2=createSprite(200,200,80,50);
rect3=createSprite(300,200,80,50);

  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
 // fixedRect.velocityY=-2
  //movingRect.velocityY=-2

  
}

function draw() {
  background(255,255,255); 
  
  


  movingRect.y=mouseY
  movingRect.x=mouseX
   
//BounceOff(movingRect,rect1);
    if(isTouching(movingRect,rect2)){
      movingRect.shapeColor="red"
      rect2.shapeColor="red"
    }
    else{
      movingRect.shapeColor="blue"
      rect2.shapeColor="blue"
    }
  drawSprites();
}
/*function isTouching(ob1,ob2){

  
  if(ob2.y-ob1.y<ob2.height/2+ob1.height/2 &&
    ob1.y-ob2.y< ob2.height/2+ob1.height/2 &&
    ob2.x-ob1.x<ob2.width/2+ob1.width/2 &&
    ob1.x-ob2.x<ob2.width/2+ob1.width/2
   ){
     return true
   
   }
   
   else{
     return false
   }
  }

   function BounceOff(ob1,ob2)
{
if(ob2.y-ob1.y<ob2.height/2+ob1.height/2 &&
  ob1.y-ob2.y< ob2.height/2+ob1.height/2 ){

    ob2.velocityY=ob2.velocityY*(-1)
    ob1.velocityY=ob1.velocityY*(-1)
  }

if(  ob2.x-ob1.x<ob2.width/2+ob1.width/2 &&
  ob1.x-ob2.x<ob2.width/2+ob1.width/2){

ob2.velocityX=ob2.velocityX*(-1)
ob1.velocityX=ob1.velocityX*(-1)

  }



}*/







