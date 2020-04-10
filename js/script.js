/*1. Задача (Система уравнений)*/
// let a = 6, b = 6;
// let x = a > b ? console.log(a + b / 2 * 4)
//     : a === b ? console.log(400)
//         : a < b ? console.log(a - b + 2 / b * 4)
//             : console.log("Something wrong");

/*2. Задача (Попадание точки в область)*/
//1.1
// let x = prompt("Type x..");
// let y = prompt("Type y..");
//
// if (x != "" && y != "") {
//     if (x >= -3 && x <= 3 && y >= 0 && y <= 3) {
//         alert("Вы попали в область :)");
//     } else {
//         alert("Вы не попали в область :(");
//     }
// }else{
//     alert("Вы не ввели число");
// }

//1.2

// let x = prompt("Type x..");
// let y = prompt("Type y..");
//
// if (x != "" && y != "") {
//     if (x == 0  && y >= -1 && y <= 1) {
//         alert("Вы попали в область :)");
//     } else {
//         alert("Вы не попали в область :(");
//     }
// }else{
//     alert("Вы не ввели число");
// }

//1.3

// let x = prompt("Type x..");
// let y = prompt("Type y..");
// let circle = x**2 + y**2 === 1;
//
// if (x != "" && y != "") {
//
//     if (x >= -2 && x <= 0 && y >= -2 && y <= 0 || x**2 + y**2 <= 1 ) {
//         alert("Вы попали в область :)");
//     } else {
//         alert("Вы не попали в область :(");
//     }
// }else{
//     alert("Вы не ввели число");
// }


/*3. Задача (Оператор switch)
При помощи prompt запросить у пользователя номер дня недели.Вывести при помощи alert
название дня недели. если пользователь ввел некорректное значение вывести сообщение
 "Такого дня недели не существует!"
*/
// let numberOfWeek = +prompt('Type a number of week!');

// switch (numberOfWeek) {
//     case 1: alert("Monday")
//         break
//     case 2: alert("Tuesday")
//         break
//     case 3: alert("Wednesday")
//         break
//     case 4: alert("Thursday")
//         break
//     case 5: alert("Friday")
//         break
//     case 6: alert("Saturday")
//         break
//     case 7: alert("Sunday")
//         break
//     default: alert("There is no such a day of the week!!")
// }

/*4. Задача (Условный оператор)
Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
 */
// let first = +prompt("Type a first number!");
// let second = +prompt("Type a second number");
// let max = first <= second ? max = second : max = first;
// alert(`Max is ${max}`);

/*5. Задача (Условный оператор)
Найти максимальное из двух чисел. Учтите вариант равенства чисел
*/

// let num1 = 1;
// let num2 = 0;
// let max;
//
// max = num1 == num2? alert("Числа равны")
//     : num1 > num2? alert("Первое число больше второго"):alert("Второе число больше первого");

/*6. Задача (Условный оператор)
В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры.
Программа должна указать в каком подъезде находится данная квартира. Программа должна учитывать
вариант ввода чисел за пределами диапазона 1..90.
 */

// let apartmentNumber = +prompt("Type your number of apartment!");

// if (apartmentNumber >= 1 && apartmentNumber <= 20) {
//     alert("Your apartment in the first porch ");
// } else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
//     alert("Your apartment in the second porch ");
// } else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
//     alert("Your apartment in the third porch ");
// } else {
//     alert("There is no such apartment");
// }

/*7. Задача (Условный оператор)
Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать».
Если не совпадают – то «Ошибка входа»
 */

// let login = "admin";
// let password = "admin";

// let userLogin = prompt("Type your login!");
// let userPassword = prompt("Type your password!");
// if (login === userLogin && login === userPassword) {
//     alert("Wellcome");
// } else {
//     alert("Login failed");
// }

/*8. Задача (Условный оператор)
Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16,
 то пишет – «добро пожаловать», если нет – «вход воспрещен».
 */
// const minPass = 16;
// let user = +prompt("Type your age!");
// if (minPass <= user) {
//     alert(Wellcome');
// } else {
//     alert("No entry");
// }

/*9. Задача (Условный оператор)
Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.
 */

// const experience = +prompt("Type your experience");
// if (experience >= 0 && experience <= 3) {
//     alert("Your bonus will be 0%");
// } else if (experience > 3 && experience <= 10) {
//     alert("Your bonus will be 10%");
// } else if (experience > 10 && experience <= 20) {
//     alert("Your bonus will be 20%");
// } else if (experience > 20) {
//     alert("Your bonus will be 25%");
// }else{
//     alert("Wrong number");
// }

/*10. Задача (креативная)
Написать программу которая будет склонять слово “товар” в зависимости от количества товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.
*/

// let word = 'товар';
// let userNum = +prompt("Введите число..");
// let magicStick = userNum % 100;
//
// if (magicStick >= 5 && magicStick <= 20 || magicStick === 0){
//     alert(`У вас ${userNum} ${word + "ов"}`);
// }else {
//     magicStick = userNum % 10;
//     if (magicStick > 1 && magicStick <= 4) {
//         magicStick = userNum % 10;
//         alert(`У вас ${userNum} ${word + "а"}`);
//     } else if (magicStick === 1) {
//         alert(`У вас ${userNum} ${word}`);
//     } else {
//         alert("Что то пошло не так");
//     }
// }