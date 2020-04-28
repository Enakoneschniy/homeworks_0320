'use strict';

// 1. Задача (Рекурсия)
// Дано натуральное число n. Выведите все числа от 1 до n.

// let number = function (n) {
//   if(n <= 0){
//      return ;
//    } else {
//      number(n - 1);
//     console.log(n);
//    }
// };
//
// number(7);

// ==========================================
// 2. Задача (Рекурсия)
// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// //
// let numbers = function (a, b) {
//   console.log(a);
//
//   if (a < b) {
//     numbers(a + 1, b);
//   }
//
//   if (a > b) {
//     numbers(a - 1, b);
//   }
//
//   return;
// };
//
// console.log(numbers(5, 1));



  // вариант с массивом для своего интереса
// const numbersAsArray = function (a, b, result = []){
//   result.push(a);
//
//   if (a < b) {
//     numbersAsArray(a + 1, b, result);
//   }
//
//   if (a > b) {
//     numbersAsArray(a - 1, b, result);
//   }
//
//   return result;
// };
//
// console.log(numbersAsArray(5, 1));


// ===========================================

// 3. Задача (Рекурсия)
// Дано натуральное число N. Вычислите сумму его цифр.
//   При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
//
// const sum = function (n) {
//   if (n < 10){
//     return n;
//   } else {
//    let van = n % 10;
//    return van + sum ((n - van) / 10);
//    }
// };
//
// console.log(sum(10));


// ===========================================
// 4. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
//   При решении этой задачи нельзя использовать строки, списки,
//   массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
//
//  const recursion = function (n) {
//    let lastNum = (n % 10);
//    console.log(lastNum);
//    if (n < 10) {
//      return true;
//    }
//    return recursion((n - lastNum) / 10);
//  };
// //
//  recursion(321);

// ===========================================
// 5. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной, в обычном порядке, разделяя их пробелами или новыми строками.
//   При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.
//
//  const recursion = function (number) {
//    if (number === 0) {
//      return;
//    }
//    let n = number % 10;
//    number = (number - n)/10;
//    recursion(number);
//    console.log(n);
//  };
// //
//  recursion(54321);

// ===========================================


// 6. Задача (ООП)
// Реализуйте класс Worker (Работник),
//   который будет иметь следующие свойства: name (имя), surname (фамилия),
//   rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
//   который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//   Вот так должен работать наш класс:
//   С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.
//
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//
//   getSalary(){
//    let  total = 0;
//    total = this.rate * this.days;
//   return total;
//   }
// }
//
// let nik = new Worker('Nik', "Claus", 500, 20);
// console.log(nik);
// console.log(nik.getSalary());
//
//
// let maks = new Worker("Maks", "Jobs", 250, 2);
// console.log(maks);
// console.log(maks.getSalary());
//
// let sum = (number1, number2) => number1 + number2 ;
//
// console.log(sum(nik.getSalary(), maks.getSalary()));
// //
//
//
// 7. Задача (ООП)
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
//   сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
// 8. Задача (ООП)
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.


// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   get surname() {
//     return this._surname;
//   }
//
//   get rate() {
//     return this._rate;
//   }
//
//   set rate(newRate) {
//     return this._rate = newRate;
//   }
//
//   get days() {
//     return this._days;
//   }
//
//   set days(newDays) {
//     return this._days = newDays;
//   }
//
//   getSalary() {
//     let total = 0;
//     total = this.rate * this.days;
//     return total;
//   }
// }
//
//
//
//  const test1 = new Worker('nik', "Mask", 500, 30);
// console.log(test1.rate);
// console.log(test1.getSalary());


//
// 9. Задача (ООП)
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(),который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// метод ucWords,который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//
//   reverse(string) {
//     return string.split("").reverse().join("");
//   }
//
//   ucFirst(string) {
//     return string[0].toUpperCase() + string.slice(1);
//   }
//
//   ucWords(string){
//   const array = string.split(" ");
//   const capitalLetters = array.map(item => item[0].toUpperCase());
//   const wotds = array.map(item => item.slice(1));
//
//   let result = [];
//     for ( let i = 0; i < wotds.length; i+=1){
//       let add = capitalLetters[i]+ wotds[i];
//       result.push(add);
//     }
//     return result.join(" ");
//   }
//
// }
//
// let test = new MyString();
// console.log(test.reverse("css, html, js"));
// console.log(test.ucFirst("react"));
// console.log(test.ucWords("js, css, noda"));

// ===========================================
// 10. Задача (ООП)
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User),
// year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
//   Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
//   Вот так должен работать наш класс:

