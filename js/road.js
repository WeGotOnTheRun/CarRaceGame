class  Road {
constructor(themeId,speed) {
    this._themeId=themeId
    this._speed=speed
    this._picNum=0
    this._timer=''
    this.draw()
  //  this.generateCar()
  }

  drawLines(canvas,ctx,width,height,y,roadDec)
  {
    
       ctx.clearRect(0,0,width,height);
          for (var i = 0; i <7; i++) {
           if (roadDec[i][1] <height) {
             roadDec[i][1] += roadDec[i][4]
           } else if (roadDec[i][1] > height - 1) {
              roadDec[i][1] =-45;
            }
           ctx.fillStyle = '#fff';
            ctx.fillRect(roadDec[i][0], roadDec[i][1], roadDec[i][2], roadDec[i][3]);
          }

  }
  draw()
{
    let canvas=document.getElementById('myCanvas');
      var ctx = canvas.getContext("2d"),y=45,roadDec=[];
      let width=400
      let height=window.innerHeight
    for (var i = 0; i < 7; i++) {
    roadDec.push([200,y,10,90,5]);
    y+= 90+ 20;
    }
    var _this = this;
  this._timer= setInterval(function(){_this.drawLines(canvas,ctx,width,height,y,roadDec)},this._speed);
}
  stopTimer()
  {
    console.log("iodsfj")
    clearInterval(this._timer);
  }
  set timer(time)
  {
    this._timer= setInterval(this.draw(),time);
  }
  set themes(th)
  {
    this._themes=th
  }
  get themes ()
  {
    return this._themes
  }
  set picNum(s)
  {
    this._picNum=s
  }
  get picNum()
  {
    return this._picNum;
  }
  set speed(sp)
  {
    this._speed=sp
  }
  get speed()
  {
    return this._speed
  }
//    generateCar(){
//     setInterval(function(){
//     var enemyIndex= (Math.floor(Math.random()*Math.random()*Math.random()*20)*500000)%3
//     console.log(enemyIndex);
//     var enemy=new enemyCar()
//     enemy.draw()
//
// },2000)
//   }

}
