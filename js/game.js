x=0
y=0
start=13
enemyArr= new Array()
bonusArr=new Array()
score=0
deathNo=0
levelPassed=0
checkWinningLevels=0
originalLives=3
var Achievementsoundcounter=0
//add player _status
let generateEnemyCars,moveEnemyCars,increasePlayerBonus,generateBonus,moveBonus

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
  var car=new playerCar()
  var pp=new player("yasmine",car.model,false,0)
  var road=new Road(1,pp.level.speed)
  var achievement = new achievements()


  let generateEnemyCars,moveEnemyCars,increasePlayerBonus,generateBonus,moveBonus

  function generateEnemy(){
    var enemy= new enemyCar()
    enemyArr.push(enemy)
  }

  function moveEnemy(){
    var i
      for(i=0;i<=enemyArr.length-1;i++){
        enemyArr[i].move()
      }
      checkCollision()
  }

  //get bonus type and value.

  function generateBonusfn(){
    var _bonus= new bonus((500/2-13),(270/2-180),30,60)
    bonusArr.push(_bonus)
  }

  function moveBonusfn(){
    var i
    for(i=0;i<=bonusArr.length-1;i++){
        bonusArr[i].move()
    }
    GetBonus()
  }


  function GetBonus(){
    var i,size=bonusArr.length;
    for(i=0;i<size;i++){
      removeBonus(bonusArr[i],i)
      size=bonusArr.length
      if(((bonusArr[i].location.x<=car.location.x && bonusArr[i].location.x+bonusArr[i].size.w>=car.location.x)
      ||(bonusArr[i].location.x>car.location.x && bonusArr[i].location.x<car.location.x+car.size.w ))
      &&((bonusArr[i].location.y+bonusArr[i].size.h>=car.location.y)&&(bonusArr[i].location.y+bonusArr[i].size.h<car.location.y+car.size.h)
      || (bonusArr[i].location.y>car.location.y && bonusArr[i].location.y<car.location.y+car.size.h))
      ){
          pp.score+=bonusArr[i].value
          console.log(pp.score)
          var A=new Audio()
          A.src="sounds/money.mp3" //wow sound.
          A.volume=0.9
          A.play()
          console.log("WOW! you earned ",bonusArr[i].value)// d ttgher b3d kda ll value bt3to wl rkm bt3o
          bonusArr[i].remove()
          bonusArr.splice(i,1)
          size=size-1
          break
      }
    }
  }

    //generate bonus type!
  function showResult(){

    pp.playerAchievements.winning,pp.playerAchievements.highScore=checkAchievements()
    if(pp.lives>0){
      pp.lives*=3000
    }
    if(pp.score<pp.playerAchievements.highScore){
      pp.playerAchievements.highScore=0
    }

    console.log("your name: ",pp.name,"finish at level: ", pp.level.number,"your Score: ",pp.score,"achievements ( won three levels in a row: ",
    pp.playerAchievements.winning,")(new highScore: ",pp.playerAchievements.highScore,"your car: ",pp.cModel,"you won:", pp.status )
  }

  function increaseBonus(){
    pp.score+=1
    console.log(pp.level.time)
    checkAchievements()
    if(--pp.level.time==0){
      switch (pp.level.number) {
        case 1:
            alert("level 1 passed")
            pp.level=new level(30,10,2,2)
            road.speed=12
            road.stopTimer()
            road.timer=road.speed
            clearInterval(generateEnemyCars)
            clearInterval(moveEnemyCars)
            generateEnemyCars=setInterval(generateEnemy,800)
            moveEnemyCars=setInterval(moveEnemy,3)
            levelPassed++
            break

        case 2:
              alert("level 2 passed")
              pp.level=new level(20,15,3,3)
              road.speed=8
              road.stopTimer()
              road.timer=road.speed
              clearInterval(generateEnemyCars)
              clearInterval(moveEnemyCars)
              generateEnemyCars=setInterval(generateEnemy,600)
              moveEnemyCars=setInterval(moveEnemy,1)
              levelPassed++
              break

          case 3:
              alert("level 3 passed")
              levelPassed++
              pp.status=true
              clearInterval(moveEnemyCars)
              clearInterval(generateEnemyCars)
              clearInterval(increasePlayerBonus)
              clearInterval(generateBonus)
              clearInterval(moveBonus)
              road.stopTimer()
              car.stopTimer()
              alert("winner wooooow")
              showResult()
              break
          default:
        }
      }
    }

  function checkAchievements(){
    //win3levels
    if(levelPassed===1&&originalLives===3){
      checkWinningLevels+=1
    }if(levelPassed===2&&originalLives===3){
      checkWinningLevels+=1
    }if(levelPassed===3&&originalLives===3){
      checkWinningLevels+=1
    }
    if(checkWinningLevels===3){
      achievement.win3level=true
      var A=new Audio()
      A.src="sounds/wow.wav"
      A.volume=0.9
      A.play()
      console.log("Congrats you won 3 levels in a row!")
    }

    if(pp.score>achievement.highScore){
      achievement.highScore=pp.score
      if(Achievementsoundcounter===0){
        var achievementSound=new Audio()
        achievementSound.src="sounds/wow.wav"
        achievementSound.volume=0.9
        achievementSound.play()
        Achievementsoundcounter++
      }
      console.log("New high Score",achievement.highScore)
    }
    return achievement.win3level,achievement.highScore

  }

  function appearCrash(c){
    if(c<7){
      if(c%2!=0)
        car.remove()
      else
        car.display()
      setTimeout(function(){
        appearCrash(++c)
      },100)
    }
  }

  function checkCollision(){
    var i,size=enemyArr.length;
    for(i=0;i<size;i++){
      checkBorders(enemyArr[i],i)
      size=enemyArr.length;
      if(((enemyArr[i].location.x<=car.location.x && enemyArr[i].location.x+enemyArr[i].size.w>=car.location.x)
      ||(enemyArr[i].location.x>car.location.x && enemyArr[i].location.x<car.location.x+car.size.w ))
      &&(((enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)&&(enemyArr[i].location.y+enemyArr[i].size.h<car.location.y+car.size.h) )
      || (enemyArr[i].location.y>car.location.y && enemyArr[i].location.y<car.location.y+car.size.h))
      ){
        clearInterval(moveEnemyCars)
        originalLives--
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
            pp.status=false
            road.stopTimer()
            car.stopTimer()
            clearInterval(moveEnemyCars)
            clearInterval(generateEnemyCars)
            clearInterval(increasePlayerBonus)
            clearInterval(generateBonus)
            clearInterval(moveBonus)
            alert("game over")
            showResult()
             break
          }
      	}
    }
    }

    function checkBorders(ob,index){
        if(ob.location.y>=window.innerHeight-1){
          enemyArr.splice(index, 1)
        }
    }

    function removeBonus(ob,index){
        if(ob.location.y>=window.innerHeight-1){
          bonusArr.splice(index, 1)
        }
    }

    function init() {
        // body...
      generateEnemyCars=setInterval(generateEnemy,1200)
      moveEnemyCars=setInterval(moveEnemy,5)

      generateBonus=setInterval(generateBonusfn,8530)
      moveBonus=setInterval(moveBonusfn,1)

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
