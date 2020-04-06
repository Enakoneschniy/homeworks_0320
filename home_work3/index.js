'use strict'
/*Задание 1
Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
*/
function arrayFill(fillarr, characters){
    let arr = []
    for (let i = 1; i <= characters; i++){
        arr.push(fillarr);
    }
    console.log(arr)
}
arrayFill('x', 5)



// Задание 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

{

    function sumOfEveryElements(arr) {
        arr = arr.flat(Infinity)
        arr = arr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)
        console.log(arr);
    }
    sumOfEveryElements([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
}
   
// Задание 3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(numb){
    let res = (numb > 0 && numb < 10) ? true : false;
    console.log(res)
}
isNumberInRange(4)

// Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

    function isEven(even) {
        if (even % 2 === 0 && even !== 0) {
            return true;
        } else {
            return false;
        }
    }
console.log(isEven(3))
// Задание 5
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
{
    function isEven(even) {
        if (even % 2 === 0 && even !== 0) {
            return true;
        } else {
            return false;
        }
    }

const arr = [24, 3, 15, 10, 1, 0,7]
const arr2 = []

for (let i of arr) {
            if (isEven(arr[i])) {
                arr2.push (arr[i])
            }    
        }
        console.log(arr2);
 
 }
//         Задание 6
//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
{
function getDivisors(num){
    const arr = []
    for (let i = 1; i < num; i++){
        if (num % i === 0){
            arr.push(i)
        }
    }
    return arr
}
console.log(getDivisors(10))
}



// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

{
const getExponent = (num, exponent) => {
    return num ** exponent 
   }
   console.log( getExponent(2, 2))
}

// Задание 8
// Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

{
    const author = (age) => {
            if (age > 16){
                return "Добро пожаловать"
            } else {
                return "Вы еще молоды"
            }
    }
    console.log(author(13));
    
}

// Задание 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

{
    const author = (age) => {
            if (age > 16){
                return "Добро пожаловать"
            } else if (age <= 16){
                return "Вы еще молоды"
            } else if (age === undefined) {
                return 'Введите возраст';
            } 
    }
    console.log(author());
}

// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
{
const lengthOfArr = (arr) => {
    if (arr === undefined){
        return 'Input Error'
    }
    let res = 0;
    for (let i of arr){
        res ++;
    }
    return res
}
const arr = [24, 3, 15, 10, 1, 0, 7]
console.log(lengthOfArr(arr));

}

// Задание 11
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.


{
    const   checkNumb = (numb) => {
        if (numb >= 10){
            return numb ** 2
        } else if (numb <= 7){
            return 'Число <=7'
        } else if (numb === 8){
            let x = 7
            return x
        }else if (numb === 9){
            let y = 8
            return y
        }
    }
    console.log(checkNumb(7))
}

/* Задание 12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/
{
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  console.log(ucFirst("text"));
}

/*Задание 13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
*/

{
    let str = "var_text_hello";
    let res = "";

    let n_str = str.split("_");
 
    for (let item in n_str) {
        let b = n_str[item].charAt(0).toUpperCase() + n_str[item].slice(1);
        res += b;
    };
    console.log(res);
}

/*Задание 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
*/

{
    function inArray(text, array) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === text) return true;
        }
        return false;
      }
       
      console.log(inArray('x', ['o', 'i', 'x', 'y']));
}


/*Задание 15
Дана строка, например, '123456'. Сделайте из нее '214365'
*/

{
function replOfNumb(str) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        if(i % 2 !== 0){
            let b = str[i - 1];
                str[i - 1] = str[i];
                str[i] = b;
        }
    }
    return str.join('')
}
console.log(replOfNumb('123456'));
}

/*
Задание 16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/


    function sequence(start = 0, step = 1) {
        let callValue = start
        return function() {
            let returnValue = callValue
            callValue += step
            return returnValue
        }
    }
    let generator = sequence(10, 3);
    let generator2 = sequence(7, 1);

    console.log(generator());
    console.log(generator());
    console.log(generator2());
    console.log(generator2());


/* Задача-17
    Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
*/


    

function take(gen, x) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array.push(gen());
    }
    return array;
}
let gen = sequence(0, 2);
console.log(take(gen, 5));


/*Задание 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
*/

{
    function map(fn, array){
        let n_arr = []
        for (let i = 0; i < array.length; i++){
            n_arr[i] = fn(array[i])
        }
        return  n_arr
    }

    function square(x){
        return x * x

    }

    let array = [2, 3, 4, 5, 6, 7, 8, 9];
    console.log(map(square, array));
    console.log(array);
}

// /*Задание 19
// Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.*/
{
    function square(x) {return x*x}
    
    function sequence(start = 0, step = 1) {
        let callValue = start
        return function() {
            let returnValue = callValue
            callValue += step
            return returnValue
        }
    }
    function add(a, b) {
        return a + b
    }
    function fmap(a, gen) {
        return function () {
            let args = arguments.length;
            let array = [];
            for (let i = 0; i < args; i++) {
                array[i] = arguments[i];
            }
            return a(gen.apply(null, array));
        }
    }

    let gen = sequence(1, 1);
    let squareGen = fmap(square, gen);
    console.log(squareGen()); // 1
    console.log(squareGen()); // 4
    let squareAdd = fmap(square, add);
    console.log(squareAdd(2, 3)); // (2+3)^2
    console.log(squareAdd(3, 3)); // (3+3)^2
}


// Задание 20
// Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

{
    let arr = []
    function filter(input, isEven) {
        for (let i of input) {
            if (isEven(input[i])) {
                arr.push (input[i])
            }    
        }
        return arr
    }
    
    const input = [1, 2, 3, 4, 5, 6]
    function isEven(x) {return x % 2 == 0}
    console.log(filter(input, isEven));
}