'use strict';

// Задача (Попадание точки в область)
// При помощи prompt запросить у пользователя координату по оси x и координату по оси y.
//   Далее определить попадает ли точка с этими координатими в заштрисованную область.
//   Если попадает, то вывести сообщение "Точка попадает в область" если нет то "Точка НЕ попадает в область"
//


let xStr = prompt("Введите,пожалуйста, координату по оси Х!");
let yStr = prompt("Введите,пожалуйста, координату по оси Y!");
let x = Number(xStr);
let y = Number(yStr);

if (xStr === null || yStr === null){
  alert("Охрана, отмЭна!");
} else if (isNaN(x) || isNaN(y)) {
  alert("Вы ввели не числовое значение");
} else {
  // Task 1
  let resultOfTask1 = false;
  const fitsLeftPart = x - y >= -4;
  const fitsRightPart = x + y <= 4;
  if (fitsLeftPart && fitsRightPart && y >= 0) {
    resultOfTask1 = true;
  }
  
  // Task 2
  let resultOfTask2 = false;
  const fitsBottomTriangle = x >= y && x <= -y && y > -3;
  const fitsTopTriangle = x <= y && x >= -y && y < 3;
  if (fitsBottomTriangle || fitsTopTriangle) {
    resultOfTask2 = true;
  }
  
  // Task 3
  let resultOfTask3 = false;

  const circleRadius = 1;
  const triangleLength = 2;
  
  const dX = 0 - x;
  const dY = 0 - y;
  
  const dXsquared = Math.pow(dX, 2);
  const dYsquared = Math.pow(dY, 2);
  
  const sum = dXsquared + dYsquared;
  const distance = Math.sqrt(sum);
  
  const fitsTriangle = x >= -y - triangleLength  && x <= 0 && y <= 0;
  const fitsCircle = distance <= circleRadius;
  
  
  if (fitsTriangle || fitsCircle){
    resultOfTask3 = true;
  }
  
  const successText = "Точка попадает в область";
  const failText = "Точка  НЕ попадает в область";
  
  alert(`Ваша точка (${x}, ${y})
    Задание 1: ${ resultOfTask1 ? successText : failText }
    Задание 2: ${ resultOfTask2 ? successText : failText }
    Задание 3: ${ resultOfTask3 ? successText : failText }
    `
  );
}






