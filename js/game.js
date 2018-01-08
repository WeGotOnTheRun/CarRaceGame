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
  canvas.height=720
  canvas2.width=400
  canvas2.height=720

  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight
  var ctx3=canvas3.getContext("2d")
  //ctx3.drawImage(roadIm,0,0,roadIm.width,roadIm.height,0,0,canvas3.width,canvas3.height)
 var road=new Road(1,5)
  var car=new playerCar()
  var plaay="true";
  let generateEnemyCars,moveEnemyCars;

  ge= function generateEnemy(){
    if(plaay==="true"){
    var enemy= new enemyCar()
    enemyArr.push(enemy)
    console.log("enemy generated");
    plaay=checkCollision();
  }
    else {
      clearInterval(generateEnemyCars);
    }
  }

  me=function moveEnemy(){
    var i
    if(plaay==="true"){
      for(i=0;i<=enemyArr.length-1;i++){
        enemyArr[i].move()
      }
      gameOn=checkCollision();
    }else{
      clearInterval(moveEnemyCars);
    }
  }

  generateEnemyCars=setInterval(ge,4000)
  //ge()
    moveEnemyCars=setInterval(me,5000)
  function checkCollision(){
    var i;
    for(i=0;i<=enemyArr.length-1;i++){
      console.log(enemyArr[i].location);
      console.log(car.location);
      if(((enemyArr[i].location.x<=car.location.x && enemyArr[i].location.x+enemyArr[i].size.w>=car.location.x)
      ||(enemyArr[i].location.x>car.location.x && enemyArr[i].location.x<car.location.x+car.size.w ))
      &&(enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)
      ){

          console.log("collide")
          return "false"
      	}else{
          console.log("continue")
          return "true"
        }
    }
    }
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    //left
    	if(event.keyCode == 37)
    	{
        if(x>=-3){
    		car.move("left")
        x--}
    	}
      //right
    	{
        if(event.keyCode == 39)
        if(x<3){
    		car.move("right")
        x++}
    	}
      //up
      if(event.keyCode == 38)
    	{
        if(y<12){
          car.move("up")
          y++
        }

    	}
      //down
      if(event.keyCode == 40)
    	{
        if(y>0){
          car.move("down")
          y--
        }
    	}

    }
}
