"use strict"
let str = "123456"


function turnNum(str){
let str2 = "" 
    for (let n = 1; n <= str.length; n++){
         str2 += str[n]
         str2 += str[--n]
         n += 2
    }
    return str2
}
turnNum(str)
document.write(turnNum(str))


