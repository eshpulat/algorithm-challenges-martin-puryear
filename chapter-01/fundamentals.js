// 1 -- setting amd swapping

let myNumber = 42;
let myName = "Muhammad";

myName = myNumber;
// console.log(myName);

// 2 -- Print -52 to 1066

for (let i = -52; i < 1066; i++) {
    // console.log(i);
}

// 3 -- don't worry, be happy

function beCheerful() {
    // console.log("good morning");
}

for (let i = 0; i < 98; i++) {
    beCheerful();
}

// 4 --  Multiples of three - but not all
for (let i = -300; i < 0; i++) {
    if (i === -3 || i === -6) {
        continue;
    }
    // console.log(i * 3);
}

// 5 -- Printing integr with while

let num = 2000;
while (num <= 5280) {
    // console.log(num);
    num++;
}

// 6 -- you say it is your birthday

function yourBirthday(day, month) {
    let birhtDay = 29;
    let birthMonth = 12;

    if (birhtDay === day || birthMonth === month) {
        return "How did you know?";
    } else {
        return "Just another day .....";
    }
}

// console.log(yourBirthday(23, 8));
// console.log(yourBirthday(29, 12));

// 7 -- Leap year

function leapYear(year) {
    if (year % 4 === 0) {
        return "This si Leap year";
    } else {
        return "thsi not Leap year";
    }
}

// console.log(leapYear(2024));
// console.log(leapYear(2020));
// console.log(leapYear(1999));

// 8 -- print and count

const result = [];
for (let i = 612; i < 4096; i++) {
    result.push(i * 5);
}
// console.log(result.length);

// 9 -- Multiples of six
let start = 6;
while (start <= 60000) {
    // console.log(start);
    start *= 6;
}

// 10 -- counting the dojo way

for (let i = 1; i < 100; i++) {
    if (i % 5 === 0) {
        // console.log("Coding");
    }
    if (i % 10 === 0) {
        // console.log("Dojo");
    }
}

// 11 -- what do you know

// 12 -- Whoa , thats Suckers huge
let sumOdd = 0;
for (let i = -300000; i < 300000; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
    }
}
// console.log(sumOdd);

// 13 -- countdown by four

let number = 2016;

while (number > 0) {
    number -= 4;
}

// console.log(num);

// 14 -- flexible countdown

function countdownByFours(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

countdownByFours(2, 9, 3);

// 15 -- the finel Countdown

function flexibleCountdown(param1, param2, param3, param4) {}
