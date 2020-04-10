'use strict'

/*1. Задание (циклы)
Вывести числа от 4 до 400 на экран.
*/
// for (let i = 4; i <= 400; i++ ) {
//     console.log(i);
// }


/*2. Задание (циклы)
Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
*/

// for (let i = 4; i <= 13; i+=3 ) {
//     console.log(i);
// }

/*3. Задание (циклы)
Вывести числа 654 653 652 до нуля.
*/

// for (let i = 654; i >=0; i--){
//     console.log(i);
// }

/*4. Задание (циклы)
Вывести все годы с 1983 до 2017.
*/

// for (let i = 1983; i <= 2017; i++){
//     console.log(i);
// }

/*5. Задание (циклы)
Вывести числа -4 -2 0 2 4 6 ...100.
*/

// for (let i = -4; i <= 100; i+=2){
//     console.log(i);
// }

/*6. Задание (циклы)
С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
*/

// let i = 1;
// for (i = 1; i <= 10; i++){
//     let n  = i * 7;
//     console.log(n);
// }

/*7. Задание (циклы)
Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ
*/
// for (let i = 500; i <= 2000; i++){
//     let span = document.createElement('span');
//     span.innerHTML = `&#${i} `;
//     document.body.appendChild(span);
// }

/*8. Задание (циклы)
Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
*/
// let n= 0;
// for (let i = 0; i <= 100; i++){
//      n += i;
// }
// console.log(n);

/*9. Задание (циклы)
С помощью цикла вывести произведение чисел от 1 до 50.
*/

// let n = 1;
// for (let i = 1; i <= 50; i++){
//     n *= i;
// }
// console.log(n);


/*10. Задание
Заполните массив следующим образом: в первый элемент запишите
 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
*/


// let myLength = +prompt("Type length of your array..");
// let arr = [];
// let elem = "";
//
// for (let i = 0; i < myLength; i++){
//     elem += 'x';
//     arr.push(elem)
// }
// console.log(arr);

/*Заполните массив следующим образом: в первый элемент запишите '1',
во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.*/

// let myLength = +prompt("Type length of your array..");
// let arr = [];
// let elem = "";
//
// for (let i = 1; i < myLength; i++){
//
//     for (let j = 1; j <= i; j++){
//         elem += i;
//
//     }
//     arr.push(elem);
//     elem = "";
//
// }
// console.log(arr);
/*12. Задание
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
чтобы в сумме получилось больше 10-ти.
*/
// let sum = 0;
// let count = 0;
// let arr = [10, 1, 5, 8, 9, 10];
//
// for (let i = 0; i <= arr.length; i++){
//     if (arr[i] >= 10){
//         count = 1;
//         break;
//     }else {
//         sum += arr[i];
//         count++;
//         console.log(sum);
//         if (sum > 10){
//             break;
//         }
//     }
// }
// console.log(`Вам понадобилось ${count} элементов`);

/*13. Задание
Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
*/
// let arr = [1, 2, 3, 4, 5, 6];
// let length = arr.length - 1;
// for (let i = length; i >= 0; i--) {
//     console.log(arr[i]);
// }

/*14. Задание
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
*/

// let arr = [1, 5, 12, 44, 5, 56, 7, 2, 1, 88];
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] < 10){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

/*15. Задание
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
*/

// let arr = [1, 2, 3, 4, 6, 8, 10, 11, 14, 66, 33, 22];
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 === 0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

/*16. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
*/

// let arr = [1, 2, 3, 4, 5, 6];
// let current;
// for (let i = 0; i < arr.length; i+=2){
//     current = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = current;
// }
//
// console.log(arr);


/*17. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]
*/

// let arr = [1, 2, 3, 4, 5, 6];
// arr.reverse();
// let current;
// for (let i = 0; i < arr.length; i+=2){
//     current = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = current;
// }
//
// console.log(arr);

/*19. Задание
Сформировать 3 матрицы изображенные на картинке
*/

// 1.1
/*
const size = 10;
const matrix = [];
for (let i = 1; i < size; i++){
    matrix[i] = [];
    for (let j = 1; j < size; j++){
        matrix[i][j] = i * j;
    }
}
console.log(matrix);*/


// 1.2
// const size = 10;
// const matrix = [];
// for (let i = 0; i < size; i++){
//     matrix[i] = [];
//     for (let j = 0; j < size; j++){
//         if (i === j){
//            matrix[i][j] = 1;
//         }else if (i === size - 1 - j){
//             matrix[i][j] = 2;
//         }else if (i < j && i <= size - 1 - j){
//             matrix[i][j] = 3;
//         }else if (i < j && i >= size - 1 - j){
//             matrix[i][j] = 4;
//         }else if (i > j && i >= size - 1 - j){
//             matrix[i][j] = 5;
//         }else if (i > j && i <= size - 1 - j){
//             matrix[i][j] = 6;
//         }
//     }
// }
// console.log(matrix);

//1.3 (не осилил пока)

// let size = 10;
// let matrix = [];
// for (let i = 0; i < size; i++){
//     matrix[i] = [];
//     for (let j = 0; j < size; j++){
//         if (i === j){
//             matrix[i][j] = 1;
//             matrix[i][0] = 1;
//             break;
//         }else if (){
//
//         }
//         else{
//             matrix[i][j] = 0;
//         }
//     }
// }
// console.log(matrix);