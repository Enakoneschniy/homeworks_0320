'use strict'
/* Task-1
Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
*/
{
    function arrayFill (item, numbersOfItem) {
        let filledArray = [];
        for (let items = 0; items < numbersOfItem; items++) {
            filledArray[items] = item
        }
        return filledArray
    }
}

/* Task-2
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

{

    function sumOfEveryElements(arrNumbers) {
        arrNumbers = arrNumbers.flat(3)
        console.log(arrNumbers);

        arrNumbers = arrNumbers.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)
        console.log(arrNumbers);
    }

}

/*Task-3
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

{
    function isNumberInRange (number) {
        if (number > 0 && number < 10) {
            return true;
        } else {
            return false;
        }
    }
}

/* Task-4 
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

{
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
}


/* Task-5
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/

{   
    function isEven (number) {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newArr = [];
    for (let i of arrNumbers) {
        if (isEven(arrNumbers[i])) {
            newArr.push (arrNumbers[i])
        }    
    }
    console.log(newArr);

}

/* Task-6 
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
*/

{
    function getDivisors (number) {
        let divisors = [];
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                divisors.push(i)
            }
        }
        return divisors;
    }
}

/* Task-7
Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
*/

{
    function getDegree(number, degree) {
        let res = number ** degree;
        console.log(res);
    }
}

/* Task-8
Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
*/

{
    function accesPermision(age) {
        let year = new Date().getFullYear();
        if (age - year + year >= 16) {
            alert('Добро пожаловать!');
            return 'Вход с 16'
        } else if (age - year + year <= 16) {
            alert('вы еще молоды');
            return 'Вход с 16'
        } else {
            alert('Вы ввели некорректные данные, введите Ваш возраст')
            return 'Вход с 16'
        }
    }
}

/* Task-9
Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
*/

{
        function accesPermision(age) {
            let year = new Date().getFullYear();
            if (age - year + year >= 16) {
                alert('Добро пожаловать!');
                return 'Вход с 16';
            } else if (age - year + year <= 16) {
                alert('вы еще молоды');
                return 'Вход с 16';
            } else if (age === undefined) {
                alert('Введите возраст')
                return 'Вход с 16';
            } 
        }
}

/* Task-10
Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
*/

{
    function lenghtOFArray (array) {
        let res = 0;
        if (array === undefined) {
            alert ('Ошибка, введите массив')
        }
        for (let inex of array) {
            res += 1;
        }
        return res;
    }
}

/* Task-11
Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
*/

{
    function randomName(number) {
        if (number < 7) {
            return "Число меньше 7";
        } else if (number === 8) {
            return 7;
        } else if (number === 9) {
            return 8;
        } else if (number > 10) {
            return number ** 2;
        } else if (number === number) {
            return number;
        }   
    }
}

/* Task-12
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/

{
    function ucfirst (str) {
        if (!str){ return str};
        let UpperLetter = str[0].toUpperCase() + str.slice (1);
        return UpperLetter;
    }

    let string = 'we all have stories to tell';
    let stringToArr = string.split (' ');
    console.log(stringToArr);

    let resultArr = [];
    for (let i of stringToArr) {
        i = ucfirst(i);
        resultArr.push(i)
    }
    console.log(resultArr);

    let newStr = resultArr.join(' ');
    console.log(newStr);

}

/* Task-13
Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/

{
    function ucfirst (str) {
        if (!str){ return str};
        let UpperLetter = str[0].toUpperCase() + str.slice (1);
        return UpperLetter;
    }

    let firstString = "var_text_hello";
    let firstArr = firstString.split('_');
    console.log(firstArr);

    let secondArr = [];
    for (let i of firstArr) {
        i = ucfirst(i);
        secondArr.push(i);
    }
    console.log(secondArr);

    let secondString = secondArr.join('')
    console.log(secondString);

    let thirdString = secondString[0].toLowerCase () + secondString.slice (1);
    console.log (thirdString);
}

/* Task-14 
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
*/

{
    function inArray (text, array) {
        let firstString = array.join(' ');
        if (firstString.includes(text)) {
            return true;
        } else {
            return false;
        }
    }
}

/* Task-15 
Дана строка, например, '123456'. Сделайте из нее '214365'.*/

{
    const firstString = '123456';
    let firstArr = firstString.split('');

    for (let i = 0; i < firstArr.length; i += 2) {
        let t = firstArr[i];
        firstArr[i] = firstArr[i + 1];
        firstArr[i + 1] = t;
    }
    console.log(firstArr);

    const secondString = firstArr.join('');
    console.log(secondString);
}

/* Task-16
Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

{
    function sequence(start = 0, step = 1) {
        let callNum = start;
        return function () {
            let returnValue = callNum;
            callNum += step;
            return returnValue;
        }
    }

    let generator = sequence(10, 3);
    let generator2 = sequence(7, 1);

    console.log(generator());
    console.log(generator2());



    /* Task-17
    Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.*/


    function take(gen, x) {
        let array = [];
        for (let i = 0; i < x; i++) {
            array[i] = gen();
        }
        return array;
    }

    let gen = sequence(0, 2);
    console.log(take(gen, 10));




    /* Task-18
    Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.*/


    let subtraction = function (arg) {
        return arg - 2;
    }

    function map(subtraction, array) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            newArr[i] = subtraction(array[i])
        }
        return newArr;
    }
    let array = [2, 4, 6, 8, 1, 3, 5, 7]
    console.log(map(subtraction, array));
    console.log(array); // Здесь видно, что изначальный массив не изменился 



    /* Task-19
    Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.

    А, еще, сделайте тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове. Эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
    */
    //gen = sequence(1, 1);

    gen = function add(a, b) {
        return a + b;
    }

    let a = square;
    let squareAdd = fmap(a, gen)

    function square(x) {
        return x * x;
    }

    function fmap(a, gen) {
        return function () {
            let fmapArr = [];
            for (let i = 0; i < arguments.length; i++) {
                fmapArr[i] = arguments[i];
            }
            let x = a(gen.apply(undefined, fmapArr));
            return x;
        }
    }

    console.log(squareAdd(5, 7));

}
/* Task-20
Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true. Функция не должна изменять исходный массив
*/
{
    let arr = [2, 3, 6, 8, 12, 11, 9, 4, 1, 5, 15];

    function arrfiler(number) {
        return number > 5 && number < 10;
    }

    let filtered = arr.filter(arrfiler);
    console.log(filtered);
}