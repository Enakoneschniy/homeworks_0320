"use strict"
let arr = [], arrtmp = []
let count, tmp , num  = 0

for(count = 1; count<=11; count++){
     tmp = Math.round(Math.random()*5)
     
    arr.push(tmp)
    tmp = ""
}
num = arr.length - 1
document.write(arr)

while(count >= 1) {
   
    tmp = arr[num]
    arr.pop(arr)
    arrtmp.push(tmp)
    count--
    num--
    
}
arr = arrtmp
document.write("<br>")
document.write(arr)
