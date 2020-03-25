
// график y=-x-2 y^2+x^2=1
let x, y, res1, res2, mess1, mess2;

x = parseFloat(prompt('Введите координатное число по оси Х:', "" ));
y = parseFloat(prompt('Введите координатное число по оси Y:',""));
mess1 = 'Данное значение не входит в интервал функции';
mess2 = 'Данное число входит в интервал функции';

let x1 = x;
let y1 = y;
let y2 = y;
let x2 = x;


if((y1 <= 1 && y1 >= -1) && (x1 <= 1 && x1 >= -1)){
    res1 = x1 * x1 -1;
    if (res1 <= y1){
        res1 = true;
    }
} else {
    res1 = false;
}

if((y2 <= 0 && y2 >= -2) && (x2 <= 0 && x2 >= -2)){
    res2 = - x2 - 2;
    if (res2 <= y2){
        res2 = true;
    }
}else {
    res2 = false;
}


if (res1 || res2){
    alert(mess2)
} else {
    alert(mess1)
}