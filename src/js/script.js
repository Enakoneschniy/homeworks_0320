(async () => {
   'use strict';
   let users = await ajax('http://localhost:8080/users');
   console.log(users);
   const tbody = document.querySelector(".tbody");
   tbody.innerHTML = getRenderedUsers(users);
   showModal(users);

   function getRenderedUsers(users) {
      return users.reduce((html , user) => html + `
         <tr>
            <td data-uid="${user.id}" class="click-user">${user.name}</td>
            <td data-uid="${user.id}" class="click-user">${user.username}</td>
            <td data-uid="${user.id}" class="click-user">${user.email}</td>
            <td data-uid="${user.id}" class="click-user">${user.website}</td>
            <td><button data-uid="${user.id}" class="remove-user">delete</button></td>
         </tr>
      `, '')
   }

   const modalForm = document.getElementById("modal-form");
   const addBtn = document.querySelector(".add-user")
       .addEventListener("click", () => {
           modalForm.style.display = "block";
       });

   const addUserForm = document.querySelector(".add-user-form");
   addUserForm.addEventListener("submit", async (e) => {
       e.preventDefault();
       let data = getDataInput(e.target);
       let user = await createUser(data);
       users.push(user);
       tbody.innerHTML = getRenderedUsers(users);
       modalForm.style.display = "none";
   });

   function getDataInput(form) {
       const formData = Array.from(new FormData(form));
       let resultObject = {};
       formData.forEach(item => {
            if (item[0].indexOf(".") === -1){
                resultObject[item[0]] = item[1];
            }else{
                let prop = item[0].split(".");
                resultObject[prop[0]] = {
                    [prop[1]]: item[1]
                }
            }
       });
       return resultObject;
   }
   async function createUser(user) {
        return (await fetch('http://localhost:8080/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })).json()
   }


   function showModal(users) {
      let clickUsers = document.querySelectorAll(".click-user");
      let modal = document.querySelector(".modal");
      let modalContent = document.querySelector(".modal-content");

      tbody.addEventListener("click",  async (e) => {
            let currentElement = e.target;
            console.log(currentElement);

            if (currentElement.classList.contains("click-user")){
               document.body.appendChild(overlay);
               modal.style.display = "block";
               let userId = +currentElement.getAttribute("data-uid");
               let user = users.find((user) => user.id === userId);
               modalContent.innerHTML = getModalUser(user);

            }else if (currentElement.classList.contains("remove-user")){
               let userId = +currentElement.getAttribute("data-uid");
               let userIndex = users.findIndex((user) => user.id === userId);
               let ask = confirm("Are you sure?!?!?");
               if (ask) {
                  if (userIndex !== -1) {
                     await removeUser(userId);
                     users.splice(userIndex, 1);
                     tbody.innerHTML =  getRenderedUsers(users);
                  }
               }
            }

         });

      async function removeUser(userId) {
               await fetch(`http://localhost:8080/users/${userId}`, {
                  method: "DELETE",
         });
      }

      function getModalUser(user) {
         return `<div>${user.address.street}</div>
                 <div>${user.address.city}</div>
                 <div>${user.address.zipcode}</div>`
      }

      const close = document.querySelector(".close")
          .addEventListener("click", () => {
             modal.style.display = "none";
             overlay.remove();
          });

      let overlay = document.createElement('div');
      overlay.classList.add("overlay");

      overlay.addEventListener("click", () =>  {
         modal.style.display = "none";
         overlay.remove();
      })
   }


   let direction = 'asc'
   function sortBy (users, propertyForSort, direction) {
      return users.sort((userA, userB) => {
         if (userA[propertyForSort] > userB[propertyForSort]){
            return direction === "asc" ? 1 : -1;
         }else if(userA[propertyForSort] < userB[propertyForSort]){
            return direction === "asc" ? -1 : 1;
         }else{
            return 0;
         }
      })
   }
   let sortByName = document.getElementById("sort-by-name")
       .addEventListener("click", () => {
          let arrow  = document.querySelector(".name-arrow").classList.toggle("down");
          users = sortBy(users, "name", direction);
          tbody.innerHTML = getRenderedUsers(users);
          direction = direction === "asc" ? "desc" : "asc";
          showModal(users);
       });
   let sortByUserName = document.getElementById("sort-by-username")
       .addEventListener("click", () => {
          let arrow  = document.querySelector(".username-arrow").classList.toggle("down");
          users = sortBy(users, "username", direction);
          tbody.innerHTML = getRenderedUsers(users);
          direction = direction === "asc" ? "desc" : "asc";
          showModal(users);
       });
   let sortByEmail = document.getElementById("sort-by-email")
       .addEventListener("click", () => {
          let arrow = document.querySelector(".email-arrow").classList.toggle("down");
          users = sortBy(users, "email", direction);
          tbody.innerHTML = getRenderedUsers(users);
          direction = direction === "asc" ? "desc" : "asc";
          showModal(users);
       });
   let sortByWebSite = document.getElementById("sort-by-website")
       .addEventListener("click", () => {
          document.querySelector(".website-arrow").classList.toggle("down");
          users = sortBy(users, "website", direction);
          tbody.innerHTML = getRenderedUsers(users);
          direction = direction === "asc" ? "desc" : "asc";
          showModal(users);
       });
})();

async function ajax (url, options) {
   return (await fetch('http://localhost:8080/users')).json();
}