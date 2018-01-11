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

let generateEnemyCars,moveEnemyCars,increasePlayerBonus,generateBonus,moveBonus,GameTimer,Timer


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

  var l=localStorage.getItem("level")
  console.log(l)
      switch(l)
        {
          case "1":
                var l=new level(60,5,1,1,1000,5,1000,13)
                console.log(l)
                pp.level=l
                break;
          case "2":
               var l=new level(45,10,2,1,500,2,500,10)
               pp.level=l
               break;
          case "3":
              var l=new level(30,20,3,1,300,0.5,100,5)
              pp.level=l
          break;
          break;
        }
  var road=new Road(1,pp.level.speed)

  var car=new playerCar()
  var achievement = new achievements()

  var btn=document.getElementById("level").onclick = function () {
        location.href = "forth.html";
    };
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
      checkCollision();
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
        removeBonus(bonusArr[i],i);
        size=bonusArr.length;
        if(((bonusArr[i].location.x<=car.location.x && bonusArr[i].location.x+bonusArr[i].size.w>=car.location.x)
        ||(bonusArr[i].location.x>car.location.x && bonusArr[i].location.x<car.location.x+car.size.w ))
        &&((bonusArr[i].location.y+bonusArr[i].size.h>=car.location.y)&&(bonusArr[i].location.y+bonusArr[i].size.h<car.location.y+car.size.h)
        || (bonusArr[i].location.y>car.location.y && bonusArr[i].location.y<car.location.y+car.size.h))){
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
var u=2;
  function timerUp() {
    // body...

    if(pp.level.time<=pp.level.slowTime && pp.level.time>=0)
    {
            road.speed=pp.level.time/2
            //road.timer=pp.level.time;
            clearInterval(generateEnemyCars)
            clearInterval(moveEnemyCars)

            generateEnemyCars=setInterval(generateEnemy,5*pp.level.generateEnemySpeed)
             moveEnemyCars=setInterval(moveEnemy,road.speed+u)
             u+=2;

    }
    if(pp.level.time==pp.level.slowTime)
    {
       road.drawFinish2()
    }

    if(--pp.level.time==0 &&pp.level.number<3)
    {

      aud.src="sounds/clapping.wav"
      aud.play();
      road.stopTimer()
      clearInterval(generateEnemyCars)
      clearInterval(moveEnemyCars)
      clearInterval(increasePlayerBonus)
      clearInterval(GameTimer )
      document.getElementById("div").style.opacity="1"
    }
    else if (--pp.level.time==0 && pp.level.number==3){
      aud.src="sounds/winner.wav"
      aud.play();
      road.stopTimer()
      clearInterval(generateEnemyCars)
      clearInterval(moveEnemyCars)
      clearInterval(increasePlayerBonus)
      clearInterval(GameTimer )

    }
  }
  function increaseBonus()
  {

    canvas3.getContext("2d").clearRect(0.74 *window.innerWidth, 0.01*window.innerHeight,100,70);
    pp.score+=1;
    canvas3.getContext("2d").font = "35px lighter verdana ";
    canvas3.getContext("2d").fillStyle = "#fff";
    canvas3.getContext("2d").fillText(pp.score,0.74 *window.innerWidth, 0.101*window.innerHeight);
    checkAchievements()

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
      var A=new Audio()
      A.src="sounds/wow.wav"
      A.volume=0.9
      A.play()
      console.log("New high Score",achievement.highScore)
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
      &&(((enemyArr[i].location.y+enemyArr[i].size.h>=car.location.y)&&(enemyArr[i].location.y+enemyArr[i].size.h<car.location.y+car.size.h) )
      || (enemyArr[i].location.y>car.location.y && enemyArr[i].location.y<car.location.y+car.size.h))
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
        switch(--pp.lives)
        {
          case 2:
            canvas3.getContext("2d").clearRect(0.28 *window.innerWidth, 0.055*window.innerHeight,0.02 *window.innerWidth, 0.061*window.innerHeight);
            drawHeart(canvas3.getContext("2d"),0.29 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"white")
          break;
          case 1:
           canvas3.getContext("2d").clearRect(0.25 *window.innerWidth, 0.055*window.innerHeight,0.02 *window.innerWidth, 0.061*window.innerHeight);
           drawHeart(canvas3.getContext("2d"),0.26 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"white")
          break;
          case 0:
           canvas3.getContext("2d").clearRect(0.22 *window.innerWidth, 0.055*window.innerHeight,0.02 *window.innerWidth, 0.061*window.innerHeight);
           drawHeart(canvas3.getContext("2d"),0.23 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"white")
            road.stopTimer()
            car.stopTimer()
            clearInterval(moveEnemyCars);
            clearInterval(generateEnemyCars);
            clearInterval(increasePlayerBonus);
            clearInterval(GameTimer);
            clearInterval(Timer);
             var A=new Audio()
             A.src="sounds/loser.wav"
             A.volume=0.6
             A.play()
            // alert("game over");
             break;
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


    function drawHeart(context, x, y, width, height,color){
        context.save();
        context.beginPath();
        var topCurveHeight = height * 0.3;
        context.moveTo(x, y + topCurveHeight);
                // top left curve
        context.bezierCurveTo(
          x, y,
          x - width / 2, y,
          x - width / 2, y + topCurveHeight
        );

                // bottom left curve
        context.bezierCurveTo(
          x - width / 2, y + (height + topCurveHeight) / 2,
          x, y + (height + topCurveHeight) / 2,
          x, y + height
        );

                // bottom right curve
        context.bezierCurveTo(
          x, y + (height + topCurveHeight) / 2,
          x + width / 2, y + (height + topCurveHeight) / 2,
          x + width / 2, y + topCurveHeight
        );

                // top right curve
        context.bezierCurveTo(
          x + width / 2, y,
          x, y,
          x, y + topCurveHeight
        );

        context.closePath();
        context.fillStyle = color;
        context.fill();
        context.restore();
      }
      var rSec = 0;
      var aEnd,aWidth;
      var sec=0;
      function drawTimer(context,x,y,time){
        context.clearRect(x,y,174,174);
      	context.beginPath();
      	context.arc (
      		x,
      		y,
      		30,
      		0,
      		(2 * Math.PI) );
      	context.fillStyle = 'blue';
      	context.lineWidth = 1;
      	context.stroke();
      	context.fill();


      	context.beginPath();
      	context.arc (
      		x,
      		y,
      		20,
      		0,
      		(2 * Math.PI)
      	);
      	context.fillStyle = '#a23';
      	context.stroke();
      	context.fill();

        aWidth = 1.5-( 2 / (time*20) ) * rSec;
      	aEnd=aWidth* Math.PI;

      	context.beginPath();
      	context.arc (
      		x,
      		y,
      		25,
      		1.5*Math.PI,
      		aEnd,
      		true
      	);
      	context.lineWidth = 10;
      	context.strokeStyle = '#ddd';
      	context.stroke();

      	if((rSec%20)==0)
      	{
      		sec=rSec/20

      	}

      	context.font = '30px Calibri';
      	context.fillStyle = 'white';
      	context.fillText(sec,x-0.007*window.innerWidth,y+0.011*window.innerHeight);
      	rSec++;
      }

    function init() {
      // body...
    canvas3.getContext("2d").drawImage(playerI,0,0,playerI.width,playerI.height,0.02 *window.innerWidth,0.02*window.innerHeight,0.07*window.innerWidth,0.1*window.innerHeight)

    canvas3.getContext("2d").font = "20px lighter verdana ";
    canvas3.getContext("2d").fillStyle = "#fff";
    canvas3.getContext("2d").fillText(pp.name,0.03 *window.innerWidth, 0.14*window.innerHeight);

    canvas3.getContext("2d").font = '30px Calibri';
    canvas3.getContext("2d").lineWidth = 1.5;
    canvas3.getContext("2d").strokeStyle = 'blue';
    canvas3.getContext("2d").strokeText("level :",0.1 *window.innerWidth, 0.1*window.innerHeight);

    canvas3.getContext("2d").font = "35px lighter verdana ";
    canvas3.getContext("2d").fillStyle = "#fff";
    canvas3.getContext("2d").fillText(pp.level.number,0.16 *window.innerWidth, 0.101*window.innerHeight);

     drawHeart(canvas3.getContext("2d"),0.23 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"blue")
     drawHeart(canvas3.getContext("2d"),0.26 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"blue")
     drawHeart(canvas3.getContext("2d"),0.29 *window.innerWidth, 0.055*window.innerHeight,0.02*window.innerWidth,0.061*window.innerHeight,"blue")


     canvas3.getContext("2d").font = '30px Calibri';
     canvas3.getContext("2d").lineWidth = 1.5;
     canvas3.getContext("2d").strokeStyle = 'blue';
     canvas3.getContext("2d").strokeText("Score :",0.67 *window.innerWidth, 0.1*window.innerHeight);

    canvas3.getContext("2d").font = "35px lighter verdana ";
    canvas3.getContext("2d").fillStyle = "#fff";
    canvas3.getContext("2d").fillText(pp.score,0.74 *window.innerWidth, 0.101*window.innerHeight);


    Timer=setInterval(function(){drawTimer(canvas3.getContext("2d"),0.9 *window.innerWidth, 0.101*window.innerHeight,pp.level.time)},50)


      generateEnemyCars=setInterval(generateEnemy,pp.level.generateEnemySpeed)
      moveEnemyCars=setInterval(moveEnemy,pp.level.moveEnemySpeed)
      GameTimer=setInterval(timerUp,1000)
      generateBonus=setInterval(generateBonusfn,7000)

      increasePlayerBonus=setInterval(increaseBonus,pp.level.generateScore)
     }
    function removeBonus(ob,index){
        if(ob.location.y>=window.innerHeight-1){
          bonusArr.splice(index, 1);
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

        if(event.keyCode == 39)
      {
       if(x<2){
        car.move("right")
        x++}
      }

    }
    init()
}
