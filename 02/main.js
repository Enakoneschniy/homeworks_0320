/*task 1
Вывести числа от 4 до 400 на экран.
*/
function showNumbers() {
  
  let count = 4;
  for(let i = count; i <= 400; i++){
    console.log(count);
    count++;
  }
}

/*task 2
Вывести числа в последовательности: 
4 7 10 13 с помощью цикла.
*/
function showOrderNumbers() {
  let count = 4;
  for(let i = count; i <= 13; i += 3) {
    console.log(count);
    count += 3;
  }
}

/*task 3
Вывести числа 654 653 652 до нуля
*/
function showOrderDecreaseNumbers() {
  let count = 654;
  for(let i = count; i >= 0; i--) {
    console.log(count);
    count--;
  }
}

/*task 4
Вывести все годы с 1983 до 2017.
*/

function showYears(start, end){
  let count = start;
  for(let i = start; i <= end; i++) {
    console.log(count);
    count++;
  }
}

/*task 5
Вывести числа -4 -2 0 2 4 6 ...100.
*/
function showNum(start, end) {
  let count = start;
  for(let i = start; i <= end; i++) {
    if(count%2 == 0) {
      console.log(count);
      count++;
    } else {
      count++;
    }
  }
}

/*task 6
С помощью цикла напечатайте 
таблицу умножения на 7 от 1 до 9.
*/
function showMultiplicationTable(num) {
  let count;
  for (let i = 1; i <= 9; i++) {
    count = num * i;
    console.log(num + '*' + i + '=' + count)
  }
}

/*task 7
Выведите с помощью цикла коды 
спецсимволов от 1000 до 2000. 
Напомню, что спецсимвол получается 
комбинацией &#число;
*/
function showSpecialСharacter(start, end) {
  let character;
  for (let i = start; i <= end; i++) {
    character = '&' + '#' + i;
    console.log(character)
  }
}

/*task 8
Найти сумму чисел от 0 до 100 
(включительно). (0+1+2+3+4+5).
*/
function showSumNums(start, end) {
  let sumNums = start;
  for (let i = start + 1; i <= end; i++) {
    sumNums += i;
  };
  return sumNums;
}

/*task 9
С помощью цикла вывести 
произведение чисел от 1 до 50.
*/
function showMultiplicationNums(start, end) {
  let n = start;
  for (let i = start + 1; i <= end; i++) {
    n *= i;
  };
  return n;
}

/*task 10
Заполните массив следующим образом: 
в первый элемент запишите 'x', 
во второй 'xx', в третий 'xxx' 
и так далее. Длину массива вводить через prompt.
*/
function fillArray() {
  let length = prompt('Введите длину массива');
  let arr = [];
  let n = 'x';

  for (let i = 0; i < length; i++) {
    arr.push(n);
    n += 'x'; 

  }
  return arr;
}

/*task 11
Заполните массив следующим образом: 
в первый элемент запишите '1', 
во второй '22', в третий '333' и так далее. 
Длину массива вводить через prompt.
*/

function fillArrayNum() {
  let length = prompt('Введите длину массива');
  let arr = [];

  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      arr.push(i)
    };
  }
  return arr;
}

/*task 12
Дан массив с числами. Узнайте 
сколько элементов с начала массива 
надо сложить, чтобы в сумме 
получилось больше 10-ти.
*/

function showAmountElements(arr) {
  
  let count = 0;
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    if (count > 10) {
      j = i + 1;
      break;
    } else {
      j = 'Условие не выполняется, закончились элементы в массиве';
    }

  }
  return j;
}

/*task 13
Дан массив с числами. 
Не используя метода reverse 
переверните его элементы в обратном порядке.
*/
function showReverseArray(arr) {
  let arrR = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    arrR.push(arr[i])
  }
  return arrR;
}

/*task 14
Дан массив с числами. Запишите 
в новый массив только те числа, 
которые больше нуля и меньше 10-ти.
*/

function showNewArray(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

/*task 15
Дан массив с целыми числами. 
Создайте из него новый массив, 
где останутся лежать только 
четные из этих чисел.
*/

function showArrayEvenNum(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/*task 16
Дан массив [1, 2, 3, 4, 5, 6]. 
Сделать из него массив [2, 1, 4, 3, 6, 5]
*/

function showArrayNewNum(arr) {

  let newArr = [];
  for (var i = 0; i <= arr.length - 2; i += 2) {
    newArr.push(arr[i+1]);
    newArr.push(arr[i]);
  }
  return newArr;
}


/*task 17
Дан массив [1, 2, 3, 4, 5, 6].
Сделать из него массив [5, 6, 3, 4, 1, 2]
*/

function showArrayNewN(arr) {
  let newArr = [];
  for (var i = arr.length - 1; i >= 0; i -= 2) {
    newArr.push(arr[i - 1]);
    newArr.push(arr[i]);
  }
  return newArr;
}


/*task 18
Дан двухмерный массив с числами, 
например [[1, 2, 3], [4, 5], [6]]. 
Найдите сумму элементов этого массива. 
Массив, конечно же, может быть произвольным.
*/

function showSumElem(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    };
  };
  return sum;
}

/*task 19
Сформировать 3 матрицы изображенные на картинке
*/

//матрица 1

function matrixArray(size){
  let arr = [];
  for(let row = 0; row < size; row++){
    arr[row] = [];
    for(let cell = 0; cell < size; cell++){
      arr[row][cell] = (row + 1) * (cell + 1);
    }
      
  }
  return arr;
}



//матрица 2
function matrixArr(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      if(i == j) {
        arr[i][j] = 1;
      } else if ((i + j) == (size - 1)) {
        arr[i][j] = 2;
      } else if ((i + j) <= 8 && (j - i) > 0) {
        arr[i][j] = 3;
      } else if ((i + j) <= 8 && (i - j) <= 8) {
        arr[i][j] = 6;
      } else if ((j - i) <= 8 && (j - i) > 0) {
        arr[i][j] = 4;
      } else {
        arr[i][j] = 5;
      }
    };
  };
  return arr;
}


//матрица 3
function matrixArrs(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      if (i == j || j == 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  
  return arr;
}
console.log(matrixArrs(10));



