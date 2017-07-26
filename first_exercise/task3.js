try {
    var userParameter = prompt ("Enter the parameter for the Fibonacci number:");
    if (isNaN (userParameter)) {
        throw new Error ("Data is not a number.");
    }

    var mul = 1;
    if (userParameter < 0) {                        // Реализация Фибоначчи для положительных значений
        mul = (-userParameter % 2 === 0) ? -1 : 1;
        userParameter = -userParameter;
    }

    var firstNumber = 1, secondNumber = 1;// Реализация Фибоначчи для отрицательных значений
    for (var i = 2; i < userParameter; i++) {
        secondNumber = firstNumber + secondNumber;
        firstNumber = secondNumber - firstNumber;
    }

    var result = secondNumber * mul;
    alert ("Fibonacci number: " + result);
} catch (err) {
    alert (err);
}
