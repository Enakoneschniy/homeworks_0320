
//При помощи prompt запросить у пользователя номер дня недели. Вывести при помощи alert название дня недели. если пользователь ввел некорректное значение вывести сообщение "Такого дня недели не существует!"


let x = parseFloat(prompt('Введите номер дня недели:', "" ));

switch (x) {
    case 1:
        alert('понедельник')
        break;
    case 2:
        alert('вторник')
        break;
    case 3:
        alert('среда')
        break;
    case 4:
        alert('четверг')
        break;
    case 5:
        alert('пятница')
        break;
    case 6:
        alert('суббота')
        break;
    case 7:
        alert('воскресение')
        break;
    default:
        alert('нету таких дней');
}
