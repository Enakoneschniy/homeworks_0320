'use strict';

const PRICE_CAMEL = 50;
const PRICE_MARLBORO = 60;
const PRICE_PARLIAMENT = 70;

const inputUser = prompt("Вам какие сигареты? Наш ассортимент: 1 - CAMEL, 2 - MARLBORO, 3 - PARLIAMENT. Введите нужную цифру.");
const numberInput =parseInt(inputUser);
if (inputUser === null || inputUser <= 0) {
  alert("Правильно! Курить вредно!");
} else if (isNaN(inputUser) || numberInput > 3 || numberInput < 1) {
  alert("Это не такая цифра!");
} else {
  let priceCigarette = 0;
   switch (numberInput) {
     case 1:
       priceCigarette = PRICE_CAMEL;
       break;
  
     case 2:
       priceCigarette = PRICE_MARLBORO;
       break;
  
     case 3:
       priceCigarette = PRICE_PARLIAMENT;
       break;
  
     // default:
     //   alert("Вы ввели не ту цифру!");
     //   break;
   }
       const inputPackages = prompt("Сколько Вам нужно пачек?");
       const numberPackages = Number.parseInt(inputPackages);
       if (inputPackages === null || inputPackages <= 0) {
         alert("Ну нисколько, так нисколько!");
       }
       else if (isNaN(inputPackages)) {
         alert("Разве это цифры?");
       }
    
       else {
           let totalPrice = priceCigarette * inputPackages;
           let money = prompt(`К оплате ${totalPrice}. (Введите сумму,которю Вы даете продавцу)`);
           let numberMoney = parseInt(money);
           if ( money === null || numberMoney <= 0){
             alert("good! Спасай здоровье!")
           }
           else if (isNaN(money)){
             alert("Деньги в цифрах, не в словах!")
           }
           else {
             if(numberMoney > totalPrice){
               let surrender = numberMoney - totalPrice;
               alert(`Возьмите сдачу ${surrender}.Получите сигареты!`)
             }
             else if (numberMoney < totalPrice){
               alert("Недостаточно денег!")
             }
             else {
               alert("Вы дали без сдачи! Замечательно! Получите свои сигареты ")
             }
           }
       }
       
   
}


