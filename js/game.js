x=0
y=0
start=13
enemyArr= new Array()


let canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
let canvas2=document.getElementById('myCanvas2');
ctx2 = canvas.getContext("2d");

function gameover(){
  prompt("gameover")
}


window.onload = function init(){

  canvas.width=window.innerWidth
  canvas.height=window.innerHeight
  canvas2.width=window.innerWidth
  canvas2.height=window.innerHeight


  var road=new Road()
  var car=new playerCar()
  var enemy = new enemyCar()
  enemyArr.push(enemy)
  ge=function generateEnemy(){
    if(checkCollision()===false){
      enemy.move(enemyArr[0].location.x,enemyArr[0].location.y,enemyArr[0].size.w,enemyArr[0].size.h)
    }else{
      gameover()
    }
  }

  generateEnemyCars=setInterval(ge,10000)

  function checkCollision(){
    console.log("enemy:",enemy.location,enemy.size)
    console.log("car:",car.location,car.size)

    if((enemyArr[0].location.x<=car.location.x && enemyArr[0].location.x+enemyArr[0].size.w>=car.location.x )
    &&(enemyArr[0].location.y<=car.location.y && enemyArr[0].location.y+enemyArr[0].size.h>=car.location.y)){
      //715<=725 && 745>=715
      //401<=464 && 461>=464
        console.log("collide")
        return true
    	}else{
        console.log("continue")
        return false
      }
    }

  //var audio= new Audio();
  //audio.src="sounds/driving.mp3"
  //audio.play();
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    if(checkCollision()===false){

      console.log("car:",car.location,car.size)
      console.log("enemy:",enemy.location,enemy.size)
//check collision.
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
    gameover()

  }
}
}
//get bonus()
//collision()
