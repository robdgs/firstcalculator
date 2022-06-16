// Calculator - CODE 0
// 1. enter two numbers in the console.log(sum(num1,num2)) to display the result in the console log
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(11, 18));

// Calculator - CODE 1

// 1. Ask the user to insert two numbers in the input
//   - IF the user doesent insert one or both numbers he receives back
//     an alert wich informs him about it
// 2. The result has to be displayed to the user in the console.log
const numberOne = prompt("Insert a number");
const numberTwo = prompt("Insert a number");
function getMultiply() {
  if (numberOne !== null && numberTwo !== null) {
    return numberOne * numberTwo;
  }
}
const multiply = getMultiply();
alert(multiply);

// Calculator - CODE 2

// 1. Ask the user to insert two numbers in the input
//    -no number means 0
// 2. The result has to be displayed to the user
function multiplication() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}
