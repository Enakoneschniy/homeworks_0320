//  валидацую ввода, что бы новых ползователь не воддило
(async () => {
    'use strict'

    //DOM
    const tableBody = document.querySelector('.table-body')
    const addBtn = document.querySelector('.add-user')
    const newUserForm = document.querySelector('.add-user-form')
    //DOM

    // DATA SECTION
    //converting value json to variable
    let users = await getUsers()
    // DATA SECTION

    //EVANT SECTION

    // submit form data using ajax
    newUserForm.addEventListener('submit', async (e) => { 

      const name = document.getElementById('name')
      const username = document.getElementById('username')
      const email = document.getElementById('email')
      const street = document.getElementById('street')
      const suite = document.getElementById('suite')
      const city = document.getElementById('city')
      const zipcode = document.getElementById('zipcode')
      const phone = document.getElementById('phone')
      const website = document.getElementById('website')
      const companyName = document.getElementById('companyName')
      const catchPhrase = document.getElementById('catchPhrase')

      const reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      
      if(name.value ==='' || name.value === null){
        alert('Введите имя')
        e.preventDefault()
        showModal('#add-modal')

      } else if(username.value ==='' || username.value === null){
          alert('Пользовательское имя не введено')
          e.preventDefault()
          showModal('#add-modal')

      } else if(email.value ==='' || email.value === null){
          alert('Введите свой почтовый ящик')
          e.preventDefault()
          showModal('#add-modal')

      } else if(!reg.test(email.value)){
          alert('Не коректный ввод почты')
          e.preventDefault()
          showModal('#add-modal')

      } else if(street.value ==='' || street.value === null){
          alert('Введите свою улицу')
          e.preventDefault()
          showModal('#add-modal')

      } else if(suite.value ==='' || suite.value === null){
          alert('Введите свой адресс')
          e.preventDefault()
          showModal('#add-modal')

      } else if(city.value ==='' || city.value === null){
          alert('Введите свой город')
          e.preventDefault()
          showModal('#add-modal')

      } else if(zipcode.value ==='' || zipcode.value === null){
          alert('Введите свой zipcode')
          e.preventDefault()
          showModal('#add-modal')

      } else if(phone.value ==='' || phone.value === null){
          alert('Введите свой phone')
          e.preventDefault()
          showModal('#add-modal')

      } else if(website.value ==='' || website.value === null){
          alert('Введите свой website')
          e.preventDefault()
          showModal('#add-modal')

      } else if(companyName.value ==='' || companyName.value === null){
          alert('Введите свой Сompany Name')
          e.preventDefault()
          showModal('#add-modal')

      } else if(catchPhrase.value ==='' || catchPhrase.value === null){
          alert('Введите свой Сatch Phrase')
          e.preventDefault()
          showModal('#add-modal')

      } else {
        e.preventDefault()
        const data = getFormData(e.target)
        const user = await createUser(data)
        users.push(user)
        tableBody.innerHTML = getRenderedTableBody(users)}
        
      })

    
    // modal window call add user
    addBtn.addEventListener('click', () => {
        showModal('#add-modal')
      })
    // modal window call info
    tableBody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('user-name')) {
          const userId = +e.target.getAttribute('data-uid')
          const user = users.find(user => user.id === userId)
          showModal('#info-modal', getRenderedModalBody(user))
        //    and delete users
       } else if (e.target.classList.contains('remove-btn')) {
        const userId = +e.target.getAttribute('data-uid')
        const userIndex = users.findIndex(user => user.id === userId)
        const ask = confirm('Delete exactly?')
        if (ask){
            if (userIndex !== -1) {
                await removeUser(userId)
                users.splice(userIndex, 1)
                tableBody.innerHTML = getRenderedTableBody(users)
        }
        }
      }
    })
    //EVANT SECTION

    //MAIN SECTION
    tableBody.innerHTML = getRenderedTableBody(users)
    //MAIN SECTION

    // call users from json
    async function getUsers () {
        return (await fetch('http://localhost:3004/users')).json()
      }
    // sending to the server a request to delete the user
    async function removeUser (id) {
        await fetch(`http://localhost:3004/users/${id}`, {
          method: 'DELETE'
        })
    }
    // extract json file in html
    function getRenderedTableBody (users) {
        return users.reduce((html, { id, name, username, email, website }) => html + `
        <tr>
            <td data-uid="${id}" class="user-name">${name}</td>
            <td data-uid="${id}" class="user-name">${username}</td>
            <td data-uid="${id}" class="user-name">${email}</td>
            <td data-uid="${id}" class="user-name">${website}</td>
            <td>
              <button data-uid="${id}" class="remove-btn">Remove</button>
            </td>
        </tr>`, '')
      }

    // extract json file in html to modal window
    function getRenderedModalBody (user) {
        return `
          <div class = 'modal-window-title'>
            <strong>Info window</strong>
            <strong class = 'close'>&times;</strong>
          </div>
          <div class = 'modal-window-body'>
            <div class = 'modal-window_item'>
              <strong>Name:</strong> ${user.name}
            </div>
            <div modal-window_item>
              <strong>Username:</strong> ${user.username}
            </div>
            <div class = 'modal-window_item'>
              <strong>Email:</strong> ${user.email}
            </div>
            <div class = 'modal-window_item'>
            <strong>Address (Street,Suite,City,Zipcode):</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
            </div>
            <div class = 'modal-window_item'>
              <strong>Website:</strong> ${user.website}
            </div>
            <div class = 'modal-window_item'>
              <strong>Phone:</strong> ${user.phone}
            </div>
            <div class = 'modal-window_item'>
              <strong>Company Name:</strong> ${user.company.name}
            </div>
            <div class = 'modal-window_item'>
              <strong>Company Catch Phrase:</strong> ${user.company.catchPhrase}
            </div> 
          </div>
        `
    }
    // 

    async function createUser(user) {
      return (await fetch('http://localhost:3004/users', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })).json()
 }

  

