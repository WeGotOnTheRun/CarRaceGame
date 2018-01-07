x=0
y=0
start=13

var canvas=document.getElementById('myCanvas');
var canvas2=document.getElementById('myCanvas2');

var canvas3=document.getElementById('canvas3');
window.onload = function init(){

  canvas.width=500
  canvas.height=700
  canvas2.width=500
  canvas2.height=700

  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight
  var ctx3=canvas3.getContext("2d")
  ctx3.drawImage(roadIm,0,0,roadIm.width,roadIm.height,0,0,canvas3.width,canvas3.height)
 var road=new Road(1,5)
  var car=new playerCar()
  game_over=0
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    if(game_over===0){
      if(event.keyCode===13){
        enemy.draw()
      }
    	console.log(event.keyCode);
      //left
    	if(event.keyCode == 37)
    	{
    		car.move("left")
        x--
        console.log(x)
        if(x<-10){
          car.move("right")
          x++
        }
    	}
      //right
    	if(event.keyCode == 39)
    	{
    		car.move("right")
        x++
        console.log(x)
        if(x>10){
          car.move("left")
          x--
        }
    	}
      //up
      if(event.keyCode == 38)
    	{
    		car.move("up")
        y++
        console.log(y)
        if(y>23){
          car.move("down")
          y--
        }
    	}
      //down
      if(event.keyCode == 40)
    	{
    		car.move("down")
        y--
        console.log(y)
        if(y<0){
          car.move("up")
          y++
        }
    	}
  }else{
    if(event.keyCode===37||event.keyCode===38||event.keyCode===39||event.keyCode===40){
      car.move("false")

      x=0
      y=0
    }
  }
}
}
//get bonus()
//collision()
