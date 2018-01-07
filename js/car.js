class car{
  constructor(loc) {
    this._model=0
    this._speed=0
    this._location=loc;
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
class playerCar extends car{

  constructor()
  {
    super({x:(window.innerWidth/2-13),y:window.innerHeight-100})
    this._carI=new Image()
    this.draw()

  }
  draw()
  {
    let canvas=document.getElementById('myCanvas2');
    var ctx2 = canvas.getContext("2d")
    this._carI.src="img/Pink-Car.png"

    ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,50,100);
    this.move("right")
  }

  move(direction)
  {
    let canvas=document.getElementById('myCanvas2');
    var ctx2 = canvas.getContext("2d")
    if(direction=="right")
    {
     ctx2.clearRect(this._location.x,this._location.y, 70, 120);

      ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x+10,this._location.y,50,100);
      this.location.x+=10
    }
    else
    {
      ctx2.clearRect(this._location.x,this._location.y, 70, 120);
       ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,50,100);
       this.location.x-=10
    }
  }
}
