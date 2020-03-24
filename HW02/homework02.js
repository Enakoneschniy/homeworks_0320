"use strict"

//1. Задание (циклы)
//Вывести числа от 4 до 400 на экран.
/*
for (let i=4; i<=400; i++) {
    console.log(i);
}
*/


//2. Задание (циклы)
//Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
/*
for (let i=4;i<=13; i+=3) {
    console.log (i);
}

//3. Задание (циклы)
//Вывести числа 654 653 652 до нуля.
for (let i=654; i>=0; i--) {
    console.log (i);
}



//4. Задание (циклы)
//Вывести все годы с 1983 до 2017.
for (let i=1983; i<=2017; i++) {
    console.log (`${i} год`);
}
*/


//5. Задание (циклы)
//Вывести числа -4 -2 0 2 4 6 ...100.
/*for (let i=-4; i<=100; i+=2) {
    console.log (i);
} */
/*let i=-4
while (i<=100) {
    console.log (i);
    i+=2
}
*/

//6. Задание (циклы)
//С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9
/*
let i=1;
do {
     console.log (`7*${i} = ${i*7}`);
    i++;
} while (i<=9);
 */

/*7. Задание (циклы) - ???????????????????????????7
Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол
получается комбинацией &#число; Например ӆ */



/*8. Задание (циклы)
Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5). */
/*
let i=0;
let sum=0;
while (i<=100) {
    sum=sum+i;
    i++;
}
console.log (sum);
*/




/*9. Задание (циклы)
С помощью цикла вывести произведение чисел от 1 до 50.*/
/*
let mult=1n;
for (let i=1; i<=50; i++) {
mult = mult*BigInt(i);
}
console.log (mult);
*/


/*10. Задание
Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
Длину массива вводить через prompt.
 */
/*
let l= prompt(" Введите длину массива");
let arr=[];
let sum = "";
for (let i=0; i< +l; i++) {
    sum += "x";
    arr.push (sum);
}
console.log (arr);
*/

/*11. Задание
Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
Длину массива вводить через prompt.
 */
// 1-й вариант
/*let l= prompt(" Введите длину массива");
let array = [];
let sum = "";
let mult;
for (let i=1; i<= +l; i++){
    sum += "1";
    mult = i * +sum;
    array.push (String (mult));
    }
console.log (array);
 */

//2-й вариант
/*
let l= prompt(" Введите длину массива");
let array = [];
let mult =1;
for (let i=1; i<= +l; i++){
    array.push (String (mult*i));
    mult = (mult*10+1);
}
console.log (array);
*/




/*12. Задание
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
*/
/*
let l= prompt(" Введите длину массива");
let array = [];
let sum = 0;
let n=0;
for (let i=0; i< +l; i++) { // ввод пользователем элементов массива
    let x = prompt (`Введите ${i+1}-е число массива`);
    array[i]= +x;
}
console.log (array);
for (let elem of array) {
    sum +=elem;
    n++;
    if (sum > 10) break;
}
if (sum>10) {
console.log(`Чтобы получить сумму больше 10 нужно сложить ${n} первых элементов массива`);
} else {
    console.log("Из элементов этого массива невозможно получить сумму больше 10");
}
*/



//13. Задание
//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
/*
let array = [2,-1,-10,3,0,23,-1,-55,23,1,7];
console.log(array);
let newarray = [];
// 1 вариант
let length = array.length;
for (let element of array) {
    newarray [length-1]=element;
    length--;
}
array = newarray;
console.log(array);

// 2 вариант
for (let i= array.length-1; i>=0; i--) {
    newarray.push (array[i]);
}
array = newarray;
console.log(array);
*/




/*14. Задание
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.*/
/*
let array = [2,-1,-10,3,0,23,-1,-55,23,1,7];
let newarray = [];
for (let element of array) {
    if (element >0 && element<10) {
        newarray [newarray.length] = element;
    }
}
console.log (newarray);
*/

/*15. Задание
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.*/
/*
let arrNumber = [3,43,22,31,6,7,4,3,2,10,12,77,88];
let arrayEvens = [];
for (let elem of arrNumber) {
    if (elem%2 === 0) {
        arrayEvens.push (elem);
    }
}
console.log (arrNumber);
console.log (arrayEvens);
*/

/*16. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
 */
/*
let array = [1, 2, 3, 4, 5, 6];
for (let i=0; i<array.length; i +=2) {
    array.splice(i,0, array[i+1]);
    array.splice(i+2,1);
}
console.log (array);
*/

/*17. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]*/
/*
let array = [1, 2, 3, 4, 5, 6];
let i=0;
do {
    let x= array.pop();
    array.unshift(x);
    i++;
} while (i<2);
array.splice (2,2);
array.push (1,2);
console.log (array);
*/

/*18. Задание
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/
/*
let matrix = [[1,2,3],[4,5],[6]];
let sum = 0;
for (let row = 0; row <matrix.length; row++) {
    for (let cell =0; cell<matrix[row].length; cell++){
        sum += matrix[row][cell];
    }
}
console.log (sum);
*/


// 19. Сформировать 3 матрицы изображенные на картинке
// 19.1 Таблица умножения
/*
let tableMult = [];
for (let row = 0; row<10; row++) {
    tableMult[row] = [];
    for (let element= 0; element<10; element ++){
        tableMult[row][element] = (row+1)*(element+1);
    }
}
console.log (tableMult);
*/

// 19.2 Матрица с диагоналями
let matrix = [];
for (let row =0; row<10; row++) {
    matrix[row] = [];
    for (let element =0; element<10; element++) {
    if (element===row) {
        matrix[row][element] = 1;
    } else if (row+element===9) {
        matrix[row][element] = 2;
    } else if (element - row > 0 && row+element-9 < 0) {
        matrix[row][element] = 3;
    } else if (element - row > 0 && row+element-9 > 0) {
        matrix[row][element] = 4;
    } else if (element - row < 0 && row+element-9 > 0) {
        matrix[row][element] = 5;
    } else if (element - row < 0 && row+element-9 < 0) {
        matrix[row][element] = 6;
    }
    }
}
console.log (matrix);

// 19.3 Треугольник Паскаля
/*
let triangle = [];
for (let row = 0; row<10; row++) {
    triangle[row] = [];
    for (let element = 0; element<=row; element ++) {
        if (element === 0) {
            triangle[row][element] = 1;
        } else if (element === row) {
            triangle[row][element] = 1;
        } else {
            triangle[row][element] = triangle[row-1][element-1] + triangle[row-1][element];
    }
    }
}
console.log (triangle);
*/

