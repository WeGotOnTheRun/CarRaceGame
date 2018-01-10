class car{
  constructor(loc,z) {
    this._model=0
    this._speed=0
    this._location=loc
    this._size=z
    this._state="before birth"
    this._carI=myCar2
    this._canvas=document.getElementById('myCanvas2');
    this._ctx2 = this._canvas.getContext("2d")
    this._position=""
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
    super({x:(200),y:window.innerHeight-100},{w:30,h:60})
     this._position="center"
     this._lastPos="center"
     this._timerr='';
    this.draw()
  }

  draw(){
    this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
  }
  stopTimer()
  {
    clearTimeout(this._timerr)
  }

  move(direction){
    var A=new Audio()
    A.src="sounds/TIRE+SKID.wav"
    A.volume=0.6
    A.play()
    let _this=this
    this._position=this._lastPos
    clearTimeout(this._timerr)
    if(direction=="right"){
     //switch this line and the next one.
        this.clearAndDraw(direction,_this._location.x+1,_this._location.y)
    }
    else if (direction=="down"){
      this._location.y+=50
   
    }
    else if(direction=="up"){
      this._location.y-=50
     
    }
    else if(direction=="left"){
      this.clearAndDraw(direction,_this._location.x,_this._location.x-1)
       }

      }
  clearAndDraw(direction,x)
  {

      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
      this._location.x=x 
      this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
      let _this=this

      if(direction=="right" && this._position=="center")
       { 
         this._lastPos="right"
         if(this._location.x<5*this._canvas.width/6)
        {
        this._timerr=setTimeout(function(){_this.clearAndDraw(direction,_this._location.x+1)},1)
        }
        else
        {
          this._position="right"
        }
      }
      else if((direction=="right" && this._position=="left") )
     {
         this._lastPos="center"
         if(this._location.x<this._canvas.width/2)
        {
        this._timerr=setTimeout(function(){_this.clearAndDraw(direction,_this._location.x+1)},1)
        }
        else
        {
           this._position="center"
        }
    }
    else if ((direction=="left" && this._position=="right") )
    {
         this._lastPos="center"
         if(this._location.x>this._canvas.width/2)
        {
        setTimeout(function(){_this.clearAndDraw(direction,_this._location.x-1)},1)
        }
        else
        {
          this._position="center"
        }
    }
    else
    {
       this._lastPos="left"
       if(this._location.x>this._canvas.width/6)
        {
        setTimeout(function(){_this.clearAndDraw(direction,_this._location.x-1)},1)
        }
        else
        {

          this._position="left"
        }

    }

  }
  remove()
  {
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
  }
  display()
  {
       this._ctx2.drawImage(this._carI,0,0,this._carI.width,this._carI.height,this._location.x,this._location.y,this._size.w,this._size.h)
  }
}

class enemyCar extends car{
  constructor() {
    super({x:(500/2-13),y:(270/2-180)},{w:30,h:60})
    this._carI=enemyCars
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
     remove()
  {
      this._ctx2.clearRect(this._location.x,this._location.y, this._size.w,this._size.h)
  }
}
