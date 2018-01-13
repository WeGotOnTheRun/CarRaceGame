
window.onload=function(){
var	playercar=document.getElementById("a1");
playercar.src=img_array[localStorage.getItem("xmodel")];

function submitt(){
var player = document.getElementById("playername").value ;

sessionStorage.setItem("playername", player );}
document.getElementById("submitx").addEventListener("click", submitt);

}
