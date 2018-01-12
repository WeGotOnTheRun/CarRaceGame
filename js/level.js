 class level{
  constructor(time,speed,number,theme,s1,s2,b1,b2,s3,s4) {
    this._time=time
    this._speed=speed
    this._number=number
	  this._theme=theme
    this._generateEnemySpeed=s1
    this._moveEnemySpeed=s2
    this._generateBonusSpeed=b1
    this._moveBonusSpeed=b2
    this._generateScore=s3
    this._slowTime=s4
  }

  set slowTime(s4){
    this._slowTime=s4
  }

  get slowTime(){
    return this._slowTime
  }

  set generateEnemySpeed(s1){
    this._generateEnemySpeed=s1

  }

  get generateEnemySpeed(){
    return this._generateEnemySpeed
  }

  set moveEnemySpeed(s2){
    this._moveEnemySpeed=s2
  }

  get moveEnemySpeed(){
    return this._moveEnemySpeed
  }

  set generateBonusSpeed(b1){
    this._generateBonusSpeed=b1

  }
  get generateEnemySpeed(){
    return this._generateBonusSpeed
  }

  set moveBonusSpeed(b2){
    this._moveBonusSpeed=b2
  }

  get moveBonusSpeed(){
    return this._moveBonusSpeed
  }

  set generateScore(s3){
    this._generateScore=s3
  }

  get generateScore(){
    return this._generateScore
  }

  set speed(s){
  	this._speed=s
  }

  set time(t){
  	this._time=t
  }

  set number(n){
  	this._number=n
  }

  set theme(n){
	  this._theme=n
  }

  get speed(){
    return this._speed
  }

  get time(){
    return this._time
  }

  get number(){
    return this._number
  }

  get theme(){
    return this._theme
  }

}
