// let name = "ilya";
// alert("hello ${1}");
// alert('hello ${"name"}');
// alert("hello ${name}");

// function showX(x) {
//   return x;
// }
// alert(showX(28));

let a = prompt("ваше имя");
alert("привет " + a);

function plus() {
  let num1;
  let num2;
  let result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 + num2;
  document.getElementById("out").innerHTML = result;
}
function minus() {
  let num1;
  let num2;
  let result;
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;
  result = num1 - num2;
  document.getElementById("out").innerHTML = result;
  console.log("result");
}
function multiply() {
  let num1;
  let num2;
  let result;
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;
  result = num1 * num2;
  document.getElementById("out").innerHTML = result;
  console.log("result");
}
function divide() {
  let num1;
  let num2;
  let result;
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;
  result = num1 / num2;
  document.getElementById("out").innerHTML = result;
  console.log("result");
}
