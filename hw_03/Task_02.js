'use strict'
let sum = 0, arr = [[[23, 3, 5, 65], [4, 10, 6, 8, 2, 34, 6]], [[2, 3, 4, 5], [7, 5, 9, 89]]]
    for(const i of arr){
         for (const s of i){
              for(const b of s){
               sum += b
              }
         }
      }
console.log(sum)