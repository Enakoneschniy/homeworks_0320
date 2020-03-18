/*task 1
Задача (Система уравнений)
*/
function solveSystemEquation(a, b) {
  let x;

  if (a > b) {
    x = a + b/2 * 4;
  } else if (a == b) {
    x = 400;
  } else {
    x = a - b + 2/b * 4;
  }
  return x;
}


/*task 2
При помощи prompt запросить у пользователя координату 
по оси x и координату по оси y. Далее определить попадает 
ли точка с этими координатими в заштрисованную область. 
Если попадает, то вывести сообщение "Точка попадает в область" 
если нет то "Точка НЕ попадает в область" У вас есть 3 разных картинки 
- это три разных задания! Для тех кто хочет сделать больше, то можете 
попробовать решить задачи при помощи функций. для каждой картинки своя функция.
*/

// один треугольник

function fallPointTriangle() {

  let x = +prompt('введите координату по оси х');
  let y = +prompt('введите координату по оси y');
  let point;

  if(!(isNaN(x)) && !(isNaN(y))) {

    // координаты точек вершин треугольника:
    let x1 = -4;
    let x2 = 0;
    let x3 = 4;
    let y1 = 0;
    let y2 = 3;
    let y3 = 0;

    //уравнения прямых:
    let a = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
    let b = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
    let c = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);

    if(a >= 0 && b >= 0 && c >= 0 || a <= 0 && b <= 0 && c <= 0) {
      point = 'точка попадает в область';
    } else {
      point = 'точка НЕ попадает в область'
    }
  } else {
    point = 'одно из значений введено некорректно!'
  }
  return point;
}


// два треугольника

function fallPointTriangles() {
  let x = +prompt('введите координату по оси х');
  let y = +prompt('введите координату по оси y');
  let point;

  if(y > 0) {
    let x1 = -1, x2 = 0, x3 = 1, y1 = 1, y2 = 0, y3 = 1;
    let a = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
    let b = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
    let c = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);
    if(a >= 0 && b >= 0 && c >= 0 || a <= 0 && b <= 0 && c <= 0) {
      point = 'точка попадает в область';
    } else {
      point = 'точка НЕ попадает в область'
    }
  } else {
    let x1 = -1, x2 = 0, x3 = 1, y1 = -1, y2 = 0, y3 = -1;
    let a = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
    let b = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
    let c = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);
    if(a >= 0 && b >= 0 && c >= 0 || a <= 0 && b <= 0 && c <= 0) {
      point = 'точка попадает в область';
    } else {
      point = 'точка НЕ попадает в область'
    }
  }
  return point;
}


//треугольник и окружность

function fallPointTriangleСircle() {

  let x = +prompt('введите координату по оси х');
  let y = +prompt('введите координату по оси y');
  let x1 = -2, x2 = 0, x3 = 0, y1 = 0, y2 = 0, y3 = -2;
  let a = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
  let b = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
  let c = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);
  let R = 1;
  let point;

  if(a >= 0 && b >= 0 && c >= 0 || a <= 0 && b <= 0 && c <= 0) {
    point = 'точка попадает в область';
  } else if(Math.sqrt(y) < R) {
    point = 'точка попадает в область';
  } else {
     point = 'точка НЕ попадает в область'
  }
  return point;
}


/*task 3
При помощи prompt запросить у пользователя номер дня недели. 
Вывести при помощи alert название дня недели. если пользователь 
ввел некорректное значение вывести сообщение "Такого дня недели не существует!"
*/

function showDayOfWeek() {
  let a = +prompt('введите номер дня недели');
  let nWeek;
  
  switch(a) {
    case 0:
      nWeek = 'Понедельник';
      break;
    case 1:
      nWeek = 'Вторник';
      break;
    case 2:
      nWeek = 'Среда';
      break;
    case 3:
      nWeek = 'Четверг';
      break;
    case 4:
      nWeek = 'Пятница';
      break;
    case 5:
      nWeek = 'Суббота';
      break;
    case 6:
      nWeek = 'Воскресенье';
      break;
    default:
      nWeek = 'Такого дня недели не существует';
  }
  return nWeek;
};



/*task 4 and task 5
Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
и
Найти максимальное из двух чисел. Учтите вариант равенства чисел
*/

function maxNumber() {
  let n1 = +prompt('введите первое число');
  let n2 = +prompt('введите второе число');
  let maxN;

  if (!(isNaN(n1)) && !(isNaN(n2))) {
    if (n1 === n2) {
      maxN = 'оба числа равны';
    } else if (n1 > n2) {
      maxN = n1;
    } else {
      maxN = n2;
    }
  } else {
    maxN = 'одно из введенных значений не является числом'
  }
  
  return maxN;
}

 /*task 6
 В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. 
 В третьем с 49 по 90. Пользователь вводит номер квартиры. 
 Программа должна указать в каком подъезде находится данная квартира. 
 Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.
 */

 function findNumberEntrance() {

  let num = +prompt('введите номер квартиры');
  let numEntr;

  if (num >= 1 && num <= 90) {
    if (num <= 20) {
      numEntr = 'квартира находится в первом подъезде';
    } else if (num <= 48) {
      numEntr = 'квартира находится во втором подъезде';
    } else {
      numEntr = 'квартира находится в третьем подъезде';
    }
  } else {
    numEntr = 'квартира c таким номером отсутствует';
  }
  return numEntr;
 }


