'use strict'
/*task 1
Написать функцию которая первым
 принимает значение, которым 
 заполнять массив, а вторым - 
 сколько элементов должно быть в 
 массиве. Пример: arrayFill('x', 5) 
 сделает массив ['x', 'x', 'x', 'x', 'x'].

*/
function arrayFill(element, value) {
  let arr = [];

  if(value > 0) {
    for(let i = 0; i < value; i++){
      arr.push(element);
    }
  } else {
    arr = 'Введите положительное число'
  }
  return arr;
}

/*task 2
Дан трехмерный массив с числами, 
например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
Найдите сумму элементов этого массива. Массив, 
конечно же, может быть произвольным.
*/

function sumArrayElement(arr) {
  let sum = 0;
  for (let key of arr) {
    for (let element of key) {
        for (let el of element) {
        sum += el;
      };
    }
  };
  return sum;
}

/*task 3
Сделайте функцию isNumberInRange, 
которая параметром принимает число 
и проверяет, что оно больше нуля и 
меньше 10. Если это так - пусть 
функция возвращает true, если не так - false.
*/

function isNumberInRange(num) {
  let answer;
  if (!(isNaN(num))) {
    if (num > 0 && num < 10) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    answer = 'Введено некорректное значение'
  }
  return answer;
}

/*task 4
Сделайте функцию isEven() 
(even - это четный), которая параметром 
принимает целое число и проверяет: 
четное оно или нет. Если четное - 
пусть функция возвращает true, если нечетное - false.
*/

function isEven(num) {
  let result;
  if (!(isNaN(num)) && (num != '' || num === 0)) {
    num = +num;
    if (Number.isInteger(num)) {
      if ( num % 2 === 0 ) {
        result = true
      } else {
        result = false
      }
    } else {
      result = 'Введеное число не целое'
    }
  } else {
     result = 'Введеное значение не является числом'
  }
  
  return result;
}

/*task 5
Дан массив с целыми числами. 
Создайте из него новый массив, 
где останутся лежать только четные 
из этих чисел. Для этого используйте 
вспомогательную функцию isEven из предыдущей задачи.
*/

function isEvenArr(arr) {
  let arrEven = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i]) === true) {
      arrEven.push(arr[i]);
    }
  }
  return arrEven;
  
}

/*task 6
Сделайте функцию getDivisors, 
которая параметром принимает число 
и возвращает массив его делителей 
(чисел, на которое делится данное число).
*/
function getDivisors(num) {
  num = Math.abs(num);
  let arr = [];
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i)
      }
    }
  return arr;
}

/*task 7
Создайте функцию, которая получает 
два параметра – число и степень числа. 
Используя ** внутри функции, возведите 
число в степень и выведите с помощью console.log.
*/

function pow(x, n) {
  let result = x ** n;
  console.log(result);
}


/*task 8
Функция принимает параметр - возраст 
пользователя. Если число больше 16 – 
то выводим «добро пожаловать», 
если меньше – “вы еще молоды”.
*/
function showGreeting(age) {
  return (age > 16) ? 'добро пожаловать' : 'вы еще молоды';
}


/*task 9
Модифицируйте предыдущий пример – 
учтите вариант, если пользователь 
не передал параметр в функцию. 
В таком случае выведите сообщение – 
“Введите возраст”. Реализуйте два вида 
проверки наличия аргумента – проверка 
на undefined и оператор ||.
*/

function getAge(age) {
  let access;

  if (typeof age === 'string' && age !== undefined) {
      age = age.trim();
    } else {
      age;
    }
  return (isNaN(age) || age === undefined || age === '' || age <= 0) ? 'введите корректный возраст' : showGreeting(age);
}

/*task 10
Создайте функцию, которая 
считает длину массива и 
возвращает ее в виде числа. 
Массив в функцию передается 
как аргумент. Если аргумент 
не задан – выводится сообщение об ошибке.
*/

function getArrayLength(arr) {
  let result;

  if (arr === undefined || arr === '') {
    result = 'Массив не задан';
  } else {
    result = arr.length;
  }
  return result;
}


/*task 11
Пользователь вводит числа. Если число 
больше 10, то функция возвращает 
квадрат числа, если меньше 7 – пишет, 
что число меньше 7. Если 8, 9 – то 
возвращает соответственно 7 или 8. 
Реализуйте решение с несколькими return.
*/

