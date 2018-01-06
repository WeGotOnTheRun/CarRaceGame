let canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
let canvas2=document.getElementById('myCanvas2');
ctx2 = canvas.getContext("2d");
window.onload = function init()
{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  canvas2.width=window.innerWidth;
  canvas2.height=window.innerHeight;
  var car=new enemyCar();
  var road=new Road();
}
