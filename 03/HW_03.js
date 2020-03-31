'use strict'

// Task 1
/*
function fillArr (a, b) {
    for (let i=0; i<b; i++) {
        arr[i] = a;
    }
}

let arr = [];

fillArr ('x', 5);

console.log (arr);
*/




// Task 2
/*
const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

function sumItems (array) {
    for (let item of array) {
        if (Array.isArray(item)) {
            sumItems (item);
        } else {
            sum += item;
        }
    }
}

sumItems (arr);

console.log (sum);
*/



// Task 3
/*
function isNumberInRange (value) {
    return (value>0 && value<10) ? true : false;
}

console.log (isNumberInRange (7));
*/




// Task 4
/*
function isEven (value) {
    return (value % 2 === 0) ? true : false;
}

console.log (isEven (7));
*/




// Task 5
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr.filter (value => value % 2 === 0);

arr = evenArr;
console.log (arr);
*/



// Task 6
/*
let arr = [];

function getDivisors (value) {
    for (let i=1; i<=value; i++) {
        (value % i === 0) ? arr.push (i) : false
    }
}

getDivisors (6);
console.log (arr);
*/



// Task 7
/*
function numberToPower (a, b) {
    if (b === 1) {
        return a;
    } else {
        return a * numberToPower (a, b-1);
    }
}

console.log (numberToPower (2, 3));
*/



// Task 8
/*
function checkAge (age) {
    age > 16 ? alert ('Добро пожаловать') : alert ('Вы еще молоды');
}

let userAge = +prompt ('Какой ваш возраст?');

checkAge (userAge);
*/



// Task 9
/*
function checkAge () {
    let userAge = +prompt ('Какой ваш возраст?');
    if (userAge === 0 || isFinite (userAge) === false) {
        alert ('Введите возраст');
        checkAge();
    } else {
        userAge > 16 ? alert ('Добро пожаловать') : alert ('Вы еще молоды');
    }
}

checkAge();
*/


// Task 10
/*
function totalArr (value) {
    if (value === undefined) {
        alert ('Ошибка');
    } else {
        let result = value.length;
        alert (result);
    }
}

const arr = [];

totalArr (arr);
*/



// Task 11
/*
function checkUserNumber () {
    if (userNumber > 10) {
        return userNumber * userNumber;
    } else if (userNumber < 7) {
        alert ('Число меньше семи');
    } else if (userNumber === 8 || userNumber === 9) {
        return userNumber;
    }
}

let userNumber = +prompt ('Введите число');
checkUserNumber();
*/



// Task 12



































