fetch('http://localhost:8080/users')
    .then(response=>response.json())
    .then(users =>{
        //users- это массив юзеров
        // console.log(users[0].address.street);
        const tableConteiner=document.getElementById('table_item');
        tableConteiner.innerHTML=getRenderedUsers(users);

        let currentUserIndex;

        let modalContent = document.querySelector('.modal-conteiner');

        modalMaker(users);

        let direction = 'asc'
        let najatayaKnopka=0;
        document.getElementById('galka1').addEventListener('click', ()=>{
            najatayaKnopka=1;
            onClick(najatayaKnopka);
            users = sorterovshik(users,'name',direction);
            direction = direction==='asc'?'desc':'asc';
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })
        document.getElementById('galka2').addEventListener('click', ()=>{
            najatayaKnopka=2;
            onClick(najatayaKnopka);
            users = sorterovshik(users,'username',direction);
            direction = direction==='asc'?'desc':'asc';
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })
        document.getElementById('galka3').addEventListener('click', ()=>{
            najatayaKnopka=3;
            onClick(najatayaKnopka);
            users = sorterovshik(users,'email',direction);
            direction = direction==='asc'?'desc':'asc';
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })
        document.getElementById('galka4').addEventListener('click', ()=>{
            najatayaKnopka=4;
            onClick(najatayaKnopka);
            users = sorterovshik(users,'website',direction);
            direction = direction==='asc'?'desc':'asc';
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })
        /**/

        function addNewUser(){
          return   fetch('http://localhost:8080/users',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "name": "Denis Sokol",
                    "username": "ForTrest",
                    "email": "sokold3@gmail.com",
                    "address": {
                        "street": "Bychmi street",
                        "suite": "Suite 879",
                        "city": "Kharkiv",
                        "zipcode": "61144",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "sokol.com",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                })
            })
                .then(response=>response.json())
        }
        // addNewUser();
        function deleteUser(number){
          return   fetch(`http://localhost:8080/users/${number}`,{
                method: 'DELETE'
             })
        }
        document.getElementById('add').addEventListener('click',()=>{
           addNewUser();
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })
        document.getElementById('delete').addEventListener('click',()=>{
            deleteUser(users.length);
            tableConteiner.innerHTML=getRenderedUsers(users);
            //
            modalMaker(users);
        })

        /**/
        function modalMaker(users) {

            let modal = document.getElementById('myModal');
            let btns = document.querySelectorAll(".myBtn");
            let span = document.getElementsByClassName('close')[0];

            btns.forEach(function (btn) {
                btn.addEventListener('click',(elem)=>{
                    modal.style.display = "block";

                    let currentElement = elem.target.innerHTML;
                    for (let i=0;i<users.length;i++){
                        if (users[i].name===currentElement){
                            modalContent.innerHTML = getRenderedUsers1(users,i);
                        }else if (users[i].username===currentElement){
                            modalContent.innerHTML = getRenderedUsers1(users,i);
                        }else if (users[i].email===currentElement){
                            modalContent.innerHTML = getRenderedUsers1(users,i);
                        }else if (users[i].website===currentElement){
                            modalContent.innerHTML = getRenderedUsers1(users,i);
                        }
                    }
                })
            })
            span.onclick = function(){
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    })

function onClick(najatayaKnopka) {
    let strelkaElement =  document.querySelectorAll('#strelka');
    if (najatayaKnopka===1){
    if (strelkaElement[0].classList.contains('niz')){
        strelkaElement[0].classList.remove('niz');
        strelkaElement[0].classList.add('verh');
    }else {
        strelkaElement[0].classList.remove('verh');
        strelkaElement[0].classList.add('niz');
    }
    }else if(najatayaKnopka===2){
        if (strelkaElement[1].classList.contains('niz')){
            strelkaElement[1].classList.remove('niz');
            strelkaElement[1].classList.add('verh');
        }else {
            strelkaElement[1].classList.remove('verh');
            strelkaElement[1].classList.add('niz');
        }
    }else if(najatayaKnopka===3){
        if (strelkaElement[2].classList.contains('niz')){
            strelkaElement[2].classList.remove('niz');
            strelkaElement[2].classList.add('verh');
        }else {
            strelkaElement[2].classList.remove('verh');
            strelkaElement[2].classList.add('niz');
        }
    }else if(najatayaKnopka===4){
        if (strelkaElement[3].classList.contains('niz')){
            strelkaElement[3].classList.remove('niz');
            strelkaElement[3].classList.add('verh');
        }else {
            strelkaElement[3].classList.remove('verh');
            strelkaElement[3].classList.add('niz');
        }
    }
}

function getRenderedUsers(users) {
    return users.reduce((html, item)=> html +  `<tr class="myBtn">
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.website}</td>
           </tr> `,'' )
}

function getRenderedUsers1(users,number) {
    return `    <p><strong> Street:</strong> ${users[number].address.street}</p>
                <p><strong> City:</strong> ${users[number].address.city}</p>
                <p><strong> Zipcode:</strong> ${users[number].address.zipcode}</p>
            `
}

function sorterovshik(users,properti, direction = 'asc'){
    return  users.sort((userA,userB)=> {
        if(userA[properti]>userB[properti]){
            return direction==='asc'?1:-1;
        }else if (userA[properti]<userB[properti]){
            return direction==='asc'?-1:1;
        }
    });
}


