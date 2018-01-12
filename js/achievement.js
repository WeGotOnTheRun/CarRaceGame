class achievements{
  constructor() {
    this._highScore=2000
    this._win3level=false
  }

   set highScore(h){
   this._highScore=h
   }

   set win3level(w){
   this._win3level=w
  }
   get highScore(){
   return this._highScore
   }
   get win3level(){
   return this._win3level
  }

}
