// 1 -- Countdown

function countDown(num) {
    let countNum = 0;

    for (let i = num; i > 0; i--) {
        countNum += i;
    }
    return [countNum];
}

// console.log(countDown(10));

// 2 -- print and return

function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

// console.log(printAndReturn([2, 6]));

// 3 -- First plus length

function firstPlusLength(arr) {
    let countFirstValue = 0;
    for (let i = 0; i < arr[0].length; i++) {
        countFirstValue += i;
    }
    let result = countFirstValue + arr.length;
    return result;
}

// console.log(firstPlusLength(["what", 1, 2, 3]));

// 4 -- valuesGreaterThenSecond

function valuesGreaterThenSecond(arr) {
    let result = [];
    for (char of arr) {
        if (char > 2) {
            result.push(char);
        }
    }
    return result.length;
}

// console.log(valuesGreaterThenSecond([1, 3, 5, 7, 9, 13]));

// 5 -- this length that value

function lengthValue(arr) {
    let result = [];

    for (let i = 0; i <= arr[0]; i++) {
        if (i === arr[1]) {
            return "jinx";
        } else {
            result.push(i);
        }
    }
    result.push(arr[1]);
    return result.length;
}

// console.log(lengthValue([3, 4]));

// 6 -- fit the first value

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        return "Too big";
    }
    if (arr[0] < arr.length) {
        return "Too small!";
    } else {
        return "Just right";
    }
}

// console.log(fitTheFirstValue([1, 2, 3, 4, 5, 6]));

// 7 -- Fahrenheit to Celsius

function fahrenheitToCelsius(num) {
    let celsius = (num - 32) / (9 / 5);
    return celsius;
}

console.log(fahrenheitToCelsius(45));

// 8 --   Celsius to Fahrenheit

function celsiusToFahrenheit(num) {
    let fahrenheit = (9 / 5) * num + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(200));
