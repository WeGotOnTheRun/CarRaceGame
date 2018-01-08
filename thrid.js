window.onload=function(){
var n=0;
var img_arr=["3.jpg","download.jpg","images.jpg"];
var length = img_arr.length ;
var img=document.getElementById('img1');

back=function(){
  n=(n+length-1)%length;
  img.src=img_arr[n];
}
frword=function(){
  n=(n+1)%length
  img.src=img_arr[n];
}
popup=function(){
	document.getElementById("pop-up").style.display="block";
	
}
document.getElementById("choose").addEventListener("click",popup);
document.getElementById("back").addEventListener("click", back);
document.getElementById("forward").addEventListener("click", frword);
}