// class User {
//   constructor(name, surname){
//     this.name = name;
//     this.surname = surname;
// }
//   getFullName (){
//     return `${this.name} ${this.surname}`
//   }
// }
//
// class Student extends User {
//   constructor (name, surname, year){
//     super(name, surname);
//
//     this.year = year;
// }
//
//   getCourse(){
//     const thisYear = new Date().getFullYear();
//     let course = thisYear - this.year;
//
//     if(course > 5){
//     return  "Вы окончили более 5-ти лет назад"
//     }
//
//     return `курс  ${course}`;
//   }
// }
//
// let student = new Student("Nik", "Claus", 2019);
// console.log(student);
// console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.getCourse());

// ===========================================
//
// 12. Задача (функции работы с массивами)
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
//
// const letters = ['a', 'b', 'c'];
// const numbers = [1, 2, 3];
//
// const result =  letters.concat(numbers);
// console.log(letters);
// console.log(numbers);
// console.log(result);

// ===========================================

// 13. Задача (функции работы с массивами)
// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
//
// const array = ['a', 'b', 'c'];
// array.push(1,2,3);
// console.log(array);

// ===========================================

// 14. Задача (функции работы с массивами)
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const array = [1, 2, 3];
// array.unshift(4,5,6);
// console.log(array);

// ===========================================

// 15. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(0,3);
// console.log(newArray);

// ===========================================

// 16. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]

// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(3);
// console.log(newArray);

// / ===========================================

// 17. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.splice(1,2);
// console.log(array);
// console.log(newArray);

// / ===========================================

// 18. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.splice(1,3);
// console.log(newArray);
// / ===========================================

// 19. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// const array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c' );
// console.log(array);

// 20. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const array = [1, 2, 3, 4, 5];
//  array.splice(1, 0, 'a', 'b');
//  array.splice(6, 0, 'c');
//  array.splice(array.length, 0, 'e');
// console.log(array);

// /
// ===========================================
// 21. Задача (функции работы с массивами)
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

//  const  obj = {js:'test', jq: 'hello', css: 'world'};
//  const keys = Object.keys(obj);
// console.log(keys);


//
// 22. Задача (ООП)***
// Некая сеть фастфудов предлагает несколько видов гамбургеров:
//   маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий)
// и полить майонезом (+ 20 тугриков, + 5 калорий).
// Напиши программу, расчиытвающую стоимость и калорийность гамбургера.
//   Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).


//
// class Hamburger {
//   constructor(size, stuffing) {
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//   }
//
//   addTopping(topping) {
//     if (!this._toppings.includes(topping)){
//       this._toppings.push(topping);
//     }
//   }
//
//   removeTopping(topping) {
//     if(this._toppings.includes(topping)){
//       this._toppings = this._toppings.filter(item => item !==topping);
//     }
//   }
//
//   get getToppings() {
//     return this._toppings;
//   }
//
//   get getSize() {
//     return this._size;
//
//   }
//
//   get getStuffing() {
//     return this._stuffing;
//   }
//
//   get calculatePrice() {
//     const sizePrice = Hamburger.SIZES[this._size].price;
//     const stuffingPrice = Hamburger.STUFFINGS[this._stuffing].price;
//     const toppingsPrice = this._toppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
//     return  sizePrice + stuffingPrice + toppingsPrice;
//   }
//
//    get calculateCalories() {
//      const sizeCalories = Hamburger.SIZES[this._size].calories;
//      const stuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
//      const toppingsCalories = this._toppings.reduce((acc, topping) => Hamburger.TOPPINGS[topping].calories + acc, 0);
//      return sizeCalories + stuffingCalories + toppingsCalories;
//   }
//
// }
//
// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_BIG = 'SIZE_BIG';
//
// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 50,
//     calories: 20,
//   },
//   [Hamburger.SIZE_BIG]: {
//     price: 100,
//     calories: 40,
//   },
// };
//
//
// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD ='STUFFING_SALAD';
// Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';
//
//
// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 10,
//     calories: 20,
//   },
//   [Hamburger.STUFFING_SALAD]: {
//     price: 20,
//     calories:5,
//   },
//   [Hamburger.STUFFING_POTATO]: {
//     price: 15,
//     calories: 10,
//   },
// };
//
//
// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE ='TOPPING_SAUCE';
//
// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 15,
//     calories: 0,
//   },
//   [Hamburger.TOPPING_SAUCE]: {
//     price: 20,
//     calories: 5,
//   },
// };
//
// /* Вот как может выглядеть использование этого класса */
//
// // Маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//
// console.log(hamburger);
// // // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger);
// // // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories);
// // //
// // // // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice);
// //
// // // Я тут передумалa и решилa добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// //
// // // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice);
// //
// // // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false
// //
// // // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// //
// // // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1
//
//
//
// console.dir(Hamburger);
// const details = Hamburger.SIZES;
// console.log({ details });
// const x = new Hamburger(Hamburger.SIZE_SMALL);
// console.log(x);
// console.log(Hamburger.SIZES[Hamburger._size].calories);