/*task 7
Пользователь вводит логин и пароль. 
Если логин и пароль совпадают с указанными ниже, 
то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
*/

function checkData() {
  let login = prompt('введите логин');
  let password = prompt('введите пароль');
  let enter;

  if (login == 'ivan' && password == '334455') {
    enter = 'Добро пожаловать';
  } else if (login == 'alex' && password == '777') {
    enter = 'Добро пожаловать';

  } else if (login == 'petr' && password == 'b5678') {
    enter = 'Добро пожаловать';
  } else {
    enter = 'Ошибка входа';
  }

  return enter;
}


/*task 8
  Пользователь вводит год рождения. Программа показывает 
  количество лет и если лет больше или равно 16, 
  то пишет – «добро пожаловать», если нет – «вход воспрещен».
*/
function checkAge() {

  let yearBirth = prompt('введите свой год рождения состоящий из 4-х чисел');
  let lengthYear = yearBirth.length;
  let date = new Date();
  let yearNow = date.getFullYear();
  let age = yearNow - yearBirth;
  let enter;

  if(!(isNaN(age)) && lengthYear == 4) {
    if(age >= 16) {
      enter = 'добро пожаловать';
    } else {
      enter = 'вход воспрещен';
    }
  } else {
    enter = 'год рождения введен некорректно';
  }
  return enter;
}


/*task 9
  Создайте программу, которая выводит надбавку за стаж. 
  Пользователь вводит стаж работы, а программа пишет ему надбавку. 
*/
function getPremium() {
  let experience = +prompt('введите свой стаж работы');
  let premium;

  if(!(isNaN(experience)) && experience >= 0) {
    if(experience < 3) {
      premium = 'ваша надбавка составляет 0%';
    } 
    else if (experience < 10) {
      premium = 'ваша надбавка составляет 10%';
    }
    else if (experience < 20) {
      premium = 'ваша надбавка составляет 20%';
    } 
    else {
      premium = 'ваша надбавка составляет 25%';
    }
  } 
  else {
    premium = 'введен некорректный стаж работы'
  }

  return premium;
}


/*task 10
  Написать программу которая будет склонять слово “товар” 
  в зависимости от количества товаров в корзине. 
  Например 1 - товар, 4 - товара, 6 - товаров.
*/
function showEndingWord(n, word) {
  // return word[(((num % 100 > 10) && (num % 100 < 15)) || num % 10 > 4 || num % 10 == 0)? 2 : (num % 10 == 1)? 0 : 1]; 
  n = n % 100;
  n1 = n % 10;
  if (n > 10 && n < 20 || n1 > 4 || n1 == 0) {
    word = word[2];
  }else if (n1 > 1 && n1 < 5) {
    word = word[1];
  } else {
    word = word[0]
  }
  return word;
}


/*task 11
Написать программу эмулирующую работу кассира в кисете
*/

function workCashier() {
  let goods = ['пиво', 'сигареты', 'напиток б/а', 'конфеты'];
  let choice = prompt('Выберете товар: ' + goods);
  let text = 'Внесите оплату в размере ';
  let sum;
  let bool;

  switch(choice) {
    case'пиво':
              sum =  30;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'сигареты':
              sum = 50;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'напиток б/а':
              sum = 10;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'конфеты':
              sum = 20;
              text = text + sum + ' грн';
              bool = true;
              break;
    default:
              sum = 'Такого товара нет в наличии';
              bool = false;
  }

  if (choice == 'пиво' || choice == 'сигареты') {
    let year = prompt('Сколько Вам лет?');
    if (year >= 18) {
      let enterSum = prompt(text);
      alert('Заберите Ваш товар!'); 
    } else {
      alert('Вы еще слишком молоды для совершения таких покупок! До свидания!!!');
    }
  } else if (bool == true) {
    enterSum = prompt(text);
    alert('Заберите Ваш товар!');
  } else {
    alert('извините, ' + sum);
  }
}

/*task 12
Написать программу эмулирующую работу кофейного автомата
*/

function workCoffeeMachine() {
  let drink = ['латте','капучино','американо', 'эспрессо', 'чай'];
  let choice = prompt('Выберете напиток: ' + drink);
  let text = 'Внесите оплату в размере ';
  let sum;
  let bool;

  switch(choice) {
    case'латте':
              sum =  20;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'капучино':
              sum = 18;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'американо':
              sum = 10;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'эспрессо':
              sum = 9;
              text = text + sum + ' грн';
              bool = true;
              break;
    case'чай':
              sum = 8;
              text = text + sum + ' грн';
              bool = true;
              break;
    default:
              sum = 'Такого напитка нет в наличии';
              bool = false;
  }

  let enterSum = prompt(text);

  if (enterSum == sum) {
      if (bool) {
        alert('Ваш напиток в процессе приготовления!');
        alert('Заберите Ваш напиток!');
    } else {
    }
  } else if (enterSum > sum){
      alert('Автомат сдачу не выдает, внесите сумму под расчет');
      enterSum;
  } else if (enterSum < sum) {
    alert('Внесенной суммы недостаточно');
    enterSum;
  }
}

