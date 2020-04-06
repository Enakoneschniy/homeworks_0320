/*Задание 1
Написать функцию которая первым принимает значение, которым заполнять массив,
 а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
 сделает массив ['x', 'x', 'x', 'x', 'x'].
*/

// function one(element,size){

//     let array = new Array(size);

//     for (let i =0 ; i<array.length;i++){
//         array[i]=element;

//     }
//             console.log(array);
// }

// one('x',10);


/*Задание 2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/


// function two(){

//     let array=[[[1,2],[3,4],[5,6],[7,8,9]]];
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array[i].length;j++){
//             for(let k=0;k<array[i][j].length;k++){
//                 sum+=array[i][j][k];
//             }
//         }
//     }
//     console.log(sum);
// }
// two();



/*Задание 3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
Если это так - пусть функция возвращает true, если не так - false.
*/
// function three(n){
//     if(n>0 && n<10){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// three(34);


/*Задание 4
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

// function isEven(n){
//     n = Math.round(n);
//     return n%2===0? true: false;
// }
//  console.log(isEven(5.5));


/*Задание 5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей задачи
*/
// let array =[1,2,3,4,5,6,7,8,9];
// function newArray(array){
//     for(let i=0;i<array.length;i++){
//         let current = isEven(array[i]);
//         if(current===false){
//             array.splice(i,1);
//         }
//     }
//     console.log(array);
// }
// newArray(array);


// Задание 6

/* Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число).
*/

// function getDivisors(n){

//     let array=[];
//     for(let i=1;i<=n;i++){
//         if  (n%i===0){
//             array.push(i);
//         }
//     }
//     console.log(array);
// }
// getDivisors(555);



// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function degree(n,m){
//     return n**m;
// }
// console.log(degree(2,5));

//8
/*
Пользователь вводит год рождения. Программа показывает количество лет и если
лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».
с помощью функций и проверками || и undefined
 */
// function whatAge(age){
//     age = age|| prompt('Введите возраст')
//     let correctAge = age>=16? console.log(`Добро пожаловать`): console.log('Вход воспрещен')

// }
// whatAge(18);
// //or
// whatAge();

// 9

// function whatAge(age){
//     let  correctAge;
//     if (age===undefined){
//         age = age|| prompt('Введите возраст');
//         correctAge = age>=16? console.log(`Добро пожаловать`):console.log('Вход воспрещен')
//     }else {
//         correctAge = age>=16? console.log(`Добро пожаловать`):console.log('Вход воспрещен');
//     }
//
// }
// whatAge(18);
// //or
// // whatAge();


// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
// Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке. 1

// function arraySearcher(array){
//     return array ? array.length : alert(`Сообщение об ошибке`);
// }

// console.log(arraySearcher([1,2,3,4]));
// //or
// // console.log(arraySearcher());


// Задание 11
// Пользователь вводит числа. Если число больше 10, то функция возвращает
// квадрат числа, если меньше 7 – пишет, что число меньше 7.
// Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.

// function arrayNumber (n){

//         if(n>10){
//         return alert(n**2);
//         }else if(n<7){
//         return alert(`Число меньше 7`);
//         }else if(n===8){
//         return alert(`7`);
//         }else if(n===9){
//             return alert(`8`);
//         }
// }
// let n = 1;
// while(n!==0){
//     n = parseFloat(prompt(`Введите число\n 0- Для выхода`));
//     if(n!==0){
//         arrayNumber(n);
//     }else{
//         break;
//     }
// }

// Задание 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let str = 'den love coding';
// let strArray = str.split(' ');
// let newArr = [];
// for (let i = 0; i < strArray.length; i++) {
// newArr.push(ucfirst(strArray[i]));
// }
// console.log(newArr.join(' '));
//
// function ucfirst(str) {
// let a = str[0].toUpperCase() + str.substr(1);
// return(a);
// }

//Задание 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// let str ='var_text_hello';
// let arrayStr=str.split('_');

// for(let i=0;i<arrayStr.length;i++){
//     if(arrayStr[0]!=arrayStr[i]){
//         arrayStr[i]=arrayStr[i].slice(0,1).toUpperCase() +arrayStr[i].slice(1);
//     }
// }
// let result = arrayStr.join('');
// console.log(result);

