'use strict';

let inputExperience = prompt("Введите свой стаж.");
let numberExperience = Number(inputExperience);

if (inputExperience === null){
  alert("До новых встреч!")
}
else if (isNaN(inputExperience) || inputExperience < 0 || inputExperience.length > 2){
  alert("Ты чЕ? Ошибка ввода!")
}
else {
  if (numberExperience >= 0 &&  numberExperience < 3) {
    alert("3%");
  }
  else if (numberExperience >= 3 && numberExperience < 10) {
    alert("10%");
  }
  else if (numberExperience >= 10 && numberExperience < 20){
    alert("20%");
  }
  else if (numberExperience >= 20){
    alert("25%")
  }
    
  }
