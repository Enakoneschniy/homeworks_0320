'use strict';
// 3. Задача (Оператор switch)
//   При помощи prompt запросить у пользователя номер дня недели.
//     Вывести при помощи alert название дня недели.
//     если пользователь ввел некорректное значение вывести сообщение "Такого дня недели не существует!"

let inputDayWeeks = prompt("Введите, пожалуйста день недели");

if(inputDayWeeks === null){
  alert(" Ну и ладно!Пока!");
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
      break;
      
    default:
      alert("Такого дня недели нет, барашка!");
  }
  
}
