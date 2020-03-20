"use strict";
/*task 1
Задача (Система уравнений)


let x;
let a= prompt ("Enter a:");
let b= prompt ("Enter b:");
a=Number(a);
b=Number(b);
if (a>b) {
    x=a+b/2*4;
} else if (a<b) {
    x=a-b+2/b*4;
} else {
    x=400;
}
alert (`x = ${x}`);*/


/*// task 2
/*2. Задача (Попадание точки в область)
При помощи prompt запросить у пользователя координату по оси x и координату по оси y.
Далее определить попадает ли точка с этими координатими в заштрисованную область. Если попадает, то вывести
сообщение "Точка попадает в область" если нет то "Точка НЕ попадает в область"
У вас есть 3 разных картинки - это три разных задания! Для тех кто хочет сделать больше,
то можете попробовать решить задачи при помощи функций. для каждой картинки своя функция.
 */

// task 2.1
/*
let x= prompt("Введите координату по оси x:");
let y= prompt("Введите координату по оси y:");
x=Number(x);
y=Number(y);
if (x >= -4 && x <= 4 && y >= 0 && y <= 4 && (x + y) <= 4 && (x - y) >= -4 ) {
            alert("Точка попадает в область");
        } else {
            alert("Точка НЕ попадает в область");
        }
*/


// task 2.2
/*let x= prompt("Введите координату по оси x:");
let y= prompt("Введите координату по оси y:");
x=Number(x);
y=Number(y);
let inside1 = (x >= -1 && x <= 1 && y >= 0 && y <= 1 && (x + y) >= 0 && (x - y) <= 0 ) ? true : false;
let inside2 = (x >= -1 && x <= 1 && y >=-1 && y <= 0 && (x + y) <= 0 && (x - y) >= 0 ) ? true : false;
if (inside1 || inside2) {
 alert("Точка попадает в область");
} else {
 alert("Точка НЕ попадает в область");
}
*/



// task 2.3
/*let x= prompt("Введите координату по оси x:");
let y= prompt("Введите координату по оси y:");
x=Number(x);
y=Number(y);
let inside1 = (x >= -2 && x <= 0 && y >= -2 && y <= 0 && (x + y) >= -2 ) ? true : false;
let inside2 = (x**2 + y**2 <=1 ) ? true : false;
if (inside1 || inside2) {
 alert("Точка попадает в область");
} else {
 alert("Точка НЕ попадает в область");
}
*/


// task 3
/*
При помощи prompt запросить у пользователя номер дня недели.
Вывести при помощи alert название дня недели. если пользователь ввел
некорректное значение вывести сообщение "Такого дня недели не существует!"
 */
/*
let dayNumber = prompt("Введите номер дня недели (от 1 до 7):");
dayNumber= Number (dayNumber);
    switch (dayNumber) {
        case 1:
            alert ("Понедельник");
            break;
        case 2:
            alert ("Вторник");
            break;
        case 3:
            alert ("Среда");
            break;
        case 4:
            alert ("Четверг");
            break;
        case 5:
            alert ("Пятница");
            break;
        case 6:
            alert ("Суббота");
            break;
        case 7:
            alert ("Воскресенье");
            break;
        default:
            alert("Такого дня недели не существует!");
}
*/


// task 4
/* 4. Задача (Условный оператор)
Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.*/
/*

let firstNumber = prompt ("Введите первое число:");
let secondNumber = prompt ("Введите второе число:");
firstNumber = Number (firstNumber);
secondNumber = Number (secondNumber);
if (firstNumber!==firstNumber || secondNumber!==secondNumber || firstNumber=secondNumber){
    alert("Ввод некорректен");
} else if (firstNumber>secondNumber) {
    alert(`Максимальное число: ${firstNumber}`);
}  else if (firstNumber<secondNumber) {
    alert(`Максимальное число: ${secondNumber}`);
}
*/


// task5
/* 5. Задача (Условный оператор)
Найти максимальное из двух чисел. Учтите вариант равенства чисел
*/
/*
let firstNumber = prompt ("Введите первое число:");
let secondNumber = prompt ("Введите второе число:");
firstNumber = Number (firstNumber);
secondNumber = Number (secondNumber);
if (firstNumber!==firstNumber || secondNumber!==secondNumber){
    alert("Ввод некорректен");
} else if (firstNumber>secondNumber) {
    alert(`Максимальное число: ${firstNumber}`);
}  else if (firstNumber<secondNumber) {
    alert(`Максимальное число: ${secondNumber}`);
} else {
    alert("Числа равны");
}
*/

