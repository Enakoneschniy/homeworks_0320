"use strict"
let arr = [], arr2 = []
let tmp, count, num  = 0


num = arr.length - 1
count = arr.length

while (count >= 1){
    if ((arr[num]%2)==0){ 
        arr2.push(arr[(num-1)])
    } else {
        arr2.push(arr[(num+1)])
    }
         
    num--
    count--
}



document.write(arr)
document.write("<br>")
document.write(arr2)
