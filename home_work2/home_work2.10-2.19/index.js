/*
Задача 10
Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
 */
{
    let arr = [];
    let n = +prompt('Сколько элементов массива?');
    let x = '';

    for (let i = 1; i <= n; i++) {
        x += 'x';
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
            x += String(i);
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
        sum += arr[i];
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
    let arr2 = [];

    for (let item of arr) {
        if (item > 0 && item < 10) {
            arr2.push(item);
        }
    }

    console.log(arr2);
}



/*
Задача 15
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
 */
{
    let arr = [23, 4, 61, 13, 17, 0, 32, 73];
    let arr2 = [];

    for (let item of arr) {
        if (item % 2 === 0 && item !== 0) {
            arr2.push(item);
        }
    }

    console.log(arr2);
}



/*
Задача 16
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
 */
{
    let arr = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i <= arr.length - 1; i += 2) {
       let item = arr[i];
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
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
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