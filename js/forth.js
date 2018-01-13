window.onload = function init()
{
  document.getElementById("1").onclick=function () {
      localStorage.setItem("level",1);
      location.href="index.html"
  }
  document.getElementById("2").onclick=function () {
    if(localStorage.getItem("highLevel")>=2)
    {
      localStorage.setItem("level",2);
      location.href="index.html"
    }
    else {
      alert("locked")
    }
  }
  document.getElementById("3").onclick=function () {
    if(localStorage.getItem("highLevel")==3)
    {
      localStorage.setItem("level",3);
      location.href="index.html"
    }
    else {
      alert("locked")
    }
  }
}
