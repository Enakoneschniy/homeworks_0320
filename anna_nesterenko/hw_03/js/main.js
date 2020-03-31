'use strict';

// Задание 1
// Написать функцию которая первым принимает значение, которым заполнять массив,
//   а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

//  let add = function (el, number) {
//    let array = [];
//
//    for (let i = 0; i < number; i++) {
//      array.push(el)
//    }
//    return array;
//  }
//
// console.log(add('z', 5));

// v2
// const arr = Array(number);
// arr.fill('z', 0, number - 1);

// =============================================
//
// Задание 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//   Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//
//
//   let array = [ [[2, 8, 5], [3, 8], [5, 6]] ,  [[5, 7], [7, 8], [3]] ];
//   let total = 0;
//
//   for ( let i = 0; i < array.length; i += 1) {
//
//     for (let j = 0; j < array[i].length; j += 1) {
//
//       for (let n = 0; n < array[i][j].length; n += 1) {
//
//         total += array[i][j][n];
//       }
//     }
//   }
//
// console.log(total);

// =============================================

// Задание 3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//   что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


// let isNumberInRange = function (number){
//   return number > 0 && number < 10;
// }
//
// console.log(isNumberInRange(6));

// =============================================

// Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
//   четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

//
// let isEven = function (number){
//   return  number % 2 === 0;
// }
//
// console.log( isEven(4));
// console.log( isEven(7));


// Задание 5
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
//   Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let array = [ 3, 2, 5, 6, 8, 12, 10, 19, 222, 20];
// console.log(array);
//  let newArray = [];
//
//   for (let i = 0; i < array.length; i +=1){
//     if (isEven(array[i])) {
//       newArray.push(array[i])
//     }
//   }
// console.log(newArray);


//
// Решение в виде функции

// let addEvenNumber = function (arr) {
//   let newArrray = [];
//
//   for (let i = 0; i < arr.length; i += 1) {
//     if (isEven(arr[i])) {
//       newArrray.push(arr[i])
//     }
//   }
//   return newArrray;
// }
//
//   console.log(addEvenNumber(array));

// =============================================

// Задание 6
//
// Сделайте функцию getDivisors, которая параметром принимает число
// и возвращает массив его делителей (чисел, на которое делится данное число).



// let getDivisors = function (number) {
//   let array =[];
//   for ( let i =0; i <= number; i+= 1){
//     if(number % i === 0){
//       array.push(i)
//     }
//   }
//   return array;
// }
//
// console.log(getDivisors(10));

// =============================================


// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа.
//   Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// let customPow = (number, a) => number ** a;
// console.log(customPow(2,3));
// =============================================

// Задание 8
// Функция принимает параметр - возраст пользователя.
//   Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
//  let getAge = function (age){
//    return (age > 16) ? "добро пожаловать" : "вы еще молоды"
//  }
// console.log(getAge(98));
// console.log(getAge(4));

// =============================================

// Задание 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//   В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
//
// let getAge = function (age){
//   if(age === undefined || !arguments.length) {
//     return "Введите возраст"
//   }
//   if(age < 16){
//     return "вы еще молоды"
//    }
//    return "добро пожаловать";
//  }
//
// console.log(getAge(64));;

// =============================================

// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
//   Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

// let arrLength = function (arr){
//  if(!arr || !Array.isArray(arr)){
//    return "ошибка"
//  }
//  return arr.length;
// }
// console.log(arrLength([7,7,7,9]));

// =============================================


// Задание 11
// Пользователь вводит числа.
//   Если число больше 10, то функция возвращает квадрат числа,
//   если меньше 7 – пишет, что число меньше 7.
// Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.

// let getNumber = function (number){
//   if (number > 10){
//    return Math.pow(number, 2)
//   }
//
//   if (number < 7){
//     return "число меньше 7";
//   }
//
//   if (number === 8){
//     return 7
//   }
//
//   if(number === 9){
//     return 8
//   }
//
//   return "Ни один из этих вариантов не сработал"
// }
//
// console.log(getNumber(8));

// =============================================
//
// Задание 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//   Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//   делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
//
// function capitalize(str) {
//   const words = str.split(" ");
//   const result = [];
//
//   for (let i = 0; i < words.length; i += 1) {
//     const word = words[i];
//     const capitalizedWord = ucfirst(word);
//     result.push(capitalizedWord);
//   }
//
//   return result.join(' ');
// }
//
// function ucfirst(word) {
//   const firstChar = word[0].toUpperCase();
//   const otherChars = word.slice(1);
//   return firstChar + otherChars;
// }
//
//
// console.log(capitalize("германия, париж, флоренция"));


