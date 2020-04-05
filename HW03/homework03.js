"use strict"

/* Задание 1
Написать функцию которая первым принимает значение, которым заполнять массив, а вторым -
сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
 */
{
    let element = prompt("Введите элемент массива:", "x");
    let l = +prompt("Введите размер массива:", "5");
    console.log(arrFill(element, l));

    function arrFill(item, length) {
        let array = [];
        for (let i = 0; i < length; i++) {
            array[i] = item;
        }
        return array;
    }
}

/*Задание 2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
    Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
    */
{  // 1-й вариант !!! Только для массивов не более 3-го уровня вложенности
    const array = [[[1, 2], [3, 4]], [1, 1], 1, [[5, 6], [7, 8]], [1, 1], 1];
    console.log(array);
    console.log(sum(array));

    function sum(arr) {
        let sum = 0;
        for (let a1 = 0; a1 < arr.length; a1++) {
            if (typeof arr[a1] === "object") {
                for (let a2 = 0; a2 < arr[a1].length; a2++) {
                    if (typeof arr[a1][a2] === "object") {
                        for (let a3 = 0; a3 < arr[a1][a2].length; a3++) {
                            sum += arr[a1][a2][a3];
                        }
                    } else sum += arr[a1][a2];
                }
            } else sum += arr[a1];

        }
        return sum;
    }
}

// 2-й вариант. Для массивов любого уровня вложенности.
const array = [[[1, 2], [3, 4]], [1, 1], 1, [[5, 6], [7, 8]], [1, 1], 1];
let sum = 0;
console.log(array);
console.log(getSum(array));

function getSum(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "object") {
               getSum(arr[i]);
        } else {
                sum += arr[i];
            }
        }
return sum;
    }



/*Задание 3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и
меньше 10. Если это так - пусть функция возвращает true, если не так - false.
 */
{
    let number = prompt("Введите число:");
    if (isNumberInRange(+number)) {
        console.log("Число входит в диапазон от 0 до 10");
    } else {
        console.log("Число не входит в диапазон от 0 до 10");
    }

    function isNumberInRange(n) {
        let result = (n > 0 && n < 10) ? true : false;
        return result;
    }
}


/*   Задание 4
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
   четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
     */

// second variant
{
    let number = +prompt("Введите число:");
    if (number !== number || number === 0) {
        console.log("Неверный ввод");
    } else if (isEven(number)) {
        console.log("Это четное число.");
    } else {
        console.log("Это нечетное число.");
    }

    function isEven(n) {                    //подходит для массивов
        let even = (n % 2 == 0) ? true : false;
        return (even);
    }
}

/*Задание 5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только
четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/
{
    let array = [2, 33, 44, 46, 55, 43, 21, 22, 23, 7, 11, 24, 12];
    let newArray = [];
    for (let elem of array) {
        if (isEven(elem)) {
            newArray.push(elem);
        }
    }
    console.log(newArray);

    function isEven(n) {
        let even = (n % 2 == 0);
        return (even);
    }
}


/*Задание 6
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число). */
{
    let number = +prompt("Введите число:");
    console.log(getDivisors(number));

    function getDivisors(n) {
        let array = [];
        for (let i = 2; i < n; i++) {
            if (n % i !== 0) continue;
            array.push(i);
        }
        return array;
    }
}


/*Задание 7
Создайте функцию, которая получает два параметра – число и степень числа.
    Используя ** внутри функции, возведите число в степень и выведите с помощью console.log. */
 //1-й вариант
{
    let number = +prompt("Введите число:");
    let degree = +prompt("Введите степень в которую нужно возвети это число:");
    let getDegree = (n, d) => n ** d;
    console.log(`Результат возведения числа ${number} в степень ${degree}: ${getDegree(number, degree)}`);
}


// 2-й вариант
{
    let number = +prompt("Введите число:");
    let degree = +prompt("Введите степень в которую нужно возвети это число:");

    console.log(`Результат возведения числа ${number} в степень ${degree}: ${getDegree(number, degree)}`);

    function getDegree(n, d) {
        return n ** d;
    }
}


/*Задание 8
Функция принимает параметр - возраст пользователя. Если число больше 16 –
то выводим «добро пожаловать», если меньше – “вы еще молоды”. */
{
    let age = +prompt("Введите ваш возраст:", 16);
    console.log(isAge(age));

    function isAge(a) {
        let allow = (a >= 16) ? "Добро пожаловать!" : "Вы еще молоды.";
        return allow;
    }
}


/*Задание 9
Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
 В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента –
 проверка на undefined и оператор ||.
 */
{
    let age;
    do {
        age = +prompt("Введите ваш возраст:");
        if (isValue(age) && age > 0 && age <= 100) break;
    } while (true);
    console.log(isAge(age));

    function isAge(a) {
        let allow = (a >= 16) ? "Добро пожаловать!" : "Вы еще молоды.";
        return allow;
    }

    function isValue(x) {
        return x = x || false;
    }
}

/*Задание 10
Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
 */
{
    let element;
    let array = [];

    do {                    // создание массива пользователем
        element = prompt("Введите очередной элемент массива (или нажмите отмена):");
        if (element === null) break;
        array.push(element);
    } while (true);

    console.log(array);
    console.log(`Длина массива:\n${getLength(array)}`);

    function getLength(arr) {
        let length = 0;
        for (let cell of arr) {
            length++;
        }
        return (length === 0) ? "Неверный ввод. Не задан ни один элемент массива." : length;
    }
}


