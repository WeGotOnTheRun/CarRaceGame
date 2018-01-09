
class bonus{
  constructor(loc,z) {
    this._type='money'
    this._model=0
    this._speed=0
    this._location=loc
    this._size=z
    this._state=0
    this._bonus=bonus
    this._canvas=document.getElementById('myCanvas2');
    this._ctx2 = this._canvas.getContext("2d")
    this.draw()
  }

  set type(t){
    this._type=t
  }

  set model(m){
    this._model=m
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

  get type(){
    return this._type
  }

  get model(){
    return this._model
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

  draw(){
    var directionArr = ['right','left','center']
    var rand = directionArr[Math.floor(Math.random() * directionArr.length)]
    this.setLocation(rand)
  }

  setLocation(direction){
    if(direction=="right"){
      this._location.x+=50;
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)

    }else if(direction=="center"){
      this._location.x-=50
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }else{
      this._location.y-=100
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }
  }

  move(){
        this._ctx2.clearRect(this._location.x,this._location.y,this._size.w,this._size.h)
        this._location.y+=this._size.h
        this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this.size.w,this.size.h)
    }

}
