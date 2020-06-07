function check() {
  var x = 5;
  if (x > 5) {
    var bol = "false";
    document.getElementById("what").innerHTML = bol;
  } else {
    document.getElementById("what").innerHTML = !bol;
  }
}
