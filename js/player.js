class player{
  constructor(name) {
    this._name=name
    this._score=0
    this._level=new level(45,5,1,1)
    this._lives=3
  }
  set lives(i)
  {
      this._lives=i
  }
  get lives()
  {
    return this._lives
  }
  set level(l){
	this._level=l
}
 set score(s){
	this._score=s
}
set name(s)
{
  this._name=s
}
  get level(){
	return this._level
}
 get score(){
	return this._score
}
get name()
{
  return this._name
}

}
