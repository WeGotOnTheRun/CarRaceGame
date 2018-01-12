class Timer {
  constructor(context,beginX,beginY,size,time) {
    this._context=context
    this._beginX=beginX*window.innerWidth
    this._beginY=beginY*window.innerHeight
    this._size=size
    this._time=time
    this._timeNow=0
    this._timer=''
    this._cSec=0

    this.fireTimer()
  }
 drawTimer(){
    let aEnd,aWidth
    this._context.clearRect(this._beginX,this._beginY,200,200)
    this._context.beginPath()
    this._context.arc (
      this._beginX,
      this._beginY,
      this._size,
      0,
      (2 * Math.PI) )
    this._context.fillStyle = 'blue'
    this._context.lineWidth = 1
    this._context.stroke()
    this._context.fill()

    this._context.beginPath()
    this._context.arc (
      this._beginX,
      this._beginY,
      this._size-10,
      0,
      (2 * Math.PI)
    )
    this._context.fillStyle = '#a23'
    this._context.stroke()
    this._context.fill()

    aWidth = 1.5-( 2 / (this._time*20) ) * this._cSec
    aEnd=aWidth* Math.PI

    this._context.beginPath()
    this._context.arc (
      this._beginX,
      this._beginY,
      this._size-5,
      1.5*Math.PI,
      aEnd,
      true
    )
    this._context.lineWidth = 10
    this._context.strokeStyle = '#ddd'
    this._context.stroke()

    if((this._cSec%20)==0)
    {
      this._timeNow=this._cSec/20
    }

    this._context.font = '30px Calibri'
    this._context.fillStyle = 'white'
    this._context.fillText(this._timeNow,this._beginX-0.007*window.innerWidth,this._beginY+0.011*window.innerHeight)
    this._cSec++
  }

  fireTimer()
  {
    let _this=this
    this._timer=setInterval(function(){_this.drawTimer()},50)
  }

  stopTimer()
  {
    clearInterval(this._timer)
  }


}
