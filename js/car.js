class car{
  constructor(loc,z) {
    this._model=0
    this._speed=0
    this._location=loc
    this._size=z
    this._state="before birth"
    this._carI=myCar
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
    super({x:(500/2-13),y:600-100},{w:30,h:60})
    this.draw()
  }

  draw(){
    this._ctx2.drawImage(this._carI,200,100,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    this.move("right")
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
    // else{
    //   this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
    //   this._ctx2.drawImage("img/green.png",200,100,this._carI.width,this._carI.height,this._location.x-10,this._location.y,this._size.w,this._size.h)
    //
    // }
  }
}

class enemyCar extends car{
  constructor(v) {
    super({x:(window.innerWidth/2-13),y:(window.innerHeight/2+34)},{w:30,h:60})
    this._carI=enemyCars
    this._value = v
    this.draw()
  }

  set value(v){
    this._value=v
  }

  get value(){
    return this._value
  }

  draw(){
  //  this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    var directionArr = ['left', 'right']
    var rand = directionArr[Math.floor(Math.random() * directionArr.length)]
    this.setLocation(rand)
  }
  setLocation(direction){
    if(direction=="right"){
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x+30,this._location.y,this._size.w,this._size.h)
    }else if(direction=="left"){
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x-30,this._location.y,this._size.w,this._size.h)
    }
    valueArr[this._value]=direction
  }

  move(x,y,w,h){
      if (valueArr[this._value]=="right"){
        this._ctx2.clearRect(x,y,w+80,h*2)
        this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,x+w,y+h,w,h)
        this.location.y+=h
      }else if(valueArr[this._value]=='left'){
        this._ctx2.clearRect(x,y,w-80,h*2)
        this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,x-w,y+h,w,h)
        this.location.y+=h
    }
    }

}
