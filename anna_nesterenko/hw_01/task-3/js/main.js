'use strict';


let inputDayWeeks = prompt("Введите, пожалуйста день недели");
let numberDauWeeks = Number(inputDayWeeks);

if(inputDayWeeks === null){
  alert(" Ну и ладно!Пока!");
}

else if (inputDayWeeks.length > 1 || numberDauWeeks >=  8 || numberDauWeeks === 0) {
  alert("Такого дня недели нет, барашка!");
}

else {
  switch (inputDayWeeks){
    case "1":
      alert(`${inputDayWeeks}:Понедельник!`);
      break;
      
    case "2":
      alert(`${inputDayWeeks}:Вторник`);
      break;
    
    case "3":
      alert(`${inputDayWeeks}:Среда`);
      break;
      
    case"4":
      alert(`${inputDayWeeks}:Чeтверг`);
      break;
      
    case "5":
      alert(`${inputDayWeeks}:Пятница`);
      break;
      
    case "6":
      alert(`${inputDayWeeks}:Суббота`);
      break;
      
    case "7":
      alert(`${inputDayWeeks}:Воскресенье`);
  }
}
