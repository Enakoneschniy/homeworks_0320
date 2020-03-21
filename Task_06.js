let a  
let flgA = 1


while(flgA){
    a = +prompt("Введите номер квртиры", 0)
     if(isNaN(a)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }

    if(a==null){
        alert("Не введены значения")
    } else if(a>=1&&a<=20){
        alert("Квартираиз 1-го подьезда")
    } else if(a>=21&&a<=48){
        alert("Квартираиз 2-го подьезда")
    } else if(a>=49&&a<=90){
        alert("Квартираиз 3-го подьезда")
    } else 
        alert("Такой квартиры в этом доме нет!")
