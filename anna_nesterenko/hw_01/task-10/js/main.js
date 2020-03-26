'use strict';
// 10. Задача (креативная)
// Написать программу которая будет склонять слово “товар” в зависимости
// от количества товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.


let userInput = prompt("Введите число!");
 
let text = "товар";
let ending = 'oB';

if (userInput === null){
  alert("Пока!")
}

else if (isNaN(userInput)){
  alert("Это не цифры!")
}

else {
  const lastChar = userInput.slice(-1);
  const twoLastChars = userInput.slice(-2);
  const lastNumbers = parseInt(twoLastChars);
  
  if (lastChar === '1') {
    ending = '';
  }
  
  if (lastChar.match('2|3|4')) {
    ending = 'a';
  }
  
  if (lastNumbers >= 11 && lastNumbers <= 14) {
    ending = 'oB'
  }
  
  alert(`${userInput} ${text + ending}`);
}
