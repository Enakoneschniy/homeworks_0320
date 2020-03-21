let age
let flgA = 1



while(flgA){
    age = +prompt("Введите ваш год рождения", 0)
     if(isNaN(age)) {
       alert("Должно быть введено число!")
     } else if(age<=1850||age>=2020){
         alert("Что за шутки?")
     } else flgA = 0
    }

    if(age== null){
        alert("Не введены значения")
    } else if((2020-age)>=16){
        alert("Добро пожаловать")
    } else alert("Вход воспрещен")