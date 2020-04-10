'use strict'

/* Задание 1
Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно
быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
*/

// function arrayFill(x, size) {
//
//     let arr = [];
//     for (let i = 0; i < size; i++){
// //         arr[i] = x;
//     }
//     console.log(arr);
// }
// arrayFill("x", 5);

/*Задание 2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
 */

// function tripleSum() {
//     let sum = 0;
//     let arr = [[[1, 2, 3], [4, 5], [6, 7], [8, 9]]];
//
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr[i].length; j++){
//             for(let k = 0; k < arr[i][j].length; k++){
//                 sum += arr[i][j][k];
//             }
//         }
//     }
// console.log(sum);
// }
// tripleSum();

/*Задание 3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
Если это так - пусть функция возвращает true, если не так - false.
*/

// function isNumberInRange(num) {
//     num = num > 0 && num < 10 ? true : false;
//     return num;
//
// }
//
// console.log(isNumberInRange(1));

/*Задание 4
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

// function isEven(intNum) {
//     intNum = intNum % 2 === 0 ? true : false;
//     return intNum;
// }
//
// console.log(isEven(211));

/*Задание 5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей задачи
*/
// function isEven(intNum) {
//     intNum = intNum % 2 === 0 ? true : false;
//     return intNum;
// }
// function checkIsEven() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let newArray = []
//     for (let i = 0; i < arr.length; i++){
//         if (isEven(arr[i])){
//             newArray.push(arr[i]);
//         }
//     }
//     console.log(newArray);
// }
// checkIsEven();
/*Задание 6
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число).
*/

// function getDivisors(num) {
//     let arr = []
//     for (let i = 0; i <= num; i++){
//         if (num % i === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//
// console.log(getDivisors(10));

/*Задание 7
Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции,
 возведите число в степень и выведите с помощью console.log.
*/

// function pow (num, n) {
//     console.log(num**n);
// }
// pow(2, 3);

/*Задание 8
Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать»,
если меньше – “вы еще молоды”
*/

// function isAge(age){
//
//     if (age > 16){
//         alert("Welcome!!!");
//     }else{
//         alert("You're still yong!");
//     }
// }
// isAge(16);

/*Задание 9
Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента –
проверка на undefined и оператор ||.
*/

// function isAge(age){
//     age = age || prompt("Type your age!!");
//         if (age > 16) {
//             alert("Welcome!!!");
//         } else {
//             alert("You're still yong!");
//         }
//
// }
// isAge();

/*Задание 10
Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент.
Если аргумент не задан – выводится сообщение об ошибке.
*/

// function arrayLength(arr) {
//     return  arr ? arr.length : alert("Err0r");
// }
// console.log(arrayLength([2,2,3,4,5]));

/*Задание 11
Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет,
что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
*/

// function returner() {

//     let num =  parseFloat(prompt("Type a number"));
//     let result = null;
//     if (num > 10){
//         return Math.sqrt(num);
//     }else if (num < 7){
//         return alert("The number less than 7");
//     }else if (num === 7 || num === 8){
//         result = num;
//         return result;
//     }else{
//         alert("err0or");
//     }
// }
//
// console.log(returner());

/*Задание 12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте
функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно
 строку с заглавной первой буквой.*/

// function ucFirst(string) {
//     let firstChar = string[0].toUpperCase();
//     let withoutFirst = string.slice(1);
//     let newStr = firstChar + withoutFirst;
//     return newStr;
// }
// console.log(ucFirst("first character train matrix"));

// function ucFirst(string) {
//     let arrayWords = string.split(" "); //разбиваем строку на массив
//     let result = "";  // В будущем запишем результат
//     for (let i = 0; i < arrayWords.length; i++){
//         let word = arrayWords[i];
//         let firstChar = word.slice(0, 1).toUpperCase();
//         let otherSentence = word.slice(1, word.length);
//         result += firstChar + otherSentence + " ";
//     }
//     return result;
// }
// console.log(ucFirst("first character train matrix"));

/*Задание 13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/

/*function trueStr(str) {
    return str.replace(/_/gi , " ", str);
}

console.log(trueStr("qwe_qwe_qwe"));
*/

/*Задание 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым
параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать
true или false. Показать решение.*/

// let arr = ["roll", "pit", "staff", "prom", "sell", "karma"];
//
// function inArray(str, arr) {
//     let found = false;
//     for (let i = 0; i < arr.length; i++) {
//
//         if (str === arr[i]) {
//             found = true;
//         }
//     }
//     return found;
// }
//
// console.log(inArray("prosm", arr));


/*Задание 15
Дана строка, например, '123456'. Сделайте из нее '214365'.*/

// function reverseStr() {
//     let str = "123456";
//     let arr = str.split("", str.length );
//     let current;
//     for (let i = 0; i < arr.length; i+=2){
//         current = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = current;
//     }
//     str = arr.join("");
//     console.log(str);
// }
// reverseStr();

/*Задание 16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет,
 и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному.
 Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

// function sequence(start, step) {
//     start = start || 0;
//     step = step || 1;
//     let defaultStart = start;
//     return () => {
//         let result = defaultStart;
//         defaultStart += step;
//         return result;
//     }
// }
//
// let gen = sequence(10, 1);
// console.log(gen());
// console.log(gen());

/*Задание 17
Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз
и возвращает массив с результатами вызовов.*/

// function sequence(start, step) {
//     start = start || 0;
//     step = step || 1;
//     let defaultStart = start;
//     return () => {
//         let result = defaultStart;
//         defaultStart += step;
//         return result;
//     }
// }
//
// let gen = sequence(10, 1);
// console.log(gen());
// console.log(gen());
//
// function take(gen, x) {
//     let arr = [];
//     for (let i = 0; i < x; i++){
//         arr.push(gen());
//     }
//     return arr;
// }
// let gen2 = sequence(0 , 2);
// console.log(take(gen2, 5));

/*Задание 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает
каждый элемент массива этой функцией, возвращая новый массив. Пример:
*/
// function square(x) {
//     return x * x;
// }
// function map(fn, array) {
//     let newArr = [];
//     if (array.length === 0){
//         return newArr;
//     }else {
//         for (let i = 0; i < array.length; i++) {
//             newArr.push(fn(array[i]));
//         }
//         return newArr;
//     }
//
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(map(square, arr));
// console.log(arr);

/*Задание 19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде
той, что была в 17 задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее
значение из gen и пропускает его через функцию a. Пример:*/

// function square(x) {
//     return x * x;
// }
// function sequence(start, step) {
//     start = start || 0;
//     step = step || 1;
//     let defaultStart = start;
//     return () => {
//         let result = defaultStart;
//         defaultStart += step;
//         return result;
//     }
// }
//
//
// function fmap(a, gen) {
//
//     return () => {
//         // let res = [];
//         // res.push(gen2());
//
//         let args = arguments.length;
//         let arr = [];
//         for (let i = 0; i < args; i++){
//             arr[i] = arguments[i];
//         }
//         let x = a(gen2.apply(null, arr))
//         return x;
//     }
// }
// let gen2 = sequence(1, 1);
// let squareGen = fmap(square, gen2);
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
//
// function add(a, b) {
//     return a + b;
// }
//
// let sum = fmap(square, add)
// console.log(sum(2, 3));
// console.log(sum(5, 7));





/*Задание 20
Написать функцию filter, которая принимает функцию-предикат и массив.
Возвращает она массив значений,
для которых предикат вернет true.*/

// function isEven(x) {
//     return x % 2 === 0;
// }
// let input = [1, 2, 3, 4, 5, 6];
//
// function filter(input, isEven) {
//     let result = [];
//     for (let i = 0; i < input.length; i++){
//         if (isEven(input[i]))
//             result.push(input[i]);
//     }
//     return result;
// }
// console.log(filter(input, isEven));