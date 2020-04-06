'use strict'
a = +prompt("Введите ваш возраст")
 
age(a)

function age(a){
    if (a >= 0 && a <=16){
        alert ("Извините вы еще молоды")
    } else alert ("Добро пожаловать!")
}
