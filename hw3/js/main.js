'use strict'
/*
Задача 1. Написать функцию которая первым принимает значение,
которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
*/

{
    function arrayFill (item = 0, size = 0) {
        let m = []
        for (let i = 0; i < size; i++) {
           m.push(item)           
        }
        return m
    }
 
    console.log(arrayFill("x",5))
 }

 /*
Задача 2.Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/

{
    let m = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
    let sum = 0
 
    for (let i of m) {
       for (let a of i) {
           for (let el of a) {
            sum += el 
           }
        }
    }
    
    console.log(sum)
}

/*
Задача 3.Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
Если это так - пусть функция возвращает true, если не так - false.
*/

{
    function isNumberInRange (number = 1){
       if (number > 0 && number < 10){
          return true
       }
       else {
          return false
       }
    }
    console.log(isNumberInRange(100))
}

/*
Задача 4. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false.
*/

{
    function isEven (number = 1){
       if (number % 2 ===0){
          return true
       }
       else {
          return false
       }
    }
    console.log(isEven(4))
}

/*
Задача 5.Дан массив с целыми числами. Создайте из него новый массив, 
где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/

{
    let m = [1, 2, 3, 5, 88, 22, 3, 5, 1]
    let m2 = []
    for (let i of m){
       if (isEven(i) === true){
          m2.push(i)
       }
    }
    console.log(m2)
}

/*
Задача 6.Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
*/

{
    function getDivisors (number = 1) {
       let m = []
       for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
             m.push(i)
          }
       }
       return m
    }
    
    console.log(getDivisors(999))


}

/*
Задача 7.Создайте функцию, которая получает два параметра – число и степень числа. 
Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
*/

{
    function degree (number = 1, deg = 1) {
       return console.log(number**deg)
    }
    
    degree (2,2)
}

/*
Задача 8.Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
*/

{
    function ageS (age = 1) {
       if (age > 16){
          return console.log("Добро пожаловать")
       }
       else {
          return console.log("Вы еще молоды")
       }
    }
    
    ageS (18)
}

/*
Задача 9.Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – 
“Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
*/

{
   let x = parseFloat(prompt("Введите возраст"))
   ageS(x)

   function ageS (age) {
      if (!!age) {
         if (age > 16) {
         return alert("Добро пожаловать")
         }
         else {
           return alert("Вы еще молоды")
         }
      }
      else {
         return alert("Введите возраст")
      }
   }
}

/*
Задача 10.Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
*/
{
    let m = [1, 2, 3, 55, 6, 55]
    console.log(arrayLength(m))
 
    function arrayLength (arr) {
       if (arr instanceof Array) {
            return arr.length
          }
        else {
          return alert("Ошибка, не введен аргумент")
       }
    }
}

/*
Задача 11.Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет,
что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
*/
{
   let a = parseFloat(prompt("Enter a")) 
   console.log(oy(a))

   function oy (a) {
       if (a > 10) {
           return a ** 2
       }
       if (a < 7) {
           return "Число меньше 7"
       }
       if (a === 8 || a === 9) {
           return a - 1
       }     
   }
}

/*
Задача 12.Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/
{
   let str = "рандомный текст"
   let str2 = str.split(" ")
   let m = []
   for (let i = 0; i < str2.length; i++){
       m.push(ucFirst(str2[i]))
   }
   console.log(m.join(" "))

   function ucFirst(str) {
       return str[0].toUpperCase() + str.slice(1);
   }
}

/*
Задача 13.Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
*/
{
   let str = "var_text_hello"
   let str2 = str.split("_")
   let m = []
   for (let i = 0; i < str2.length; i++){
       m.push(ucFirst(str2[i]))
   }
   m = m.join("")
   console.log(m[0].toLowerCase() + m.slice(1))

   function ucFirst(str) {
       return str[0].toUpperCase() + str.slice(1);
   }
}

/*
Задача 14.Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false. Показать решение.
*/
{
    let arr = [1, "box", 22, "proof", 21]
    console.log(inArray("box", arr))

    function inArray (text, array) {
        for (let a of array) {
            if (text === array[a]) {
                return true
            }
        }
        return false
    }
}

/*
Задача 15.Дана строка, например, '123456'. Сделайте из нее '214365'.
*/
{
   let str = "123456"
   let m = [...str]
   let m2 = []
   
   for (let i = 0; i < m.length; i = i+2) {
       m2.push(m[i+1])
       m2.push(m[i])
   }
   console.log(m2.join(""))
}

/*
Задача 16.Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую 
функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, 
с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. 
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/
{
   function sequence (start = 0, step = 1) {
       start -= step
      return function () {
          return start += step
       }
   }
}

/*
Задача 17.Также, нужна функция take(gen, x) которая вызывает функцию gen 
заданное число (x) раз и возвращает массив с результатами вызовов.
*/
{
   function take (gen, x) {
      let m = []
      for (let i = 0; i < x; i++) {
         m.push(gen()) 
      }
      return m
   }
}

/*
Задача 18.Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
*/
{
   function map (fn, array) {
       let m = []
       for (let i of array) {
           m.push(fn (i))                                                                                             
       }
       return m
   }
}

/*Задача 19.Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, 
где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор,
которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.
*/
{
   let gen = sequence(1,1)
   let gen2 = fmap (square, gen)
   let gen3 = fmap (square, add)
   
   function fmap (a, gen) {
       return function () {
           return a(gen.apply(this, arguments))            
       }
   }
   function square (x) {return x*x}

   function add (...m){
       let sum = 0
       for (let el of m) {
           sum += el
       }
       return sum
   }

   console.log(gen3(2,3))

   function sequence (start = 0, step = 1) {
       start -= step
      return function () {
          return start += step
       }
   }
}

/*
Задача 20.Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений,
для которых предикат вернет true. Функция не должна изменять исходный массив
*/
{
   let m = [1,2,3,4,5,6]
   function isEven (x) {
       return x%2==0
   }
   function filter (fn, arr) {
       let m2 = []
       for (let el of arr){
           if (fn (el)){
               m2.push(el)
           }
       }
       return m2
   }
   console.log(filter(isEven, m))
}