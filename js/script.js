//Задание 1 (Система уравнений)
/*
let a = 4, b = 3, x;

if (a>b){
    x = a +b/2 *4;
    x= Math.ceil(x*100)/100;
    console.log('При a>b х: '+x);
}else if(a===b){
    x = 400;
    console.log('При a=b х: '+x);
}else if (a<b){
    x= a- b+ 2/b*4;
    x= Math.ceil(x*100)/100;
    console.log('При a<b х: '+x);
}

*/


//Задание 2
/*
При помощи prompt запросить у пользователя координату по оси x и координату по оси y.
Далее определить попадает ли точка с этими координатими в заштрисованную область.
Если попадает, то вывести сообщение "Точка попадает в область" если нет то
"Точка НЕ попадает в область" У вас есть 3 разных картинки - это три разных задания!
Для тех кто хочет сделать больше, то можете попробовать решить задачи при помощи функций.
для каждой картинки своя функция.
 */
// function one (x,y) {
//
//     if ((y>=0)&&(y>=x+4)&&(y<= -x+4)){
//         console.log('Вы попали в область');
//     }else   {
//         console.log('Вы не попали в область');
//     }
//
// }
//
// function two(x,y){
//     if ( (y<=1)&&(y>=-1)&&(y>=x)&&(y>=-x) ){
//         console.log('Вы попали в область');
//     }else   {
//         console.log('Вы не попали в область');
//     }
// }
//
// function three(x,y) {
//     //x^2+y^2 = 1 - уровнение окружности
//     if  ((x**2+y**2<=1)||(y>=-x-2)&&(x<=0)&&(y<=0)){
//         console.log('Вы попали в область');
//     }else   {
//         console.log('Вы не попали в область');
//     }
// }
//
// let koordinataX = prompt('Введите координату по оси Х'),
//     koordinataY = prompt('Введите координату по оси Y');
// console.log(`Точка (${koordinataX},${koordinataY})`);

// one(koordinataX,koordinataY);
// two(koordinataX,koordinataY);
// three(koordinataX,koordinataY);




//Задание 3
/*
При помощи prompt запросить у пользователя номер дня недели.
Вывести при помощи alert название дня недели. если пользователь
ввел некорректное значение вывести сообщение "Такого дня недели не существует!"
*/
// let whatDay = prompt('Какой по счету сегодня день недели?')

// switch(+whatDay){
//     case 1:
//     console.log('Monday');
//     break;
//     case 2:
//     console.log('Tuesday');
//     break;
//     case 3:
//     console.log('Wednesday');
//     break;
//     case 4:
//     console.log('Thursday');
//     break;
//     case 5:
//     console.log('Friday');
//     break;
//     case 6:
//     console.log('Sunday');
//     break;
//     case 7:
//     console.log('Saturday');
//     break;

//     default:
//         console.log('Такого дня не существует)');
//         break;
// }




//Задание 4
/*
Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
*/
// let pervoeChislo = prompt('Введите первое число')
// let vtoroeChislo = prompt('Введите второе число')

// let max = (pervoeChislo>vtoroeChislo)? true: false;

// if  (max){
//     console.log(pervoeChislo)
// }else{
//     console.log(vtoroeChislo)
// }


//Задание 5
/*
Найти максимальное из двух чисел. Учтите вариант равенства чисел
 */
// let a=5,b=5;

// let maxOrEquel = (a===b)? console.log(`a and b are equel`)
// : (a>b) ? console.log(`The bigger is a=${a}`):console.log(`The bigger is b=${b}`)




//Задание 6

/*
В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.
*/

// let numberFlat = prompt ('Введите номер квартиры')

// let whatP = numberFlat>=1 && numberFlat<=20 ? console.log(`Первый подьезд`)
// :numberFlat>=21 && numberFlat<=48 ? console.log('Второй подьезд')
// :numberFlat>=49 && numberFlat<=90 ? console.log('Третий подьезд'):console.log('Не в этом доме;)')



//Задание 7
/*
Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже,
то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
 */
// let login = prompt('введите логин')

// let password = prompt('Введите пароль')

// let correctLogin =
// (login==='alex')&&(password==='777')
// ||(login ==='ivan')&&(password==='334455')
// ||(login ==='petr')&&(password==='b5678')
// ? console.log(`Добро пожаловать ${login}`) : console.log('Ошибка входа');


//Задание 8
/*
Пользователь вводит год рождения. Программа показывает количество лет и если
лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».
 */
// function whatAge(age){
//     age = age|| prompt('Введите возраст')

//     let correctAge = age>=16? console.log(`Добро пожаловать`): console.log('Вход воспрещен')

// }
// whatAge(18);
// //or
// whatAge();

//Задание 9
/*
Создайте программу, которая выводит надбавку за стаж.
Пользователь вводит стаж работы, а программа пишет ему надбавку.
 */
// let workYears = prompt('Введите ваш стаж работы')

// let plusMoney = workYears>=0 && workYears<3 ? console.log(`Ваша надбавка 0%`)
// :workYears>=3 && workYears<10 ? console.log(`Ваша надбавка 10%`)
// :workYears>=10 && workYears<20 ? console.log(`Ваша надбавка 20%`)
// :workYears>=20 ? console.log(`Ваша надбавка 30%`): console.log('Ошибка ввода стажа')



//Задание 10
/*
Написать программу которая будет склонять слово “товар” в зависимости от
количества товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.
 */
// let slovo = 'товар';
//
// let howManyTovarov = prompt('Сколько у вас товаров');
//
// function changer(count){
//     if(count<0){
//         console.log(`Товаров нет`);
//     }else {
//         let counter = count%100;
//         if  (counter === 0 || counter>=5 && counter<=20){
//             console.log(`У вас ${count} ${slovo+'ов'}`)
//         }else{
//             counter = counter%10;
//             if(counter === 1){
//                 console.log(`У вас ${count} ${slovo}`)
//             }else if(counter> 1 && counter<=4){
//                 console.log(`У вас ${count} ${slovo+'a'}`)
//             }else{
//                 console.log(`У вас ${count} ${slovo+'ов'}`)
//             }
//         }
//     }
// }
// changer(howManyTovarov);





