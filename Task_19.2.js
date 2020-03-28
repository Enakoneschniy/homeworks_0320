"use strict"
let arr = [[], [], [], [], [], [], [], [], [], []]
let str = 0, st = 0, a = 3

while (str <= 4 ){

   for (st = 0; st <= 9; st++){
        arr[str][st] = 3
    }
str++
}
str = 5
    while (str <= 9){

        for (st = 0; st <= 9; st++){
          arr[str][st] = 5
        }
str++
    }
str = 0

      for (st = 0; st <= 9; st++){
          arr[str][st] = 1
          str++
      }

str = 0
 
    for (st = 9; st >= 0; st--){
      arr[str][st] = 2
      str++
    }


str = 1
while(str <= 4){
    for (st = 0; st < str; st++){
     arr[str][st] = 6
    
    }
    str++
}

str = 5
while(str <= 8){
   
    for (st = a; st >= 0; st--){
     arr[str][st] = 6
    }
    str++
    a--
    
}
str = 1
a = 9
while(str <= 4){
    for (st = 9; st >= a; st--){
     arr[str][st] = 4
    
    }
    str++
    a--   
}
a = 6
str = 5
while(str <= 8){
   
    for (st = 9; st >= a; st--){
     arr[str][st] = 4
    }
    str++
    a++
}

console.log(arr)
//console.log(i)


