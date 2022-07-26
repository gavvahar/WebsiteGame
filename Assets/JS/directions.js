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
  ourStorage.setItem("score", score.innerHTML);
  saveNumber();
}

function left() {
  var can = false;
  var access = false;
  var k;
  var score = document.getElementById("score");
  for (var i = 13; i > 0; i -= 4) {
    access = false;
    for (var j = i; j <= i + 2; j++) {
      if (arr[j].innerHTML !== "") {
        k = j;
        while (
          k > i - (i % 4) &&
          (parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k - 1].innerHTML === "")
        ) {
          if (
            parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            arr[k - 1].innerHTML =
              parseInt(arr[k - 1].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
            access = true;
            score.innerHTML =
              parseInt(arr[k - 1].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access === false;
          } else if (arr[k - 1].innerHTML === "") {
            arr[k - 1].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
          }
          k -= 1;
        }
      }
    }
  }
  if (can) {
    av();
  }
  ourStorage.setItem("score", score.innerHTML);
  saveNumber();
}

function down() {
  var can = false;
  var access = false;
  var k;
  var score = document.getElementById("score");
  for (var i = 11; i > 7; i -= 1) {
    access = false;
    for (var j = i; j >= 0; j = j - 4) {
      if (arr[j].innerHTML !== "") {
        k = j;
        while (
          k < 12 &&
          (parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k + 4].innerHTML === "")
        ) {
          if (
            parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            arr[k + 4].innerHTML =
              parseInt(arr[k + 4].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
            access = true;
            score.innerHTML =
              parseInt(arr[k + 4].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access === false;
          } else if (arr[k + 4].innerHTML === "") {
            arr[k + 4].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
          }
          k += 4;
        }
      }
    }
  }
  if (can) {
    av();
  }
  ourStorage.setItem("score", score.innerHTML);
  saveNumber();
}

function up() {
  var can = false;
  var access = false;
  var k;
  var score = document.getElementById("score");
  for (var i = 7; i > 3; i -= 1) {
    access = false;
    for (var j = i; j < i + 9; j += 4) {
      if (arr[j].innerHTML !== "") {
        k = j;
        while (
          k >= i &&
          (parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) ||
            arr[k - 4].innerHTML === "")
        ) {
          if (
            parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === false
          ) {
            arr[k - 4].innerHTML =
              parseInt(arr[k - 4].innerHTML) + parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
            access = true;
            score.innerHTML =
              parseInt(arr[k - 4].innerHTML) + parseInt(score.innerHTML);
          } else if (
            parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) &&
            access === true
          ) {
            access === false;
          } else if (arr[k - 4].innerHTML === "") {
            arr[k - 4].innerHTML = parseInt(arr[k].innerHTML);
            arr[k].innerHTML = "";
            can = true;
          }
          k -= 4;
        }
      }
    }
  }
  if (can) {
    av();
  }
  ourStorage.setItem("score", score.innerHTML);
  saveNumber();
}

window.addEventListener("keydown", function (e) {
  if (e.code == "ArrowLeft") {
    left();
  } else if (e.code == "ArrowRight") {
    right();
  } else if (e.code == "ArrowUp") {
    up();
  } else if (e.code == "ArrowDown") {
    down();
  }
});

function saveNumber() {
  for (i = 0; i < arr.length; i++) {
    ourStorage.setItem(`${i}`, arr[i].innerHTML);
  }
}
