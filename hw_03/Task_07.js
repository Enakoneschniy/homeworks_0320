'use strict'
a = +prompt("Введите число")
b = +prompt("Введите степень числа")

st(a, b)
function st(a, b){
    let c
    c = a**b
    return c
}
console.log(st(a, b))