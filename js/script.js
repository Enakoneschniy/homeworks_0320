{
console.log('Задание №1')
let a = prompt('Введите значение a')
let b = prompt('Введите значение b')
let result1 = 0
if(a > b){
    result1 = a+b/2*4
} else if (a == b){
    result1 = 400;
} else {
    result1 = a-b+2/b*4
}
console.log('Результат первого задания х=' + result1)
}
//========================================================================================

// console.log('Задание №2')
// function figure1(x) {
//     let result = x + 4
// }
// let x1 = prompt('Введите значение x')
// let y1 = prompt('Введите значение y')
// console.log(figure1({x: x1}))
// if(figure1(x1) == y1){
//     console.log('Точка попадает в область')
// } else {
//     console.log('Точка НЕ попадает в область')
// }

// let x2 = prompt('Введите значение x')
// let y2 = prompt('Введите значение y')

// if(figure2(x2) == y2){
//     Console.log('Точка попадает в область')
// } else {
//     Console.log('Точка НЕ попадает в область')
// }
//
// let x3 = prompt('Введите значение x')
// let y3 = prompt('Введите значение y')
//
// if(figure3(x3) == y3){
//     Console.log('Точка попадает в область')
// } else {
//     Console.log('Точка НЕ попадает в область')
// }

//========================================================================================
{
console.log('Задание №3')
let denNedeli = 0
do{
    denNedeli = prompt('Введите номер дня недели')
    if(denNedeli < 1){
        alert('Такого дня недели не существует :)')
    }else if(denNedeli > 7){
        alert(`В неделе всего 7 дней :)`);
    }
}while(denNedeli < 1 || denNedeli > 7)
switch ( denNedeli) {
    case '1':
        console.log('День недели под номером 1 - Понедельник')
        break
    case '2':
        console.log('День недели под номером 2 - Вторник')
        break
    case '3':
        console.log('День недели под номером 3 - Среда')
        break
    case '4':
        console.log('День недели под номером 4 - Четверг')
        break
    case '5':
        console.log('День недели под номером 5 - Пятница')
        break
    case '6':
        console.log('День недели под номером 6 - Суббота')
        break
    case '7':
        console.log('День недели под номером 7 - Воскресенье')
        break
}
}
//========================================================================================
{
console.log('Задание №4')
let chislo41 = prompt('Введите число 1')
let chislo42 = prompt('Введите число 2')
let result4 = Math.max([chislo41, chislo42])
console.log('Максимальное значение из 2х чисел = ' + result4)

console.log('Задание №5')
let chislo51 = prompt('Введите число 1')
let chislo52 = prompt('Введите число 2')
let result5 = 0
if(chislo51 > chislo52){
    console.log('a > b, a = ' + chislo51)
} else if (chislo51 == chislo52){
    console.log('a = b, числа равны')
} else {
    console.log('b > a, b = ' + chislo52)
}
}
//========================================================================================
{
console.log('Задание №6')
let room = ''
do{
    room = prompt('Введите номер квартиры: ')
    if(room < 1){
        alert('Номер квартиры должен быть больше 0!')
    }else if(room > 90){
        alert(`Данная квартира находится в другом доме.
        В этом доме квартиры с 1 по 90.`);
    }
} while (room < 1 || room > 90)

if(room >= 1 && room <= 20){
    console.log('Квартира находится в 1ом подъезде')
} else if (room >= 21 && room <= 48){
    console.log('Квартира находится в 2ом подъезде')
} else if (room >= 49 && room <= 90){
    console.log('Квартира находится в 3ом подъезде')
}
}
//========================================================================================
{
console.log('Задание №7')
const users = [['ivan', '334455'], ['alex', '777'], ['petr', 'b5678']]
let login = prompt('Введите свой логин для авторизации')
let password = prompt('Введите пароль для авторизации')
let chec = 0;
for(let i = 0; i < users.length; i++){
    if(users[i][0] == login && users[i][1] == password) {
        chec = chec + 1
    }
}
if(chec > 0){
    console.log(`Добро пожаловать!`)
} else {
    console.log(`Вы ввели неправильный логин или пароль...`)
}
}
//========================================================================================
{
console.log('Задание №8')
let year = prompt('Введите Ваш год рождения')
let result8 = new Date().getFullYear() - year
if(result8 >= 16){
    console.log(`Добро пожаловать!`)
} else if(result8 < 16 && result8 > 0){
    console.log(`Вы еще не доросли до посещения данного сайта :)`)
} else {
    console.log(`Когда Вы родитесь и Вам будет 16 лет, тогда приходите к нам :)`)
}
}
//========================================================================================
{
console.log('Задание №9')
let arrStazh = [[0, 3, 0], [3, 10, 10], [10, 20, 20], [20, 100, 25]]
let stazh = prompt('Введите ваш стаж: ')
let zarplata = prompt('Введите вашу зарплату: ')
let nadbavka = 0
for(let i = 0; i < arrStazh.length; i++){
    if(stazh >= arrStazh[i][0] && stazh < arrStazh[i][1]){
        nadbavka = arrStazh[i][2]
        zarplata = +zarplata + zarplata/100*nadbavka
    }
}
console.log('Надбавка по Вашему стажу сотавила ' + nadbavka + '%, сумма выплаты составит ' + zarplata)
}
//========================================================================================
{
console.log('Задание №10')
let tovar = prompt('Введите количество товаров: ')
if(tovar == 1){
    console.log('В вашей корзине ' + tovar + " товар")
} else if(tovar > 1 && tovar < 5){
    console.log('В вашей корзине ' + tovar + " товара")
} else {
    console.log('В вашей корзине ' + tovar + " товаров")
}
}
//========================================================================================
{
let data = [['00001', 'Кока-кола', 20],
    ['00002', 'Напиток', 15],
    ['00003', 'Сигареты', 40]]
let product = prompt('Введите штрих-код товара: ')
for(let i = 0; i < data.length; i++){
    if(data[i][0] == product){
        console.log('Вы продали товар: ' + data[i][1] + ' по цене ' + data[i][2] + ' гривен.')
    }
}
}
//========================================================================================
{
let drink = prompt('Введите наименование напитка: ')
switch (drink) {
    case 'Кофе':
        console.log('Налить клиенту кофе.')
        break
    case 'Чай':
        console.log('Налить человеку чай')
        break
    case 'Эспрессо':
        console.log('Налить человеку эспрессо')
        break
    case 'Какао':
        console.log('Налить человеку какао')
        break
    default:
        console.log('Налить человеку воды')
        break
}
}