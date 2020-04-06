'use strict'
function isNumberlnRange(a){
    if (a > 0 && a < 10){
        return true
    } else  return false

}

let a = +prompt("Введите число")

console.log(isNumberlnRange(a))