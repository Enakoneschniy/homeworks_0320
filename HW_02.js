
/*
Задача 1
Вывести числа от 4 до 400 на экран.
 */
{
    let n = 4;
    while (n <= 400) {
        console.log(n);
        n++;
    }
}



/*
Задача 2
Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
 */
{
    let n = 4;
    while (n <= 13) {
        console.log(n);
        n += 3;
    }
}



/*
Задача 3
Вывести числа 654 653 652 до нуля.
 */
{
    let n = 654;

    while (n >= 0) {
        console.log(n);
        n--;
    }
}



/*
Задача 4
Вывести все годы с 1983 до 2017.
 */
{
    let n = 1983;

    while (n <= 2017) {
        console.log(n);
        n++;
    }
}



/*
Задача 5
Вывести числа -4 -2 0 2 4 6 ...100.
*/
{
    let n = -4;

    while (n <= 100) {
        console.log(n);
        n += 2;
    }
}



/*
Задача 6
С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
 */
{
    let n = 1;

    while (n <= 9) {
        console.log(n * 7);
        n++;
    }
}



/*
Задача 7
Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ
 */
{
    let n = 1000;

    while (n <= 2000) {
        console.log(`&#${n}`);
        n++;
    }
}



/*
Задача 8
Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
 */
{
    let n = 0;

    for (i = 0; i <= 100; i++) {
        n = n + i;
    }

    console.log(n);
}



/*
Задача 9
С помощью цикла вывести произведение чисел от 1 до 50.
*/
{
    let n = 1;

    for (i = 1; i <= 50; i++) {
        n = n * i;
    }

    console.log(n);
}



/*
Задача 10
Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
 */
{
    let arr = [];
    let n = +prompt('Сколько элементов массива?');
    let x = '';

    for (let i = 1; i <= n; i++) {
        x = x + 'x';
        arr.push(x);
    }

    console.log(arr);
}



/*
Задача 11
Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.
 */
{
    let arr = [];
    let n = +prompt('Сколько элементов массива?');

    for (let i = 1; i <= n; i++) {

        let x = '';

        for (let a = 1; a <= i; a++) {
            x = x + String(i);
        }
        arr.push(x);
    }

    console.log(arr);
}



/*
Задача 12
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
*/
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    let total;

    for (let i = 0; i <= arr.length; i++) {
        sum = sum + arr[i];
        if (sum > 10) {
            total = i + 1;
            break;
        } else {
            continue;
        }
    }

    console.log(total);
}



/*
Задача 13
Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
 */
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrCopy = [];
    let lastItem = arr.length - 1;

    for (let i = lastItem; i >= 0; i--) {
        arrCopy.push(arr[i]);
    }

    arr = arrCopy;
    console.log(arr);
}



/*
Задача 14
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
 */
{
    let arr = [21, 9, 3, 64, 43, 1, 8, 95, 0, 16, 5];
    let secondArr = [];


    for (let item of arr) {
        if (item > 0 && item < 10) {
            secondArr.push(item);
        }
    }

    console.log(secondArr);
}



/*
Задача 15
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
 */
{
    let arr = [21, 9, 3, 64, 43, 1, 8, 95, 0, 16, 5];
    let secondArr = [];

    for (let item of arr) {
        if (item % 2 === 0 && item != 0) {
            secondArr.push(item);
        }
    }

    console.log(secondArr);
}



/*
Задача 16
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
 */
{
    let arr = [1, 2, 3, 4, 5, 6];
    let n = arr.length - 1;
    let item;

    for (let i = 0; i <= n; i += 2) {
        item = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = item;
    }

    console.log(arr);
}



/*
Задача 17
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]
 */
{
    let arr = [1, 2, 3, 4, 5, 6];

    let first = arr[0];
    let second = arr[1];

    arr[0] = arr[arr.length - 2];
    arr[1] = arr[arr.length - 1];
    arr[arr.length - 2] = first;
    arr[arr.length - 1] = second;

    console.log(arr);
}



/*
Задача 18
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
 */
{
    let arr = [[1, 2, 3], [4, 5], [6]];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < arr[i].length; n++) {
            sum = sum + arr[i][n];
        }
    }

    console.log(sum);
}



/*
Задача 19
Сформировать 3 матрицы изображенные на картинке
(Картинка 1)
 */
{
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        arr[i - 1] = [];
        for (let n = 1; n <= 10; n++) {
            arr[i - 1][n - 1] = i * n;
        }
    }

    console.log(arr);
}



// Каратинка 2
{
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        let arrIn = [];
        arr[i - 1] = arrIn;

        for (let n = 1; n <= 10; n++) {

            if (n <= i - 1 && n <= 10 - i) {
                arr[i - 1][n - 1] = 6;
            } else if (n >= i - 1 && n <= 10 - i) {
                arr[i - 1][n - 1] = 3;
            } else if (n > 10 - i && n > i - 1) {
                arr[i - 1][n - 1] = 4;
            } else if (n >= 10 - i && n <= i - 1) {
                arr[i - 1][n - 1] = 5;
            }

            arrIn[i - 1] = 1;
            arrIn[10 - i] = 2;

        }
    }

    console.log(arr);
}



// Картинка 3
{
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        let arrIn = [];
        arr[i - 1] = arrIn;

        for (let n = 1; n <= 10; n++) {

            arrIn[0] = 1;
            arrIn[i - 1] = 1;

            if (i > 2 && n < i) {
                arrIn[n] = arr[i - 2][n - 1] + arr[i - 2][n];

            }
        }
    }

    console.log(arr);
}