function showNumber() {
  let num = prompt('Введите число');
  let result;
  if (!(isNaN(num)) && num != '' && num != null && num != undefined) {
    num = + num;

    if (num > 10) {
      result = num ** 2;
    } else if (num < 7) {
      result = 'число меньше 7';
    } else if (num === 8) {
      result = 7;
    } else if (num === 9) {
      result = 8;
    } else {
      result = num;
    }
  } else {
    result = 'введите корректное число'
  }

  return result;

}

/*task 12
Дана строка. Сделайте заглавным первый символ
каждого слова этой строки. Для этого сделайте
вспомогательную функцию ucfirst, которая будет получать
строку, делать первый символ этой строки заглавным
и возвращать обратно строку с заглавной первой буквой.
*/

function ucFirst(word) {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}

function isCapitalLetter(str) {
  str = str.split(' ');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += ucFirst(str[i] + ' ');
  };
  return newStr;
}

/*task 13
Дана строка вида 'var_text_hello'. 
Сделайте из него текст 'varTextHello'.
*/

function changeText(str) {
  str = str.split('_');
  let newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    newStr += ucFirst(str[i]);
  }
  return newStr
}

/*task 14
Сделайте функцию inArray, 
которая определяет, есть в 
массиве элемент с заданным текстом 
или нет. Функция первым параметром 
должна принимать текст элемента, а 
вторым - массив, в котором делается поиск. 
Функция должна возвращать true или false. 
Показать решение.
*/

function inArray(element, arr) {
  let bool;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      bool = true;
      break;
    } else {
      bool = false;
    }
  }
  return bool
}

/*task 15
Дана строка, например, '123456'. 
Сделайте из нее '214365'
*/
function toRearrange(str) {
  str = str.split('');
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i + 1]);
    arr.push(str[i])
  }
  arr = arr.join('');
  return arr
}

/*task 16
Напиши функцию создания генератора
sequence(start, step). Она при 
вызове возвращает другую функцию-генератор, 
которая при каждом вызове дает число 
на 1 больше, и так до бесконечности. 
Начальное число, с которого начинать 
отсчет, и шаг, задается при создании 
генератора. Шаг можно не указывать, 
тогда он будет равен одному. Начальное 
значение по умолчанию равно 0. Генераторов 
можно создать сколько угодно.

*/

function sequence(start = 0, step = 1) {
  let callNumber = start;
  return function() {
    let retVal = callNumber;
    callNumber += step;
    return retVal;
  }
}

/*task 17
Также, нужна функция take(gen, x) 
которая вызвает функцию gen 
заданное число (x) раз и возвращает 
массив с результатами вызовов.
*/

function take(gen, x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr[i] = gen();
  }
  return arr;
}
 let gen = sequence(0, 2);

/*task 18
Напиши функцию map(fn, array), 
которая принимает на вход функцию 
и массив, и обрабатывает каждый 
элемент массива этой функцией, 
возвращая новый массив.
*/

function square(x) {
  return x * x;
}

function map(square, array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(square(array[i]));
  }
  return newArray;
}
console.log(map(square, [1, 2, 3]));


/*task 19
Напиши функцию fmap(a, gen), 
которая принимает на вход 2 функции, 
a и gen, где gen — функция-генератор вроде той, 
что была в 17 задании. fmap возвращает новую 
функцию-генератор, которая при каждом вызове 
берет следующее значение из gen и пропускает 
его через функцию a. 
*/

//gen = sequence(1, 1);

gen = function add(a, b) {
  return a+ b;
}

let a = square;

function fmap(a, gen) {
  return function() {
    let argsCount = arguments.length;
    let newArr = [];
    for (let i = 0; i < argsCount; i++) {
      newArr[i] = arguments[i];
    }
    let x = a(gen.apply(null, newArr));
    return x;
  }
}
let b = fmap(a, gen)

console.log(b(5,7));


/*task 20
Написать функцию filter, 
которая принимает функцию-предикат 
и массив. Возвращает она массив значений, 
для которых предикат вернет true. 
*/

let input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
  return x % 2 === 0;
}

function filter(input, isEven) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (isEven(input[i])) {
      arr.push(input[i])
    }
  }
  return arr;
}

console.log(filter(input, isEven));

