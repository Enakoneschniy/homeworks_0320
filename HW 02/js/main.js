{
const task = `Задание №1 - циклы
Вывести числа от 4 до 400 на экран.`
console.log(task)
    let n = 4
    do{
        console.log(n)
        n += 1
    } while (n <= 400)
}

{
    const task = `Задание №2 - циклы
Вывести числа в последовательности: 4 7 10 13 с помощью цикла`
    console.log(task)
    for (let i = 4; i < 14; i += 3) {
        console.log(i)
    }
}

{
    const task = `Задание №3 - циклы
Вывести числа 654 653 652 до нуля.`
    console.log(task)
    let n = 654
    while (n > 0) {
        console.log(n)
        n -= 1
    }
}

{
    const task = `Задание №4 - циклы
Вывести все года с 1983 до 2017.`
    console.log(task)
    for (let i = 1983; i < 2018; i++) {
        console.log('Year ' + i)
    }
}

{
    const task = `Задание №5 - циклы
Вывести числа -4 -2 0 2 4 6 ...100.`
    console.log(task)
    let n = -4
    do {
        console.log(n)
        n += 2
    } while (n <= 100)
}

{
    const task = `Задание №6 - циклы
С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9`
    console.log(task)
    for (let i = 1; i < 10; i++) {
        let result = 7 * i
        console.log('7 * ' + i + ' = ' + result)
    }
}

{
    const task = `Задание №6.1 - циклы
Чисто потому, что хочу)`
    console.log(task)
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            let result = i * j
            console.log(i + ' * ' + j + ' = ' + result)
        }
        console.log('==========')
    }
}

{
    const task = `Задание №7 - циклы
Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ`
    console.log(task)
    for(i = 1000; i < 2001; i++){
        //console.log('Symbol №' + i + ' &#' + i) не работает(
        console.log('Symbol №' + i + ' ' + String.fromCodePoint(i))
    }
}

{
    const task = `Задание №8 - циклы
Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)`
    console.log(task)
    let sum = 0
    let sumOld = 0
    for(i = 0; i < 100; i++){
        sum = sum + i
        console.log('LastSum: ' + sumOld + ' Add: ' + i + ' Result: ' + sum)
        sumOld = sum
    }
}

{
    const task = `Задание №9 - циклы
С помощью цикла вывести произведение чисел от 1 до 50.`
    console.log(task)
    let comp = 1
    let compOld = 1
    for(i = 1; i < 51; i++){
        comp = comp * i
        console.log('LastSum: ' + compOld + ' Comp: ' + i + ' Result: ' + comp)
        compOld = comp
    }
}

{
    const task = `Задание №12 - циклы
Дан массив с числами.
Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let sum = 0
    let count = 0
    for (let i in arr) {
        sum += +arr[i]
        if(sum > 10){
            count = +i + 1
            break;
        }
    }
    console.log(arr)
    console.log('Необходимое число элементов: ' + count)
}

{
    const task = `Задание №13 - циклы
Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[arr.length-i-1])
    }
    console.log(arr)
    console.log(newArr)
}

{
    const task = `Задание №14 - циклы
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[arr.length - i - 1])
    }
    console.log(arr)
    console.log(newArr)
}

{
    const task = `Задание №15 - циклы
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr.push(arr[i])
        }
    }
    console.log(arr)
    console.log(newArr)
}

{
    const task = `Задание №16 - циклы
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6]
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr.splice(i-1, 0, i+1)
        } else {
            newArr.push(i+1)
        }
    }
    console.log(arr)
    console.log(newArr)
}

{
    const task = `Задание №17 - циклы
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]`
    console.log(task)
    let arr = [1, 2, 3, 4, 5, 6]
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            newArr.splice(0, 0, i+1)
        } else {
            newArr.splice(1, 0, i+1)
        }
    }
    console.log(arr)
    console.log(newArr)
}

{
    const task = `Задание №18 - циклы
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.`
    console.log(task)
    let arr = [[1, 2, 3], [4, 5], [6]]
    console.log(arr)

    let sumAll = 0
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j]
        }
        sumAll = sumAll + sum
        console.log('Сумма ' + (i+1) + '-го элемента массива: ' + sum)
    }
    console.log('Сумма всего массива: ' + sumAll)
}

{
    const task = `Задание №19 - циклы
Сформировать 3 матрицы изображенные на картинке`
    console.log(task)
    let matrix1 = []
    for(let i = 0; i < 10; i++) {
        let arr = []
        for (let j = 0; j < 10; j++) {
            arr[j] = (+i+1) * (+j+1)
        }
        matrix1.push(arr)
    }
    console.log(matrix1)

    let matrix2 = []
    let two = 10
    for(let i = 0; i < 10; i++) {
        let arr = []
        for (let j = 0; j < 10; j++) {
            if(i == j){
                arr.push(1)
            } else if(j == two - 1){
                arr.push(2)
                two -= 1
            } else if(i < 5 && j > i && j < two){
                arr.push(3)
            } else if(i > 5 && j < i && j > two){
                arr.push(5)
            } else if(j < i){
                arr.push(6)
            } else if(j > i){
                arr.push(4)
            }
        }
        matrix2.push(arr)
    }
    console.log(matrix2)

    let matrix3 = []
    for (let i = 0; i < 11; i++) {
        let arr = []
        for (let j = 0; j < i+1; j++) {
            if(j == 0){
                arr.push(1)
            } else if(j == i) {
                arr.push(1)
            } else {
                arr.push(matrix3[i-1][j-1]+matrix3[i-1][j])
            }
        }
        matrix3.push(arr)
    }
    console.log(matrix3)
}