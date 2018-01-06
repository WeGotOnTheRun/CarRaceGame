x=0
y=0
// enemy_imgs=['img/red.png','img/blue.png','img/green.png','img/yellow.png']
// bonus_imgs=['img/time.png','img/money.png','img/gas.png']

let canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
let canvas2=document.getElementById('myCanvas2');
ctx2 = canvas.getContext("2d");
let canvas3=document.getElementById('myCanvas3');
ctx3 = canvas.getContext("2d");
window.onload = function init(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  canvas2.width=window.innerWidth;
  canvas2.height=window.innerHeight
  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight
  var car=new playerCar()
  var road=new Road()
  //var enemy=new enemyCar()
  game_over=0
  //var audio= new Audio();
  //audio.src="sounds/driving.mp3"
  //audio.play();
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    if(game_over===0){
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
