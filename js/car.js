class car{
  constructor(loc) {
    this._model=0
    this._speed=0
    this._location=loc
    this._state="before birth"
    this._carI=pink
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
    super({x:(500/2-13),y:600-100})
    this.draw()
  }

  draw(){
    this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60);
  }

  move(direction){
    var A=new Audio()
    A.src="sounds/TIRE+SKID.wav"
    A.volume=0.6;
    A.play()
    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, 30, 60)
      this._location.x+=50
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60)

    }
    else if (direction=="down"){
      this._ctx2.clearRect(this._location.x,this._location.y, 30, 60)
      this._location.y+=50
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60)

    }
    else if(direction=="up"){
      this._ctx2.clearRect(this._location.x,this._location.y, 30, 60)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y-50,30,60)
      this._location.y-=50
    }
    else if(direction=="left"){
       this._ctx2.clearRect(this._location.x,this._location.y, 30, 60)
        this._location.x-=50
       this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60)

    }else{
      this._ctx2.clearRect(this._location.x,this._location.y, 30, 60)
      this._ctx2.drawImage("img/green.png",200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,30,60)

    }
  }
}

class enemyCar extends car{
  constructor(x,y) {
    super({x:(500/2-(x*500)),y:(600/2+((y*600)))})
    this._carI=red
    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,30,60)
    var myArray = ['left', 'right']
    var rand = myArray[Math.floor(Math.random() * myArray.length)]
    this.setLocation(rand)
  //}

  }

  setLocation(direction){

    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x+10,this._location.y,30,60)
      this._location.x+=40
    }else if(direction=="left"){
       this._ctx2.clearRect(this._location.x,this._location.y, 70, 120)
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x-10,this._location.y,30,60)
       this._location.x-=40
    }
  }
  move(){

  }
}
