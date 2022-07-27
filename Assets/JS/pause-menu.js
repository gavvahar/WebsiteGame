function reset() {
  var pause = document.getElementById("pause");
  pause.style.display = "none";
  init();
  ourStorage.clear();
}
