var myCar=new Image();
myCar.src="img/Pink-Car.png"
var img_array=["img/red.png","img/y1.png","img/w1.png"];
var myCar2=new Image();
myCar2.src=img_array[localStorage.getItem("xmodel")]

var playerI=new Image()
playerI.src="img/drive-icon.png"


var enemyCar1=new Image()
enemyCar1.src="img/blue.png"
var enemyCar2=new Image()
enemyCar2.src="img/purple.png"
var enemyCar3=new Image()
enemyCar3.src="img/green.png"


var finish2=new Image()
finish2.src="img/finish2.png"


var valueArr=new Array()
var valueCounter=0

let roadIm=new Image()
roadIm.src="img/road.png"


var Bonus1=new Image()
Bonus1.src="img/gold.png"
var Bonus2=new Image()
Bonus2.src="img/silver.png"
var Bonus3=new Image()
Bonus3.src="img/bronze.png"
var BonusTime=new Image()
BonusTime.src="img/time.png"
var BonusLife=new Image()
BonusLife.src="img/heart.png"

var bombScore=new Image()
bombScore.src="img/moneyBomb.png"
var bombTime=new Image()
bombTime.src="img/timeBomb.png"
var bombLife=new Image()
bombLife.src="img/lifeBomb.png"

var bonusValueArr= new Array()
var bonusValue=0


var aud=new Audio()



var score=0
var deathNo=0
var levelPassed=0
var checkWinningLevels=0
var originalLives=3
var Achievementsoundcounter=0
var goldSoundCounter=0
var silverSoundCounter=0
var bronzeSoundCounter=0
var medalsCounterArr=[0,0,0]
var levelsTimeArr=[0,0,0]
var levelstimer=0
var staticCounter=0
var myTime=0
var gameEnd=0
var level1counter=0
var level2counter=0
var level3counter=0
var status=false