// второй вариант
// function capitalize(str) {
//   return (
//     str.split(' ')
//       .map(ucfirst)
//       .join(' ')
//   )
// }
// function ucfirst(word) {
//   const firstChar = word[0].toUpperCase();
//   const otherChars = word.slice(1);
//   return firstChar + otherChars;
// }
// console.log(capitalize("рим, прага, киев, моравия, венеция"));

// =============================================

// Задание 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// const string = 'var_text_hello';
// console.log(string);
//
// let stringsConversion = function (str) {
//   const words = string.split("_");
//   const result = [];
//
//   const firstWord = words[0];
//   result.push(firstWord);
//   for (let i = 1; i < words.length; i += 1) {
//     const word = words[i];
//     const firstChar = word[0].toUpperCase();
//     const otherChars = word.slice(1);
//     const formattedWord = firstChar + otherChars;
//
//     result.push(formattedWord);
//   }
//
//  return result.join("");
//
// }
// console.log(stringsConversion(string));


// =============================================
// Задание 14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//   Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
//   Функция должна возвращать true или false.

// первый вариант

// const arrayWords = ["Бэста", "Рим", "путешествие", "впечатления"];
// let inArray = (text, arr) => arr.includes(text);
//
// console.log(inArray("Бэста", arrayWords));



// второй вариант
// const arrayWords = ["Бэста", "Рим", "путешествие", "впечатления"];
//
// let inArray = function (text, arr) {
//  return arr.includes(text);
// }
//
// console.log(inArray("Рим", arrayWords));


// третий вариант
// const arrayWords = ["Бэста", "Рим", "путешествие", "впечатления"];
//
// let inArray = function (text, arr) {
//   for (let el of arrayWords) {
//     if (el === text) {
//       return true
//     }
//   }
//   return false
// }
// console.log(inArray("Рим", arrayWords));
// =============================================

//
// Задание 15
// Дана строка, например, '123456'. Сделайте из нее '214365'.

// const str ="123456";
// console.log(str);
//
// let newStr;
// let changeOfseats = function (num) {
//
//   const array = num.split("");
//   const result = [];
//
//   for( let i = 0; i < array.length; i += 2){
//   let indexA = i;
//   let indexB = i+1;
//   if( indexB < array.length){
//     result.push(array[i + 1])
//   }
//    result.push(array[i]);
// }
//  newStr = result.join("");
// return newStr;
// }
// console.log(changeOfseats(str));
//
// =============================================

// Задание 16
// Напиши функцию создания генератора sequence(start, step).
//   Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше,
//   и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
//   Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
// Генераторов можно создать сколько угодно.
// // //
// let sequence = function (start = 0, step = 1) {
//  let x = start - step;
//  return function () {
//    x = x + step;
//    return x;
//  }
// }
// const counter = sequence(10, 3);
// const counter2 = sequence(2, 3);

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());

// =============================================

// Задание 17
// Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
//
// const take = function (gen, x) {
//   let array =[];
//
//   for ( let i = 0; i < x; i += 1){
//     array.push(gen());
//   }
// return array;
// }
//
// let gen2 = sequence(0, 3);
// console.log(take(gen2, 5));;

// =============================================

// / Задание 18
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//   и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

// const numbers =[2,3,4,5];
//
// let square = (num) => num * 2
//
// const map = function (foo, arr) {
//  return arr.map(square);
// }
// console.log(map(square, numbers));
// console.log(numbers);

// =============================================

// Задание 19
// Напиши функцию fmap(a, gen), которая принимает на вход 2 функции,
//   a и gen, где gen — функция-генератор вроде той, что была в 17 задании.
//   fmap возвращает новую функцию-генератор, которая при каждом вызове
// берет следующее значение из gen и пропускает его через функцию a.

// let sequence = function (start = 0, step = 1) {
//  let x = start - step;
//  return function () {
//    x = x + step;
//    return x;
//  }
// }
//
// let generator = sequence(1,1);
//
// let square = (x) => {return x * x};
//
// let fmap = function (a, gen) {
//   return function (x, y) {
//     return a(gen(x, y));
//   };
// }
//
// let squareGen = fmap(square, generator);
//
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
//
// let add = (a, b) => { return a + b };
//
// let squareAdd = fmap(square, add);
//
// console.log(squareAdd(2, 3));
// console.log(squareAdd(3, 7));


// Задание 20
// Написать функцию filter, которая принимает функцию-предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
//   Функция не должна изменять исходный массив

// првый вариант
// let array = [5, 7, 4, 8, 11, 21, 9]
//
// const isOdd = function (number) {
//   return number % 2 !==0;
// }
//
// const filter = function (foo,arr) {
//   return arr.filter(foo);
//


// второй вариант
// let array = [5, 7, 4, 8, 11, 21, 9]
//
// const isOdd = function (number) {
//   return number % 2 !==0;
// }
//
// const filter = function (foo,arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (foo(arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
//
// console.log(filter(isOdd, array));