/*
Задание 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
 Функция первым параметром должна принимать текст элемента,
а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
*/
// function inArray(text,array){
// let isExist = false
//         for(let i=0;i<array.length;i++){
//             if(array[i]===text){
//                 isExist= true;
//             }
//         }
//         return isExist;
// }

// let str =prompt('Введите строку');
// let arrayStr= str.split(' ');
// let textElem=prompt('Введите слово которое будем искать');
// console.log(inArray(textElem,arrayStr));

/*
Задание 15
Дана строка, например, '123456'. Сделайте из нее '214365'.
*/
// let str ='123456';
// console.log(str)
// let strArray= str.split('');

// for(let i=0;i<strArray.length;i+=2){
//     let current=strArray[i];
//     strArray[i]=strArray[i+1];
//     strArray[i+1]=current;
// }

// let result = strArray.join('');

// console.log(result);
/*
Задание 16
Напиши функцию создания генератора sequence(start, step).
Она при вызове возвращает другую функцию-генератор, которая при
каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

// function sequence(start , step ) {
//     start=start ||0;
//     step= step||1;
//     let callNumber = start;
//     return function() {
//       let returnValue = callNumber; // значение для вывода
//       callNumber += step;// готовимся к следующему шагу
//       return returnValue;
//     }
//   }
// let generator = sequence(10,1);
// console.log(generator());//10
// console.log(generator());//11
//
// let defaultGenerator=sequence();
// console.log(defaultGenerator());
// console.log(defaultGenerator());

/*
Задание 17
Также, нужна функция take(gen, x) которая вызывает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
*/
// function take(gen,x) {
//     let array=[];
//     for (let i=0;i<x;i++){
//         array[i]=gen();
//     }
//     return array;
// }
//
// let gen2 = sequence(2,1);
//
// console.log(take(gen2,5));


/*
Задание 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой
 функцией, возвращая новый массив.
*/

// function map(fn,array) {
//     let arrayResult=[];
//     if (array.length!==0){
//         for (let i=0;i<array.length;i++){
//             arrayResult.push(fn(array[i]));
//         }
//         return arrayResult;
//     }else   {
//         return arrayResult;
//     }
// }
//
// function squere(x){
//     return x*x;
// }
// console.log(map(squere,[1,2,3,4,5]));
// console.log(map(squere,[]));
// let arrayCheck =[6,7,8];
// console.log(map(squere,arrayCheck));
// console.log(arrayCheck);

/*

Задание 19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор,
 которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.
*/


// function sequence(start,step) {
//     start=start||0;
//     step=step||1;
//     let currentStart=start;
//     return function () {
//         let resault = currentStart;
//         currentStart+=step;
//         return resault;
//     }
// }
// function squere(x) {
//     return x*x;
// }
//
// function fmap(a,gen) {
//     return function () {
//         let argCount = arguments.length;
//         let newArray=[];
//         for(let i=0;i<argCount;i++){
//             newArray[i]= arguments[i];
//         }
//         x = a(gen.apply(null,newArray));
//         return x;
//     }
// }
//
// let gen = sequence(1,1);
//
// let squareGen = fmap(squere,gen);
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
//
// function add(a,b) {
//     return a+b;
// }
//
// let squereAdd = fmap(squere,add);
// console.log(squereAdd(2, 3));
// console.log(squereAdd(5, 7));


/*
Задание 20
Написать функцию filter, которая принимает функцию-предикат и массив.
Возвращает она массив значений, для которых предикат вернет true.
Функция не должна изменятьисходный массив.
 */
//
// function isEven(x) {
//     return x%2===0;
// }
//
// function filter(fn,array) {
//     let newArray=[];
//     for (let i=0;i<array.length;i++){
//         if(!!isEven(array[i])){
//             newArray.push(array[i]);
//         }
//     }
//  return newArray;
// }
//
// let  inputArray =[1,2,3,4,5,6,7,8];
//
// console.log(filter(isEven,inputArray));
// console.log(inputArray);
