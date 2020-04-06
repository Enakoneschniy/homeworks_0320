'use strict'
let b = 1, arr = []

a = +prompt("Введите число")

while((a-b) >= 0){
arr.push(getDivisors(a))
b++
}

function getDivisors(a){
    if ((a-b) >= 0){
        return b
        } else return b

}
console.log(arr)