"use strict"
let arr = [ [1,2,3], [6,5,6,3,7,6,4,8], [6,5,3,4,5,6] ]
let n = 0, s = 0, sum = 0



for(let i of arr ){

        while(arr[n][s] != undefined) {
          sum += arr[n][s]
          s++
        }        
    s = 0
    n++   
}
document.write(sum)