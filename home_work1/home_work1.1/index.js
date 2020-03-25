//система уравнений

let a, b, res1, let1=400;

a = parseFloat(prompt('Введите первое число:', "" ));
b = parseFloat(prompt('Введите второе число:',""));

if (a>b){
    res1 = a + b / 2 * 4;
    alert(res1)
}else if(a===b){
    res1 = let1;
    alert(res1)
}else {
    res1 = a - b + 2 / b *4;
    alert(res1)
}