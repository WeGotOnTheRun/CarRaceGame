class car{
  constructor(loc,z) {
    this._model=0
    this._speed=0
    this._location=loc
    this._size=z
    this._carI=myCar2
    this._canvas=document.getElementById('myCanvas2')
    this._ctx2 = this._canvas.getContext("2d")
    this._position=""
  }

  set car(c){
    this._carI=c
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

  get car(){
    return this._carI
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
   super({x:(200),y:window.innerHeight-100},{w:30,h:60})
   this._timerr=''
   this.carModel()
   this.draw()
  }

  draw(){
    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
  }

  stopTimer(){
    clearTimeout(this._timerr)
  }
  appearCrash(c)
  {
    let _this=this
    if (c<7) {
      if (c%2!=0) {
        this.remove()
      }
      else {
        this.display()
      }
      setTimeout(function(){_this.appearCrash(++c)},100)
    }
  }
  move(direction){

    clearTimeout(this._timerr)
    var A=new Audio()
    A.src="sounds/TIRE+SKID.wav"
    A.volume=0.6
    A.play()
    if(direction=="left"){
     //switch this line and the next one.
      this.clearAndDraw(direction,this._location.x-1)
    }
    else{
      this.clearAndDraw(direction,this._location.x+1)
    }
  }

  clearAndDraw(direction,x){
    clearTimeout(this._timerr)
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._location.x=x
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
      let _this=this
      if(direction=="right"  && this._location.x<5*this._canvas.width/6 && this._location.x>this._canvas.width/2){
        //  console.log("to right in right");
           this._timerr=setTimeout(function(){_this.clearAndDraw("right",_this._location.x+1)},1)
      }
    else if((direction=="right" && this._location.x>this._canvas.width/6 &&this._location.x<this._canvas.width/2)){
      //  console.log("to center in right");
           this._timerr=setTimeout(function(){_this.clearAndDraw("right",_this._location.x+1)},1)
    }
    else if ((direction=="left" && this._location.x<5*this._canvas.width/6 &&this._location.x>this._canvas.width/2) ){
          //  console.log("to center in left");
           setTimeout(function(){_this.clearAndDraw("left",_this._location.x-1)},1)
       }
    else if((direction=="left" && this._location.x>this._canvas.width/6 &&this._location.x<this._canvas.width/2)){
          //console.log("to left in left");
         setTimeout(function(){_this.clearAndDraw("left",_this._location.x-1)},1)

     }
  }

  remove(){
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
  }

  display(){
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
  }

  carModel(){
    if(localStorage.xmodel==="0"){
      this._model='red_1233'
    }else if(localStorage.xmodel==="1"){
      this._model='yellow_1420'
    }else{
      this._model='white_6002'
    }
  }

}

class enemyCar extends car{
  constructor() {
    super({x:(500/2-13),y:(270/2-180)},{w:30,h:60})
    this._carI=enemyCar1
    this.enemymodel()
    this.draw()
  }

  draw(){
    var directionArr = ['right','left','center']
    var rand = directionArr[Math.floor(Math.random() * directionArr.length)]

    this.setLocation(rand)
  }//add center
  setLocation(direction){
    if(direction=="right"){
      this._location.x=5*this._canvas.width/6;
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)

    }else if(direction=="center"){
      this._location.x=this._canvas.width/2;
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }else{
      //tzbet l x wl y for both enemy and bonus+collide.
      this._location.x=this._canvas.width/6;
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
    }
  }

  move(){
    this._ctx2.clearRect(this._location.x,this._location.y,this._size.w,this._size.h)
    this._location.y+=1;
    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this.size.w,this.size.h)
  }

  remove(){
    this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
  }

  enemymodel(){
    var modelArr = [1,2,3]
    var rand = modelArr[Math.floor(Math.random() * modelArr.length)]
    if(rand===1){
      this._model='blue5671'
      this._carI=enemyCar1
    }else if(rand===2){
      this._model='purple5007'
      this._carI=enemyCar2
    }else{
      this._model='green_1001'
      this._carI=enemyCar3
    }
  }

}
