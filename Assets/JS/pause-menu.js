let ourStorage = window.localStorage;
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
  ourStorage.clear();
}

function resume() {
  var pause = document.getElementById("pause");
  pause.style.display = "none";
  var control = document.getElementById("control");
  control.style.display = "block";
}
