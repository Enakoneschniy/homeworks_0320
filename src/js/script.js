(async ()=> {
    'use strick';
    //DOM section
    let  users =  await ajax('http://localhost:8080/users')
    let tbody=document.getElementById('tbody');
    let direction='asc';
    let addBtn =document.querySelector('.add-user');
    let newUserForm = document.querySelector('.add-user-form');
    let addModalForm= document.getElementById('add-modal');
    let modalConteiner =document.querySelector('.modal-conteiner');
    let saveBtn =document.querySelector('.save');
    let validForm = document.getElementsByTagName('input');
    tbody.innerHTML=getRenderedUsers(users);

    //ENDof DOM section

    //Add new user
    let spanForm = document.querySelector('.close-form');
    newUserForm.addEventListener('submit',async (e)=>{
        e.preventDefault();
        const data = getFormData(e.target);
        const user =await createUser(data);
        users.push(user);
        tbody.innerHTML=getRenderedUsers(users);
        addModalForm.style.display="none";
    });
    addBtn.addEventListener('click',()=>{
        addModalForm.style.display="block";
    });
    spanForm.addEventListener('click',()=>{
        addModalForm.style.display="none";
    });
    window.addEventListener('click',(event)=>{
        if (event.target===addModalForm)
        addModalForm.style.display="none";
    });



    //ENDof Add new user

    //Click on TR
    let modal = document.getElementById('myModal');
    let span = document.querySelector('.close');

    tbody.addEventListener('click',async (event)=>{
        let parent = event.target;
        if (parent.classList.contains('myBtn')){
            const userId =+parent.getAttribute('data-usid');
            const user = users.find(user =>user.id === userId);
            modal.style.display='block';
            modalConteiner.innerHTML=getRenderedUsers1(user)

            //Remove User
        }else if (parent.classList.contains('remove')){

            const userId =+ parent.getAttribute('data-usid')
            const userIndex =users.findIndex(user=>user.id===userId)
            let okForRemove= confirm(`Are you sure to remove this user???`);
            if (okForRemove){
                if(userIndex!==-1){
                    await removeUser(userId)
                    users.splice(userIndex,1)
                    tbody.innerHTML=getRenderedUsers(users);
                }
            }
        }
        //ENDof Remove User
    });
    span.onclick=function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    //ENDof Click on TR

    //Sortirovka buttons
    document.getElementById('galka1')
        .addEventListener('click',()=>{
            document.querySelector('.name').classList.toggle('verh')
            users = sortBy(users,'name',direction);
            direction=direction==='asc'?'desc':'asc';
            tbody.innerHTML=getRenderedUsers(users);
        })
    document.getElementById('galka2')
        .addEventListener('click',()=>{
            document.querySelector('.nickname').classList.toggle('verh')
            users = sortBy(users,'username',direction);
            direction=direction==='asc'?'desc':'asc';
            tbody.innerHTML=getRenderedUsers(users);
        })
    document.getElementById('galka3')
        .addEventListener('click',()=>{
            document.querySelector('.email').classList.toggle('verh')
            users = sortBy(users,'email',direction);
            direction=direction==='asc'?'desc':'asc';
            tbody.innerHTML=getRenderedUsers(users);
        })
    document.getElementById('galka4')
        .addEventListener('click',()=>{
            document.querySelector('.website').classList.toggle('verh')
            users = sortBy(users,'website',direction);
            direction=direction==='asc'?'desc':'asc';
            tbody.innerHTML=getRenderedUsers(users);
        })
    //ENDof Sortirovka buttons


    async function ajax(url, options={}) {
        return (await fetch(url,options)).json()
    }
    async function removeUser(id) {
        await fetch(`http://localhost:8080/users/${id}`,{
            method: 'DELETE'
        })
    }
    function getRenderedUsers(users) {
        return users.reduce((html,user)=>html+`
<tr>
<td class="myBtn" data-usid="${user.id}">${user.name}</td>
<td class="myBtn" data-usid="${user.id}">${user.username}</td>
<td class="myBtn" data-usid="${user.id}">${user.email}</td>
<td class="myBtn" data-usid="${user.id}">${user.website}</td>
<td ><button class="remove" data-usid="${user.id}">Remove</button></td>
</tr>`,'')
    }
    function getRenderedUsers1(user) {
        return `
<p>${user.address.street}</p>  
<p>${user.address.city}</p>  
<p>${user.address.zipcode}</p>  
`
    }
    async function createUser(user) {
    return (await fetch('http://localhost:8080/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)

    })).json()
    }
    function getFormData(form) {
    const formData =Array.from(new FormData(form));
    const resObject={}
    formData.forEach(item =>{
        if (item[0].indexOf('.')===-1){
            resObject[item[0]]=item[1];
        }else {
            const propertys =item[0].split('.');
            resObject[propertys[0]]={
                [propertys[1]]:item[1]
            }
        }
    })
       return  resObject;
    }
    function sortBy(users, property, direction) {
        return users.sort((userA,userB)=>{
            if (userA[property]>userB[property]){
                return direction==='asc'?1:-1;
            }else if (userA[property]<userB[property]){
                return direction==='asc'?-1:1;
            }
        })
    }

})();



