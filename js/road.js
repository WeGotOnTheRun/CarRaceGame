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
  var ctx = canvas.getContext("2d"),y=45,roadDec=[];

    for (var i = 0; i < 6; i++) {
    roadDec.push([250,y, 10,90,this._speed]);
    y+= 90+ 20;
    }
  this._timer= setInterval(
      function () {
        ctx.clearRect(0,0,500,600);
          for (var i = 0; i <6; i++) {
           if (roadDec[i][1] < 600) {
             roadDec[i][1] += roadDec[i][4];
           } else if (roadDec[i][1] > 600 - 1) {
              roadDec[i][1] =-45;
            }
           ctx.fillStyle = '#fff';
            ctx.fillRect(roadDec[i][0], roadDec[i][1], roadDec[i][2], roadDec[i][3]);
          }
      }
    ,25)
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
