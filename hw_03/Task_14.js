'use strict'
let arr = [ "var text hello", 4, 5, "hello world", 8, 9 ]

 
    document.write(inArray("hello world", arr))



function inArray(a, arr){
 
   for(n = 0; n < arr.length; n++){

    if ( arr[n] == a){
        return true
}
}
if (n == arr.length) return false
}