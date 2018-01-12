class PlayerIcon
{
  constructor(context,icon,Playername)
  {
    this._context=context
    this._icon=icon
    this._playerName=Playername

    this.drawIcon()
  }
  set playerName(playerName)
  {
    this._playerName=playerName
  }
  set icon(icon)
  {
    this._icon=icon
  }
  get playerName()
  {
    return this._playerName
  }
  get icon()
  {
    return this._icon
  }
  drawIcon()
  {
    this._context.clearRect(0.02*window.innerWidth,0.02*window.innerWidth,400,400)
    this._context.drawImage(
      this._icon,
      0,
      0,
      this._icon.width,
      this._icon.height,
      0.02 *window.innerWidth,
      0.02*window.innerHeight,
      0.07*window.innerWidth,
      0.1*window.innerHeight)

    this._context.font = "20px lighter verdana ";
    this._context.fillStyle = "#fff";
    this._context.fillText(this._playerName,0.036 *window.innerWidth, 0.14*window.innerHeight);

  }

}