// task6
/*В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
 Пользователь вводит номер квартиры. Программа должна указать в каком подъезде
 находится данная квартира. Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.
 */
/*
let numberOfFlat = prompt("Введите номер квартиры (от 1 до 90)");
numberOfFlat = Number (numberOfFlat);
let numberOfPorch; // номер подъезда
if (numberOfFlat!==numberOfFlat) {
    alert("Ввод некорректен");
} else if (numberOfFlat>1 && numberOfFlat<=20) {
    numberOfPorch=1;
} else if (numberOfFlat>20 && numberOfFlat<=48) {
    numberOfPorch=2;
} else if (numberOfFlat>48 && numberOfFlat<=90) {
    numberOfPorch=3;
} else {
    alert("Такой квартиры в этом доме не существует");
}
numberOfPorch = Number (numberOfPorch);
if (numberOfPorch !== numberOfPorch) {}
   else {
       alert(`Квартира находится в ${numberOfPorch} подъезде.`);
}
*/

//task 7
/* 7. Задача (Условный оператор)
Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится
 «Добро пожаловать». Если не совпадают – то «Ошибка входа»
*/
/*
 let login = prompt("Введите логин");
 let password = prompt( "Введите пароль");
 let x =  ( login=="ivan" && password==334455) ? true : false;
 let y =  ( login=="alex" && password==777) ? true : false;
 let z =  ( login=="petr" && password=="b5678") ? true : false;
 if (x || y || z) {
     alert ("Добро пожаловать!");
 } else {
     alert("Ошибка входа");
 }
*/


//task 8
/*
8. Задача (Условный оператор)
Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16,
то пишет – «добро пожаловать», если нет – «вход воспрещен».
 */
/*let yearOfBirth = prompt("Введите ваш год рождения:");
yearOfBirth = Number(yearOfBirth);
let age;
if (yearOfBirth!==yearOfBirth) {
    alert ("Некорректный ввод");
} else {
age = 2020 - yearOfBirth;
alert(`Ваш возраст: ${age}`);
}
if (age>=16) {
    alert ("Добро пожаловать!");
} else if (age<16) {
    alert ("Вход воспрещен!");
}
*/


// Task 9
/*9. Задача (Условный оператор)
Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.
*/
/*let experience = prompt("Введите ваш стаж работы (количество лет):");
experience = Number (experience);
let premium=0;
if (experience<3) {
    premium=0;
} else if (experience>=3 && experience<10) {
    premium=10;
} else if (experience>=10 && experience<20) {
    premium=20;
} else if (experience>=20) {
    premium=25;
}
alert(`Ваша надбавка составляет ${premium} %`);
 */

// Task 10
/*
10. Задача (креативная)
Написать программу которая будет склонять слово “товар” в зависимости от количества
товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.
*/
/*let number = prompt("Введите количество товаров, которые вы хотите заказать");
let x = number % 10;
let y = number % 100;
let end;
alert (typeof x);
alert (typeof y);
if (y===11) {
 end="товаров";
} else if (x===2 || x===3 || x===4) {
 end="товара";
} else if (x===1 && y!==11) {
 end="товар";
} else {
 end="товаров";
}
alert (`Ваш заказ: ${number} ${end}`);
 */

// Task 11n
/*
11. Задача (креативная)
Написать программу эмулирующую работу кассира в кисете
 */
/*let numberOfGoods = prompt("Введите количество купленных товаров");
numberOfGoods = Number (numberOfGoods);
let i=1;
let price; // Цена товара
let sum=0; // Общая цена товаров
if (numberOfGoods<1 || numberOfGoods!==numberOfGoods) {
 alert("Некорректный ввод");
} else {
while (i <= numberOfGoods) {
 price = prompt(`Введите цену ${i}-го товара`);
 sum = sum + +price;
 i++;
}
 alert (`Общая сумма: ${sum} грн.`);
 let cash = prompt ("Введите сумму выданную покупателем:");
 let rest = cash - sum; //Сдача
 alert (`Сдача покупателю: ${rest} грн.`);
}
*/







