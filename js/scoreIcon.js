class ScoreIcon {
  constructor(context,player)
  {
    this._context=context
    this._player=player
    this._scoreTimer=''
    this.draw()
    this.fire()
  }
  draw()
  {
     this._context.clearRect(0.67 *window.innerWidth, 0.01*window.innerHeight,200,70);
     this._context.font = '30px Calibri';
     this._context.lineWidth = 1.5;
     this._context.strokeStyle = 'blue';
     this._context.strokeText("Score :",0.67 *window.innerWidth, 0.1*window.innerHeight);

     this._context.font = "35px lighter verdana ";
     this._context.fillStyle = "#fff";
     this._context.fillText(this._player.score,0.74 *window.innerWidth, 0.101*window.innerHeight);
     this._player.score++;
  }

  fire()
  {
    let _this=this
    this._scoreTimer=setInterval(function (){_this.draw()},_this._player.level.generateScore)
  }
  stop()
  {
    clearInterval(this._scoreTimer)
  }

}
