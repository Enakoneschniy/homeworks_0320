let exper
let flgA = 1



while(flgA){
    exper = +prompt("Введите ваш стаж", 0)
     if(isNaN(exper)) {
       alert("Должно быть введено число!")
     }  else flgA = 0
    }
if(exper>=0&&exper<=3){
    alert("Надбавка 0%")
} else if(exper>=3&&exper<=10){
    alert("Надбавка 10%")
} else if(exper>=10&&exper<=20){
    alert("Надбавка 20%")
} else if(exper>20){
    alert("Надбавка 25%")
}