"use strict"

// Задача 1. Система уравнений
{
let x;

let a = +prompt ('Введите число a');
let b = +prompt ('Введите число b');

if (a>b) {
    x = a + b / 2 * 4;
} else if (a===b) {
    x = 400;
} else {
    x = a - b + 2 / b * 4;
}
}



/*
Задача 2.
При помощи prompt запросить у пользователя координату по оси x и координату по оси y. Далее определить попадает ли точка с этими координатими в заштрисованную область. Если попадает, то вывести сообщение "Точка попадает в область" если нет то "Точка НЕ попадает в область" У вас есть 3 разных картинки - это три разных задания! Для тех кто хочет сделать больше, то можете попробовать решить задачи при помощи функций. для каждой картинки своя функция.
*/
// График 1
{
let x = +prompt ('Введите координату x');
let y = +prompt ('Введите координату y');

if (x<0) {
    x = -(x);
}

if ((x+y)<=4 && y>=0) {
    alert ('Точка попадает в область');
} else {
    alert ('Точка не попадает в область');
}
}



// График 2
{
let x = +prompt ('Введите координату x');
let y = +prompt ('Введите координату y');

if (x>=0 && x<=1 && y>=0 && y>=x) {
    console.log ('Точка попадает в область');
}
else if (x>=0 && x<=1 && y<=0 && -(y)>=x) {
    console.log ('Точка попадает в область');
}
else if (x>=-1 && x<=0 && y<=0 && y<=x) {
    console.log ('Точка попадает в область');
}
else if (x>=-1 && x<=0 && y>=0 && y>=-(x)) {
    console.log ('Точка попадает в область');
}
else {
    console.log ('Точка не попадает в область');
}
}



// График 3
{
let x = +prompt ('Введите координаты x');
let y = +prompt ('Введите координаты y');

if (x<0 && y<0) {
    if ((x-y)<-2) {
        alert ('Точка не попадает в область');
    } else {
        alert ('Точка попадает в область');
    }
} else {
    if (x<0) {
        x = -(x);
    } else if (y<0) {
        y = -(y);
    }

let z = Math.sqrt((x*x) + (y*y));

if (z>1) {
     alert ('Точка не попадает в область')
     } else {
     alert ('Точка попадает в область');
}
}
}



/*
Задача 3
При помощи prompt запросить у пользователя номер дня недели. Вывести при помощи alert название дня недели. если пользователь ввел некорректное значение вывести сообщение "Такого дня недели не существует!"
*/
{
let dayOfWeek = +prompt ('Введите номер недели', '');
switch (dayOfWeek) {
    case 1:
    alert ('Понедельник');
    break;
    case 2:
    alert ('Вторник');
    break;
    case 3:
    alert ('Среда');
    break;
    case 4:
    alert ('Четверг');
    break;
    case 5:
    alert ('Пятница');
    break;
    case 6:
    alert ('Суббота');
    break;
    case 7:
    alert ('Воскресенье');
    break;
    default:
    alert ('Такого дня недели не существует!')
}
}



/*
Задача 4,5
Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
Учтите вариант равенства чисел.
*/
{
let a = +prompt ('Введите первое число', '');
let b = +prompt ('Введите второе число', '');

if (a>b) {
    alert (`Число ${a} больше`);
} else if (a===b) {
    alert ('Числа одинаковы');
} else {
    alert (`Число ${b} больше`);
}
}



/*
Задача 6
В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира. Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.
*/
{
let numApart = +prompt('Введите номер квартиры', '');

if (numApart>0 && numApart<21) {
    alert ('Квартира находится в первом подъезде');
} else if (numApart>20 && numApart<49) {
    alert ('Квартира находится во втором подъезде');
} else if (numApart>48 && numApart<91) {
    alert ('Квартира находится в третьем подъезде');
} else {
    alert ('Нет такой квартиры');
}
}



