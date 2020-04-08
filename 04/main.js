'use strict'
/*task 1(Рекурсия)
Дано натуральное число n.
Выведите все числа от 1 до n.
*/
function getNumbers(n) {
  if (n === 1) {
    return 1
  }
  return `${getNumbers(n-1)} ${n}` 
}
//console.log(getNumbers(15));

/*task 2(Рекурсия)
Даны два целых числа A и В 
(каждое в отдельной строке). 
Выведите все числа от A до B 
включительно, в порядке возрастания, 
если A < B, или в порядке убывания 
в противном случае.
*/
function showNumbers(a, b) {
  if (a === b) {
    return a
  }
  if (a < b) {
    return `${a} ${showNumbers((a + 1), b)}`
  }
  return `${a} ${showNumbers((a - 1), b)}` 
}
//console.log(showNumbers(-20, -15));

/*task 3(Рекурсия)
Дано натуральное число N. 
Вычислите сумму его цифр.
При решении этой задачи 
нельзя использовать строки, 
списки, массивы (ну и циклы, 
разумеется).
*/
function sumNumbers(n) {
  let num = n % 10;
  let nextN = (n - num) / 10;
  if (n === num) {
    return n
  }
  return num + sumNumbers(nextN)
}
//console.log(sumNumbers(9821));

/*task 4(Рекурсия)
Дано натуральное число N. 
Выведите все его цифры по 
одной, в обратном порядке, 
разделяя их пробелами или 
новыми строками.
При решении этой задачи 
нельзя использовать строки, 
списки, массивы (ну и циклы, 
разумеется). Разрешена только 
рекурсия и целочисленная арифметика.

*/
function reversNumbers(n) {
  let num = n % 10;
  let nextN = (n - num) / 10;
  if (n === num) {
    return n
  }
  return num + ' ' + reversNumbers(nextN)
}
//console.log(reversNumbers(9821));


/*task 5(Рекурсия)
Дано натуральное число N. 
Выведите все его цифры по 
одной, в обычном порядке, 
разделяя их пробелами или 
новыми строками.
При решении этой задачи нельзя 
использовать строки, списки, 
массивы (ну и циклы, разумеется). 
Разрешена только рекурсия и 
целочисленная арифметика.
*/

function orderNumbers(n) {
  let num = n % 10;
  let nextN = (n - num) / 10;
  if (n === num) {
    return n
  }
  return orderNumbers(nextN) + ' ' + num; 
}
//console.log(orderNumbers(9821));


/*task 6(ООП)
Реализуйте класс Worker (Работник), 
который будет иметь следующие 
свойства: name (имя), surname 
(фамилия), rate (ставка за день 
работы), days (количество отработанных 
дней). Также класс должен иметь метод 
getSalary(), который будет выводить 
зарплату работника. Зарплата - это 
произведение (умножение) ставки rate 
на количество отработанных дней days.
С помощью нашего класса создайте двух 
рабочих и найдите сумму их зарплат.
*/

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname,
    this.rate = rate,
    this.days = days
  }
  getSalary() {
    return this.rate * this.days
  }
}

let worker = new Worker('Ivan', 'Ivanov', 10, 31);
//console.log(worker.name);
//console.log(worker.surname);
//console.log(worker.rate); 
//console.log(worker.days); 
//console.log(worker.getSalary());

function sumSalary() {
  let worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
  let worker2 = new Worker('Fedya', 'Fedorov', 10, 15);
  let sum = worker1.getSalary() + worker2.getSalary();
  return sum; 
}
//console.log(sumSalary())


/*task 7(ООП)
Модифицируйте класс Worker 
из предыдущей задачи следующим 
образом: сделайте все его свойства 
приватными, а для их чтения 
сделайте методы-геттеры.
*/
class Workers {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }

  getName() {
    return this._name;
  }

  getSurname() {
    return this._surname;
  }

  getRate() {
    return this._rate;
  }

  getDays() {
    return this._days;
  }

  getSalary() {
    return this._rate * this._days
  }
}

let workers = new Workers('Иван', 'Иванов', 10, 31);

//console.log(workers.getName()); 
//console.log(workers.getSurname());
//console.log(workers.getRate()); 
//console.log(workers.getDays()); 
//console.log(workers.getSalary());


