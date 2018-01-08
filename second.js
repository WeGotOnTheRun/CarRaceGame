window.onload=function(){
var n=0;
var img_arr=["red.png","yellow.png","white.png"];
var length = img_arr.length ;
var img=document.getElementById('img1');

rotateAnimation("img1",30);
back=function(){
  n=(n+length-1)%length;
  img.src=img_arr[n];
  degrees = 1;
  clearInterval(looper);
  rotateAnimation("img1",30);
}
frword=function(){
  n=(n+1)%length;
  img.src=img_arr[n];
  clearInterval(looper);
  degrees = 1;
  rotateAnimation("img1",30);
}
document.getElementById("back").addEventListener("click", back);
document.getElementById("forward").addEventListener("click", frword);
}
var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);

		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
}}
pause=function(){img.src=img_arr[n];}
document.getElementById("choose").addEventListener("click", pause);

