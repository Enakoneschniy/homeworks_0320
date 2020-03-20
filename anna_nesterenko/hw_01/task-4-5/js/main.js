'use strict';



// Вариант первый для пробы
// const  firstInput = prompt("Введите первое  число");
// const secondInput = prompt("Введите второе число");
// let numberFirst = Number.parseInt(firstInput);
// let numberSecond = Number.parseInt(secondInput);
//
//
// if(firstInput === null || secondInput === null ){
//   alert("Ну, выход  так выход");
// }
//
// else if(isNaN(numberFirst) || isNaN(numberSecond) ){
//   alert("Это не числа!");
// }
//
// else {
//
//   if (numberFirst > numberSecond) {
//     alert(`Первое больше: ${numberFirst}`);
//   }
//   else {
//     alert(`Второе больше: ${numberSecond}`);
//   }
// }
//

// console.log(numberFirst);
// console.log(numberSecond);




// вариант второй сразу с учетом равенства
const  firstInput = prompt("Введите первое  число");
const secondInput = prompt("Введите второе число");
let numberFirst = Number.parseInt(firstInput);
let numberSecond = Number.parseInt(secondInput);


if(firstInput === null || secondInput === null){
 alert("Не хотите - не надо!");
}
else if(isNaN(firstInput) || isNaN(secondInput)) {
  alert("Вы ввели не число!");
}

else if ( numberFirst === numberSecond){
  alert("Числа равны!");
}

else {
  let maxNumber = Math.max(numberFirst, numberSecond);
  alert(`Это большее: ${maxNumber}`);
}

