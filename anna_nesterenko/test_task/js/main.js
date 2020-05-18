'use strict';

let usersList = [];

const fieldsForTable1 = [
  'id',
  'name',
  'username',
  'email',
  'website',
];

const fieldsForTable2 = [
  'id',
  'number',
  'name',
  'username',
  'email',
  'website',
  'phone',
  'company',
  'address',
  'geo',
];

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log('Users from server: ', users);
  return users;
}

async function start() {
  const users = await getUsers();
  usersList = users;
  fillTable('table_1', users, fieldsForTable1);
  document.querySelector('#table_1').addEventListener('click', handleTablePressed);
  document.querySelector('.overlay').addEventListener('click', hideModal);
}

function fillTable(tableId, users, fields) {
  const table = document.querySelector(`#${tableId}`);
  const tableBody = table.querySelector('tbody');
  tableBody.innerHTML = '';
  users.forEach((user) => {
    const tr = document.createElement('tr');
    let html = '';
    fields.forEach(field => html = html + `<td>${user[field]}</td>`);
    tr.innerHTML = html;
    tr.setAttribute('data-userid', user.id);
    tableBody.appendChild(tr);
  });
}

function handleTablePressed(event) {
  const td = event.target;
  const tr = td.parentElement;
  const userId = tr.dataset.userid;
  const userIdNumber = Number(userId);
  if (userId) {
    showModal(userIdNumber);
  }
}

function showModal(userIdNumber) {
  const modal = document.querySelector('.modal');
  modal.classList.add('visible');
  const usersToShow = usersList.filter(user => user.id === userIdNumber);
  fillTable('table_2', usersToShow, fieldsForTable2);
}

function hideModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('visible');
}

start();
