
//график y=-x+3 y=x+3

let x, y, res1, mess1, mess2;


x = parseFloat(prompt('Введите координатное число по оси Х:', "" ));
y = parseFloat(prompt('Введите координатное число по оси Y:',""));
mess1 = 'Данное значение не входит в интервал функции';
mess2 = 'Данное число входит в интервал функции';

if (y <= 0 && y >=3){
    alert(mess1)
}

if (x >= -3 && x <= 3){
    if (x >= 0) {
        res1 = -x + 3;
        if(res1 >= y){
            alert(mess2)
        } else {
            alert(mess1)
        }
    } else {
        res1 = x + 3;
        if (res1 >=y){
            alert(mess2)
        } else {
            alert(mess1)
        }
    }
}else{
    alert(mess1)
}