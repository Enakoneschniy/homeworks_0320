'use strict';
/*
Задание 1
Написать функцию которая первым принимает значение, которым заполнять массив,
а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
сделает массив ['x', 'x', 'x', 'x', 'x'].
*/
{
    let value = prompt("Введите значение елементов массива");
    let size = +prompt("Введите количество элементов в массиве");
    console.log(arrayFill(value, size));

    function arrayFill(value, size) {
        let array = [];
        while (array.length < size) {
            array.push(value);
        }
        return array;
    }
}
/*
Задание 2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/
{
    let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    console.log(getSum(array));

    function getSum(arr) {
        let sum = 0;
        for (let firstArr of arr) {
            for (let secondArr of firstArr) {
                for (let thirdArr of secondArr) {
                    sum += thirdArr;
                }
            }
        }
        return sum;
    }
}
/*
Задание 3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
*/
{
    function isNumberInRange(number) {
        return number > 0 && number < 10;
    }
    console.log(isNumberInRange(+prompt("Введите число")));
}
/*
Задание 4
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/
{
    function isEven(number) {
        return number % 2 === 0;
    }
    console.log(isEven(+prompt("Введите число")));
}
/*
Задание 5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать
только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/
{
    function isEven(number) {
        return number % 2 === 0;
    }

    let arr = [1, 4, 12, 5, 10, 11, 87, 6, 35];
    let newArr = [];
    for (let item of arr) {
        if (isEven(item)) {
            newArr.push(item);
        }
    }
    console.log(newArr);
}
/*
Задание 6
Сделайте функцию getDivisors, которая параметром принимает число и возвращает
массив его делителей (чисел, на которое делится данное число).
*/
{
    function getDivisors(number) {
        let array = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                array.push(i);
            }
        }
        return array;
    }
    console.log(getDivisors(+prompt("Введите число")));
}
/*
Задание 7
Создайте функцию, которая получает два параметра – число и степень числа. Используя ** 
внутри функции, возведите число в степень и выведите с помощью console.log.
*/
{
    let number = +prompt("Введите число");
    let pow = +prompt("Введите степень числа");

    function sqrt(number, pow) {
        let result = number ** pow;
        console.log(result);
        return result;
    }
    sqrt(number, pow);
}
/*
Задание 8
Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим 
«добро пожаловать», если меньше – “вы еще молоды”.
*/
{
    let age = +prompt("Введите свой возраст");

    function ageControl(age) {
        if (age > 16) {
            alert("Добро пожаловать!");
        } else {
            alert("Вы еще молоды");
        }
    }
    ageControl(age);
}
/*
Задание 9
Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр 
в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида 
проверки наличия аргумента – проверка на undefined и оператор ||.
*/
{
    let age = +prompt("Введите свой возраст");

    function ageControl(age) {
        if (isNaN(age) || age === 0 || age === undefined) {
            ageControl(+prompt("Введите возраст"));
        } else {
            if (age > 16) {
                alert("Добро пожаловать!");
            } else {
                alert("Вы еще молоды");
            }
        }
    }

    ageControl(age);
}
/*
Задание 10
Создайте функцию, которая считает длину массива и возвращает ее в виде числа. 
Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
*/
{
    function arrayLength(array) {
        return array === undefined ?
            alert("Аргумент не задан") :
            array.length;
    }
}
/*
Задание 11
Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, 
если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 
7 или 8. Реализуйте решение с несколькими return.
*/
{
    function getNumber() {
        let number = +prompt("Введите число:");
        if (isNaN(number) || number === undefined || number === 0 || number === "") {
            console.log("Некорректные входные данные.");
            getNumber();
        } else if (number > 10) {
            return Math.pow(number, 2);
        } else if (number < 7) {
            console.log("Число меньше 7.");
            return number;
        } else if (number === 8 || number === 9) {
            return number - 1;
        } else {
            return number;
        }
    }
    while (true) {
        console.log(getNumber());
    }
}
/*
Задание 12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/
{
    let str = "world peace love Rainbow, unicorn         smile - The end!";

    let arrStr = str.split(/\s+/);

    for (let word of arrStr) {
        let newStr = ucfirst(word);
        str = str.replace(word, newStr);
    }
    console.log(str);

    function ucfirst(str) {
        let upperFirstChar = str.charAt(0).toUpperCase();
        let substr = str.substring(1);
        return upperFirstChar + substr;
    }
}
/*
Задание 13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
*/
{
    let str = 'var_text_hello';
    str = str.replace(/_/g, "");
    //str = str.replace(new RegExp("_", "g"), ""); второй вариант RegExp
    console.log(str);
}
/*
Задание 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным 
текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым
 - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
*/
{
    let str = "hello";
    let arr = ["hi", "ola", "hello", "hey"];


    function inArray(string, array) {
        return array.includes(string);
    }

    console.log(inArray(str, arr));
}
/*
Задание 15
Дана строка, например, '123456'. Сделайте из нее '214365'.
*/
{
    let str = "123456";
    let newStr = "";

    for (let i = 0; i < str.length; i += 2) {
        newStr += str[i + 1] + str[i];
    }
    
    console.log(newStr);
}
/*
Задание 16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую 
функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. 
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. 
Генераторов можно создать сколько угодно
*/

function sequence(start, step) {
    let value = start - step;
    return function () {
        return value += step;
    }
}

let generator = sequence(10, 4);
console.log(generator());
console.log(generator());

/*
Задание 17
Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и 
возвращает массив с результатами вызовов.
*/
function take(generator, x) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array.push(generator());
    }
    return array;
}

console.log(take(generator, 6));

/*
Задание 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
Обрати внимание: функция не должна изменять переданный ей массив:
*/
{
    function square(x) {
        return x * x;
    }

    function map(fn, array) {
        let newArray = [];
        for (let index of array) {
            newArray.push(square(index));
        }
        return newArray;
    }

    let array = [1, 2, 5, 7];
    console.log(map(square, array));
    console.log(array);
}
/*
Задание 19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — 
функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор, 
которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример:

А, еще, сделайте тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове

Эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов, то стоит 
погуглить про псевдопеременную arguments (псевдопеременная значит, что она выглядит как переменная, 
но формально ей не является). Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов, 
можно погуглить Function.prototype.call и Function.prototype.apply. В JS функции - это объекты, 
и у них есть полезные методы и свойства.
*/
{
    function square(x) {
        return x * x;
    }

    function sequence(start, step) {
        let value = start - step;
        return function () {
            return value += step;
        }
    }

    function add(a, b) {
        return a + b;
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

    let generator = sequence(1, 1);
    let squareGen = fmap(square, generator);
    console.log(squareGen()); // 1
    console.log(squareGen()); // 4
    let squareAdd = fmap(square, add);
    console.log(squareAdd(2, 3)); // (2+3)^2
    console.log(squareAdd(3, 3)); // (3+3)^2
}
/*
Задание 20
Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, 
для которых предикат вернет true.
Функция не должна изменять исходный массив
*/
{
    function isEven(x) {
        return x % 2 === 0;
    }

    function filter(input, predicate) {
        let newArr = [];
        for (let i of input) {
            if (predicate(i)) {
                newArr.push(i);
            }
        }
        return newArr;
    }

    console.log(filter([2, 4, 7, 8, 11, 9], isEven));
}