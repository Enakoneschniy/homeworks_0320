'use strict'
let str = "abc defg ijkl mnop"
let a = "", b = "", i = " "


function ucfirst(a){
a = a[0].toUpperCase() + a.slice(1)
return a
}

    for ( i of str ){
        a += i
         if( i == " "){
         
         b += ucfirst(a)
         a = ""
         i = " "
     } 
    }
 
    b += ucfirst(a)

console.log(b)