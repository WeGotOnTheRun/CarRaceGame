x=0
y=0
start=13
enemyArr= new Array()

// enemy_imgs=['img/red.png','img/blue.png','img/green.png','img/yellow.png']
// bonus_imgs=['img/time.png','img/money.png','img/gas.png']

// var enemy = new enemyCar()
//
// ge=function generateEnemy(){
//   console.log("enemy:",enemy.location,enemy.size)
//   enemy.clear(enemy.location.x,enemy.location.y,enemy.size.w,enemy.size.h)
// 	enemy.move()
// 	//}
// }

let canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
let canvas2=document.getElementById('myCanvas2');
ctx2 = canvas.getContext("2d");

//var enemy = new enemyCar()



window.onload = function init(){

  canvas.width=window.innerWidth
  canvas.height=window.innerHeight
  canvas2.width=window.innerWidth
  canvas2.height=window.innerHeight

  game_over=0

  var road=new Road()
  var car=new playerCar()
  var enemy = new enemyCar()
  enemyArr.push(enemy)
  ge=function generateEnemy(){
    console.log("enemy:",enemy.location,enemy.size)
    enemy.move(enemyArr[0].location.x,enemyArr[0].location.y,enemyArr[0].size.w,enemyArr[0].size.h)
  }

  generateEnemyCars=setInterval(ge,5000)

  //var audio= new Audio();
  //audio.src="sounds/driving.mp3"
  //audio.play();
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    if(game_over===0){

      console.log("car:",car.location,car.size)
      console.log("enemy:",enemy.location,enemy.size)
//check collision.
        if((enemy.location.x<=car.location.x && enemy.location.x+enemy.size.w>=car.location.x )
        &&(enemy.location.y<=car.location.y && enemy.location.y+enemy.size.h>=car.location.y))
//715<=725 && 745>=715
//401<=464 && 461>=464
          console.log("collide")
      	else
      		console.log("continue")


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
