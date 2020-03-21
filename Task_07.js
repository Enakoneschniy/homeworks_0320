const loginIvan = "Ivan"
const loginAlex = "Alex"
const loginPetya = "Petya"
const passIvan = 334455
const passAlex = 7777
const passPetya = "b5678"

let login
let password

    login = prompt("Введите Login")
    password = prompt("Введите Password")
      
if(loginIvan==login&&passIvan==password||loginAlex==login&&passAlex==password||loginPetya==login&&passPetya==password){
    alert("Добро пожаловать")
}  else alert("Ошибка входа")
