// 1 -- Bigge size

function makeItbig(arr) {
    const result = [];
    for (char of arr) {
        if (char > 0) {
            char = "big";
            result.push(char);
        }
        if (char < 0) {
            result.push(char);
        }
    }
    return result;
}
console.log(makeItbig([-1, 3, 5, -5]));

// 2 -- Print low return high

function lowAndHigh(arr) {
    const result1 = [];
    const result2 = [];

    if (arr[0] > arr[1]) {
        result1.push(arr[0]);
    } else if (arr[1] > arr[0]) {
        result2.push(arr[1]);
    }
    if (arr[0] < arr[1]) {
        result1.push(arr[0]);
    }

    return `lowest value ${result1}, Highest value ${result2}`;
}
console.log(lowAndHigh([3, 5]));

// 3 -- print one return another

function secondToLast(arr) {
    console.log(arr[arr.length - 2]);
    let result = 0;
    for (char of arr) {
        if (char % 2 !== 0) {
            result = char;

            break;
        }
    }
    return result;
}

console.log(secondToLast([2, 4, 3, 7, 1, 1, 9]));
