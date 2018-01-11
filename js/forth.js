window.onload = function init()
{
  console.log( localStorage.getItem("level"));
  document.getElementById("2").onclick=function () {
    if(  localStorage.getItem("level")==2)
    {
      location.href="index.html"
    }
    else {
      alert("locked")
    }
  }
  document.getElementById("3").onclick=function () {
    if(  localStorage.getItem("level")==3)
    {
      location.href="index.html"
    }
    else {
      alert("locked")
    }
  }
}
