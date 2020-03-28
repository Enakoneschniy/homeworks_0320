"use strict"
let arr = [], arr2 = []
let count, tmp , num  = 0

for(count = 1; count<=30; count++){
     tmp = Math.round(Math.random()*12)
     
    arr.push(tmp)
    tmp = ""
}
num = arr.length - 1


while(count >= 1) {

   if(arr[num]>=0&&arr[num]<=10){
       arr2.unshift(arr[num])
       console.log(arr[num]);
       
   }
  
    num--
    count--
}

document.write(arr)
document.write("<br>")
document.write(arr2)
