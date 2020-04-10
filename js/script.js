'use strict'
/*1. Задача (Рекурсия)
Дано натуральное число n. Выведите все числа от 1 до n.
*/

// function rec(n) {
//     if (n === 1){
//         return n;
//     }
//     console.log(rec(n - 1));
//     return n;
// }
//
// console.log(rec(5));

/*2. Задача (Рекурсия)
Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно,
в порядке возрастания, если A < B, или в порядке убывания в противном случае.
*/

// const a = 15;
// const b = 10;
// function recA(a, b) {
//     if (a === b) {
//         return a;
//     }else {
//         if (a < b) {
//             console.log(a);
//             return recA(a + 1, b);
//         }else{
//             console.log(a);
//             return recA(a - 1, b);
//         }
//
//     }
// }
// recA(a,b);


/*3. Задача (Рекурсия)
Дано натуральное число N. Вычислите сумму его цифр.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
*/

// let number = 12345;
// let current = 0;
// let sum = 0;
//
// function recSum(n) {
//     if (n === 0){
//         return n;
//     }else{
//         current = n % 10;
//         n = (n - current) / 10;
//         sum += current;
//         return recSum(n)
//     }
// }
// recSum(number);
//
// console.log(sum);

/*4. Задача (Рекурсия)
Дано натуральное число N. Выведите все его цифры по одной,
в обратном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки,
массивы (ну и циклы, разумеется). Разрешена только рекурсия и
целочисленная арифметика.
*/

// let number = 123543;
// let current = 0;
//
// function recOut(n) {
//     if ( n === 0){
//         return n;
//     }else{
//         current = n % 10;
//         n = (n - current) / 10;
//         console.log(current);
//         return recOut(n);
//     }
// }
// recOut(number);

/* Задача 6 и 8 ООП.
Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
name (имя), surname (фамилия), rate (ставка за день работы),
days (количество отработанных дней). Также класс должен иметь
метод getSalary(), который будет выводить зарплату работника.
Зарплата - это произведение (умножение) ставки rate на количество
отработанных дней days.Модифицируйте класс Worker из предыдущей задачи
следующим образом: для свойства
rate и для свойства days сделайте еще и методы-сеттеры.
*/

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//
//     getSalary(){
//         return this.rate * this.days;
//     }
//     set setRate(rate){
//         this.rate = rate;
//     }
//     set setDays(days){
//         this.days = days;
//     }
//
// }
//
// let worker = new Worker('Ivan', 'Ivanov', 10, 31);
//
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
// console.log(worker.setRate = 15);
// console.log(worker.setDays = 20);
//console.log(worker.getSalary());

/*9. Задача (ООП)
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
*/

// class MyString {
//     constructor(){
//
//     }
//     reverse(str){
//         return str.split("").reverse().join("");
//     }
//     ucFirst(str){
//         let firstChar = str.slice(0, 1).toUpperCase();
//         let result = firstChar + str.slice(1, str.length);
//         return result;
//     }
//     ucWords(str){
//         let arrayWords = str.split(" "); //разбиваем строку на массив
//         let result = "";  // В будущем запишем результат
//         for (let i = 0; i < arrayWords.length; i++) {
//             let word = arrayWords[i];
//             let firstChar = word.slice(0, 1).toUpperCase();
//             let otherSentence = word.slice(1, word.length);
//             result += firstChar + otherSentence + " ";
//         }
//     return result;
//
//         return result;
//     }
//
// }
// const str = new MyString();
//
// console.log(str.reverse("abcde"));
// console.log(str.ucFirst("abcde"));
// console.log(str.ucWords("abcde abcde abcde"));


/*10. Задача (ООП)
Реализуйте класс Student (Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User),
с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий
курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года
отнять год поступления в вуз. Текущий год получите самостоятельно.
*/

// class User {
//     constructor(name, surname, year) {
//         this.name = name;
//         this.surname = surname;
//         this.year = year;
//
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`
//     }
// }
// function getYear(){
//     let year = new Date();
//     return year.getFullYear();
// }
// class Student extends User{
//     constructor(name, surname, year) {
//         super(name, surname, year);
//     }
//     getCourse(){
//         return getYear() - this.year;
//     }
// }
//
// let student = new Student('Pasha', 'Pavlov', 2015);
// console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.year);
// console.log(student.getCourse());

/*12. Задача (функции работы с массивами)
Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
*/

// function joinArr() {
//     let a = ['a', 'b', 'c'];
//     let b = [1, 2, 3];
//     let newArr = [];
//     newArr = a.concat(b);
//     return newArr;
// }
//
// console.log(joinArr());

/*13. Задача (функции работы с массивами)
Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

// let a = ['a', 'b', 'c'];
// function addToArr() {
//     for (let i = 1; i <= 3; i++){
//         a.push(i);
//     }
//     return a;
// }
//
// console.log(addToArr());

/*14. Задача (функции работы с массивами)
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

// let a = ['a', 'b', 'c'];
// function addToArr() {
//     for (let i = 6; i >= 4; i--){
//         a.unshift(i);
//     }
//     return a;
// }
//
// console.log(addToArr());

/*15. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice
запишите в новый элементы [1, 2, 3].*/

// let arr = [1, 2, 3, 4, 5];
//
// function myArray(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         newArr = arr.slice(0, 3);
//     }
//     return newArr;
// }
// console.log(myArray(arr));

/*16. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice
запишите в новый элементы [4, 5].*/

// let arr = [1, 2, 3, 4, 5];
// //
// // function myArray2(arr) {
// //     let newArr = [];
// //     for (let i = 0; i < arr.length; i++){
// //         newArr = arr.slice(3, 5);
// //     }
// //     return newArr;
// // }
// //
// // console.log(myArray2(arr));

/*17. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
преобразуйте массив в [1, 4, 5].*/

// let arr = [1, 2, 3, 4, 5];
// function proArr(arr) {
//     arr.splice(1,2);
//     return arr;
// }
//
// console.log(proArr(arr));

/*18. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
запишите в новый массив элементы [2, 3, 4].*/

// let arr = [1, 2, 3, 4, 5];
// function proArr(arr) {
//     let newArr = [];
//
//     arr.splice(0, 1);
//     arr.splice(3, 1);
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(arr[i]);
//
//     }
//     return newArr;
// }
// console.log(proArr(arr));


/*19. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]*/

// function addToArray() {
//     let arr = [1, 2, 3, 4, 5];
//     arr.splice(3,0, 'a', 'b', 'c');
//     return arr;
// }
//
// console.log(addToArray());

/*20. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

// function addToArray2() {
// //     let arr = [1, 2, 3, 4, 5];
// //     arr.splice(1, 0, 'a', 'b');
// //     arr.splice(6, 0, 'c');
// //     arr.splice(8, 0 , 'e');
// //     return arr;
// // }
// //
// // console.log(addToArray2());

/*21. Задача (функции работы с массивами)
Дан объект {js:'tгest', jq: 'hello', css: 'world'}.
Получите массив ео ключей.*/

// const myObject = {
//     js: "test",
//     jq: 'hello',
//     css: 'word'
// }
// function getKeys(obj) {
//     return Object.keys(obj);
// }
//
// console.log(getKeys(myObject));
