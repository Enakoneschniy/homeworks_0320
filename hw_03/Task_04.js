'use strict'
function isEven(a){
    if (a % 2 == 0){
        return true
    } else  return false

}

let a = +prompt("Введите число")

console.log(isEven(a))