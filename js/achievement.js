class achievements{
  constructor() {
    this._highScore=2000
    this._win3level=false
    this._bestTime=185//to finish a level
    this._collect10gold=false
    this._collect5silver=false
    this._collect3bronze=false
    this._level1BestTime=0
    this._level2BestTime=0
    this._level3BestTime=0
  }

   set level1BestTime(one){
     this._level1BestTime=one
   }

   set level2BestTime(two){
     this._level2BestTime=two
   }

   set level3BestTime(three){
     this._level3BestTime=three
   }

   set highScore(h){
     this._highScore=h
   }

   set win3level(w){
     this._win3level=w
   }

   set bestTime(b){
   this._bestTime=b
   }

   set collect10gold(gold){
     this._collect10gold=gold
   }

   set collect5silver(silver){
     this._collect5silver=silver
   }

   set collect3bronze(bronze){
     this._collect3bronze=bronze
   }

   get highScore(){
     return this._highScore
   }

   get win3level(){
     return this._win3level
   }

   get bestTime(){
     return this._bestTime
   }

   get collect10gold(){
     return this._collect10gold
   }

   get collect5silver(){
     return this._collect5silver
   }

   get collect3bronze(){
     return this._collect3bronze
   }

   get level1BestTime(){
     return this._level1BestTime
   }

   get level2BestTime(){
     return this._level2BestTime
   }

   get level3BestTime(){
     return this._level3BestTime
   }

}
