class Game{
  constructor(player,road,levelTimer,playerIcon,playerlevel,playerLives,playerScore) {
    this._val=2
    this._levelTimer=levelTimer
    this._playerIcon=playerIcon
    this._playerlevel=playerlevel
    this._playerLives=playerLives
    this._playerScore=playerScore
    this._gameTimer=''
    this._enemyArr=[]
    this._bonusArr=[]
    this._player=player
    this._road=road
    this._generateEnemiesTimer=''
    this._moveEnemiesTimer=''
    this._generatebonusTimer=''
    this._movebonusTimer=''

    this.fireEnemies()
    this.moveEnemies()

    this.fireBonus()
    this.moveBonuss()
    this.fireGameTimer()
  }

  set enemyArr(enemyArr){
    this._enemyArr=enemyArr
  }

  get enemyArr(){
    return this._enemyArr
  }

  generateEnemy(){
    console.log("new enemy")
    let enemy= new enemyCar()
    this._enemyArr.push(enemy)
  }

  moveEnemy(){
    for(let i=0;i<=this._enemyArr.length-1;i++){
        this._enemyArr[i].move()
    }
    this.checkCollision()
  }

  fireEnemies(){
    let _this=this
    this._generateEnemiesTimer=setInterval(function (){_this.generateEnemy()},this._player.level.generateEnemySpeed)
  }

  stopFiringEnemies(){
    clearInterval(this._generateEnemiesTimer)
  }

  set bonusArr(bonusArr){
    this._bonusArr=bonusArr
  }

  get bonusArr(){
    return this._bonusArr
  }

  generateBonus(){
    console.log("new bonus")
    let _bonus1= new bonus((500/2-13),(270/2-180),30,60)
    this._bonusArr.push(_bonus1)
  }

  moveBonus(){
    for(let i=0;i<=this._bonusArr.length-1;i++){
        this._bonusArr[i].move()
    }
    this.getBonus()
  }

  fireBonus(){
    let _this=this
    this._generateBonusTimer=setInterval(function (){_this.generateBonus()},this._player.level.generateBonusSpeed)
  }

  stopFiringBonus(){
    clearInterval(this._generateBonusTimer)
  }


