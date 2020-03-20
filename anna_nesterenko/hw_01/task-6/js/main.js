'use strict';

let input = prompt("Какая квартира Вам нужна?");
let inputNumber = Number.parseInt(input);

if (input === null || inputNumber <= 0){
  alert("Значит никакая!")
}

else if (isNaN(input)){
  alert("Вы ошиблись планетой!")
}

else {
  
  if (inputNumber >= 1 && inputNumber <= 20) {
    alert("Вам в первый подъезд!")
  }
  
  else if (inputNumber >= 21 && inputNumber <= 48) {
    alert("Вам во второй подъезд!")
  }
  
  else if (inputNumber >= 49 && inputNumber <= 90) {
    alert("Вам в третий  подъезд!")
  }
  else {
    alert("У нас нет квартир с такими номерами")
  }
}
