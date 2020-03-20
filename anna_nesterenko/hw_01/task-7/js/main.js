'use strict';
const LOGIN_IVAN ="ivan";
const PASSWORD_IVAN = "334455";


const LOGIN_ALEX ="alex";
const PASSSWORD_ALEX = "777";

const LOGIN_PETR = "petr";
const PASSWORD_PETR = "b578";

let text = "Добро пожаловать";


let inputLogin = prompt("Введите логин!");
let inputPassword = prompt("Введите пароль!");

if (inputLogin === null || inputPassword === null){
  alert("Надумаете - приходите!")
}

 else if (inputLogin === LOGIN_IVAN && inputPassword === PASSWORD_IVAN) {
   alert(`${text},${inputLogin}!`);
 }

 else if (inputLogin === LOGIN_ALEX && inputPassword === PASSSWORD_ALEX){
   alert(`${text},${inputLogin}!`);
 }
 
 else if (inputLogin === LOGIN_PETR && inputPassword === PASSWORD_PETR){
   alert(`${text},${inputLogin}!`);
 }
 
 else {
   alert("Неверный ввод, пока!");
 }
