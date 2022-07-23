window.onload = init();
var arr = document.getElementsByClassName("element");

function right() {
  var can = false;
  var access = false;
  var k;
  var score = document.getElementById("score");
  for (var i = 14; i > 0; i -= 4) {
    access = false;
    for (var j = i; j >= i - 2; j--) {
      if (arr[j].innerHTML !== "") {
        k = j;
        while (
          k < i + 1 &&
          (parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k + 1].innerHTML === "")
        ) {
          if (
            parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            arr[k + 1].innerHTML =
              parseInt(arr[k + 1].innerHTML) + parseInt(arr[k].innerHTML);
            score.innerHTML =
              parseInt(arr[k + 1].innerHTML) + parseInt(score.innerHTML);
            arr[k].innerHTML = "";
            can = true;
            access = true;
          } else if (
            parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access === false;
          } else if (arr[k + 1].innerHTML === "") {
            arr[k + 1].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
          }
          k += 1;
        }
      }
    }
  }
  if (can) {
    av();
  }
}

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
  pause.style.display = "block";
  var control = document.getElementById("control");
  control.style.display = "none";
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

function resume() {
  var pause = document.getElementById("pause");
  pause.style.display = "none";
  var control = document.getElementById("control");
  control.style.display = "block";
}
