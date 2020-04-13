function task1 (value, count) {
    let arr = []
    for(let i = 0; i < length; i++){
        arr.push(value)
    }
    return arr
}

function task2_sumItems(array) {
    let sum = 0

    function sumOfArray(array) {
        for (let value of array) {
            if (Array.isArray(value)) {
                sumOfArray(value);
            } else {
                sum += value;
            }
        }
    }
    sumOfArray(array, sum)
    return sum
}

function task3_isNumberInRange (value) {
    if(value > 0 && value < 10){
        return true
    } else {
        return false
    }
}

function task4_isEven (value) {
    if(value % 2 === 1){
        return false
    } else {
        return true
    }
}

function task5_generateArr (length) {
    let arrRand = []
    for (let i = 0; i < length; i++) {
        arrRand.push(Math.floor(Math.random() * 100))
    }
    return arrRand
}

function task6_getDivisors (value) {
    let arrDivisors = []
    for (let i = 1; i <= value; i++) {
        value % i === 0 ? arrDivisors.push(i) : ''
    }
    return arrDivisors
}

function task7_exponentiation (value, exp) {
    let result = value ** exp
    // for (let i = 1; i <= value; i++) {
    //     value % i === 0 ? arrDivisors.push(i) : ''
    // }
    return result
}

function task8_checkAge (age) {
    if(age >= 16){
        console.log('Добро пожаловать :)')
    } else {
        console.log('Вы еще молоды :(')
    }
}

function task10_checkArrLength (arr) {
    return arr.length
}

function task11(value) {
    if (value >= 10) {
        return value ** 2
    } else if (value < 7) {
        return 'Число меньше 7'
    } else {
        switch (value) {
            case '8':
                return 8
                break
            case '9':
                return 9
                break
        }
    }
    return arr.length
}

function task12_ucfirst(row) {
    let symbols = [',', ';', ':', ' ']
    for(let i in symbols){
        let symbol = symbols[i]
        let arr = row.split(symbol)

        for(let j = 0; j < arr.length; j++){
            let word = arr[j].slice(0, arr[j].length)
            arr[j] = arr[j][0].toUpperCase()+arr[j].slice(1, arr[j].length)
        }
        row = arr.join('')
        console.log(row)
    }
    return row
}

function task14_inArray (value, arr) {
    return arr.indexOf(value) !== -1 ? true : false
}

function task15_inArray (value) {
    let newRow = []
    for(let i = 0; i < value.length; i++){
        if(i % 2 == 0){
            newRow.push(value[i])
        } else {
            newRow.splice(i-1, 0, value[i])
        }
    }
    return newRow.join('')
}

function task16_sequence(start = 0, step= 1) {
    let value = start
    return function task16_upStep() {
        let result = value;
        value = value + step;
        return result;
    }
}

function task17_takeGen (func, count) {
    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push(func())
    }
    return arr
}

function task18_square (x) {
 return x * x
}

function task18_map (func, array) {
    let result = []
    for(let value of array) {
        result.push(func(value))
    }
    return result
}

function task19_fmap (func, value) {
    return function () {
        return func(value())
    }
}

function task20_isEven (x) {
    return x % 2 == 0
}

function task20_filter (func, array) {
    let result = []
    for(let value of array) {
        func(value) == true ? result.push(value) : ''
    }
    return result
}