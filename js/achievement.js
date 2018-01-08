class achievement{
  constructor(time,score,win) {
    this.best-time=time
    this.high-score=score
    this.win3level=win
    
  set Best-time(s){
	this.best-time=s
  }
   set high-score(m){
   this.high-score=m
   }
   
   set win3level(w){
   this.win3level=w
  }
   get Best-time(){
	return this.best-time
  }
   get high-score(){
   return this.high-score
   }
   
   get win3level(){
   return this.win3level
  }
  
  }
  