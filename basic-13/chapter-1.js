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
printIntsAndSum();
