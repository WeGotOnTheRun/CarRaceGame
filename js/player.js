class player{
  constructor(name,m,winning,highScore,bestTime,time1,time2,time3,goldCollecter,silverCollecter,bronzeCollecter) {
    this._name=name
    this._score=0
    this._level=''
    this._lives=3
    this._playerAchievements={winning,highScore,bestTime,time1,time2,time3,goldCollecter,silverCollecter,bronzeCollecter}
    this._cModel=m
    this._status=0
    this._time=0
    this._car=''
  }

  set car(car){
    this._car=car
  }

  get car(){
    return this._car
  }

  set status(s){
    this._status=s
  }

  set time(t){
    this._time=t
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

  get time(){
    return this._time
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
