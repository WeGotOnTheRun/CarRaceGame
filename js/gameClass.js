class Game{
  constructor(player,road,achievement,levelTimer,playerIcon,playerlevel,playerLives,playerScore) {
    this._val=2
    this._levelTimer=levelTimer
    this._playerIcon=playerIcon
    this._playerlevel=playerlevel
    this._playerLives=playerLives
    this._playerScore=playerScore
    this._gameTimer=''
    this._enemyArr=[]
    this._player=player
    this._achievement=achievement
    this._road=road

    this._bonusArr=[]
    this._bonusFlag=0;
    this._bonusTime=this._player.level.generateBonusTime
    this._medalsCounterArr=[0,0,0]

    this._generateEnemiesTimer=''
    this._moveEnemiesTimer=''

    this.fireEnemies()
    this.moveEnemies()
    this.fireGameTimer()
  }

  set enemyArr(enemyArr){
    this._enemyArr=enemyArr
  }

  get enemyArr(){
    return this._enemyArr
  }

  generateEnemy(){
    let enemy= new enemyCar()
    this._enemyArr.push(enemy)

    if(--this._player.level.generateBonusTime==0){
        this.generateBonus()
        this._player.level.generateBonusTime=this._bonusTime
    }
  }

  generateBonus(){
    let bonus= new BonusOrBomb((500/2-13),(270/2-180),30,60)
    this._bonusArr.push(bonus)
  }

  moveEnemy(){
    for(let i=0;i<=this._enemyArr.length-1;i++)
    {
        this._enemyArr[i].move()
    }
    for(let i=0;i<=this._bonusArr.length-1;i++)
    {
        this._bonusArr[i].move()
    }
    this.checkCollision();
  }
  fireEnemies(){
    let _this=this
    this._generateEnemiesTimer=setInterval(function (){_this.generateEnemy()},this._player.level.generateEnemySpeed)
  }

  stopFiringEnemies()
  {
    clearInterval(this._generateEnemiesTimer)
  }
  fireGameTimer()
  {
    let _this=this
    this._gameTimer=setInterval(function (){_this.timerUp()},1000)
  }

  stopTimer(){
    clearInterval(this._gameTimer)
  }

  moveEnemies(){
    let _this=this
    this._moveEnemiesTimer=setInterval(function (){_this.moveEnemy()},this._player.level.moveEnemySpeed)
  }

  stopMovingEnemies(){
    clearInterval(this._moveEnemiesTimer)
  }

  checkCollision(){
   let size=this._bonusArr.length;
   for(let i=0;i<size;i++){
     this.checkBorders(this._bonusArr[i],i,1)
     size=this._bonusArr.length
     if(size==0){
        break
     }
     if(((this._bonusArr[i].location.x<=this._player.car.location.x && this._bonusArr[i].location.x+this._bonusArr[i].size.w>=this._player.car.location.x)
     ||(this._bonusArr[i].location.x>this._player.car.location.x && this._bonusArr[i].location.x<this._player.car.location.x+this._player.car.size.w ))
     &&(((this._bonusArr[i].location.y+this._bonusArr[i].size.h>=this._player.car.location.y)&&(this._bonusArr[i].location.y+this._bonusArr[i].size.h<this._player.car.location.y+this._player.car.size.h) )
     || (this._bonusArr[i].location.y>this._player.car.location.y && this._bonusArr[i].location.y<this._player.car.location.y+this._player.car.size.h))
     ){
         console.log("bonus");
         this._bonusFlag=1
         this.stopMovingEnemies()
         if(this._bonusArr[i].type===1){
           this._player.score+=this._bonusArr[i].value
           console.log(this._player.score)
           var A=new Audio()
           A.src="sounds/money.mp3" //wow sound.
           A.volume=0.9
           A.play()
           console.log("WOW! you earned ",this._bonusArr[i].value)
           if(this._bonusArr[i].value==1000){
             this._medalsCounterArr[0]+=1
           }else if(this._bonusArr[i].value==500){
             this._medalsCounterArr[1]+=1
           }else{
             this._medalsCounterArr[2]+=1
           }
         }else if(this._bonusArr[i].type===2){
   //        pp.level.time+=bonusArr[i].value //finish line lazm tkon thabta.
           console.log(this._player.level.time)
           this._player.level.time+=this._bonusArr[i].value
           console.log("after gaining 5",this._player.level.time)
           var A=new Audio()
           A.src="sounds/wow.wav" //wow sound.
           A.volume=0.9
           A.play()
           console.log("WOW! you now have time extra",this._bonusArr[i].value ,"secs")
         }else if(this._bonusArr[i].type===3){ //type=3
           switch (this._player.lives) {
             case 1:
                    this._playerLives.drawHeart(0.26*window.innerWidth,"blue")
                    sessionStorage.setItem("lives",2)
               break
             case 2:
                    this._playerLives.drawHeart(0.29*window.innerWidth,"blue")
                    sessionStorage.setItem("lives",3)
              break
             default:

           }
           this._player.lives+=this._bonusArr[i].value
           var A=new Audio()
           A.src="sounds/wow.wav" //wow sound.
           A.volume=0.9
           A.play()
           console.log("Hooray! you now have",this._bonusArr[i].value,"lives")
         }
         this._bonusArr[i].remove()
         this._bonusArr.splice(i,1)
         size=size-1
         this.moveEnemies()

         break
     }
   }
   size=this._enemyArr.length;

   for(let i=0;i<size;i++)
   {
     this.checkBorders(this._enemyArr[i],i,0);
     size=this._enemyArr.length;
     if(((this._enemyArr[i].location.x<=this._player.car.location.x && this._enemyArr[i].location.x+this._enemyArr[i].size.w>=this._player.car.location.x)
     ||(this._enemyArr[i].location.x>this._player.car.location.x && this._enemyArr[i].location.x<this._player.car.location.x+this._player.car.size.w ))
     &&(((this._enemyArr[i].location.y+this._enemyArr[i].size.h>=this._player.car.location.y)&&(this._enemyArr[i].location.y+this._enemyArr[i].size.h<this._player.car.location.y+this._player.car.size.h) )
     || (this._enemyArr[i].location.y>this._player.car.location.y && this._enemyArr[i].location.y<this._player.car.location.y+this._player.car.size.h))
     ){
       console.log("collide")
       this.stopMovingEnemies()
       originalLives--
       if(this._bonusFlag==1){
         this._enemyArr[i].remove()
         this._enemyArr.splice(i,1)
         size=size-1
         this.moveEnemies()
         this._bonusFlag=0
         continue
       }
       aud.src="sounds/crash.wav"
       aud.volume=0.6
       aud.play()
       this._player.car.appearCrash(0)
       this._enemyArr[i].remove()
       this._enemyArr.splice(i,1)
       size=size-1
       this.moveEnemies()
       switch(--this._player.lives)
       {
         case 2:
              this._playerLives.drawHeart(0.29*window.innerWidth,"white")
              sessionStorage.setItem("lives",2)
          break;
         case 1:
                this._playerLives.drawHeart(0.26*window.innerWidth,"white")
                sessionStorage.setItem("lives",1)
           break;
         case 0:
                this._playerLives.drawHeart(0.23*window.innerWidth,"white")
                sessionStorage.setItem("lives",3)
                status=false
                this.gameFinish(status)
                this._player.car.stopTimer()
                this._playerScore.stop()
                // document.getElementById("img").src="img/sad.ico"
                // document.getElementById("header").src="Game over"
                // document.getElementById("level").innerText="play again->";
                // document.getElementById("level").onclick=function(){
                //  location.href="frist.html"
                //}
          //  document.getElementById("div").style.opacity="1"
                //this.result()

                break;
         break;
       }
       }
   }

  this._bonusFlag=0
   }

  checkBorders(ob,index,type){
     if(ob.location.y>=window.innerHeight-1){
       switch (type) {
         case 0:
           this._enemyArr.splice(index, 1)
           break

         default:
        case 1:
          this._bonusArr.splice(index, 1)
         break
       }
     }
   }
   //generate bonus type!

timerUp() {
  this.checkAchievements()
   this._player.level.time--
   if(this._player.level.number===1&&staticCounter===0){
     this._player.time=this._player.level.time
   }
   staticCounter++
   --this._player.time
   if(this._player.time<=0&&this._player.level.time<=1){
     levelPassed--
     if(this._player.lives===0){
       status=false
       gameFinish(status)
     }
   }
   if(this._player.level.time<=this._player.level.slowTime && this._player.level.time>=0){
     this._road.speed=this._player.level.time/2
     this.stopFiringEnemies()
     this.stopMovingEnemies()
     let _this=this
     this._moveEnemiesTimer=setInterval(function (){_this.moveEnemy()},this._road.speed+this._val)
     this._generateEnemiesTimer=setInterval(function (){_this.generateEnemy()},5*this._player.level.generateEnemySpeed)
     this._val+=2
   }
   if(this._player.level.time==(this._player.level.slowTime-6)){
      this._road.drawFinish2()
   }
   if(this._player.level.time==0 &&this._player.level.number<3){

     status=true
     this.gameFinish(status)
     //localStorage.setItem(levelPassed,levelsTimeArr[0],staticCounter)
     if(this._player.level.number==1){
    //    localStorage.getItem(levelPassed)
       levelPassed++
       levelsTimeArr[0]=this._player.time
       this._player.time=this._player.level.time
       if(parseInt(localStorage.getItem("highLevel"))<2)
       localStorage.setItem("highLevel",2)
       document.getElementById("level").innerText="level 2->";
     }
     else {
         levelPassed++
         levelsTimeArr[1]=this._player.time
         this._player.time=this._player.level.time
         localStorage.setItem("highLevel",3)
         document.getElementById("level").innerText="level 3->";
     }
  //   document.getElementById("div").style.opacity="1"

   }
   else if (this._player.level.time==0 && this._player.level.number==3){
     levelPassed++
     levelsTimeArr[2]=this._player.time
     this._player.time=this._player.level.time
     status=true
     this.gameFinish(status)
     // document.getElementById("img").src="img/winner.png";
     // document.getElementById("header").innerHTML="WoOooOooW";
     // document.getElementById("text").innerHTML="you win";
     // document.getElementById("level").innerText="play again";
     // document.getElementById("level").onclick=function(){  location.href="frist.html";}
     // document.getElementById("div").style.opacity="1"

   }

 }

 checkAchievements(){
   if(levelPassed===3&&originalLives===3){
     this._achievement.win3level=true
     aud.src="sounds/wow.wav"
     aud.volume=0.9
     aud.play()
     console.log("Congrats you won 3 levels without dying!")
   }

   if(this._player.score>this._achievement.highScore){
     this._achievement.highScore=this._player.score
     this._player.playerAchievements.highScore=this._player.score
     if(Achievementsoundcounter===0){
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       Achievementsoundcounter++
     }
     console.log("New high Score",this._player.score)
   }

   if(this._medalsCounterArr[0]>=10){
     if(goldSoundCounter==0){
       this._achievement.collect10gold=true
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you collect 10 gold medals.")
     }
     goldSoundCounter++
   }
   if(this._medalsCounterArr[1]>=5){
     if(silverSoundCounter==0){
       this._achievement.collect5silver=true
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you collect 5 silver medals.")
     }
     silverSoundCounter++
   }
   if(this._medalsCounterArr[2]>=3){
     if(bronzeSoundCounter==0){
       this._achievement.collect3bronze=true
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you collect 3 bronze medals.")
     }
     bronzeSoundCounter++
   }
   if(levelsTimeArr[0]>this._achievement.level1BestTime&&pp.level.number==2){
     if(level1counter==0){
       this._achievement.level1BestTime=levelsTimeArr[0]
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you finished before the time by: ",levelsTimeArr[0])
     }
     level1counter++
   }
   if(levelsTimeArr[1]>this._achievement.level2BestTime&&pp.level.number==3){
     if(level2counter==0){
       this._achievement.level2BestTime=levelsTimeArr[1]
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you finished before the time by: ",levelsTimeArr[1])
     }
     level2counter++
   }
   if(levelsTimeArr[2]>this._achievement.level3BestTime&&levelPassed===3){
     if(level3counter==0){
       this._achievement.level3BestTime=levelsTimeArr[2]
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("you finished before the time by: ",levelsTimeArr[2])
     }
     level3counter++
   }
   if (levelPassed===3&&myTime<this._achievement.bestTime){
       myTime=185-(levelsTimeArr[0]+levelsTimeArr[1]+levelsTimeArr[2])
       if(levelstimer==0){
       this._achievement.bestTime=myTime
       aud.src="sounds/wow.wav"
       aud.volume=0.9
       aud.play()
       console.log("New finishing Time : ",myTime)
     }
     levelstimer++
   }
   return this._player.score
 }

 result(){
   let high=this.checkAchievements()
   let win= this._achievement.win3level
   let bronzeM=this._achievement.collect3bronze
   let goldM=this._achievement.collect10gold
   let silverM=this._achievement.collect5silver
   this._player.playerAchievements.winning=win
   this._player.playerAchievements.highScore=high
   this._player.playerAchievements.goldCollecter=goldM
   this._player.playerAchievements.silverCollecter=silverM
   this._player.playerAchievements.bronzeCollecter=bronzeM
   this._player.playerAchievements.time1=achievement.level1BestTime
   this._player.playerAchievements.time2=achievement.level2BestTime
   this._player.playerAchievements.time3=achievement.level3BestTime
   this._player.playerAchievements.bestTime=myTime

   if(this._player.lives>0){
     this._player.score=this._player.lives*1000
     this._player.playerAchievements.highScore=this._player.score
   }

   if(this._player.score<this._achievement.highScore){
     this._player.playerAchievements.highScore=0
   }
   if(this._player.playerAchievements.bestTime>this._achievement.bestTime){
     this._player.playerAchievements.bestTime=0
   }
   var resultDiv=document.getElementById("innerResult")

   var finishName = document.createTextNode("your name is: "+this._player.name)
   resultDiv.appendChild(finishName)

   var finishLevel = document.createTextNode("finish at level: "+this._player.level.number)
   resultDiv.appendChild(finishLevel)

   var finishScore = document.createTextNode("your score is: "+this._player.score)
   resultDiv.appendChild(finishScore)

   var finishCar = document.createTextNode("your car model is: "+this._player.cModel)
   resultDiv.appendChild(finishCar)

   if(this._player.status===true){
     var finishResult = document.createTextNode("you won!")
     resultDiv.appendChild(finishResult)
   }else{
     var finishResult = document.createTextNode("you lost!")
     resultDiv.appendChild(finishResult)
   }
   //
   // //achievements.
   // if(this._player.playerAchievements.winning===true){
   //   document.getElementById("win3").src="img/wonWithoutDying.png"
   // }
   // if(this._player.playerAchievements.highScore>0){
   //   document.getElementById("highScore").src="img/newHighScore.png"
   // }
   if(this._player.playerAchievements.goldCollecter===true){
     var goldimg = document.createElement("img")
     goldimg.src = "img/gold10.png"
     resultDiv.appendChild(goldimg)
   }
   if(this._player.playerAchievements.silverCollecter===true){
     var silverimg = document.createElement("img")
     silverimg.src = "img/silver5.png"
     // silverimg.width=200
     // silverimg.height=300
     resultDiv.appendChild(silverimg)
   }
   if(this._player.playerAchievements.bronzeCollecter===true){
      var bronzeimg = document.createElement("img")
      bronzeimg.src = "img/bronze3.png"
      resultDiv.appendChild(bronzeimg)
   }
   // if(this._player.playerAchievements.bestTime>0){
   //   document.getElementById("bestTime").src="img/bestTime.png"
   // }
   // if(this._player.playerAchievements.time1>0){
   //   document.getElementById("won1").src="img/won1.png"
   // }
   // if(this._player.playerAchievements.time1>0){
   //   document.getElementById("won2").src="img/won2.png"
   // }
   // if(this._player.playerAchievements.time1>0){
   //   document.getElementById("won3").src="img/won3.png"
   // }
   document.getElementById("result").style.opacity="1"

 }

 reset(){
   var score=0
   var deathNo=0
   var levelPassed=0
   var checkWinningLevels=0
   var originalLives=3
   var Achievementsoundcounter=0
   var goldSoundCounter=0
   var silverSoundCounter=0
   var bronzeSoundCounter=0
   var medalsCounterArr=[0,0,0]
   var levelsTimeArr=[0,0,0]
   var levelstimer=0
   var staticCounter=0
   var myTime=0
   var gameEnd=0
   var level1counter=0
   var level2counter=0
   var level3counter=0
   var status=false
 }

 gameFinish(status){
   if(status==="true"){
     aud.src="sounds/clapping.wav"
   }else if(status==="true"&&this._player.level.number==3){
     aud.src="sounds/winner.wav"
   }else if(status==="false"){
     aud.src="sounds/loser.wav"
   }
   this.result()
   aud.play()
   this._player.status=status
   this._road.stopTimer()
   this.stopFiringEnemies()
   this.stopMovingEnemies()
   this._playerScore.stop()
   this._levelTimer.stopTimer()
   this.stopTimer()
   //this.result()
 }

}
