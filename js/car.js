class car{
  constructor(loc) {
    this._model=0
    this._speed=0
    this._location=loc
    this._state="before birth"
    this._carI=new Image()
    this._canvas=document.getElementById('myCanvas2');
    this._ctx2 = this._canvas.getContext("2d")
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
  get state(){
  	return this._state
  }
  get location(){
  	return this._location
  }
  get model(){
  	return this._model
  }
}

class playerCar extends car{

  constructor(){
    super({x:(window.innerWidth/2-13),y:window.innerHeight-100})
    this.draw()

  }
  draw(){
    this._carI.src="img/Pink-Car.png"
    this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60);
    this.move("right")
  }

  move(direction){
    let canvas=document.getElementById('myCanvas2');
    var ctx2 = canvas.getContext("2d")
    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x+10,this._location.y,30,60)
      this._location.x+=10
    }
    else if (direction=="down"){
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y+10,30,60)
      this._location.y+=10
    }
    else if(direction=="up"){
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y-10,30,60)
      this._location.y-=10
    }
    else if(direction=="left"){
       this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
       this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,30,60)
       this._location.x-=10
    }else{
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage("img/green.png",200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,30,60)

    }
  }
}

class enemyCar extends car{
  constructor() {
    super({x:(window.innerWidth/2-13),y:(window.innerHeight/2)})
    this.draw()
  }
  draw(){
    this._carI.src="img/red.png"
    //this._carI.onload = function() {

    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60)
    let rand
    this.move(rand)
  //}
}
  move(direction)
  {
    let canvas=document.getElementById('myCanvas2');
    var ctx2 = canvas.getContext("2d")
    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x+10,this._location.y,30,60)
      this._location.x+=10
    }
  }

}
