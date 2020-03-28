"use strict"
let arr = [[], [], [], [], [], [], [], [], [], []]
let str = 0, st = 0, tmp = 0, a = 1
while(str <= 9){
    for (st = 0; st <= str; st++){
      arr[str][st] = 1 
    }
    str++
}
st = 0
str = 0   
while(str <= 9){
    str = a
        while (str <= 8){
        tmp = arr[str][st]
        st++
        tmp += arr[str][st] 
        str++
        arr[str][st] = tmp
        st--
        }
        st++
        a++
    }



console.log(arr)
//console.log(i)


