/*
1. Задача (Рекурсия)
Дано натуральное число n. Выведите все числа от 1 до n.
*/

// function recFn(n) {
// if (n==1){
//     return n;
// }
// return recFn(n-1)+" "+n;
// }
//
// let countNumber = prompt(`Введите количество чисел`);
// console.log(recFn(countNumber));

/*2. Задача (Рекурсия)
Даны два целых числа A и В (каждое в отдельной строке).
 Выведите все числа от A до B включительно, в порядке возрастания,
  если A < B, или в порядке убывания в противном случае.
*/

// function recFn(a,b) {
//     if(a===b){
//         return a;
//     }else{
//         if(b>a){
//             console.log(a);
//             return recFn(a+1,b);
//          }else {
//             console.log(a);
//             return recFn(a-1,b);
//         }
//     }
// }
// let a= 5;
// let b = 6;
// //or
// // a=10;
// // b=5;
// console.log(recFn(a,b));

/*3. Задача (Рекурсия)
Дано натуральное число N. Вычислите сумму его цифр.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
*/

// let number = 12345;
// let sum=0;
// let current=0;
// function recFn(x) {
//     if (x===0){
//         return ;
//     }else {
//         current= x%10;
//         x=(x-current)/10;
//         sum+=current;
//         return recFn(x);
//     }
// }
// recFn(number);
// console.log(sum);


/*4. Задача (Рекурсия)
Дано натуральное число N. Выведите все его цифры по одной,
в обратном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки,
массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
*/
// let number =124125;
// let current=0;
// let currentForResult=0;
// function recFn(n) {
//   if    (n==0){
//       return;
//   }else {
//       current=n%10;
//       n=(n-current)/10;
//       currentForResult=current;
//       console.log(currentForResult);
//       return recFn(n);
//   }
// }
// recFn(number);


/*5. Задача (Рекурсия)
Дано натуральное число N. Выведите все его цифры по одной,
в обычном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки,
 массивы (ну и циклы, разумеется). Разрешена только рекурсия и
 целочисленная арифметика.
*/

// let x=323456789;
// let current=0;
// let currentForResult=0;
// function recFn(n) {
//     if (n < 10) {
//         return n;
//     } else {
//         return recFn(n / 10 ^ 0) + `\n` + n % 10;
//     }
// }
// console.log(recFn(x));




/*
6. Задача (ООП)
Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
*/
// class Worker{
//     constructor(name,surname,rate,days) {
//         this.name=name;
//         this.surname=surname;
//         this.rate=rate;
//         this.days=days;
//     }
//
//     getSalary(){
//         return this.days*this.rate;
//     }
//
//     set newRate(rate){
//         return this.rate=rate;
//     }
//     set newDays(days){
//         return this.days=days;
//     }
// }
// let worker = new Worker('Иван','Иванов',10,31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());


/*7. Задача (ООП)
Модифицируйте класс Worker из предыдущей задачи следующим образом:
 сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
 */


/*8. Задача (ООП)
Модифицируйте класс Worker из предыдущей задачи следующим образом:
для свойства rate и для свойства days сделайте еще и методы-сеттеры.*/

// worker.newRate=5;
// console.log(worker.rate);
// worker.newDays=25;
// console.log(worker.days);
// console.log(worker.getSalary());

/*
9. Задача (ООП)
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву
заглавной и метод ucWords, который принимает строку и делает заглавной
первую букву каждого слова этой строки.
*/
// class MyString {
// revers(str){
// let strArray = str.split('');
// strArray= strArray.reverse();
//     return strArray.join('');
// }
// ucFirst(str){
//     let strArray=str.split('');
//
//    strArray[0]= strArray[0].toUpperCase();
//
//     return strArray.join('');
// }
//
// ucWords(str){
//     let strArray = str.split(' ');
// let newArr = [];
// for (let i = 0; i < strArray.length; i++) {
// newArr.push(ucfirst(strArray[i]));
// }
// return newArr.join(' ');
// }
// }
// function ucfirst(str) {
//     let a = str[0].toUpperCase() + str.substr(1);
//     return(a);
// }
//
//
// let str = new MyString();
//
// console.log(str.revers('abcde'));
// console.log(str.ucFirst('abcde'));
// console.log(str.ucWords('abcde abcde abcde'));

