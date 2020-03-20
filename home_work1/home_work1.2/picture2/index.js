// график y=x y=-x

let x, y, mess1, mess2;

x = parseFloat(prompt('Введите координатное число по оси Х:', "" ));
y = parseFloat(prompt('Введите координатное число по оси Y:',""));
mess1 = 'Данное значение не входит в интервал функции';
mess2 = 'Данное число входит в интервал функции';

if (y >=1 && y <=-1){
    alert(mess1)
}
if (x >= -1 && x <= 1){
    if (Math.abs(y) >= Math.abs(x)){
        alert(mess2)
    } else {
        alert(mess1)
    }
}else{
    alert(mess1)
}
