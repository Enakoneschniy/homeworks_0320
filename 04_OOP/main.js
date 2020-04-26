'use strict'

// OOP

// Task 6
/*Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
   С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.*/

class Worker {
    test = 50;

    constructor(options) {
        this.name = options.name
        this.surname = options.surname
        this.rate = options.rate
        this.days = options.days
    }

    getSalary() {
        return this.rate * this.days
    }
}

const worker1 = new Worker({
    name: "Petya",
    surname: "Ivanov",
    rate: 10,
    days: 31
})

const worker2 = new Worker({
    name: "Vasya",
    surname: "Kozlov",
    rate: 15,
    days: 28
})

const sum = worker1.getSalary() + worker2.getSalary();

console.log(worker1.name);
console.log(worker1.getSalary());
console.log(sum);

// Task 7, Task 8

/*Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
*/

class Worker {
   constructor(options) {
       this._name = options.name
       this._surname = options.surname
       this._rate = options.rate
       this._days = options.days
   }

   get name() {
       return this._name;
   }
   get surname() {
       return this._surname;
   }
   get rate() {
       return this._rate;
   }
   get days() {
       return this._days;
   }

   set rate(value) {
       this._rate = value;
   }
   set days(value) {
       this._days = value;
   }
}

const worker1 = new Worker({
   name: "Petya",
   surname: "Ivanov",
   rate: 10,
   days: 31
});

console.log(worker1.name);

// Task 9
/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
   reverse(str) {
       const arr = [];
       for (let i=str.length-1; i>=0; i--) {
           arr.push(str[i]);
       }
       return arr.join('');
   }

   ucFirst(str) {
       const arr = [];
       for (let i=1; i<str.length; i++) {
           arr.push(str[i]);
       }
       return str[0].toUpperCase() + arr.join('');
   }

   ucWords (str) {
       const arr = [];
       for (let i=0; i<str.length; i++) {
           if (i === 0 || str[i-1] === ' ') {
               arr.push(str[i].toUpperCase());
           } else {
               arr.push(str[i]);
           }
       }
       return arr.join('');
   }
}

const str1 = new MyString();
console.log(str1.reverse('Hello my friend'));
console.log(str1.ucFirst('hello my friend'));
console.log(str1.ucWords('hello my friend'));


// Task 10

/*Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).*/

class User {
   constructor(name, surname) {
       this.name = name
       this.surname = surname
   }
   getFullName() {
       return this.name + ' ' + this.surname;
   }
}

class Student extends User {
   constructor(name, surname, year) {
       super(name, surname);
       this.year = year;
   }
   getCourse() {
       const date = new Date().getFullYear() - this.year;
       return (`Course:  ${date}`)
   }
}

const student1 = new Student('Ivan', 'Petrov', 2016);
console.log(student1.getFullName())
console.log(student1.getCourse());

// Task 22

/*
Некая сеть фастфудов предлагает несколько видов гамбургеров:
   маленький (50 тугриков, 20 калорий)
большой (100 тугриков, 40 калорий)
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий) и полить майонезом (+ 20 тугриков, + 5 калорий).
Напиши программу, расчиытвающую стоимость и калорийность гамбургера.
*/

class Gamburger {
    _priceSmallGam = 50
    _calSmallGam = 20

    _priceBigGam = 100
    _calBigGam = 40

    _priceCheese = 10
    _calCheese = 20

    _priceSalad = 20
    _calSalad = 5

    _pricePotatoes = 15
    _calPotatoes = 10

    _priceSeasoning = 15
    _calSeasoning = 0

    _priceMayo = 20
    _calMayo = 5

    constructor (size, additiveFirst, additiveSecond) {
        this.size = size;
        this.additiveFirst = additiveFirst;
        this.additiveSecond = additiveSecond;
    }

    getCostGamburger () {
        const price = this._sizeCost + this._additiveFirstCost + this._additiveSecondCost;
        console.log('Price: ', price)
    }

    getCaloriesGamburger () {
        const calories = this._sizeCalories + this._additiveFirstCalories + this._additiveSecondCalories;
        console.log('Calories: ', calories)
    }

    set size (value) {
        if (value === 'small') {
            this._sizeCost = this._priceSmallGam;
            this._sizeCalories = this._calSmallGam;
        } else if (value === 'big') {
            this._sizeCost = this._priceBigGam;
            this._sizeCalories = this._calBigGam;
        } else {
            throw new Error('Incorrect values. Fill in the field Size');
        }
    }

    set additiveFirst (value) {
        if (value === 'cheese') {
            this._additiveFirstCost = this._priceCheese;
            this._additiveFirstCalories = this._calCheese;
        } else if (value === 'salad') {
            this._additiveFirstCost = this._priceSalad;
            this._additiveFirstCalories = this._calSalad;
        } else if (value === 'potatoes') {
            this._additiveFirstCost = this._pricePotatoes;
            this._additiveFirstCalories = this._calPotatoes;
        } else {
            throw new Error('Incorrect values. Fill in the field Additive-First');
        }
    }

    set additiveSecond (value) {
        if (!value) {
            this._additiveSecondCost = 0;
            this._additiveSecondCalories = 0;
        } else if (value === 'seasoning') {
            this._additiveSecondCost = this._priceSeasoning;
            this._additiveSecondCalories = this._calSeasoning;
        } else if (value === 'mayo') {
            this._additiveSecondCost = this._priceMayo;
            this._additiveSecondCalories = this._calMayo;
        } else {
            throw new Error('Incorrect values. Fill in the field Additive-Second');
        }
    }
}

const bayer = new Gamburger('small', 'cheese', 'mayo');
bayer.getCostGamburger();
bayer.getCaloriesGamburger()
