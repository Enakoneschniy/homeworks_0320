let basket 

if( basket == 1 || basket == 21 || basket == 31 || basket == 41 || basket == 51 || basket == 61 ){
    alert("В корзине " + basket + " товар")
}else if( basket >= 2 && basket <= 4 || basket >=22 && basket <= 24 || basket >=32 && basket <= 34 || basket >=42 && basket <= 44 ) 
    alert("В корзине " + basket + " товара")
}else if( basket >= 5 && basket <=20 || basket >= 25 && basket <= 30 || basket >= 35 && basket <= 40 || basket >= 45 && basket <= 50){
    alert("В корзине " + basket + " товаров")
} 