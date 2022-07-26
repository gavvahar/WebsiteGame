var ourStorage = window.localStorage;
var arr = document.getElementsByClassName("element");
window.onload = init();

function end() {
  alert(
    "Your Score Is:" + document.getElementById("score").innerHTML + " Game Over"
  );
  reset();
}

function random() {
  var done = false;
  while (done === false) {
    var num = Math.floor(Math.random() * 16);
    if (arr[num].innerHTML === "") {
      x2 = randomNumber(2, 4);
      let array = [2, 4];
      let index = randomNumber(0, 1);
      arr[num].innerHTML = array[index];
      console.log(array[index]);
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

function check() {
  var x = false;
  for (var i = 0; i < 16; i++) {
    switch (i) {
      case 0:
        if (
          arr[1].innerHTML === arr[0].innerHTML ||
          arr[4].innerHTML === arr[0].innerHTML
        ) {
          x = true;
        }
        break;
      case 1:
        if (
          arr[1].innerHTML === arr[0].innerHTML ||
          arr[2].innerHTML === arr[1].innerHTML ||
          arr[1].innerHTML === arr[5].innerHTML
        ) {
          x = true;
        }
        break;
      case 2:
        if (
          arr[2].innerHTML === arr[1].innerHTML ||
          arr[3].innerHTML === arr[2].innerHTML ||
          arr[2].innerHTML === arr[6].innerHTML
        ) {
          x = true;
        }
        break;
      case 3:
        if (
          arr[3].innerHTML === arr[2].innerHTML ||
          arr[3].innerHTML === arr[7].innerHTML
        ) {
          x = true;
        }
        break;
      case 4:
        if (
          arr[4].innerHTML === arr[0].innerHTML ||
          arr[4].innerHTML === arr[8].innerHTML ||
          arr[4].innerHTML === arr[5].innerHTML
        ) {
          x = true;
        }
        break;
      case 5:
        if (
          arr[5].innerHTML === arr[1].innerHTML ||
          arr[5].innerHTML === arr[6].innerHTML ||
          arr[4].innerHTML === arr[5].innerHTML ||
          arr[5].innerHTML === arr[9].innerHTML
        ) {
          x = true;
        }
        break;
      case 6:
        if (
          arr[6].innerHTML === arr[5].innerHTML ||
          arr[6].innerHTML === arr[2].innerHTML ||
          arr[6].innerHTML === arr[7].innerHTML ||
          arr[6].innerHTML === arr[10].innerHTML
        ) {
          x = true;
        }
        break;
      case 7:
        if (
          arr[7].innerHTML === arr[3].innerHTML ||
          arr[7].innerHTML === arr[11].innerHTML ||
          arr[7].innerHTML === arr[6].innerHTML
        ) {
          x = true;
        }
        break;
      case 8:
        if (
          arr[8].innerHTML === arr[4].innerHTML ||
          arr[8].innerHTML === arr[12].innerHTML ||
          arr[8].innerHTML === arr[9].innerHTML
        ) {
          x = true;
        }
        break;
      case 9:
        if (
          arr[9].innerHTML === arr[8].innerHTML ||
          arr[9].innerHTML === arr[5].innerHTML ||
          arr[9].innerHTML === arr[10].innerHTML ||
          arr[9].innerHTML === arr[13].innerHTML
        ) {
          x = true;
        }
        break;
      case 10:
        if (
          arr[10].innerHTML === arr[9].innerHTML ||
          arr[10].innerHTML === arr[11].innerHTML ||
          arr[10].innerHTML === arr[6].innerHTML ||
          arr[10].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
      case 11:
        if (
          arr[11].innerHTML === arr[7].innerHTML ||
          arr[11].innerHTML === arr[15].innerHTML ||
          arr[11].innerHTML === arr[10].innerHTML
        ) {
          x = true;
        }
        break;
      case 12:
        if (
          arr[12].innerHTML === arr[8].innerHTML ||
          arr[12].innerHTML === arr[13].innerHTML
        ) {
          x = true;
        }
        break;
      case 13:
        if (
          arr[13].innerHTML === arr[12].innerHTML ||
          arr[13].innerHTML === arr[9].innerHTML ||
          arr[13].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
      case 14:
        if (
          arr[14].innerHTML === arr[13].innerHTML ||
          arr[14].innerHTML === arr[10].innerHTML ||
          arr[14].innerHTML === arr[15].innerHTML
        ) {
          x = true;
        }
        break;
      case 15:
        if (
          arr[15].innerHTML === arr[11].innerHTML ||
          arr[15].innerHTML === arr[14].innerHTML
        ) {
          x = true;
        }
        break;
    }
  }
  if (!x) {
    end();
  }
}

function init() {
  var s = document.getElementById("splash");
  s.style.display = "block";
  var control = document.getElementById("control");
  control.style.display = "block";
}

function start() {
  var splash = document.getElementById("splash");
  var game = document.getElementById("game");
  splash.style.display = "none";
  game.style.display = "block";
  for (var i = 0; i < 16; i += 1) {
    arr[i].innerHTML = "";
  }
  var score = document.getElementById("score");
  score.innerHTML = 0;
  random();
  random();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
