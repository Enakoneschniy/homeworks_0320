let x
let y
let flgA = 1
let flgB = 1



while(flgA){
    x = +prompt("Введите значение x", 0)
     if(isNaN(x)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }
while(flgB){
    y = +prompt("Введите значение y", 0)
     if(isNaN(y)) {
       alert("Должно быть введено число!")
     } else flgB = 0
    }

    if(x==null||y==null){
        alert("Не введены значения")
    } else if(x>4||x<-4||y<0|y>4){
        alert("Точка не попадет в область")
    } else if(x+y<=4&&x-y>=-4){
      alert("Точка попадает в область")
    } else 
      alert("Точка не попадет в область")