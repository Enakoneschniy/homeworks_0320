'use strict'
let num = +prompt("Введите число")

squer(num)


function squer(num){ 

  if( num >= 10){
      num **= 2
      document.write(num)
      return num
  } else if(num <= 7){
      document.write("Число меньше 7")
  } else if(num == 8){
      num = 7
      document.write(num)
      return num
  } else if(num == 9){
      num = 8
      document.write(num)
      return num
  }
  
}