'use strict';
(function() {

  function addNumbers (num1, num2) {
    return num1 + num2;
  }

  function subtractNumbers (num1, num2) {
    return num1 - num2;
  }

  function multiplyNumbers (num1, num2) {
    return num1 * num2;
  }

  function divideNumbers (num1, num2) {
    return num1 / num2;
  }

  var numbers = document.getElementsByClassName('number');
  var operators = document.getElementsByClassName('op');
  var screenText = document.getElementById('screen');
  var operatorPressed = false;
  var number1Pressed = false;
  var number2Pressed = false;
  var equalPressed = false;
  var number1 = "";
  var number2 = "";
  var operation;

  document.getElementById('clear').addEventListener('click', clearScreen);
  document.getElementById('equalsign').addEventListener('click', equals);

  for (var i = numbers.length - 1; i >= 0; i--) {
    numbers[i].addEventListener('click', function(){printNum(this.innerText);});
  }

  for (var i = operators.length - 1; i >= 0; i--) {
    operators[i].addEventListener('click', function(){printOp(this.innerText, this.dataset.op);});
  }

  function printNum(val){
    if (equalPressed){
      clearScreen();
      equalPressed = false;
    }
    screenText.innerText = screenText.innerText + val;
    if (!operatorPressed){
      number1Pressed = true;
    }
    else if (operatorPressed){
      number2Pressed = true;
    }
  }

  function printOp(val, op){
    if (equalPressed){
      clearScreen();
      equalPressed = false;
    }

    if (!operatorPressed && number1Pressed){
      number1 = screenText.innerText;
      screenText.innerText = screenText.innerText + val;
      operatorPressed = true;
      operation = op;
    }
  }

  function equals(){
    if (number2Pressed){
      number2 = screenText.innerText;
      number2 = parseFloat(number2.slice(number1.length+1), 10);
      number1 = parseFloat(number1);

      if (operation == "add"){
        screenText.innerText = addNumbers(number1, number2);
      }
      else if (operation == "subtract"){
        screenText.innerText = subtractNumbers(number1, number2);
      }
      else if (operation == "multiply"){
        screenText.innerText = multiplyNumbers(number1, number2);
      }
      else if (operation == "divide"){
        screenText.innerText = divideNumbers(number1, number2);
      }
      else
        clearScreen();

      resetAll();
    }
  }

  function clearScreen(){
    document.getElementById('screen').innerText = '';
    resetAll();
  }

  function resetAll(){
    operatorPressed = false;
    number1Pressed = false;
    number2Pressed = false;
    equalPressed = true;
    number1 = "";
    number2 = "";
    operation = "";
  }


}());