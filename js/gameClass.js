class Game
{
  constructor(player,road,levelTimer,playerIcon,playerlevel,playerLives,playerScore) {
    this._val=2
    this._levelTimer=levelTimer
    this._playerIcon=playerIcon
    this._playerlevel=playerlevel
    this._playerLives=playerLives
    this._playerScore=playerScore
    this._gameTimer=''
    this._enemyArr=[]
    this._player=player
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
  set enemyArr(enemyArr)
  {
    this._enemyArr=enemyArr
  }
  get enemyArr()
  {
    return this._enemyArr;
  }

  generateEnemy()
  {
    let enemy= new enemyCar()
    this._enemyArr.push(enemy)

    if(--this._player.level.generateBonusTime==0)
    {
        this.generateBonus()
        this._player.level.generateBonusTime=this._bonusTime
    }
  }
  generateBonus()
  {
    let bonus= new Bonus((500/2-13),(270/2-180),30,60)
    this._bonusArr.push(bonus)
  }
  moveEnemy()
  {
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
  fireEnemies()
  {
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
  stopTimer()
  {
    clearInterval(this._gameTimer)
  }
  moveEnemies()
  {
    let _this=this
    this._moveEnemiesTimer=setInterval(function (){_this.moveEnemy()},this._player.level.moveEnemySpeed)
  }
  stopMovingEnemies()
  {
    clearInterval(this._moveEnemiesTimer)
  }
  checkCollision()
  {
  let size=this._bonusArr.length;
   for(let i=0;i<size;i++){
     this.checkBorders(this._bonusArr[i],i,1);
     size=this._bonusArr.length
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
           console.log("WOW! you now have time extra",bonusArr[i].value ,"secs")
         }else{ //type=3
           this._player.lives+=this._bonusArr[i].value
           console.log(this._player.lives)
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
if(this._bonusFlag==0){
   for(let i=0;i<size;i++)
   {
     this.checkBorders(this._enemyArr[i],i,0);
     size=this._enemyArr.length;
     if(((this._enemyArr[i].location.x<=this._player.car.location.x && this._enemyArr[i].location.x+this._enemyArr[i].size.w>=this._player.car.location.x)
     ||(this._enemyArr[i].location.x>this._player.car.location.x && this._enemyArr[i].location.x<this._player.car.location.x+this._player.car.size.w ))
     &&(((this._enemyArr[i].location.y+this._enemyArr[i].size.h>=this._player.car.location.y)&&(this._enemyArr[i].location.y+this._enemyArr[i].size.h<this._player.car.location.y+this._player.car.size.h) )
     || (this._enemyArr[i].location.y>this._player.car.location.y && this._enemyArr[i].location.y<this._player.car.location.y+this._player.car.size.h))
     ){
       console.log("collide");
       this.stopMovingEnemies()
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
          break;
         case 1:
                this._playerLives.drawHeart(0.26*window.innerWidth,"white")
           break;
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

            break;
         break;
       }


       }
   }
}
  this._bonusFlag=0
   }
  checkBorders(ob,index,type)
   {
       if(ob.location.y>=window.innerHeight-1)
       {
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

   this._player.level.time--;
   if(this._player.level.time<=this._player.level.slowTime && this._player.level.time>=0)
   {
           this._road.speed=this._player.level.time/2
           this.stopFiringEnemies()
           this.stopMovingEnemies()
           let _this=this
           this._moveEnemiesTimer=setInterval(function (){_this.moveEnemy()},this._road.speed+this._val)
           this._generateEnemiesTimer=setInterval(function (){_this.generateEnemy()},5*this._player.level.generateEnemySpeed)
           this._val+=2;

   }
   if(this._player.level.time==(this._player.level.slowTime-4))
   {
      this._road.drawFinish2()
   }

   if(this._player.level.time==0 &&this._player.level.number<3)
   {

     aud.src="sounds/clapping.wav"
     aud.play();
     this._road.stopTimer()


     this.stopFiringEnemies()
     this.stopMovingEnemies()
     this._playerScore.stop()
     this._levelTimer.stopTimer()
     this.stopTimer()
     if(this._player.level.number==1)
     {
       if(parseInt(localStorage.getItem("highLevel"))<2)
       localStorage.setItem("highLevel",2)
       document.getElementById("level").innerText="level 2->";
     }
     else {
         localStorage.setItem("highLevel",3)
         document.getElementById("level").innerText="level 3->";
     }
     document.getElementById("div").style.opacity="1"

   }
   else if (this._player.level.time==0 && this._player.level.number==3){
     aud.src="sounds/winner.wav"
     aud.play();
     this._road.stopTimer()
     this.stopFiringEnemies()
     this.stopMovingEnemies()
     this._playerScore.stop()
     this._levelTimer.stopTimer()
     this.stopTimer()
     document.getElementById("img").src="img/winner.png";
     document.getElementById("header").innerHTML="WoOooOooW";
     document.getElementById("text").innerHTML="you win";
     document.getElementById("level").innerText="play again";
      document.getElementById("level").onclick=function(){  location.href="frist.html";}
      document.getElementById("div").style.opacity="1"

   }

 }

}
