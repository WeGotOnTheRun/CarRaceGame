// module.exports = require("aggregation.js")
class  Road {

constructor(themeId,speed) {
    this._themeId=themeId
    this._speed=speed
    this._picNum=0
    this._timer=''
    this.draw()
    this.generateCar()
  }

  draw()
  {
    let canvas=document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    var background = new Image();
    var c=0;
     var themes=["img/Picture5.png","img/Picture6.png","img/Picture7.png"]

    this._timer=setInterval(
      function(){

        background.src = themes[c]
        ctx.drawImage(background,0,0,background.width,background.height,0,0,canvas.width,canvas.height);
            c=(c+1)%3
      //  e.draw()
    },
     500);
  }
  stopTimer()
  {
    clearInterval(this._timer);
  }
  set themes(th)
  {
    this._themes=th
  }
  get themes ()
  {
    return this._themes;
  }
  set picNum(s)
  {
    this._picNum=s
  }
  get picNum()
  {
    return this._picNum;
  }
  generateCar()
  {
    setInterval(function(){
    var enemyIndex= (Math.floor(Math.random()*Math.random()*Math.random()*20)*500000)%3
    console.log(enemyIndex);
    var enemy;
    switch (enemyIndex) {
      case 0:
            enemy=new enemyCar(0.02,0.04)
        break;
      case 1:
              enemy=new enemyCar(0.06,0.04)
      break;
      case 2:
              enemy=new enemyCar(-0.05,0.04)
      break;
      default:

    }
},2000)
  }

}
