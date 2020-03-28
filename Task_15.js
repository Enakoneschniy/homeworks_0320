"use strict"
let arr = [], arr2 = []
let count, tmp , num  = 0

for(count = 1; count<=30; count++){
     tmp = Math.round(Math.random()*6)
     
    arr.push(tmp)
    tmp = ""
}
num = arr.length - 1
  
    while(count >= 0){
      if((arr[num]%2)==0){
         arr2.unsift(arr[num])
      }
      num--
      count--
    }

document.write(arr)
document.write("<br>")
document.write(arr2)
