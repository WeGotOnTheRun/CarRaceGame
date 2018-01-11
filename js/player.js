class player{
  constructor(name,car,winning,highScore) {
    this._name=name
    this._score=0
    this._level=new level(45,20,1,1)
    this._lives=3
    this._playerAchievements={winning,highScore}
    this._car=car
    this._status=0
  }

  set status(s){
    this._status=s
  }

  set playerAchievements(a){
    this._playerAchievements=a
  }

  set car(c){
    this._car=c
  }

  set lives(i){
      this._lives=i
  }

  get lives(){
    return this._lives
  }

  set level(l){
	this._level=l
  }

 set score(s){
	this._score=s
  }

  set name(s){
    this._name=s
  }

  get level(){
	   return this._level
  }
  get score(){
  	return this._score
  }

  get name(){
    return this._name
  }

  get car(){
    return this._car
  }

  get playerAchievements(){
    return this._playerAchievements
  }

  get status(){
    return this._status
  }

}
