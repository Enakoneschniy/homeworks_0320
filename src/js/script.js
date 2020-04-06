//Задание 12
/*
Написать программу эмулирующую работу кофейного автомата
 */
// Коффемашина:

let conteiner = document.getElementsByTagName('button');
let personMoney,cashBack=0, correctMoney=0,needToadd=0;
let instraction=document.getElementById('instraction');
let timer =document.getElementById('timer');
let newP=document.createElement('p');
let newT=document.createElement('p');
let newPcash = document.createElement('p');
timer.appendChild(newT);
instraction.appendChild(newP);
timer.appendChild(newPcash);
let latteCost=10, capuchinoCost=9, glyaseCost=7,espressoCost=6,americano=3,irishcremaCost=11,mokkaCost=12,greenteaCost=2;
function firstEntrance(){
    let question = confirm(`Hey there I'm coffee machine\nPress OK and let's drink some coffee;D`);

    if  (!!question){
        toAddInstraction('Please choose one of the bellow');
        toAddActive();
    }else{
        let timer= setInterval(()=>{
            alert(`See you next time`);

            clearInterval(timer);
            firstEntrance();
        },300);
    }

}
firstEntrance();

document.getElementById('latte').onclick = function(){
    needToadd = latteCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{

        let question2 = confirm(`Latte is the best coffee that i can make!!!=)\nIt cost ${latteCost}$\nPress OK and follow instruction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${latteCost}$\nI take only 1,2,5,10,20$`));
            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300)
            }else{
                one(personMoney, latteCost);

                toAddInstraction(`Wait for your coffee`);
                let coffeTimer =4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML= coffeTimer;

                let coffeReady = setInterval(()=>{
                    coffeTimer--;
                    newT.innerHTML= coffeTimer;
                    if  (coffeTimer===0){
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                },1000);
                setTimeout(()=>{
                    toAddInstraction(`Please take your money!`);
                    setTimeout(()=>{
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0){
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id='aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick=function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(()=>{
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(()=>{
                                        newP.classList.remove('active');
                                        setTimeout(()=>{
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        },100)

                                    },3000)
                                },600)
                            }
                        }else{
                            setTimeout(()=>{
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(()=>{
                                    newP.classList.remove('active');
                                    setTimeout(()=>{
                                        firstEntrance();
                                    },100)

                                },3000)
                            },3000)
                        }

                    },3000);

                },7000)

            }
        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('capuchino').onclick = function(){
    needToadd = capuchinoCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Capuchino is the best coffee that i can make!!!=)\nIt cost ${capuchinoCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${capuchinoCost}$\nI take only 1,2,5,10,20,50$`));
            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300)
            }else {
                one(personMoney, capuchinoCost);

                toAddInstraction(`Wait for your coffee`);
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)

                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)
            }


        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('glyase').onclick = function(){
    needToadd = glyaseCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Glyase is the best coffee that i can make!!!=)\nIt cost ${glyaseCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${glyaseCost}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {
                one(personMoney, glyaseCost);

                toAddInstraction(`Wait for your coffee`);
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('espresso').onclick = function(){
    needToadd=espressoCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Espresso is the best coffee that i can make!!!=)\nIt cost ${espressoCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${espressoCost}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300);
            }else {
                one(personMoney, espressoCost);

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000);
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('americano').onclick = function(){
    needToadd=americano;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Americano is the best coffee that i can make!!!=)\nIt cost ${americano}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${americano}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                one(personMoney, americano);

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)

                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('irish-crema').onclick = function(){
    needToadd=irishcremaCost
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Irish-crema is the best coffee that i can make!!!=)\nIt cost ${irishcremaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${irishcremaCost}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                one(personMoney, irishcremaCost);

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('mokka').onclick = function(){
    needToadd=mokkaCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Mokka is the best coffee that i can make!!!=)\nIt cost ${mokkaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${mokkaCost}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                one(personMoney, mokkaCost);

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)

                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('green_tea').onclick = function(){
    needToadd=greenteaCost;
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Green tea is the best coffee that i can make!!!=)\nIt cost ${greenteaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${greenteaCost}$\nI take only 1,2,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                one(personMoney, greenteaCost);

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)

                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = cashBack;
                        if (cashBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                buttonAccept.classList.remove('active');
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 600)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};


function toAddInstraction(text){
    newP.classList.add('active');
    newP.innerHTML=text;
}

function toAddActive(){
    for(let i=0;i<conteiner.length;i++){
        conteiner[i].classList.add('active');
    }
}

function toRemoveActive(){
    for(let i=0;i<conteiner.length;i++){
        conteiner[i].classList.remove('active');
    }
}

function one (personMoney,coffeCost) {
    correctMoney= checker(personMoney);
    if (correctMoney<coffeCost){
        needToadd=coffeCost-correctMoney;
        personMoney= parseFloat(prompt(`Внесите еще ${needToadd}`));
        one(personMoney,needToadd);
    }else if (correctMoney>=coffeCost){

        if (correctMoney===coffeCost){
            return cashBack;
        }else if (correctMoney>coffeCost){
            cashBack=correctMoney-coffeCost;
            return   cashBack;
        }
    }
}
function checker(personMoney){
    if  ((personMoney===1)||(personMoney===2)||(personMoney===5)||(personMoney===10)||(personMoney===20)){
        return personMoney;
    }else if(personMoney){
        personMoney=parseFloat (prompt(`Такие купюры не принимаются\nВам нужно внести ${needToadd}\nПопробуйте снова\nПринимаются купюры наминалом только\n
1,2,5,10,20`));
        return  checker(personMoney);
    }
}