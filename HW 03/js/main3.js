// {
//     const task = `Задание №1
// Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].`
//     console.log(task)
//     let value = prompt('Введите значение, которым нужно наполнить массив:')
//     let length = prompt('Введите длину массива:')
//     let arr = task1(value, length)
//     console.log(arr)
// }

// {
//     const task = `Задание №2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.`
//     console.log(task)
//     let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
//     let result = task2_sumItems(arr)
//     console.log('Результат суммирования: ' + result)
// }

// {
//     const task = `Задание №3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.`
//     console.log(task)
//     let value = prompt('Введите значение, которое нужно проверить: ')
//     let result = task3_isNumberInRange (value)
//     console.log('Результат проверки: ' + result)
// }

// {
//     const task = `Задание №4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.`
//     console.log(task)
//     let value = prompt('Введите значение, которое нужно проверить на четность: ')
//     let result = task4_isEven (value)
//     console.log('Результат проверки: ' + result)
// }

// {
//     const task = `Задание №5
// Дан массив с целыми числами.
// Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.`
//     console.log(task)
//     let length = prompt('Введите длину массива:')
//     let arr = task5_generateArr (length)
//     let arrEven = []
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         task4_isEven (arr[i]) === true ? arrEven.push(arr[i]) : ''
//     }
//     console.log('Результат фильтрации: ' + arrEven)
// }

// {
//     const task = `Задание №6
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).`
//     console.log(task)
//     let value = prompt('Введите число для обработки:')
//     let arr = task6_getDivisors (value)
//     console.log('Результат фильтрации: ' + arr)
// }

// {
//     const task = `Задание №7
// Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.`
//     console.log(task)
//     let value = prompt('Введите число для возведения в степень:')
//     let power = prompt('Введите степень:')
//     let result = task7_exponentiation (value, power)
//     console.log('Результат возведения в степень: ' + result)
// }

// {
//     const task = `Задание №8
// Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.`
//     console.log(task)
//     let age = prompt('Введите ваш возраст:')
//     task8_checkAge (age)
// }

// {
//     const task = `Задание №9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
// В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||`
//     console.log(task)
//     let age = prompt('Введите ваш возраст:')
//     while(age == '' || age == undefined){
//         console.log('Неудачная попытка ввода!')
//         age = prompt('Введите пожалуйста ваш возраст:')
//     }
//     task8_checkAge (age)
// }

// {
//     const task = `Задание №10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
// Массив в функцию передается как аргумент.
// Если аргумент не задан – выводится сообщение об ошибке.`
//     console.log(task)
//     let length = prompt('Введите длину массива:')
//     while(length == '' || length == undefined){
//         console.log('Ошибка ввода!')
//         length = prompt('Введите длину массива:')
//     }
//     let arr = task5_generateArr (length)
//     console.log(arr)
//     let arrLength = task10_checkArrLength (arr)
//     console.log('Длина массива: ' + arrLength)
// }

// {
//     const task = `Задание №11
// Пользователь вводит числа.
// Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7.
// Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.`
//     console.log(task)
//     let value = prompt('Введите значение:')
//     let result = task11 (value)
//     console.log('Результат: ' + result)
// }

// {
//     const task = `Задание №12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.`
//     console.log(task)
//     let value = prompt('Введите строку:')
//     let result = task12_ucfirst (value)
//     console.log('Результат: ' + result)
// }

// {
//     const task = `Задание №13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.`
//     console.log(task)
//     let value = 'var_text_hello'
//     let result = value.replace(/_/g, '')
//     console.log('Результат: ' + result)
// }

// {
//     const task = `Задание №14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.
// Показать решение.`
//     console.log(task)
//     let arrStr = prompt('Введите элементы массива через запятую:')
//     let value = prompt('Введите значение:')
//     let arr = arrStr.split(',')
//     let result = task13_inArray (value, arr)
//     console.log('Результат поиска по массиву: ' + result)
// }

// {
//     const task = `Задание №15
// Дана строка, например, '123456'. Сделайте из нее '214365'.`
//     console.log(task)
//     let row = prompt('Введите строку:')
//     let result = task15_inArray (row)
//     console.log('Результат: ' + result)
// }

{
    const task = `Задание №16
Напиши функцию создания генератора sequence(start, step).
Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше,
и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0.
Генераторов можно создать сколько угодно.`
    console.log(task)

    let generator = task16_sequence(10, 3);
    let generator2 = task16_sequence(7, 1);

    console.log(generator());
    console.log(generator());

    console.log(generator2());

    console.log(generator());

    console.log(generator2());
}

{
    const task = `Задание №17
Также, нужна функция take(gen, x) которая вызывает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.`
    console.log(task)
    let gen = task16_sequence(0, 3)
    let result = task17_takeGen(gen, 5)
    console.log('Результат: ' + result)
}

{
    const task = `Задание №18
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.`
    console.log(task)
    let arr = task17_takeGen(task16_sequence(0, 1), 4)
    let gen = task18_square
    let result = task18_map(gen, arr)
    console.log('Исходный массив: ' + arr)
    console.log('Результат: ' + result)
}

{
    const task = `Задание №19
Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в 17 задании.
fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.`
    console.log(task)
    let value = task16_sequence(0, 1)
    let gen = task18_square
    let result = task19_fmap(gen, value)


    console.log('Результат: ' + result());
    console.log('Результат: ' + result());
    console.log('Результат: ' + result());
}

{
    const task = `Задание №20
Написать функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.`
    console.log(task)
    let arr = task17_takeGen(task16_sequence(0, 1), 10)
    let gen = task20_isEven
    let result = task20_filter(gen, arr)

    console.log('Результат: ' + result);
}

