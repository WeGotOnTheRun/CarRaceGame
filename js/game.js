x=0
y=0
start=13
enemyArr= new Array()
score = 0
window.onload = function init(){

  var canvas=document.getElementById('myCanvas');
  var canvas2=document.getElementById('myCanvas2');
  canvas.width=400
  canvas.height=window.innerHeight
  canvas2.width=400
  canvas2.height=window.innerHeight

  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight
  var ctx3=canvas3.getContext("2d")
  //ctx3.drawImage(roadIm,0,0,roadIm.width,roadIm.height,0,0,canvas3.width,canvas3.height)
  var pp=new player("yasmine")
  var road=new Road(1,pp.level.speed)
  var car=new playerCar()
  let generateEnemyCars,moveEnemyCars,increasePlayerBonus;

  function generateEnemy(){
    var enemy= new enemyCar()
    enemyArr.push(enemy)
  }

  function moveEnemy(){
    var i
      for(i=0;i<=enemyArr.length-1;i++){
        enemyArr[i].move()

      }
      checkCollision();
  }
  function increaseBonus()
  {
    pp.score+=1;
    if(--pp.level.time==0)
    {
      switch (pp.level.number) {
        case 1:
            pp.level=new level(30,10,2,2)
            road.speed=10
            road.stopTimer()
            road.timer=road.speed
            clearInterval(generateEnemy)
            clearInterval(moveEnemy)
            generateEnemyCars=setInterval(generateEnemy,500)
            moveEnemyCars=setInterval(moveEnemy,200)
           
          break;
        case 2:
              pp.level=new level(20,15,3,3)
              road.speed=1
              road.stopTimer()
              road.timer=road.speed
              clearInterval(generateEnemy)
              clearInterval(moveEnemy)
              generateEnemyCars=setInterval(generateEnemy,200)
              moveEnemyCars=setInterval(moveEnemy,100)
          break;
          case 3:
              clearInterval(moveEnemyCars);
              clearInterval(generateEnemyCars);
              clearInterval(increasePlayerBonus);
              road.stopTimer()
              alert("winner wooooow")
            break;
        default:

      }
    }
  }
  generateEnemyCars=setInterval(generateEnemy,1000)
  moveEnemyCars=setInterval(moveEnemy,1)
  increasePlayerBonus=setInterval(increaseBonus,1000)
  function checkCollision(){
    var i,size=enemyArr.length;
    for(i=0;i<size;i++){
      checkBorders(enemyArr[i],i);
      size=enemyArr.length;
      if(((enemyArr[i].location.x<=car.location.x && enemyArr[i].location.x+enemyArr[i].size.w>=car.location.x)
      ||(enemyArr[i].location.x>car.location.x && enemyArr[i].location.x<car.location.x+car.size.w ))
      &&((enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)&&(enemyArr[i].location.y+enemyArr[i].size.h<car.location.y+car.size.h) )
      ){
         console.log(enemyArr[i])
	       console.log("collide");
        if((--pp.lives)==0)
          {

            clearInterval(moveEnemyCars);
            clearInterval(generateEnemyCars);
            clearInterval(increasePlayerBonus);
            road.stopTimer()
            alert("game over");
             break;
          }
      	}
    }
    }
    function checkBorders(ob,index)
    {
        if(ob.location.y>=window.innerHeight-1)
        {
          enemyArr.splice(index, 1);
        }
    }
  window.addEventListener("keydown", keypress, false);
  function keypress(event){
    //left
    	if(event.keyCode == 37)
    	{
        if(x>-2){
    		car.move("left")
        x--}
    	}
      //right
    	{
        if(event.keyCode == 39)
        if(x<2){
    		car.move("right")
        x++}
    	}
      //up
      if(event.keyCode == 38)
    	{
        if(y<10){
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
