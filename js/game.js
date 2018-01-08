x=0
y=0
start=13
enemyArr= new Array()
score = 0

var canvas=document.getElementById('myCanvas');
var canvas2=document.getElementById('myCanvas2');


function gameover(){
  prompt("gameover")
}


window.onload = function init(){

  canvas.width=400
  canvas.height=600
  canvas2.width=400
  canvas2.height=700

  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight
  var ctx3=canvas3.getContext("2d")
  ctx3.drawImage(roadIm,0,0,roadIm.width,roadIm.height,0,0,canvas3.width,canvas3.height)
 var road=new Road(1,5)
  var car=new playerCar()

  ge= function generateEnemy(){
    var enemy= new enemyCar(valueCounter)
    enemyArr.push(enemy)
    valueCounter++
  }


//  enemyArr.push(enemy)


  me=function moveEnemy(){
    var i
    if(checkCollision()===false){
      for(i=0;i<=enemyArr.length-1;i++){
        enemyArr[i].move(enemyArr[i].location.x,enemyArr[i].location.y,enemyArr[i].size.w,enemyArr[i].size.h)
      }
    }else{
      gameover()
    }
  }

  generateEnemyCars=setInterval(ge,5000)
  moveEnemyCars=setInterval(me,5000)


  function checkCollision(){
    var i
    for(i=0;i<=enemyArr.length-1;i++){
      console.log("enemy:",enemyArr[i].location,enemyArr[i].size)
      console.log("car:",car.location,car.size)

      if((enemyArr[i].location.x<=car.location.x && enemyArr[i].location.x+enemyArr[i].size.w>=car.location.x )
      &&(enemyArr[i].location.y<=car.location.y && enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)){
// ||  ((car.location.x<=enemyArr[0].location.x && car.location.x+car.size.w>=enemyArr[0].location.x )
  //  &&(car.location.y<=enemyArr[0].location.y && car.location.y+car.size.h>=enemyArr[0].location.y))){

        //715<=725 && 745>=715
        //401<=464 && 461>=464
          console.log("collide")
          return true
      	}else{
          console.log("continue")
          return false
        }
    }
    }

  //var audio= new Audio();
  //audio.src="sounds/driving.mp3"
  //audio.play();
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    if(checkCollision()===false){


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