/*10. Задача (ООП)
Реализуйте класс Student (Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User), с помощью которого
 можно вывести одновременно имя и фамилию студента. Также класс
 должен иметь метод getCourse(), который будет выводить текущий курс
 студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять
 год поступления в вуз. Текущий год получите самостоятельно.
 */
// class User {
//     constructor(name,surname) {
//     this.name=name;
//     this.surname=surname;
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`;
//     }
// };
// class Student extends User {
//     constructor(name,surname,year) {
//         super(name,surname);
//         this.year=year;
//     }
//     getCourse(){
//         let data = new Date();
//         let currentYear= data.getFullYear();
//         let course=currentYear-this.year;
//         if(course>=1 && course<=5){
//             return `${course} курс, так как текущий год 2020`;
//         }else {
//             return `Ты уже закончил вуз`
//         }
//     }
// }
// let student = new Student('Иван',"Иванов",2019);
// console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.year);
// console.log(student.getCourse());


/*
12. Задача (функции работы с массивами)
Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
*/

// function one(arrayX,arrayY) {
//     arr3 = arrayX.concat(arrayY);
// return arr3;
//
//     //or
//     // for (let i=0;i<arrayY.length;i++){
//     //     arrayX.push(arrayY[i]);
//     // }
//     // return arrayX;
//     //
// }
// let arr1=['a', 'b', 'c'];
// let arr2=[1,2,3];
// let arr3=[];
// console.log(one(arr1,arr2));

/*13. Задача (функции работы с массивами)
Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
*/

// function one(array) {
//     for (let i=1;i<=3;i++){
//         array.push(i);
//     }
//     return array;
// }
// let array=['a', 'b', 'c'];
// console.log(one(array));

/*
14. Задача (функции работы с массивами)
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6*/
// let arr =[1, 2, 3];
// function one(array) {
//     for (let i=6;i>=4;i--){
//         array.unshift(i);
//     }
//     return array;
// }
// console.log(one(arr));


/*
15. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/
// let array=[1, 2, 3, 4, 5];
// let newArray;
// function one(array) {
//         newArray=array.slice(0,3);
//         return newArray;
// }
// console.log(one(array));

/*
16. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/
// let array=[1, 2, 3, 4, 5];
// let newArray;
// function one(array) {
//         newArray=array.slice(3,5);
//         return newArray;
// }
// console.log(one(array));

/*
17. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
*/

// let array=[1, 2, 3, 4, 5];
//
// function one(array) {
//         array.splice(1,2);
//
//         return array;
// }
// console.log(one(array));

/*
18. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
*/
// let array=[1, 2, 3, 4, 5];
// let newArray=[];
//
// function one(array) {
//     let number = array.splice(1,3);
//     for (let i=0;i<number.length;i++){
//         newArray.push(number[i]);
//     }
//     return newArray;
// }
// console.log(one(array));

/*19. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5].
С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
*/
// let array=[1, 2, 3, 4, 5];
// function one(array) {
//     array.splice(3,0,'a','b','c');
//     return array;
// }
//
// console.log(one(array));


/*
20. Задача (функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью метода
splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/

// let array= [1, 2, 3, 4, 5];
// function one(array) {
//
//     array.splice(1,0,'a','b');
//     array.splice(6,0,'c');
//     array.splice(8,0,'e');
//     return array;
// }
// console.log(one(array));


/*
21. Задача (функции работы с массивами)
Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/

// const obj ={
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// };
// function one(obj) {
// let array=[];
//     for (let key in obj){
//         array.push(key);
//     }
// return array;
//     //or
//     // return Object.keys(obj);
// }
// console.log(one(obj));


/*22. Задача (ООП)***
Некая сеть фастфудов предлагает несколько видов гамбургеров:
маленький (50 тугриков, 20 калорий)
большой (100 тугриков, 40 калорий)
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
Дополнительно, гамбургер можно посыпать приправой
(+ 15 тугриков, 0 калорий) и полить майонезом (+ 20 тугриков, + 5 калорий).
Напиши программу, расчиытвающую стоимость и калорийность гамбургера.
Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для
выбора опций и рассчета нужных величин).
*/







