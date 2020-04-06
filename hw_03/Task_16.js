"use strict"

function sequence(start, step){
  
    return function(){
       for (let i = 0; i < Infinity; i++) {
  
        return  start += step 
       
      }
       
    }

}
let generator = sequence(10, 3)

console.log(generator())
console.log(generator())
console.log(generator())




