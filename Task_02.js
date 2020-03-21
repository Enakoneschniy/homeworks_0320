let x
let y
let flgA = 1
let flgB = 1



while(flgA){
    x = prompt("Введите значение x", 0)
     if(isNaN(x)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }
while(flgB){
    y = prompt("Введите значение y", 0)
     if(isNaN(y)) {
       alert("Должно быть введено число!")
     } else flgB = 0
    }
    console.log(x)
    console.log(y)
    
    console.log(y=2-x)
    if(x==null||y==null){
        alert("Не введены значения")
    } else if(x>=-3&&x<=3&&y>=0&&y<=3){
        alert("Точка попадет в область")
    } else alert("Точка не попадает в область")