'use strict'
let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 1, 2, 4]

if (arr == undefined)
alert("ERROR")

arrLenght(arr)


function arrLenght(arr){ 

  let b = 0
    for(i of arr){
        b++
  }
return b


}
console.log(arrLenght(arr))