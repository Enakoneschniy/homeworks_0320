'use strict'
{
    // №1 Задача (Система уравнений)
    let a= prompt("Enter a: ",0);
    let b= prompt("Enter b: ",0);
    let res;

    if (a>b){
        alert(res=(a+b)/2*4);
    } else if (a === b){
        alert(400);
    } else if (a<b){
        alert(res= (a-b-2)/ (b*4));
    } else {
        alert("Error");
    }



}
{
/*№2  Задача (Попадание точки в область)
   При помощи prompt запросить у пользователя координату по оси x и координату по оси y. Далее определить попадает ли точка с этими координат ими в заштрисованную область.
   Если попадает, то вывести сообщение "Точка попадает в область" если нет то "Точка НЕ попадает в область" У вас есть 3 разных картинки - это три разных задания! Для тех кто хочет сделать больше, то можете попробовать решить задачи при помощи функций. для каждой картинки своя функция.
 */


    let x = prompt('Choose point x (only number)', 0);
    let y = prompt('Choose point y (only number)', 0);

    if (x < 4 && x > -4 && y < 4 && y > 0) {
        alert("Точка попадает в область");
    } else {
        alert("Точка не попадает в область");
    }
}

{
   /*№3. Задача (Оператор switch)
    При помощи prompt запросить у пользователя номер дня недели. Вывести при помощи alert название дня недели.
        если пользователь ввел некорректное значение вывести сообщение "Такого дня недели не существует!"*/
   let d= parseFloat(prompt("Numder day of week:",1));
   let M= "Monday";
    let T= "Tuesday";
    let W= "Wednesday";
    let TH= "Thursday";
    let F= "Friday";

   switch (d) {
       case 1: alert(M);
       break;

       case 2: alert(T);
           break;

       case 3: alert(W);
           break;

       case 4: alert(TH);
           break;

       case 5: alert(F);
           break;
       default: alert("There is no such day of the week!");
   }
}

{
/*№ 4. Задача (Условный оператор)
    Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.*/


    let first_number = prompt("Input first number", 0);
    let second_number = prompt("Input second number", 0);

    if (first_number < second_number) {
        alert(second_number);
    } else {
        alert(first_number);
    }
}
{
/*№5. Задача (Условный оператор)
    Найти максимальное из двух чисел. Учтите вариант равенства чисел*/

    let first_number = prompt("Input first number", 0);
    let second_number = prompt("Input second number", 0);

    if (first_number > second_number) {
        alert(first_number);
    } else if (first_number < second_number) {
        alert(second_number);
    } else {
        alert("Числа одинаковые")
    }
}
{
    /*№6. Задача (Условный оператор)
    В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
    Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
    Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.*/

    let flat= prompt("Choose apartment number:",1);
    let first_porch = parseFloat(1);
    let second_porch = parseFloat(2);
    let third_porch = parseFloat(3);


    if ( flat >=1 && flat<=20 ){
        alert(`Number of porch: ${first_porch} `);
    } else if(flat >=21 && flat<=48){
        alert(`Number of porch: ${second_porch} `);
    } else if (flat >=49 && flat<=90){
        alert(`Number of porch: ${third_porch} `);
    } else{
        alert(`There is no such apartment`);
    }
}


{
    /*№7. Задача (Условный оператор)
    Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать».
    Если не совпадают – то «Ошибка входа»*/

    let log= prompt("Enter your login");
let pas= prompt("Enter your password");

if (log == "ivan" && pas =="334455"){
    alert("Welcome");
} else if(log == "alex" && pas =="777"){
    alert("Welcome");
} else if(log == "petr" && pas =="b5876"){
    alert("Welcome");
} else{
    alert("Login failed");
}
}


{
    /*№8. Задача (Условный оператор)
    Пользователь вводит год рождения.
    Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».*/

    let year = prompt("Enter year of your B.day", 0);
    let date = new Date();

    let age = date.getFullYear() - year;

    if (age <= 2004) {
        alert(`Your age: ${age}. Welcome`);
    } else if (age > 2004) {
        alert("No entry");
    }
}

{
    /* №9. Задача (Условный оператор)
     Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.*/

    let work_experience = prompt("Enter your work experience",0);

    if(work_experience>=0 && work_experience<=3){
        alert("Allowance: 0%");
    } else if(work_experience>=3 && work_experience<=10){
        alert("Allowance: 10%");
    } else if(work_experience>=10 && work_experience<=20){
        alert("Allowance: 20%");
    }   else if(work_experience>=20){
        alert("Allowance: 25%");
    }  else {
        alert("Error");
    }
}



{
    /*№11. Задача (креативная)
        Написать программу эмулирующую работу кассира в кисете*/

    let age = prompt("Ссссынок,те сока будет?", 0);

    if (age < 18 && age >= 6) {
        alert("Школота");
    } else if (age >= 18 && age < 30) {
        alert("Молодежььььььььь");
    } else if (age >= 30 && age < 45) {
        alert("Самый сок");
    } else if (age >= 45 && age < 60) {
        alert("Закат");
    } else if (age >= 60) {
        alert("В бой идут одни.....");
    } else {
        alert("то ли киборг, то ли ошибка");
    }
}









