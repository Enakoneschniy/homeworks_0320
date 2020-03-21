let x
let y
let sum 
let R
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

    R = Math.sqrt((x*x)+(y*y))
    sum = x+y;
   console.log(sum) 

    if(x==null||y==null){
        alert("Не введены значения")
    } else if(R<=1||x<=0&&x>=-2&&y<=0&&y>=-2&&(x+y)>=-2){
        alert("Точка попадет в область")
    } else alert("Точка не попадает в область")
    