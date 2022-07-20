window.onload = init();
var arr = document.getElementsByClassName("element");

function init() {
  var s = document.getElementById("splash");
  s.style.display = "block";
  var arr = document.getElementsByClassName("element");
  for (var i = 0; i < 16; i += 1) {
    arr[i].innerHTML = "";
  }
  var control = document.getElementById("control");
  control.style.display = "block";
  var score = document.getElementById("score");
  score.innerHTML = 0;
}
