// Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
//
let  login, pass;

login = prompt("Введите логин", "")
pass = prompt("Ведите пароль", "")

const pass1 = "334455", pass2 = "777",pass3 = "b5678", login1 ="ivan",login2 ="alex",login3="petr";

if(((login === login1)&&(pass===pass1))||((login===login2)&&(pass===pass2))||((login===login3)&&(pass==pass3))){
    alert("Добро пожаловать!")
}else(
    alert("Ошибка ввода")
)

