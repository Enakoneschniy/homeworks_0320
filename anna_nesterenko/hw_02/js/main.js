'use strict';

// 1. Задание (циклы)
// Вывести числа от 4 до 400 на экран.

// const max = 400;
// for ( let i = 4; i <= max; i += 1){
//   console.log(i);
// }

// ===================================


// 2. Задание (циклы)
// Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
//
// for ( let i = 4; i <= 13; i += 3){
//   console.log(i);
// }

// ===================================

//
// 3. Задание (циклы)
// Вывести числа 654 653 652 до нуля.

// for (let i = 654; i >= 0; i -= 1){
//   console.log(i);
// }

// ===================================

// 4. Задание (циклы)
// Вывести все годы с 1983 до 2017.

// for (let i = 1983; i <= 2017; i += 1){
//   console.log(i);
// }

// ===================================

// 5. Задание (циклы)
// Вывести числа -4 -2 0 2 4 6 ...100.

// for ( let i = -4; i <= 100; i += 2){
//   console.log(i);
// }

// ===================================

// 6. Задание (циклы)
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

// let result;
// for ( let i = 1; i <= 9 ; i += 1){
//   result = i * 7;
//  console.log(result);
// }

// ===================================

// 7. Задание (циклы)
// Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ

// for (let i = 1000; i <= 2000; i += 1){
//   console.log(`&#${i}`);
// }

// ===================================

// 8. Задание (циклы)
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

// let sum = 0;
// for ( let i = 1; i <= 100; i += 1){
//   sum += i;
// }
// console.log(sum);

// ===================================

// 9. Задание (циклы)
// С помощью цикла вывести произведение чисел от 1 до 50.

// let total = 1;
// for (let i = 1; i <= 50; i += 1){
//   total = total * i;
// }
// console.log(total);

// ===================================

// 10. Задание
// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
//   Длину массива вводить через prompt.

// let arr = [];
// let x = prompt("Введите длину массива!");
// let number = parseInt(x);
//
//
//  for (let i = 0; i < number; i += 1 ){
//    let y = "x";
//    for (let j = 0; j < i; j++) {
//      y  += "x";
//    }
//    arr.push(y);
//  }
//  console.log(arr);
 
 // =========================
//
// 11. Задание
// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
//   Длину массива вводить через prompt.

// let arrayNumbers = [];
// let input = prompt();
// let number = parseInt(input);
//
// for ( let i = 0; i < number; i+= 1){
//   let z = input;
//   for (let j = 0; j < i; j += 1){
//     z = z + input;
//   }
//   arrayNumbers.push(z);
// }
//  console.log(arrayNumbers);

// =========================

// 12. Задание
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let numbers = [1, 1, 2, 5,  2, 6, 5, 7];
// let result = 0;
// let el = 0;
// console.log(numbers);
//
// for( let i = 0; i < numbers.length; i +=1 ){
//   result += numbers[i];
//   el += 1;
//
//    if (result > 10){
//      break;
//    }
// }
//
// console.log(` el:${el}`);

// =================================
//
// 13. Задание
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
//
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let  arrayNew =[];
//
// for( let i = array.length - 1; i >= 0; i -= 1 ) {
//
//   arrayNew.push(array[i]);
//   // console.log (` index:${i} - el:${array[i]}`);
// }
// console.log( array);
// console.log( arrayNew);

// ========================================
//   14. Задание
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Добавила еще одно свое условие для лучшей визуализации)

// const array =[ 1, 6, 88, 5, 86, 21, 11, 3, 9, 0, 7];
// let  firstResult =[];
// let secondResult =[];
//
//  for( let i = 0; i < array.length; i +=1) {
//     if ( array[i] > 0 && array[i] < 10) {
//       firstResult.push(array[i])
//     } else {
//       secondResult.push(array[i]);
//     }
// }
//  console.log (array)
//  console.log(firstResult);
//  console.log(secondResult);

// ========================================
//
// 15.
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.

// const array =[ 100, 197, 88, 5, 81, 21, 61, 3, 9, 0, 7, 8, 4, 10, 18, 20, 22];
// let evenNumbers =[];
//
// for (let number of array) {
//   if (number % 2 === 0 && number !== 0){
//     evenNumbers.push(number)
//   }
// }
// console.log( array);
// console.log( evenNumbers);
// ========================================


// 16. Задание
// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let nado = [2, 1, 4, 3, 6, 5];
//
// let result = [];
// for( let i = 0; i < array.length; i += 2){
//   let indexA = i;
//   let indexB = i+1;
//   if( indexB < array.length){
//     result.push(array[i + 1])
//   }
//    result.push(array[i]);
// }
//
// console.log(array);
// console.log(nado);
// console.log(result);

// ========================================


// 17. Задание
// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]

// let array = [1, 2, 3, 4, 5, 6, 7];
// let result =[];
//
// for (let i = array.length-1; i >= 0; i -= 2){
//   let indexA = i;
//   let indexB = i - 1;
//
//   const a = array[indexA];
//   const b = array[indexB];
//
//   if(indexB >= 0 ) {
//     result.push(b)
//   }
//
//   result.push(a);
// }
// console.log(result);

// ========================================

//
// 18. Задание
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//   Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//
// let array = [[1, 2, 3], [4, 5], [6]];
// let total = 0 ;
//
// for (let i = 0; i < array.length; i += 1){
//   for (let j = 0; j < array[i].length; j += 1) {
//     total += array[i][j];
//   }
// }
// console.log(total);

// ========================================

// 19. Первая картинка


// let array = [];
//
//
// for ( let i = 1; i < 10; i += 1) {
//
//   array[i]= [];
//
//   for (let j = 1; j < 10; j +=1 ){
//     array[i].push(i * j);
//   }
// }
// console.log (array);

// ========================================
// вторая картинка
// let array = [];
// const size = 10;
//
// for(let i = 0; i < size; i += 1){
//   array[i] = [];
//
//    for(let j = 0; j < size; j += 1){
//      const equal = i === j;
//      const sum = i + j;
//
//      if ((sum > size) && (j > i)){
//        array[i][j] = 4;
//      }
//
//      if ((sum < size) && (j > i)){
//        array[i][j] = 3;
//      }
//
//      if ((sum > size) && (j < i)){
//        array[i][j] = 5;
//      }
//
//      if ((sum < size) && (i > j)){
//        array[i][j] = 6;
//      }
//
//      if (sum === size){
//        array[i][j] = 2;
//      }
//
//      if (equal) {
//        array[i][j] = 1;
//      }
//    }
// }
//
//
// console.log(array);
// ========================================

// третья картинка
// const result = [];
// const maxLines = 10;
// for (let i = 0; i < maxLines; i++) {
//   result.push([]);
//   for (let j = 0; j <= i; j++) {
//     if (j === i) {
//       result[i][j] = 1;
//     } else {
//       const a = result[i - 1][j - 1];
//       const b = result[i - 1][j];
//       result[i][j] = (a || 0) + (b || 0);
//     }
//   }
// }
// console.log(result);

