'use strict'
let str = "var_text_hello"
let a = "", b = "", flg = 0 

for ( i of str ){
    a += i
         
        if ( flg == 1){
          a = a.toUpperCase() 
          flg = 0
        }
        
        if( i == "_"){
          a = ""
          flg = 1
         }
         
    b += a
    a = ""
    i = ""     
    }
 
console.log(b)