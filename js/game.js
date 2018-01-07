let canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
let canvas2=document.getElementById('myCanvas2');
ctx2 = canvas.getContext("2d");
window.onload = function init()
{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  canvas2.width=window.innerWidth;
  canvas2.height=window.innerHeight;
  var car=new playerCar();
  var road=new Road();
  //var audio= new Audio();
  //audio.src="sounds/driving.mp3"
  //audio.play();
  window.addEventListener("keydown", keypress, false);
  function keypress(event)
  {
  	console.log(event.keyCode);
    //left
  	if(event.keyCode == 65)
  	{
  		car.move("left")
  	}
    //right
  	if(event.keyCode == 68)
  	{
  		car.move("right")
  	}
  }
}
