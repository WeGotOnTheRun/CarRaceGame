class  road{

constructor(themeId,speed) {
    this._themeId=themeId
    this._speed=speed
    this._picNum=0
    this._timer='';
    this.draw();
  }
  draw()
  {
    var c=0;
     var themes=["img/Picture5.png","img/Picture6.png","img/Picture7.png"]

    this._timer=setInterval(
      function(){
        document.body.style.backgroundImage ="url("+themes[c]+")";
        c=(c+1)%3
    },
     500);
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
}
