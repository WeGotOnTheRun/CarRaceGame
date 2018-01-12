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
    console.log("oidjsoij");
    let enemy= new enemyCar()
    this._enemyArr.push(enemy)
  }
  moveEnemy()
  {
    for(let i=0;i<=this._enemyArr.length-1;i++)
    {
        this._enemyArr[i].move()
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
   let size=this._enemyArr.length;
   for(let i=0;i<size;i++)
   {
     this.checkBorders(this._enemyArr[i],i);
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
  checkBorders(ob,index)
   {
       if(ob.location.y>=window.innerHeight-1)
       {
         this._enemyArr.splice(index, 1);
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
