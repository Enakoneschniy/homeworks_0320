let flgA = 1
let numWeek


while(flgA){
    numWeek = prompt("Введите номер недели", 0)
    if(numWeek >= 8||numWeek == 0){
        alert("В неделе 7 дней")
    } else if(isNaN(numWeek)){
       alert("Должно быть введено число!")
     } else flgA = 0
     
    }

switch(numWeek){
    case "1":
    alert("Понедельник");
    break;
    case "2":
    alert("Вторник");
    break;
    case "3":
    alert("Среда");
    break;
    case "4":
    alert("Четверг");
    break;
    case "5":
    alert("Пятница");
    break;
    case "6":
    alert("Суботница");
    break;
    case "7":
    alert("Воскреcенье");
    break;
    }
        