// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === undefined || input === true || input === false) {
//         return 'Hello, World!';
//     } else {
//         return 'Hello, ' + input + '!';
//     }
// }

function sayHello(input) {
    if (typeof input === 'string' ) {
        return 'Hello, ' + input + '!';
    } else {
        return 'Hello, World!';
    }
}

function isFive(input) {
    return input === 5;
}

function isEven(input) {
    return input % 2 === 0;
}

function isVowel(input) {
    return input === 'a' || input === 'A';
}

function add(num1, num2) {
    return num1 + num2;
}