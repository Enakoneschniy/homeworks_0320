"use strict"
let arr = [1, 2, 3, 4, 5, 6], arr2 = []
let tmp, count, num  = 0


num = arr.length - 1
count = arr.length

while (count >= 1){
    if ((arr[num]%2)==0){ 
        arr2.unshift(arr[(num-1)])
    } else {
        arr2.unshift(arr[(num+1)])
    }
         
    num--
    count--
}



document.write(arr)
document.write("<br>")
document.write(arr2)
