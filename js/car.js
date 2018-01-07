class car{
  constructor(loc,z) {
    this._model=0
    this._speed=0
    this._location=loc
    this._size=z
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
  set size(z){
  	this._size=z
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
  get size(){
  	return this._size
  }
  get model(){
  	return this._model
  }
}

class playerCar extends car{

  constructor(){
    super({x:(window.innerWidth/2-13),y:window.innerHeight-100},{w:30,h:60})
    this.draw()
  }
  draw(){
    this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    this.move("right")
  }

  move(direction){
    let canvas=document.getElementById('myCanvas2');
    var ctx2 = canvas.getContext("2d")
    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x+10,this._location.y,this._size.w,this._size.h)
      this._location.x+=10
    }
    else if (direction=="down"){
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y+10,this._size.w,this._size.h)
      this._location.y+=10
    }
    else if(direction=="up"){
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y-10,this._size.w,this._size.h)
      this._location.y-=10
    }
    else if(direction=="left"){
       this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
       this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,this._size.w,this._size.h)
       this._location.x-=10
    }else{
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._ctx2.drawImage("img/green.png",200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,this._size.w,this._size.h)

    }
  }
}

class enemyCar extends car{
  constructor(a,b) {
    super({x:(window.innerWidth/2-(a*window.innerWidth)),y:(window.innerHeight/2+((b*window.innerHeight)))},{w:30,h:60})
    this._carI=red
    this._carI.src="img/red.png"
  }
  draw(){
    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    var myArray = ['left', 'right']
    var rand = myArray[Math.floor(Math.random() * myArray.length)]
    this.setLocation(rand)
  }
  setLocation(direction){

    if(direction=="right"){
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w+40,this._size.h*2)
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x+30,this._location.y,this._size.w,this._size.h)
      this._location.x+=40
    }else if(direction=="left"){
       this._ctx2.clearRect(this._location.x,this._location.y, this._size.w+40,this._size.h*2)
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x-30,this._location.y,this._size.w,this._size.h)
       this._location.x-=40
    }
  }
  
  move(){}

}
