"use strict"
let arr = []
let count, elem, sum = null

for(count = 1; count<=10; count++){
     elem = Math.round(Math.random()*5)
     
    arr.push(elem)
    elem = ""
}

count = -1
  
while(sum <= 12){
    sum += arr[count+1]
    count++
    }

document.write(arr)
document.write("<br>")
document.write(count)