/*
1. Задание (циклы)
Вывести числа от 4 до 400 на экран.
*/
{
    for (let i = 4; i <= 400; i++) {
        console.log(i);
    }
}
/*
2. Задание (циклы)
Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
*/
{
    for (let i = 4; i <= 13; i += 3) {
        console.log(i);
    }
}
/*
3. Задание (циклы)
Вывести числа 654 653 652 до нуля.
*/
{
    for (let i = 654; i >= 0; i--) {
        console.log(i);
    }
}
/*
4. Задание (циклы)
Вывести все годы с 1983 до 2017.
*/
{
    for (let i = 1983; i <= 2017; i++) {
        console.log(i);
    }
}
/*
5. Задание (циклы)
Вывести числа -4 -2 0 2 4 6 ...100.
*/
{
    for (let i = -4; i <= 100; i += 2) {
        console.log(i);
    }
}
/*
6. Задание (циклы)
С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
*/
{
    for (let i = 1; i <= 9; i++) {
        console.log("7 * " + i + " = " + (i * 7));
    }
}
/*
7. Задание (циклы)
Выведите с помощью цикла коды спецсимволов от 1000 до 2000. 
Напомню, что спецсимвол получается комбинацией &#число; Например ӆ
*/
{
    for (let i = 1000; i <= 2000; i++) {
        console.log("&#" + i);
    }
}
/*
8. Задание (циклы)
Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
*/
{
    let summ = 0;
    for (let i = 0; i <= 100; i++) {
        summ += i;
    }
    console.log(summ);
}
/*
9. Задание (циклы)
С помощью цикла вывести произведение чисел от 1 до 50.
*/
{
    let summ = 1;
    for (let i = 1; i <= 50; i++) {
        summ *= i;
    }
    console.log(summ);
}
/*
10. Задание
Заполните массив следующим образом: в первый элемент запишите 'x',
во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
*/
{
    let element = "x";
    let arrNumbers = new Array(+prompt("Введите длину массива"));

    for (let i = 0; i < arrNumbers.length; i++) {
        arrNumbers[i] = element;
        element += "x";
    }
    console.log(arrNumbers);
}
/*
11. Задание
Заполните массив следующим образом: в первый элемент запишите '1', 
во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.
*/
{
    let arrayLength = +prompt("Введите длину массива");
    let arrNumbers = [];

    for (let i = 1; i <= arrayLength; i++) {
        let stringElement = String(i);
        while (stringElement.length < i * String(i).length) {
            stringElement += i;
        }
        arrNumbers.push(stringElement);
    }
    console.log(arrNumbers);
}
/*
12. Задание
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
чтобы в сумме получилось больше 10-ти.
*/
{
    let arrNumbers = [1, 2, 5, 3, 8, 7, 14, 11, 22];
    let summ = 0;
    let index = 0;
    for (let element of arrNumbers) {
        if (summ < 10) {
            summ += element;
            index++;
        } else {
            break;
        }
    }
    console.log(index);
}
//2й вариант
{
    let arrNumbers = [1, 2, 5, 3, 8, 7, 14, 11, 22];
    let summ = 0;

    for (let i = 0; i < arrNumbers.length; i++) {
        if (summ < 10) {
            summ += arrNumbers[i];
        } else {
            console.log(i);
            break;
        }
    }
}
//3й вариант
{
    let arrNumbers = [1, 2, 5, 3, 8, 7, 14, 11, 22];
    let summ = 0;
    let i = 0;
    while (summ < 10) {
        summ += arrNumbers[i];
        i++;
    }
    console.log(i);
}
// 4й вариант 
{
    let arrNumbers = [1, 2, 5, 3, 8, 7, 14, 11, 22];
    let summ = 0;
    let i = 0;
    do {
        summ += arrNumbers[i];
        i++;
    } while (summ < 10);
    console.log(i);
}
/*
13. Задание
Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
*/
{
    let arrNumbers = [11, 12, 13, 14, 15];

    for (let i = arrNumbers.length - 1; i >= 0; i--) {
        console.log(arrNumbers[i]);
    }
}
/*
14. Задание
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
*/
{
    let arrNumbers = [1, 6, 18, 4, 25, 69, 11, 8];
    let arrNew = [];

    for (let element of arrNumbers) {
        if (element > 0 && element < 10) {
            arrNew.push(element);
        }
    }
    console.log(arrNew);
}
/*
15. Задание
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
*/
{
    let arrNumbers = [1, 2, 5, 3, 8, 7, 14, 11, 22];
    let arrNew = [];

    for (let element of arrNumbers) {
        if (element % 2 === 0) {
            arrNew.push(element);
        }
    }
    console.log(arrNew);
}
/*
16. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
*/
{
    let arr = [1, 2, 3, 4, 5, 6];

    [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]] = [arr[1], arr[0], arr[3], arr[2], arr[5], arr[4]];

    console.log(arr);
}
/*
17. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]
*/
{
    let arr = [1, 2, 3, 4, 5, 6];

    [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]] = [arr[4], arr[5], arr[2], arr[3], arr[0], arr[1]];

    console.log(arr);
}
/*
18. Задание
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/
{
    let arr = [[1, 2, 3], [4, 5], [6]];
    let summ = 0;
    
    for (let item of arr) {
        for (let element of item) {
            summ += element;
        }
    }
    console.log(summ);
}
/*
19. Задание
Сформировать 3 матрицы изображенные на картинке
*/
// 1я матрица
{
    let matrix = [];
    let size = 10;
    
    for (let row = 0; row < size; row++) {
        matrix[row] = [];
        for (let cell = 0; cell < size; cell++) {
            matrix[row][cell] = (row + 1) * (cell + 1);
        }
    }
    console.log(matrix);
}
// 2я матрица
{
    let matrix = [];
    let size = 10;
    
    for (let row = 0; row < size; row++) {
        matrix[row] = [];
        for (let cell = 0; cell < size; cell++) {
            if (row === cell) {
                matrix[row][cell] = 1;
            } else if ((row + cell) === (size - 1)) {
                matrix[row][cell] = 2;
            } else if ((cell + row) <= 8 && (cell - row) > 0) {
                matrix[row][cell] = 3;
            } else if ((cell + row) <= 8 && (row - cell) <= 8) {
                matrix[row][cell] = 6;
            } else if ((cell - row) <= 8 && (cell - row) > 0) {
                matrix[row][cell] = 4;
            } else {
                matrix[row][cell] = 5;
            }
        } 
    }
    
    console.log(matrix);
}
// 3я матрица
{
    let matrix = [];

    for (let row = 0; row < 10; row++) {
        matrix[row] = [];
        for (let cell = 0; cell <= row; cell++) {
            if (row === cell || cell === 0) {
                matrix[row][cell] = 1;
            } else {
                matrix[row][cell] =
                    matrix[row - 1][cell - 1] + matrix[row - 1][cell];
            }
        }
    }
    console.log(matrix);
}