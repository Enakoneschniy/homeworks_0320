'use strict'

/* Task 1
Дано натуральное число n. Выведите все числа от 1 до n. */

{
    let a = 1;
    let rec = function (n) {
        console.log(a);
        a++
        if (a === n) {
            console.log(a);
            return n;
        }
        rec (n);
    }
 rec(5);
 
}

/* Task 2
Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.  */

{
    console.log('___________________________');
    
    let A = +prompt ("Введите целое позитивное число A: ");
    let B = +prompt ("Введите целое позитивное число B: ");

    let secRec = function () {
        if (A < B) {
            console.log(A);
            A++
            return secRec();
        }
        else if (A > B) {
            console.log(B);
            B++;
            return secRec();
        }
        else {
            if (A === B){ 
                console.log(A);
                return true;
            }
        }
        return true;
        secRec();
    }
    secRec();
}

/* Task 3
Дано натуральное число N. Вычислите сумму его цифр.При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). */

{
    let N = +prompt('Введите натуральное число N, состоящее не меньше чем из 2 чисел: ');

    let thirdRec = function (N) {
        let r = N % 10;
        if (r === 0){
            return 0;
        }
        return r + thirdRec((N - r) / 10);
    }
    console.log(thirdRec(N))
}

/* Task 4
Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика. */

{
    let N = +prompt('Введите натуральное число N, состоящее не меньше чем из 2 чисел: ');

    let fourthRec = function (N) {
        let r = N % 10;
        if (r === 0){
            return ''
        }
        return r + ' ' + fourthRec((N - r) / 10);
    }
    console.log(fourthRec(N))
}

/* Task 5
Дано натуральное число N. Выведите все его цифры по одной, в обычном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.*/

{
    let N = +prompt('Введите натуральное число N, состоящее не меньше чем из 2 чисел: ');

    let fourthRec = function (N) {
        let r = N % 10;
        if (r === 0){
            return '';
        }
        return fourthRec((N - r) / 10) + " " + r;
        
        
    }
    console.log(fourthRec(N))
}

/* Task 12
Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. */

{
    let firstArr = ['a', 'b', 'c'];
    let secArr = [1, 2, 3];
    let thirdArr = firstArr.concat(secArr);

    console.log(thirdArr);
    
}

/* Task 13
Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. */

{
    let firstArr = ['a', 'b', 'c'];

    firstArr.push(1);
    firstArr.push(2);
    firstArr.push(3);

    console.log(firstArr);
}

/* Task 14
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

{
    let Array = [1, 2, 3];

    Array.unshift(6);
    Array.unshift(5);
    Array.unshift(4);

    console.log(Array);
}

/* Task 15
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */

{
    let Array = [1, 2, 3, 4, 5];
    let newArray = Array.slice(0, 3);

    console.log(newArray);
}

/* Task 16
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */

{
    let Array = [1, 2, 3, 4, 5];
    let newArray = Array.slice(3, 5);

    console.log(newArray);
}

/* Task 17
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */

{
    let Array = [1, 2, 3, 4, 5];
    Array.splice(1, 2);

    console.log(Array);
}

/* Task 18
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. */

{
    let Array = [1, 2, 3, 4, 5];
    let newArray = Array.splice(1, 3);

    console.log(newArray);
}

/* Task 19
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5] */

{
    let Array = [1, 2, 3, 4, 5];
    Array.splice(3, 0, 'a', 'b', 'c');

    console.log(Array);
}

/* Task 20
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

{
    let Array = [1, 2, 3, 4, 5];
    Array.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5,'e');

    console.log(Array);
}

/*Task 21
Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */

{
    let obj = {
        js: 'test',
        jq: 'hello',
        css: 'world',
    };

    let objkeysArr = Object.keys(obj)
    console.log(objkeysArr);
}
