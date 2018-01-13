class BonusOrBomb{
  constructor(x,y,w,h) {
    this._type=0
    this._value=0
    this._speed=0
    this._location={x,y}
    this._size={w,h}
    this._state=0
    this._bonus=Bonus1
    this._canvas=document.getElementById('myCanvas2');
    this._ctx2 = this._canvas.getContext("2d")
    this.bonusType()
    this.draw()
  }

  set type(t){
    this._type=t
  }

  set model(m){
    this._model=m
  }

  set value(v){
    this._value=v
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

  get value(){
    return this._value
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
      this._location.x=5*this._canvas.width/6
      this._ctx2.drawImage(this._bonus,0,0,this._bonus.width,this._bonus.height,this._location.x,this._location.y,this._size.w,this._size.h)

    }else if(direction=="center"){
      this._location.x=this._canvas.width/2
       this._ctx2.drawImage(this._bonus,0,0,this._bonus.width,this._bonus.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }else{
      this._location.x=this._canvas.width/6
      this._ctx2.drawImage(this._bonus,0,0,this._bonus.width,this._bonus.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }
  }

  move(){
    this._ctx2.clearRect(this._location.x,this._location.y,this._size.w,this._size.h)
    this._location.y+=1
    this._ctx2.drawImage(this._bonus,0,0,this._bonus.width,this._bonus.height,this._location.x,this._location.y,this.size.w,this.size.h)
  }

 remove(){
     this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
 }

  bonusType(){
    var typeArr = [3]
    var rand = typeArr[Math.floor(Math.random() * typeArr.length)]
    if(rand===1){
      this._type=1
      this._bonus=Bonus1
      this._value=1000
    }else if(rand===2){
      this._type=1
      this._bonus=Bonus2
      this._value=500
    }else if (rand===3){
      this._type=1
      this._bonus=Bonus3
      this._value=200
    }else if (rand===4){
      this._type=2
      this._bonus=BonusTime
      this._value=5 //seconds
    }else if (rand===5){
      this._type=3
      this._bonus=BonusLife
      this._value=1
    }else if(rand===6){
    this._type=4
    this._bonus=bombScore
    this._value=-1000
    }else if (rand===7){
    this._type=5
    this._bonus=bombTime
    this._value=-5 //seconds
    }else{
    this._type=6
    this._bonus=bombLife
    this._value=1
    }
  }
}
