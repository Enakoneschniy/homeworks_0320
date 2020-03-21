let x
let a 
let b 
let flgA = 1
let flgB = 1



while(flgA){
    a = prompt("Введите значение a", 0)
     if(isNaN(a)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }
while(flgB){
    b = prompt("Введите значение b", 0)
     if(isNaN(b)) {
       alert("Должно быть введено число!")
     } else flgB = 0
    }


    if(a==null||b==null){
        alert("Не введены значения")
    } else if(a>b){
        x=a+b/2*4
    } else if(a==b){
        x=400
    } else if(a<b){
        x=a-b+2/b*4
    }
    alert("x=" + x)