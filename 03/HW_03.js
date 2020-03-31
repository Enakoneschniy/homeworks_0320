'use strict'

/*
Задача 1
Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
*/
{
    function fillArr(a, b) {
        for (let i = 0; i < b; i++) {
            arr[i] = a;
        }
    }

    let arr = [];

    fillArr('x', 5);

    console.log(arr);
}



/*
Задача 2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/
{
    const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    let sum = 0;

    function sumItems(array) {
        for (let item of array) {
            if (Array.isArray(item)) {
                sumItems(item);
            } else {
                sum += item;
            }
        }
    }

    sumItems(arr);

    console.log(sum);
}


/*
Задача 3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
*/
{
    function isNumberInRange(value) {
        return (value > 0 && value < 10) ? true : false;
    }

    console.log(isNumberInRange(7));
}



/*
Задача 4
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/
{
    function isEven(value) {
        return (value % 2 === 0) ? true : false;
    }

    console.log(isEven(7));
}




/*
Задача 5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let evenArr = arr.filter(value => value % 2 === 0);

    arr = evenArr;
    console.log(arr);
}


/*
Задача 6
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
*/
{
    let arr = [];

    function getDivisors(value) {
        for (let i = 1; i <= value; i++) {
            (value % i === 0) ? arr.push(i) : false
        }
    }

    getDivisors(6);
    console.log(arr);
}



/*
Задача 7
Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
*/
{
    function numberToPower(a, b) {
        if (b === 1) {
            return a;
        } else {
            return a * numberToPower(a, b - 1);
        }
    }

    console.log(numberToPower(2, 3));
}

/*
Задача 8
Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
*/
{
    function checkAge(age) {
        age > 16 ? alert('Добро пожаловать') : alert('Вы еще молоды');
    }

    let userAge = +prompt('Какой ваш возраст?');

    checkAge(userAge);
}



/*
Задача 9
Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
*/
{
    function checkAge() {
        let userAge = +prompt('Какой ваш возраст?');
        if (userAge === 0 || isFinite(userAge) === false) {
            alert('Введите возраст');
            checkAge();
        } else {
            userAge > 16 ? alert('Добро пожаловать') : alert('Вы еще молоды');
        }
    }

    checkAge();
}


/*
Задача 10
Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
*/
{
    function totalArr(value) {
        if (value === undefined) {
            alert('Ошибка');
        } else {
            let result = value.length;
            alert(result);
        }
    }

    const arr = [];

    totalArr(arr);
}



/*
Задача 11
Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
*/
{
    function checkUserNumber() {
        if (userNumber > 10) {
            return userNumber * userNumber;
        } else if (userNumber < 7) {
            alert('Число меньше семи');
        } else if (userNumber === 8 || userNumber === 9) {
            return userNumber;
        }
    }

    let userNumber = +prompt('Введите число');
    checkUserNumber();
}



/*
Задача 12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/
{
    function ucfirst(text) {
        let changeText = '';
        let word = '';

        for (let i = 0; i <= text.length; i++) {
            if (text[i] === ' ' || i === text.length) {
                changeText = changeText + ' ' + word[0].toUpperCase() + word.slice(1);
                word = '';
            } else {
                word = word + text [i];
            }
        }

        return changeText;
    }

    let text = 'hello my dear friends';
    console.log(ucfirst(text));
}



/*
Задача 13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
*/
{
    let text = 'var_text_hello';
    let partOfText = text.slice(4);
    let word = '';

    let changedText = text.slice(0, 3);

    for (let i = 0; i <= partOfText.length; i++) {
        if (partOfText[i] === '_' || i === partOfText.length) {
            changedText = changedText + word[0].toUpperCase() + word.slice(1);
            word = '';
        } else {
            word = word + partOfText [i];
        }
    }

    console.log(changedText);
}



/*
Задача 14
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
*/
{
    const arrFirst = ['Hello', 'my', 'dear', 'friend'];
    const arrSecond = ['How', 'are', 'you'];

    function inArray(text, array) {
        return !!array.find(item => item === text);
    }

    console.log(inArray('my', arrFirst));
}



/*
Задача 15
Дана строка, например, '123456'. Сделайте из нее '214365'.
*/
{
    let str = '123456';

    let arrStr = str.split('');

    let result = arrStr = [arrStr[1], arrStr[0], arrStr[3], arrStr[2], arrStr[5], arrStr[4]]

    console.log(result);
}



/*
Задача 16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/
{
    function sequence(start = 0, step = 1) {
        let totalValue = start;
        return function startByStep() {
            let funcResult = totalValue;
            totalValue = totalValue + step;
            return funcResult;
        }
    }

    let generator = sequence(10, 3);
    let generator2 = sequence(7, 1);

    console.log(generator());
    console.log(generator());

    console.log(generator2());

    console.log(generator());

    console.log(generator2());
}




/*
Задача 17
Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
*/
{
    function sequence(start = 0, step = 1) {
        let totalValue = start;
        return function startByStep() {
            let funcResult = totalValue;
            totalValue = totalValue + step;
            return funcResult;
        }
    }

    let arr = [];

    let take = function (func, howMuch) {

        for (let i = 1; i <= howMuch; i++) {
            let result = func();
            arr.push(result);
        }

        return arr;
    }

    let gen = sequence(0, 2);

    console.log(take(gen, 5));
}



/*
Задача 18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
*/
{
    const arr = [1, 2, 3, 4];

    const someFunction = value => value = value * value;

    const map = (fn, array) => {
        let resultArr = [];
        for (let i = 0; i < array.length; i++) {
            let result = fn(array[i]);
            resultArr.push(result);
        }
        return resultArr;
    }

    console.log(map(someFunction, arr));
}



/*
Задача 19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример:
*/
{
    function sequence(start = 0, step = 1) {
        let totalValue = start;
        return function startByStep() {
            let funcResult = totalValue;
            totalValue = totalValue + step;
            return funcResult;
        }
    }

    function action(value) {
        return value = value * value;
    }

    let gen = sequence(1, 1);

    function fmap(a, gen) {
        return function () {
            return a(gen());
        }
    }

    let actionGen = fmap(action, gen);


    console.log(actionGen());
    console.log(actionGen());
    console.log(actionGen());
}



/*
Задача 20
Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.
*/
{
    const arr = [1, 'Hello', 2, 3, 4, 'world', 5, 6];

    const isString = someItem => {
        return typeof (someItem) === 'string';
    }

    const filter = (func, array) => {
        let resArr = [];

        for (let i = 0; i < array.length; i++) {
            resArr[i] = func(array[i]);
        }
        return resArr;
    }


    console.log(filter(isString, arr));
}


