/*
Задача 7
Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
*/
{
let login = prompt ('Enter your Login');
let pass = prompt ('Enter your Password');

if (login==='ivan' && pass==='334455') {
    alert ('Добро пожаловать');
} else if (login==='alex' && pass==='777') {
    alert ('Добро пожаловать');
} else if (login==='petr' && pass==='b5678') {
    alert ('Добро пожаловать');
} else {
    alert ('Ошибка входа');
}
}



/*
Задача 8
Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».
*/
{
const yearOfBirthday = +prompt ('Введите ваш год рождения');
const currentYear = new Date().getFullYear();
const userAge = currentYear - yearOfBirthday;

if (userAge >= 16) {
    alert (`Ваш возраст ${userAge}. Добро пожаловать!`);
} else {
    alert (`Ваш возраст ${userAge}. Вход воспрещен!`);
}
}



/*
Задача 9
Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.
*/
{
const workExperience = +prompt('Какой ваш стаж работы?');

if (workExperience<3) {
    alert ('Ваша надбавка: 0%');
} else if (workExperience>3 && workExperience<=10) {
    alert ('Ваша надбавка: 10%');
} else if (workExperience>10 && workExperience<=20) {
    alert ('Ваша надбавка: 20%');
} else if (workExperience>20) {
    alert ('Ваша надбавка: 25%');
}
}



/*
Задача 10
Написать программу которая будет склонять слово “товар” в зависимости от количества товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.
*/
{
const amountOfProduct = +prompt ('Введите количество товаров');

if (amountOfProduct===1) {
    alert (`У вас ${amountOfProduct} товар`);
} else if (amountOfProduct>1 && amountOfProduct<5) {
    alert (`У вас ${amountOfProduct} товара`);
} else {
    alert (`У вас ${amountOfProduct} товаров`);
}
}



/*
Задача 11
Написать программу эмулирующую работу кассира в кисете
*/
{
function sellerKiset () {

const product = prompt (`Здравствуйте! Что желаете?
1 - вода,
2 - сигареты,
3 - зажигалка`);

if (product==='1') {
waterProduct ();
function waterProduct () {
    const water = prompt (`Какую воду вы желаете?
1 - моршинская,
2 - боржоми`);
    if (water==='1') {
        alert ('Вода Моршинская, цена 10грн');
    } else if (water==='2') {
        alert ('Вода Боржоми, цена 20грн')
    } else if (water===null || water==='') {
        alert ('До свидания.');
    } else {
        alert ('Извините, не поняла. Повторите, пожалуйста');
        waterProduct ();
    }
}

} else if (product==='2') {
sigaretsProduct ();
function sigaretsProduct () {
    const sigarets = prompt (`Какие сигареты вы желаете?
1 - Marlboro,
2 - Kent,
3 - Parlament,
4 - IQOS`);
    if (sigarets==='1') {
        alert ('Сигареты Marlboro, цена 55грн');
    } else if (sigarets==='2') {
        alert ('Сигареты Kent, цена 55грн')
    } else if (sigarets==='3') {
        alert ('Сигареты Parlament, цена 60грн')
    } else if (sigarets==='4') {
        alert ('Сигареты IQOS, цена 50грн')
    } else if (sigarets===null || sigarets==='') {
        alert ('До свидания.');
    } else {
        alert ('Извините, не поняла. Повторите, пожалуйста');
        sigaretsProduct ();
    }
}

} else if (product==='3') {
lighterProduct ();
function lighterProduct () {
    const lighter = prompt (`Вам нужна зажигалка или спички?
1 - зажигалка,
2 - спички`);
    if (lighter==='1') {
        alert ('Зажигалка Big, цена 15грн');
    } else if (lighter==='2') {
        alert ('Спички Балобановские, цена 0.5грн');
    } else if (lighter===null || lighter==='') {
        alert ('До свидания.');
    } else {
        alert ('Извините, не поняла. Повторите, пожалуйста');
        lighterProduct ();
    }
}

} else if (product===null || product==='') {
        alert ('До свидания.');
    } else {
        alert ('Извините, не поняла. Повторите, пожалуйста');
        sellerKiset ();
    }
}

sellerKiset ();
}















