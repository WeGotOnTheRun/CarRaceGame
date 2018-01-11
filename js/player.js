class player{
  constructor(name,m,winning,highScore) {
    this._name=name
    this._score=0
    this._level=''
    this._lives=3
    this._playerAchievements={winning,highScore}
    this._cModel=m
    this._status=0
  }

  set status(s){
    this._status=s
  }

  set playerAchievements(a){
    this._playerAchievements=a
  }

  set cModel(cm){
    this._cModel=cm
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

  get cModel(){
    return this._cModel
  }

  get playerAchievements(){
    return this._playerAchievements
  }

  get status(){
    return this._status
  }

}