/*task 8(ООП)
Модифицируйте класс Worker 
из предыдущей задачи следующим 
образом: для свойства rate и 
для свойства days сделайте еще 
и методы-сеттеры.
*/ 

class WorkerN {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname
  }
  getRate() {
    return this._rate;
  }
  getDays() {
    return this._days
  }
  getSalary() {
    return this._rate * this._days;
  }
  setRate(n) {
    return this._rate = n;
  }
  setDays(n) {
    return this._days = n;
  }
}

let workerN = new WorkerN('Иван', 'Иванов', 10, 31);

workerN.setRate(50);
workerN.setDays(10);
//console.log(workerN.getSalary());


/*task 9(ООП)
Реализуйте класс MyString, который 
будет иметь следующие методы: 
метод reverse(), который 
параметром принимает строку, 
а возвращает ее в перевернутом виде
, метод ucFirst(), который параметром 
принимает строку, а возвращает эту 
же строку, сделав ее первую букву 
заглавной и метод ucWords, 
который принимает строку и делает 
заглавной первую букву каждого слова 
этой строки.
*/

class MyString {

  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    str = str.split(' ');
    return str.map(item => {
      return item[0].toUpperCase() + item.slice(1)
    }).join(' ')
  }
}

let str = new MyString();

// console.log(str.reverse('abcde'))
// console.log(str.ucFirst('abcde'))
// console.log(str.ucWords('abcde abcde abcde'))


/*task 10(ООП)
Реализуйте класс Student (Студент), 
который будет наследовать от класса User. 
Этот класс должен иметь следующие свойства: 
name (имя, наследуется от User), surname 
(фамилия, наследуется от User), year 
(год поступления в вуз). Класс должен иметь 
метод getFullName() (наследуется от User), 
с помощью которого можно вывести одновременно 
имя и фамилию студента. Также класс должен 
иметь метод getCourse(), который будет выводить 
текущий курс студента (от 1 до 5). Курс 
вычисляется так: нужно от текущего года отнять 
год поступления в вуз. Текущий год получите 
самостоятельно.
*/

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    let date = new Date();
    return date.getFullYear() - this.year
  }
}

let student = new Student('Ivan', 'Ivanov', 2016);
//console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.year);
// console.log(student.getCourse());


/*task 12(функции работы с массивами)
Даны два массива: ['a', 'b', 'c'] и 
[1, 2, 3]. Объедините их вместе.
*/

function concatArr(arr1, arr2) {
  return arr1.concat(arr2);
}

//console.log(concatArr(['a', 'b', 'c'], [1, 2, 3]))


/*task 13(функции работы с массивами)
Дан массив ['a', 'b', 'c']. Добавьте 
ему в конец элементы 1, 2, 3.
*/

function addElemToEndArr(arr) {
  arr.splice(arr.length, 0, 1, 2, 3);
  return arr;
}
//console.log(addElemToEndArr(['a', 'b', 'c']))


/*task 14(функции работы с массивами)
Дан массив [1, 2, 3]. Добавьте ему в 
начало элементы 4, 5, 6. 
*/

function addElemToStartArr(arr) {
  arr.splice(0, 0, 4, 5, 6);
  return arr;
}
//console.log(addElemToStartArr([1, 2, 3]))


/*task 15(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода slice запишите в новый 
элементы [1, 2, 3].
*/

function createNewArr(arr) {
  let arrNew = arr.slice(0, 3);
  return arrNew
}
//console.log(createNewArr([1, 2, 3, 4, 5]))


/*task 16(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода slice запишите в новый элементы [4, 5].
*/

function crNewArr(arr) {
  let arrNew = arr.slice(3);
  return arrNew
}
//console.log(crNewArr([1, 2, 3, 4, 5]))


/*task 17(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода splice преобразуйте массив в [1, 4, 5].
*/

function newArr(arr) {
  arr.splice(1, 2);
  return arr
}
//console.log(newArr([1, 2, 3, 4, 5]))


/*task 18(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода splice запишите в новый массив 
элементы [2, 3, 4].
*/

function newArr(arr) {
  let newArr = arr.splice(1, 3);
  return newArr
}
//console.log(newArr([1, 2, 3, 4, 5]))


/*task 19(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода splice сделайте из него 
массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
*/

