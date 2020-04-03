'use strict'

/*
Задача 1
Дано натуральное число n. Выведите все числа от 1 до n.
*/
{
    const value = n => {
        if (n >= 1) {
            value(n - 1);
        }

        console.log(n);
    }

    value(5);
}



/*
Задача 2
Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
*/
{
    const fromAtoB = (a, b) => {
        if (b >= a) {
            fromAtoB(a, b - 1);
            console.log(b);
        }
    }

    const counter = (a, b) => {
        if (b >= a) {
            fromAtoB(a, b);
        } else {
            fromAtoB(b, a);
        }
    }

    counter(10, 3);
}



/*
Задача 3
Дано натуральное число N. Вычислите сумму его цифр.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
*/
{
    const calc = value => {
        let sum = 0;

        const sumOfNum = value => {
            if (value === 0) {
                return console.log(sum);
            } else {
                let n = value % 10;
                sum += n;
                value = (value - n) / 10;
                sumOfNum(value);
            }
        }
        return sumOfNum(value);
    }

    calc(123456);
}



/*
Задача 4
Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
*/
{
    const sumOfNum = value => {
        if (value === 0) {
            return;
        } else {
            let n = value % 10;
            console.log(n);
            value = (value - n) / 10;
            sumOfNum(value);
        }
    }

    sumOfNum(12345);
}



/*
Задача 5
Дано натуральное число N. Выведите все его цифры по одной, в обычном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
*/
{
    const sumOfNum = value => {
        if (value === 0) {
            return;
        } else {
            let n = value % 10;
            value = (value - n) / 10;
            sumOfNum(value);
            console.log(n);
        }
    }

    sumOfNum(12345);
}



/*
Задача 12
Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
*/
{
    const arrFirst = ['a', 'b', 'c'];
    const arrSecond = [1, 2, 3];

    const totalArr = arrFirst.concat(arrSecond);

    console.log(totalArr);
}



/*
Задача 13
Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
*/
{
    const arr = ['a', 'b', 'c'];

    arr.push(1, 2, 3);

    console.log(arr);
}




/*
Задача 14
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
*/
{
    const arr = [1, 2, 3];

    arr.unshift(4, 5, 6);

    console.log(arr);
}



/*
Задача 15
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
*/
{
    const arr = [1, 2, 3, 4, 5];

    let resultArr = arr.slice(0, 3);

    console.log(resultArr);
}



/*
Задача 16
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
*/
{
    const arr = [1, 2, 3, 4, 5];

    let resultArr = arr.slice(3);

    console.log(resultArr);
}



/*
Задача 17
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
*/
{
    const arr = [1, 2, 3, 4, 5];

    arr.splice(1, 2);

    const resultArr = arr;

    console.log(resultArr);
}



/*
Задача 18
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
*/
{
    const arr = [1, 2, 3, 4, 5];

    let resultArr = arr.splice(1, 3);

    console.log(resultArr);
}



/*
Задача 19
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
*/
{
    const arr = [1, 2, 3, 4, 5];

    arr.splice(3, 0, 'a', 'b', 'c');

    const resultArr = arr;

    console.log(resultArr);
}



/*
Задача 20
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/
{
    const arr = [1, 2, 3, 4, 5];

    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');

    const resultArr = arr;

    console.log(resultArr);
}



/*
Задача 21
Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
*/
{
    const obj = {
        js: 'test',
        jq: 'hello',
        css: 'world',
    }

    const resultArr = Object.keys(obj);

    console.log(resultArr);
}
