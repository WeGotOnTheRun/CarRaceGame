class car{
  constructor() {
    this._model=0
    this._speed=0
    this._location={x:0,y:0}
    this._state="before birth"
  }
  set speed(s){
	this._speed=s
  }
  set model(m){
  	this._model=m
  }
  set location(l){
  	this._location=l
  }
  set state(s){
    this._state=s
  }
  get speed(){
  	return this._speed
  }
  get state()
  {
  	return this._state
  }
  get location()
  {
  	return this._location
  }
  get model()
  {
  	return this._model
  }
}
class enemyCar extends car{

  constructor()
  {
    super()
    this.draw()
  }
  draw()
  {
    let canvas2=document.getElementById('myCanvas2');
    ctx = canvas2.getContext("2d");
    var carI = new Image();
    carI.src="img/Pink-Car.png"
    ctx.drawImage(carI,200,100,carI.width,carI.height,0,0,100,200);

  }
}