function createNewArr(arr) {
  arr.splice(3, 0, 'a', 'b', 'c');
  return arr
}
//console.log(createNewArr([1, 2, 3, 4, 5]))


/*task 20(функции работы с массивами)
Дан массив [1, 2, 3, 4, 5]. С помощью 
метода splice сделайте из него массив 
[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/

function createNewArr(arr) {
  arr.splice(1, 0, 'a', 'b');
  arr.splice(-1, 0, 'c');
  arr.splice(arr.length, 0, 'e');
  return arr
}
//console.log(createNewArr([1, 2, 3, 4, 5]))


/*task 21(функции работы с массивами)
Дан объект {js:'test', jq: 'hello', css: 'world'}. 
Получите массив его ключей.
*/

function getArrKey(obj) {
  let arr = [];

  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

//console.log(getArrKey({js:'test', jq: 'hello', css: 'world'}))


/*task 22(ООП*)
*/
 const SMALLGAMBURGER = 'small';
 const BIGGAMBURGER = 'big';

 const PRICESMALLGAMBURGER = 50;
 const PRICEBIGGAMBURGER = 100;

 const CALORIESSMALLGAMBURGER = 20;
 const CALORIESBIGGAMBURGER = 40;

 const CHEESE = 'cheese';
 const SALAD = 'salad';
 const POTATO = 'potato';

 const PRICECHEESE = 10;
 const PRICESALAD = 20;
 const PRICEPOTATO = 15;

 const CALORIESCHEESE = 20;
 const CALORIESSALAD = 5;
 const CALORIESPOTATO = 10;

 const SEASONING = 'seasoning';
 const MAYONNAISE = 'mayonnaise';

 const PRICESEASONING = 15;
 const PRICEMAYONNAISE = 20;

 const CALORIESSEASONING = 0;
 const CALORIESMAYONNAISE = 5;

 let priceGamburger;
 let priceFilling;
 let priceAdditive;
 let caloriesGamburger;
 let caloriesFilling;
 let caloriesAdditive;

class Gamburger {

  constructor(size, filling, additive) {
    this._size = size;
    this._filling = filling;
    this._additive = additive;
  }

  _getGamburger() {
    if (this._size === SMALLGAMBURGER) {
      priceGamburger = PRICESMALLGAMBURGER;
      caloriesGamburger = CALORIESSMALLGAMBURGER;
    } else {
      priceGamburger = PRICEBIGGAMBURGER;
      caloriesGamburger = CALORIESBIGGAMBURGER;
    }

    return {
            priceGamburger: priceGamburger,
            caloriesGamburger: caloriesGamburger
    }
  }

  _getFillingAndAdditive() {
    if(this._filling === CHEESE) {
        priceFilling = PRICECHEESE;
        caloriesFilling = CALORIESCHEESE;
      } else if (this._filling === SALAD) {
        priceFilling = PRICESALAD;
        caloriesFilling = CALORIESSALAD;
      } else if (this._filling === POTATO) {
        priceFilling = PRICEPOTATO;
        caloriesFilling = CALORIESPOTATO;
      } else {
        priceFilling = 0;
        caloriesFilling = 0;
      }
    if (this._additive === SEASONING) {
        priceAdditive = PRICESEASONING;
        caloriesAdditive = CALORIESSEASONING;
      } else if (this._additive === MAYONNAISE) {
        priceAdditive = PRICEMAYONNAISE;
        caloriesAdditive = CALORIESMAYONNAISE;
      } else {
        priceAdditive = 0;
        caloriesAdditive = 0;
    }
      return {
              priceFilling: priceFilling,
              priceAdditive: priceAdditive,
              caloriesFilling: caloriesFilling,
              caloriesAdditive: caloriesAdditive
            }
  }
  
  getPrice(){
    let a = this._getFillingAndAdditive();
    let b = this._getGamburger();
    return b.priceGamburger + a.priceFilling + a.priceAdditive + ' ' + 'тугриков'
  }

  getCalories(){
    let a = this._getFillingAndAdditive();
    let b = this._getGamburger();
    return b.caloriesGamburger + a.caloriesFilling + a.caloriesAdditive + ' ' + 'калорий'
  }
}

let smallGamburger = new Gamburger('','potato','mayonnaise')
console.log(smallGamburger)
console.log(smallGamburger.getPrice())
console.log(smallGamburger.getCalories())