x=0
y=0
start=13
enemyArr= new Array()
score = 0

  let generateEnemyCars,moveEnemyCars,increasePlayerBonus;
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
    console.log(pp.level.time)
    if(--pp.level.time==0)
    {
      switch (pp.level.number) {
        case 1:
            pp.level=new level(30,10,2,2)
            road.speed=12
            road.stopTimer()
            road.timer=road.speed
            clearInterval(generateEnemyCars)
            clearInterval(moveEnemyCars)
            generateEnemyCars=setInterval(generateEnemy,800)
            moveEnemyCars=setInterval(moveEnemy,3)
           
          break;
        case 2:
              pp.level=new level(20,15,3,3)
              road.speed=8
              road.stopTimer()
              road.timer=road.speed
              clearInterval(generateEnemyCars)
              clearInterval(moveEnemyCars)
              generateEnemyCars=setInterval(generateEnemy,600)
              moveEnemyCars=setInterval(moveEnemy,1)
          break;
          case 3:
              clearInterval(moveEnemyCars);
              clearInterval(generateEnemyCars);
              clearInterval(increasePlayerBonus);
              road.stopTimer()
              car.stopTimer()
              alert("winner wooooow")
            break;
        default:

      }
    }
  }
  function appearCrash(c)
  {
    if(c<7){
      if(c%2!=0)
      car.remove()
      else
      car.display()
     setTimeout(function(){appearCrash(++c)
          }
          ,100)
  }
  }
  function checkCollision(){
    var i,size=enemyArr.length;
    for(i=0;i<size;i++){
      checkBorders(enemyArr[i],i);
      size=enemyArr.length;
      if(((enemyArr[i].location.x<=car.location.x && enemyArr[i].location.x+enemyArr[i].size.w>=car.location.x)
      ||(enemyArr[i].location.x>car.location.x && enemyArr[i].location.x<car.location.x+car.size.w ))
      &&((enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)&&(enemyArr[i].location.y+enemyArr[i].size.h<car.location.y+car.size.h) )
      ){
        clearInterval(moveEnemyCars);
        var A=new Audio()
        A.src="sounds/crash.wav"
        A.volume=0.6
        A.play()    
        appearCrash(0)
        enemyArr[i].remove()
        enemyArr.splice(i,1)
        size=size-1
        moveEnemyCars=setInterval(moveEnemy,1)
        if((--pp.lives)==0)
          {
            console.log("o2f ya 7ywan")
            road.stopTimer()
            car.stopTimer()
            clearInterval(moveEnemyCars);
            clearInterval(generateEnemyCars);
            clearInterval(increasePlayerBonus);
           
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
    function init() {
      // body...

  generateEnemyCars=setInterval(generateEnemy,1000)
  moveEnemyCars=setInterval(moveEnemy,5)
  increasePlayerBonus=setInterval(increaseBonus,1000)
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
    init()
}
