function celToFah(){
  var cel = document.getElementById("value1").value;
  var result = (cel * (9/5)) + 32;
  document.getElementById("value2").value = result;
}
function fahToCel(){
  var fah = document.getElementById("value2").value;
  var result = ((fah - 32) * 5)/9;
  document.getElementById("value1").value = result;
}
function reset(){
  document.getElementById("value1").value = 0;
   document.getElementById("value2").value = 0;
  
}