while (true) {
    var firstNumber = prompt ("Enter first number:");
    if (isNaN (firstNumber)) {
        alert ("First number is not a number.");
        break;
    }

    var secondNumber = prompt("Enter second number:");
    if (isNaN (secondNumber)){
        alert ("Second number is not a number.");
        break;
    }

    if (firstNumber === secondNumber) {
        alert ("Numbers are equal.")
    } else if (firstNumber < secondNumber) {
        alert ("First number is less.")
    } else if (firstNumber > secondNumber) {
        alert ("Second number is less.")
    }
}
