class LevelIcon
{
  constructor(contex,levelNumber)
  {
    this._contex=contex
    this._levelNumber=levelNumber
    this.draw()
  }
  set levelNumber(levelNumber)
  {
    this._levelNumber=levelNumber
  }
  get levelNumber()
  {
    return this._levelNumber
  }
  draw()
  {
      this._contex.font = '30px Calibri';
      this._contex.lineWidth = 1.5;
      this._contex.strokeStyle = 'blue';
      this._contex.strokeText("level :",0.1 *window.innerWidth, 0.1*window.innerHeight);

      this._contex.font = "35px lighter verdana ";
      this._contex.fillStyle = "#fff";
      this._contex.fillText(this._levelNumber,0.16 *window.innerWidth, 0.101*window.innerHeight);
  }
}