  fireGameTimer(){
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

  moveBonuss(){
    let _this=this
    this._movebonusTimer=setInterval(function (){_this.moveBonus()},this._player.level.moveBonusSpeed)
  }

  stopMovingBonus(){
    clearInterval(this._moveBonusTimer)
  }

 checkCollision(){
   let size=this._enemyArr.length;
   for(let i=0;i<size;i++){
     this.checkBorders(this._enemyArr[i],i)
     size=this._enemyArr.length
     if(((this._enemyArr[i].location.x<=this._player.car.location.x && this._enemyArr[i].location.x+this._enemyArr[i].size.w>=this._player.car.location.x)
     ||(this._enemyArr[i].location.x>this._player.car.location.x && this._enemyArr[i].location.x<this._player.car.location.x+this._player.car.size.w ))
     &&(((this._enemyArr[i].location.y+this._enemyArr[i].size.h>=this._player.car.location.y)&&(this._enemyArr[i].location.y+this._enemyArr[i].size.h<this._player.car.location.y+this._player.car.size.h) )
     || (this._enemyArr[i].location.y>this._player.car.location.y && this._enemyArr[i].location.y<this._player.car.location.y+this._player.car.size.h))
     ){
       console.log("collide")
       this.stopMovingEnemies()
       aud.src="sounds/crash.wav"
       aud.volume=0.6
       aud.play()
       this._player.car.appearCrash(0)
       this._enemyArr[i].remove()
       this._enemyArr.splice(i,1)
       size=size-1
       this.moveEnemies()
       switch(--this._player.lives){
         case 2:
              this._playerLives.drawHeart(0.29*window.innerWidth,"white")
          break
         case 1:
                this._playerLives.drawHeart(0.26*window.innerWidth,"white")
           break
         case 0:
                this._playerLives.drawHeart(0.23*window.innerWidth,"white")
                this._road.stopTimer()
                this._player.car.stopTimer()

                this.stopFiringEnemies()
                this.stopMovingEnemies()
                this._playerScore.stop()
                this._levelTimer.stopTimer()
                this.stopTimer()
                aud.src="sounds/loser.wav"
                aud.volume=0.6
                aud.play()
                document.getElementById("img").src="img/sad.ico"
                document.getElementById("header").src="Game over"
                document.getElementById("level").innerText="play again->";
                document.getElementById("level").onclick=function(){
                  location.href="frist.html"
                }
                document.getElementById("div").style.opacity="1"
                break
         break
       }
     }
   }
 }



checkBorders(ob,index){
   if(ob.location.y>=window.innerHeight-1){
     this._enemyArr.splice(index, 1)
   }
}

removeBonus(ob,index){
    if(ob.location.y>=window.innerHeight-1){
      this._bonusArr.splice(index, 1)
    }
}

getBonus(){
   let size=this._bonusArr.length;
   for(let i=0;i<size;i++){
     this.removeBonus(this._bonusArr[i],i)
     size=this._bonusArr.length
     if(((this._bonusArr[i].location.x<=this._player.car.location.x && this._bonusArr[i].location.x+this._bonusArr[i].size.w>=this._player.car.location.x)
     ||(this._bonusArr[i].location.x>this._player.car.location.x && this._bonusArr[i].location.x<this._player.car.location.x+this._player.car.size.w ))
     &&(((this._bonusArr[i].location.y+this._bonusArr[i].size.h>=this._player.car.location.y)&&(this._bonusArr[i].location.y+this._bonusArr[i].size.h<this._player.car.location.y+this._player.car.size.h) )
     || (this._bonusArr[i].location.y>this._player.car.location.y && this._bonusArr[i].location.y<this._player.car.location.y+this._player.car.size.h))
     ){
       this.stopMovingBonus()
       if(this._bonusArr[i].type===1){
         this._player.score+=this._bonusArr[i].value
         console.log( this._player.score)
         aud.src="sounds/money.mp3" //wow sound.
         aud.volume=0.9
         aud.play()
         console.log("WOW! you earned ",this._bonusArr[i].value)
         if(this._bonusArr[i].value==1000){
           medalsCounterArr[0]+=1
         }else if(this._bonusArr[i].value==500){
           medalsCounterArr[1]+=1
         }else{
           medalsCounterArr[2]+=1
         }
       }else if(this._bonusArr[i].type===2){
         console.log(this._player.level.time)
         this._player.time+=this._bonusArr[i].value
         console.log("after gaining 5",this._player.time)
         aud.src="sounds/wow.wav" //wow sound.
         aud.volume=0.9
         aud.play()
         console.log("WOW! you now have time extra",this._bonusArr[i].value ,"secs")
       }else{ //type=3
         this._player.lives+=this._bonusArr[i].value
         console.log(this._player.lives)
         aud.src="sounds/wow.wav" //wow sound.
         aud.volume=0.9
         aud.play()
         console.log("Hooray! you now have",this._bonusArr[i].value,"lives")
       }
       this._bonusArr[i].remove()
       this._bonusArr.splice(i,1)
       size=size-1
       this.moveBonuss()
     }
   }
 }




timerUp(){
  this._player.level.time--
  if(this._player.level.time<=this._player.level.slowTime && this._player.level.time>=0){
     this._road.speed=this._player.level.time/2
     this.stopFiringEnemies()
     this.stopMovingEnemies()
     this.stopFiringBonus()
     this.stopMovingBonus()
     let _this=this
     this._moveEnemiesTimer=setInterval(function (){_this.moveEnemy()},this._road.speed+this._val)
     this._generateEnemiesTimer=setInterval(function (){_this.generateEnemy()},5*this._player.level.generateEnemySpeed)
     this._moveBonusTimer=setInterval(function (){_this.moveBonus()},this._road.speed+this._val)
     this._generateBonusTimer=setInterval(function (){_this.generateBonus()},this._player.level.generateBonusSpeed)
     this._val+=2
   }
   if(this._player.level.time==(this._player.level.slowTime-4)){
      this._road.drawFinish2()
   }
   if(this._player.level.time==0 &&this._player.level.number<3){
     aud.src="sounds/clapping.wav"
     aud.play()
     this._road.stopTimer()
     this.stopFiringEnemies()
     this.stopMovingEnemies()
     this.stopFiringBonus()
     this.stopMovingBonus()
     this._playerScore.stop()
     this._levelTimer.stopTimer()
     this.stopTimer()
     if(this._player.level.number==1){
       if(parseInt(localStorage.getItem("highLevel"))<2)
       localStorage.setItem("highLevel",2)
       document.getElementById("level").innerText="level 2->"
     }else{
       localStorage.setItem("highLevel",3)
       document.getElementById("level").innerText="level 3->"
     }
     document.getElementById("div").style.opacity="1"
   }else if (this._player.level.time==0 && this._player.level.number==3){
     aud.src="sounds/winner.wav"
     aud.play();
     this._road.stopTimer()
     this.stopFiringEnemies()
     this.stopMovingEnemies()
     this.stopFiringBonus()
     this.stopMovingBonus()
     this._playerScore.stop()
     this._levelTimer.stopTimer()
     this.stopTimer()
     document.getElementById("img").src="img/winner.png"
     document.getElementById("header").innerHTML="WoOooOooW"
     document.getElementById("text").innerHTML="you won"
     document.getElementById("level").innerText="play again"
     document.getElementById("level").onclick=function(){  location.href="first.html"}
     document.getElementById("div").style.opacity="1"
   }
 }

}
