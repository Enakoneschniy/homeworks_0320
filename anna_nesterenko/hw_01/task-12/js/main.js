'use strict';

// 12. Кофейный автомат

const SMALL_LATE = 10;
const AVERAGE_LATE = 20;
const BIG_LATE = 30;

const SMALL_CAPPUCCINO = 15;
const AVERAGE_CAPPUCCINO = 25;
const BIG_CAPPUCCINO = 35;


const SMALL_AMERICANO = 15;
const AVERAGE_AMERICANO = 25;
const BIG_AMERICANO = 35;

const PRICE_SUGAR = 5;
const CURRENCY ="гр";

const inputUser = prompt("Какой кофе Вы желаете?  Наш ассортимент: 1 - лате, 2 - капучино, 3 - американо.");

const coffee = parseInt(inputUser);

if (inputUser === null){
  alert("Очень зря! Возвращайтесь!");
} else if (isNaN(inputUser) || inputUser < 1 || inputUser > 3) {
  alert("Товарищ, ну у нас такого кофе нет!")
} else {
  const size = prompt("Какого размера Вы хотите? 1 - маленький, 2 - средний, 3 - большой. Введите нужнную цифру!");
  const sizeInt = parseInt(size);
  if (size === null){
    alert("Ну не хотите выбирать циферку - будете без кофе!Уха-ха-ха!")
  } else if (sizeInt < 1 || sizeInt > 3 || isNaN(sizeInt)){
    alert("У нас нет таких размеров");
  } else {
    
    let coffeePrice = 0;
    switch (coffee) {
      case 1:
        if (size === 1) {
          coffeePrice = SMALL_LATE;
        } else if (size === 2) {
          coffeePrice = AVERAGE_LATE;
        } else {
          coffeePrice = BIG_LATE;
        }
        break;
      case 2:
        if (size === 1) {
          coffeePrice = SMALL_CAPPUCCINO;
        } else if (size === 2) {
          coffeePrice = AVERAGE_CAPPUCCINO;
        } else {
          coffeePrice = BIG_CAPPUCCINO;
        }
        break;
      case 3:
        if (size === 1) {
          coffeePrice = SMALL_AMERICANO;
        } else if (size === 2) {
          coffeePrice = AVERAGE_AMERICANO;
        } else {
          coffeePrice = BIG_AMERICANO;
        }
        break;
    }
  
    const sugar = prompt(`Сахар нннннадо? (Цена 1- го пакетика  ${PRICE_SUGAR} ${CURRENCY}).Сколько Вам пакетиков?`);
    const sugarInt = parseInt(sugar);
    if (!sugarInt) {
      alert(`Коли солодко, цукор не потрібен! Ваш кофе. К оплате ${coffeePrice} ${CURRENCY}`)
    } else {
      const sugarPrice = sugarInt * PRICE_SUGAR;
      const total = coffeePrice + sugarPrice;
      alert (`к оплате ${total} ${CURRENCY}`);
    }
  }
}
