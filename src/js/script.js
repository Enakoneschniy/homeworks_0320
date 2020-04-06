//Задание 11
//Кассир в киссете
/*
Написать программу эмулирующую работу кассира в кисете
 */
let cassa=0;
let cesh,zdacha,counter=0,rightCesh;
let somethingElse;
const parlCost = 41.3, mallboroCost = 39.56, camelCost = 35.75, wingstonCost = 38.24;
const chips =27.3, beans= 10, coca_cola =15;

function getAnswer(){
    //work
    let question = prompt(`Чего хотите?\n1- Сигареты \n2- Другое\n0- Извините ошибся`);
    let request1,request2;
    if (+question === 1){
        request1 = prompt(`Какие сигареты хотите?\n1-Parlament\n2-Mallboro\n3-Camel\n4-Wingston\n0-Вернуться назад`);

    }else if (+question===2){
        request2 =prompt(`Что желаете?\n1- Чипсы\n2- Орешки\n3- Кока-колу\n0- Вернуться назад`);
    }else {
        console.log(`Досвидания!!!`);
    }

    switch (+request1) {
        case 0:
            getAnswer();
            break;
        case 1:
            cesh = prompt(`Вы выбрали Parlament, его стоимость ${parlCost}грн\nКакую сумму даете?`);
            while ((cesh < parlCost)|| !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${parlCost}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += parlCost;
            zdacha = +rightCesh - parlCost;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;
        case 2:
            cesh = prompt(`Вы выбрали Mallboro, его стоимость ${mallboroCost}грн\nКакую сумму даете?`);
            while (cesh < mallboroCost || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${mallboroCost}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');
            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += mallboroCost;
            zdacha = +rightCesh - mallboroCost;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;

        case 3:
            cesh = prompt(`Вы выбрали Camel, его стоимость ${camelCost}грн\nКакую сумму даете?`);
            while (cesh < camelCost  || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${camelCost}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += camelCost;
            zdacha = +rightCesh - camelCost;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;
        case 4:
            cesh = prompt(`Вы выбрали Wingston, его стоимость ${wingstonCost}грн\nКакую сумму даете?`);
            while (cesh < wingstonCost  || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${wingstonCost}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += wingstonCost;
            zdacha = +rightCesh -wingstonCost;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;


        default:
            // console.log(`Досвидания!!!!!`);
            break;
    }
    switch (+request2) {
        case 0:
            getAnswer();
            break;
        case 1:
            cesh = prompt(`Вы выбрали Чипсы, их стоимость ${chips}грн\nКакую сумму даете?`);
            while (cesh < chips || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${chips}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += chips;
            zdacha = +rightCesh - chips;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();

            }else {
                console.log(`До свидания`)

            }
            break;

        case 2:
            cesh = prompt(`Вы выбрали Орешки, его стоимость ${beans}грн\nКакую сумму даете?`);
            while (cesh < beans  || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${beans}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += beans;
            zdacha = +rightCesh - beans;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;

        case 3:
            cesh = prompt(`Вы выбрали Кока-колу, его стоимость ${coca_cola}грн\nКакую сумму даете?`);
            while (cesh < coca_cola  || !cesh) {
                cesh = prompt(`Сумма не верна!!!\nНужно ${coca_cola}грн или больше!`);
            }
            rightCesh = cesh.replace(/[^\d\.]/g, '');

            rightCesh.replace(/^0+/, '');
            confirm(`Вы дали ${Math.round(rightCesh*100)/100} грн\n Спасибо!`);
            cassa += coca_cola;
            zdacha = +rightCesh - coca_cola;
            counter++;
            confirm(`Ваша сдача ${Math.round(zdacha*100)/100}`);
            console.log(`Остаток в кассе ${Math.round(cassa*100)/100}`);
            somethingElse = confirm(`Хотите что ни будь еще?`);
            if (somethingElse){
                getAnswer();
            }else {
                console.log(`До свидания`)
            }
            break;

        default:
            // console.log(`Досвидания!!!!!!`);
            break;
    }
}

getAnswer();
if (cassa===0){
    console.log(`Сегодня не заработали:(`);
}else {
    console.log(`Касса за день +${Math.round(cassa*100)/100}`);
    console.log(`Совершено продаж ${counter}`);
}