/*Задание 11
Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
Реализуйте решение с несколькими return.
 */
{
    let number = +prompt("Введите число:");
    console.log(`\tВы ввели число ${number}, \n\tрезультат: ${getRes(number)}`);

    function getRes(n) {
        if (n < 7) return `\t${n} меньше 7`
        else if (n === 8 || n === 9) {
            return n - 1;
        } else if (n > 10) {
            return n *= n;
        } else return "\tпо условиям задачи Вам выпал суперприз!!! \u{1F60A}";
    }
}



/*Задание 12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
 */
{
    let str = "строка для проверки действия функции ";
    console.log(ucFirst(str));

    function ucFirst(string) {
        let stringNew = string[0].toUpperCase();
        for (let i = 1; i < string.length; i++) {
            if (string[i - 1] == " ") {
                stringNew += string[i].toUpperCase();
            } else {
                stringNew += string[i];
            }
        }
        return stringNew;
    }
}

/*Задание 13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/
{
    let str = 'var text hello';
    console.log(getNewS(str));


    function getNewS(string) {
        let stringNew = "";
        for (let i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                continue;
            } else if (string[i - 1] === " ") {
                stringNew += string[i].toUpperCase();
            } else {
                stringNew += string[i];
            }
        }
        return stringNew;
    }
}


/*    Задание 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false. Показать решение.
 */
{
    const array = ["be", "was", "were", "do", "did", "done"];
    let word = "was";
    console.log(inArray(word, array));

    function inArray(w, arr) {
        let a;
        for (let elem of arr) {
            a = (w === elem) ? true : false;
            if (a === true) break;
        }
        return a;
    }
}


/*    Задание 15
Дана строка, например, '123456'. Сделайте из нее '214365'.*/
{
    let str = "123456";
    let strNew = "";
    for (let i = 0; i < str.length; i += 2) {
        let [b, a] = str.slice(i, i + 2);
        strNew = strNew + a + b;
    }
    console.log(strNew);
}

/*Задание 16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
Генераторов можно создать сколько угодно.
 */
{
    {
        function sequence(start = 0, step = 1) {
            let st = start;
            return function () {
                let rezult = st;
                st += step;
                return rezult;
            }
        }

        let generator = sequence(10, 3);
        let generator2 = sequence(7, 1);
        let generator3 = sequence();

        console.log(generator());
        console.log(generator());
        console.log(generator2());
        console.log(generator());
        console.log(generator3());
        console.log(generator3());
    }
}


/*Задание 17
Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз
и возвращает массив с результатами вызовов.
 */
{
    let x = 5;
    let gen = sequence(0, 2);
    console.log(take(gen, x));

    function take(genIn, amount) {
        let arr = [];
        for (let i = 0; i < amount; i++) {
            arr[i] = genIn();
        }
        return arr;
    }

    function sequence(start = 0, step = 1) {
        let st = start;
        return function () {
            let result = st;
            st += step;
            return result;
        }
    }
}

/*Задание 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
Обрати внимание: функция не должна изменять переданный ей массив:
 */
{
    let array = [2, 4, 6, 8, 10, 12, 18];
    console.log(map(division, array));

    function map(func, arr) {
        let arrNew = [];
        let a;
        for (let elem of arr) {
            a = func(elem);
            arrNew.push(a);
        }
        return arrNew;
    }

    function division(x) {
        return x / 2;
    }
}

/*
let array = [2,4,6,8,10,12,18];
let aN=array.map(value => value/2);   // с методом map
console.log(aN);
*/

/*Задание 19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор,
которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример:

А, еще, сделайте тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове
эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
    Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов,
    то стоит погуглить про псевдопеременную arguments (псевдопеременная значит, что она выглядит как переменная,
    но формально ей не является). Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов,
    можно погуглить Function.prototype.call и Function.prototype.apply. В JS функции - это объекты,
    и у них есть полезные методы и свойства. */
// 1-я часть задачи
{
    function fmap(square1, gen1) {
        return function () {
            let a = square1(gen1());
            return a;
        }
    }

    function sequence(start = 0, step = 1) {
        let st = start;
        return function () {
            let result = st;
            st += step;
            return result;
        }
    }

    function square(x) {
        return x * x;
    }

    let gen = sequence(1, 1);
    let squareGen = fmap(square, gen);
    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());
}

/*                  // Вторая часть не готова!!!
{
function add (arr){
    let sum = 0;
    for (let elem of arr){
        sum+=elem;
    }
    console.log(sum);
    return sum;
}

function fmap(square1,add1,...array) {
    return function () {
        let a= square1(add1(array));
        return a;
    }
}
function square (x) {
    return x*x;
}

let squareAdd = fmap(square,add);
console.log(squareAdd(2,3));
console.log(squareAdd(5,7));
*/

/*
Задание 20
Написать функцию filter, которая принимает функцию-предикат и массив.
Возвращает она массив значений, для которых предикат вернет true.
Функция не должна изменять исходный массив
*/

{
    function filter(f, arr) {
        let newArr = [];
        for (let item of arr) {
            if (f(item)) newArr.push(item);
        }
        return newArr;
    }

    function isEven(x) {
        return (x % 2 === 0) ? true : false;
    }

    let array = [11, 22, 2, 4, 5, 14, 66, 15, 33, 24]
    console.log(filter(isEven, array));
}


