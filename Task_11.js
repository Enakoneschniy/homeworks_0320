"use strict"
let arr = []
let count = 1, elem, num, tmp = ""


 num = +prompt("Введите число")

for(count; count <= num; count++){ 
    elem = count
    elem = String(elem)
    for(let count2 = 1; count2 <= count; count2++){
         tmp += elem
        } 
        arr.push(tmp)
        tmp = ""
    
}
document.write(arr)