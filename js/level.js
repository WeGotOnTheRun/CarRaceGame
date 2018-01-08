 class level{
  constructor(time,speed,number,theme) {
    this._time=time
    this._speed=speed
    this._number=number
	  this._theme=theme
  }
    set speed(s){
  	this._speed=s
  }
    set time(t){
  	this._time=t
  }
   set number(n){
  	this._number=n
  }
   set theme(n){
  	this._theme=n
  }
  get speed()
  {
    return this._speed
  }
  get time()
  {
    return this._time
  }
  get number()
  {
    return this._number
  }
  get theme()
  {
    return this._theme
  }
}
