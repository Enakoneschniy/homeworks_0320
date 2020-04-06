'use strict'
a = +prompt("Введите ваш возраст")
 
age(a)

function age(a){ 
    a = a || prompt("Введите ваш взраст")
    if(a == undefined){
        alert("Вы не ввели возраст")
    } else if (a >= 1 && a <=16){
        alert ("Извините вы еще молоды")
    } else alert ("Добро пожаловать!")
}
