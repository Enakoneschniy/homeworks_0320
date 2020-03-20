'use strict';

let a =  prompt("Введите  значение а!");
let b =  prompt("Введите  значение b");

let numberA = parseInt(a);
let numberB = parseInt(b);
let x;

if (a === null|| b === null){
  alert("ОтмЭна!")
} else if(isNaN(a) || isNaN(b)){
  alert("Вы ввели не числовые значания")
}else {
  if (numberA > numberB) {
    x = numberA + numberB / 2 * 4;
  } else if (numberA === numberB) {
    x = 400;
  } else if (numberA < numberB) {
    x = numberA - numberB + 2 / b * 4;
  }
  alert(`x = ${x}`);
}
