window.onload = function init(){

  let playerIcon,playerlevel,playerLives,playerScore,levelTimer,road,game

  let canvas=document.getElementById('myCanvas')
  let canvas2=document.getElementById('myCanvas2')
  let canvas3=document.getElementById('myCanvas3')

  canvas.width=400
  canvas.height=window.innerHeight

  canvas2.width=400
  canvas2.height=window.innerHeight

  canvas3.width=window.innerWidth
  canvas3.height=window.innerHeight

  let car=new playerCar()
  var pp=new player("yasmine",car.model,false,0,0,0,0,0,false,false,false)
  player.car=car
  switch (localStorage.getItem("level")) {
    case "1":
              player.level=new level(60,5,1,1,1000,5,2000,1000,1000,10)
      break;
    case "2":
              player.level=new level(45,10,2,1,500,2,4000,1000,500,9)
      break;
    case "3":
              player.level=new level(30,20,3,1,300,0.5,5000,1000,100,8)
      break;

    default:
  }
  road=new Road(1,player.level.speed)

  //  var achievement = new achievements()
  document.getElementById("level").onclick=function(){
      location.href = "forth.html";
  }

  function init(){
    levelTimer=new Timer(canvas3.getContext("2d"),0.9,0.101,30,60)
    playerIcon=new PlayerIcon(canvas3.getContext("2d"),playerI,"yasmine")
    playerlevel=new LevelIcon(canvas3.getContext("2d"),localStorage.getItem("level"))
    playerLives=new  Lives(canvas3.getContext("2d"),0.23,0.055,0.02,0.061,"blue")
    playerScore=new ScoreIcon(canvas3.getContext("2d"),player)
    game =new Game(player,road,levelTimer,playerIcon,playerlevel,playerLives,playerScore)

  }

  window.addEventListener("keydown", keypress, false);
  function keypress(event){
       if(event.keyCode == 37)
       {
             if(car.location.x>canvas.width/6)
             {
                car.move("left")
             }
        }
        else if(event.keyCode == 39)
        {
               if(car.location.x<5*canvas2.width/6)
               {
                 car.move("right")
               }
        }
   }
   init()
}
