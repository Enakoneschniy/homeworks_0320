'use strict';

let inputYear = prompt("Введите свой год рождения!");
let numberYear = Number(inputYear);
let thisYear = 2020;
let age;

if (inputYear === null){
  alert("Не хочешь, как хочешь!")
}
 else if (isNaN(inputYear) || numberYear <= 0) {
  alert("Товарищ, такого числа нет!")
}
else {
  age = thisYear - numberYear;
    if( age >= 16 && age <= 90){
      alert(`Ваш возраст:${age}. Добро пожаловать!`);
    }
    else if (age >= 91){
      alert(`Ваш возраст:${age}. Oго, вот это Вы зрелый...`);
    }
    else {
    alert("Вы еще не достигли 16-ти лет! Эх... радуйтесь!")}
}
