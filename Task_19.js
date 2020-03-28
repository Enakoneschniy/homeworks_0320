"use strict"
let arr  = [[], [], [], [], [], [], [], [], [], []]
let str = 0, st = 0, tmp, tmp2

while(st <= 9){
    arr[str][st] = ++st
}
st = 0
while(str <= 9){
    arr[str][st] = ++str
}

st = 0
while(st <= 8){
    str = 0
    st++
    tmp = arr[str][st] 

    while(str <= 8){
      tmp2 = arr[str][st]
      str++        
      arr[str][st] = tmp2 + tmp
       
    }
 
}
  