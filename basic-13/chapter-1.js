// print 1-255

function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

// print1To255();

// print ints and Sum 0 - 255

function printIntsAndSum() {
    let result = 0;
    for (let i = 0; i <= 255; i++) {
        result += i;
    }
    console.log(result);
}
// printIntsAndSum();

// print max of Array

function printMaxOfArray(arr) {
    let maxValue = arr[0];
    for (let num of arr) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return maxValue;
}

console.log(printMaxOfArray([2, 4, 3, 6, 1]));

// Return Odds Arrays 1-255
