window.onload = init();
var arr = document.getElementsByClassName("element");

function random() {
  var done = false;
  while (done === false) {
    var num = Math.floor(Math.random() * 16);
    if (arr[num].innerHTML === "") {
      arr[num].innerHTML = 2;
      done = true;
    }
  }
}

function av() {
  var x = false;
  var count = 0;
  for (var i = 0; i < 16; i++) {
    if (arr[i].innerHTML === "") {
      x = true;
      count++;
    }
  }
  if (x) {
    random();
  }
  if (count === 1) {
    check();
  }
}
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

function pause() {
  var pause = document.getElementById("pause");
  {
    pause.style.display = "block";
    var control = document.getElementById("control");
    control.style.display = "none";
  }
}
function reset() {
  var pause = document.getElementById("pause");
  pause.style.display = "none";
  init();
}
function start() {
  var splash = document.getElementById("splash");
  var game = document.getElementById("game");
  splash.style.display = "none";
  game.style.display = "block";
  random();
  random();
}