// распознавание формы и его данных в массив для ввода И 
// нужно переделать условный оператор для нормального добавления пользователей
function getFormData (form) {
  const formData = Array.from(new FormData(form))
  const resObject = {}
  formData.forEach(item => {
    if(item[0].indexOf('.') === -1) {
      resObject[item[0]] = item[1]
    } else {
      const props = item[0].split('.')
      if(!resObject.hasOwnProperty(props[0])) {
        resObject[props[0]] = {
          [props[1]]: item[1]
        }
      } else {
        resObject[props[0]][props[1]] = item[1]
      }
    }
  })
  return resObject
}
  
      //modal window
    function showModal(container, content){
        // added modal window
        const modal = document.querySelector(container)
        modal.style.display = 'block'
        // drawing value and checking that the content is not empty
        const modalBody = modal.querySelector('.modal-body')
        if(!!content){modalBody.innerHTML = content}
        //modal window size
        const modalWidth = modal.offsetWidth / 2;
        const modalHeight = modal.offsetHeight / 2;
        modal.style.left = `calc(50vw - ${modalWidth}px)`
        modal.style.top = `calc(50vh - ${modalHeight}px)`
        // added overlay(dark background)
        const overlay = document.createElement('div')
        overlay.classList.add('overlay')
        document.body.appendChild(overlay)
        // closing the field by clicking on owerlay
        overlay.addEventListener('click',() => {
            modal.style.display = 'none'
            overlay.remove()
        })
        // closing modal window after click on botton save
        const closeAfterSave = document.querySelector('.save')
        closeAfterSave.addEventListener('click', () => {
          modal.style.display = 'none'
          overlay.remove()
        })
        //botton close
        const closeBotton = document.querySelector('.close')
        closeBotton.addEventListener('click', () => {
          modal.style.display = 'none'
          overlay.remove()
        })
    }
    
  // сортировка
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
   // сортировка по имени
    document.getElementById("sort-by-name")
       .addEventListener("click", () => {
          document.querySelector(".name-arrow").classList.toggle("down");
          users = sortBy(users, "name", direction);
          tableBody.innerHTML = getRenderedTableBody(users)
          direction = direction === "asc" ? "desc" : "asc";
       });
       // сортировка по юзеримени 
    document.getElementById("sort-by-username")
       .addEventListener("click", () => {
          document.querySelector(".username-arrow").classList.toggle("down");
          users = sortBy(users, "username", direction);
          tableBody.innerHTML = getRenderedTableBody(users)
          direction = direction === "asc" ? "desc" : "asc";
       });
       // сортировка по емейл
    document.getElementById("sort-by-email")
       .addEventListener("click", () => {
          document.querySelector(".email-arrow").classList.toggle("down");
          users = sortBy(users, "email", direction);
          tableBody.innerHTML = getRenderedTableBody(users)
          direction = direction === "asc" ? "desc" : "asc";
       });
       // сортировка по вебсайту
    document.getElementById("sort-by-website")
       .addEventListener("click", () => {
          document.querySelector(".website-arrow").classList.toggle("down");
          users = sortBy(users, "website", direction);
          tableBody.innerHTML = getRenderedTableBody(users)
          direction = direction === "asc" ? "desc" : "asc";
       }); 
    
})();