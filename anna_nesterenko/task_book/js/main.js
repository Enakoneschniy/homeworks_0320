'use strict';

// 1.Треугольник. Напишите цикл,  выводит такой треугольник
const array = [];
  let x = "";

for ( let i = 0; i < 7; i += 1 ){
  x += "x";
  array[i] = x;
}
console.log(array);


// FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
//   Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
