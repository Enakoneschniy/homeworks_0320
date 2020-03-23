/* 1 Вывести числа от 4 до 400 на экран. */

// {
//     let numbers = 4;

//     while ( numbers <= 400) {
//         console.log ('Порядок чисел: ' + numbers + '!')
//         numbers++;
//     }
//     console.log ('Расчёт окончен!')
// }

/* 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла. */

// {
//     let numbers = 4;

//     while (numbers <= 13) {
//         console.log ('Порядок чисел: ' + numbers + '!');
//         numbers = numbers + 3
//     }
//     console.log ('Расчёт окончен!')
// }

/* 3 Вывести числа 654 653 652 до нуля. */

// {
//     let numbers = 654;

//     while (numbers !== -1) {
//         console.log ('Порядок чисел: ' + numbers + '!');
//         numbers--;
//     }
//     console.log ('Расчёт окончен!');
// }

/* 4 Вывести все годы с 1983 до 2017. */

// {
//     let years = 1983;

//     while (years <= 2017) {
//         console.log ('Год ' + years + '!');
//         years++;
//     }
//     console.log ('С 2018 по наше время!')
// }

/* 5 Вывести числа -4 -2 0 2 4 6 ...100. */

// {
//     let numbers = -4;

//     while (numbers <=100) {
//         console.log ('Порядок чисел: ' + numbers + '!');
//         numbers = numbers + 2;
//     }
//     console.log ('Расчёт окончен!');
// }

/* 6 С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9. */

// {
//     let result = 1;

//     for ( let multiplicationTable = 1; multiplicationTable <= 9; multiplicationTable++) {
//        if (result <= 63) {
//            result = multiplicationTable * 7;
//        }
//         console.log ('Таблица умножения на 7: ' + multiplicationTable + ' * 7 ' + ' = ' + result)
//     }
// }

/* 7 Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ */

// {
//     for (let specialSymbol = 1000; specialSymbol <= 2000; specialSymbol++) {
//         document.write ('' + '&#' + specialSymbol + '');
//     }
// }

/* 8 Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5). */

// {   
//     let numbers = 0;

//     for (let amount = 0; amount <= 100; amount++) {
//         numbers = numbers + amount;
//     }
//     console.log (numbers)
// }

/* 9 С помощью цикла вывести произведение чисел от 1 до 50 */

// {
//     let numbers = 1;

//     for (let amount = 1; amount <= 50; amount++) {
//         numbers = numbers * amount;
//     }
//     document.write (numbers)
//     console.log (numbers)
// }

/* 10 Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt. */


{
    // let arr = [];
    // let length = +prompt ('Введите длину массива: ');

    // for (let i = 0; i < length; i++) {
    //     arr[i] = 'x';
    //     for (let x = 1; x < length; x++) {
    //         arr[x] = arr[i] + 'x';
    //     }
    // }
    // console.log(arr)
}  


/* 11 Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt. */

// {
//     str = '';
//     arr = [];
//     length = +prompt ('Введите длину массива: ')

//     for(let i = 1; i <= length; i++) {
//         for(let j = 1; j <= i; j++) {
//             str += i
//         }
//     arr.push(str);
//     str = '';
//     }
//     console.log(arr);
// }

/* 12 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */

// {
//     let arr = [2, 7, 2, 1];
//     let variable = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         variable += arr[i];
//         if ( variable >= 10) {
//             console.log (i + 1)
//             break;
//         }
//     }
// }

/* 13 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */

// {
//     let arr = [3, 4, 5, 6];
//     let newArr = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push (arr[i])
//     }
//     console.log (newArr);
// }

/* 14 Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. */

// {
//     let arr = [-2, 3, 11, 10, -5, 6, 8, 20];
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] < 10) {
//             newArr.push (arr[i]);
//         }
//     }
//     console.log (newArr);

// }

/* 15 Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. */

// {
//     let arr = [1, 3, 4, 7, 12, 5, 6, 16, 15, 14];
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push (arr[i]);
//         }
//     }
//     console.log (newArr);
// }

/* 16 Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5] */

{
    /* Первый вариант решения. В этом варианте я оставил прежним первый массив, и залил его содержимое в новый массив, меняя индексы местами */

    // let arr = [1, 2, 3, 4, 5, 6];
    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) {
    //         result[i] = arr[i + 1];
    //     } 
    //     else if (i % 2 !== 0) {
    //         result[i] = arr[i - 1];
    //     }
    // }

    // console.log (result)

    /* Оба варианта решения позволяют работать с массивами, содержащими разные типы данных - т.к. меняют местами индексы а не значение. Во втором решении наглядно использовал строки. А еще второе решение меняет изначальный массив. */

    // let arr = ['1', '2', '3', '4', '5', '6'];

    // for (let i = 0; i < arr.length; i += 2) {
    //     let t = arr[i]
    //     arr[i] = arr[i + 1]
    //     arr[i + 1] = t
    // }

    // console.log (arr)

}
/* 17 Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2] */

// {
//     let arr = ["1", "2", "3", "4", "5", "6"];
//     let result = [];

//     for (let i = arr.length - 1; i > 0; i -= 2) {
//         result.push (arr[i - 1]);
//         result.push (arr[i]);
//     }
//     console.log (result)
// }

/* 18 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

// {
//     function sumOfElements (arr) {
//         let sum = 0;
//         for (let row = 0; row < arr.length; row++) {
//             for (let cel = 0; cel < arr[row].length; cel++) {
//                 sum += arr[row][cel]
//             }
//         }
//         return sum;
//     }   
// }
   



/* 19 Сформировать 3 матрицы изображенные на картинке */
    /* 18.1. Matrix number 1*/
    // const matrix = [];
    // for (let row of matrix) {
    //     for (let cel of row) {
    //       console.log(cel)
    //     }
    //   }
    //   const size = 10;
    //   const randomMatrix = [];
    
    //   for (let row = 0; row < size; row++) {
    //     randomMatrix[row] = [];
    //     for (let cel = 0; cel < size; cel++) {
    //       randomMatrix[row][cel] = (row + 1) * (cel + 1)
    //     }
    //   }
    //   console.log(randomMatrix)