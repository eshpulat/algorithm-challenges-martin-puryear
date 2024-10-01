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

// 4 -- Double vision

function double(arr) {
    let doubleArray = [];
    for (char of arr) {
        doubleArray.push(char * 2);
    }

    return doubleArray;
}

console.log(double([1, 2, 3]));

// 5 -- Count Positives

function countPositives(arr) {
    let count = 0;

    for (char of arr) {
        if (char > 0) {
            count += char;
        }
    }
    arr.push(count);
    return arr;
}

console.log(countPositives([-1, 1, 1, 1]));

// 6 -- Evens and Odds ????????

// function thatsOdd()

// 7 -- increment the seconds

function incrementTheSeconds(arr) {
    let oddNum = [];
    for (char of arr) {
        if (char % 2 !== 0) {
            oddNum.push(char);
        }
    }
    return oddNum;
}

console.log(incrementTheSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 8 -- Previous length

function previouslength(arr) {
    let strlength = [];
    for (let i = 0; i < arr.length; i++) {
        strlength.push(arr[i].length);
    }
    return strlength;
}

console.log(previouslength(["string", "number", "is"]));

// 9 -- add seven to most

function addSeven(arr) {
    let mostSeven = [];
    for (char of arr) {
        mostSeven.push(char + 7);
    }

    return mostSeven;
}

console.log(addSeven([1, 2, 3, 4, 5, 6]));

// 10 -- reverse array

function reverseNumber(arr) {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseNumber([3, 1, 6, 4, 2]));

// 11 -- Outlook negative

function negativeNumber(arr) {
    let makeNegative = [];

    for (char of arr) {
        if (char < 0) {
            makeNegative.push(char);
        } else {
            makeNegative.push(-char);
        }
    }

    return makeNegative;
}

console.log(negativeNumber([1, -3, 8]));

// 12 -- Always hungry

function alwaysHungry(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            result.push("yummy");
        } else {
            result.push("I'm hungry");
        }
    }
    return result;
}

console.log(alwaysHungry(["is", "food", "no", "yes", "food"]));

// 13 -- Swap toward the center ??????

// 14 -- scal the array

function scalTheArray(arr, num) {
    let result = [];

    for (char of arr) {
        result.push(char * num);
    }

    return result;
}

console.log(scalTheArray([1, 2, 3, 4], 2));
