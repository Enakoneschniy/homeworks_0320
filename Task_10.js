"use strict"
let arr = ["x"]
let b = +prompt("Введте длинну масива")
let a  
let c = "x"

for(a=0; a<=b; a++){
    c += " x"
    arr.push(c)
    
    
    document.write(arr)
    document.write(" <br>")
}
