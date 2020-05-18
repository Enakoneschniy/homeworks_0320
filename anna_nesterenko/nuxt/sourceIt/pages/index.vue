<template>
  <div class="container">
    <todo-list :list="todoList"/>
    <p v-if="isHidden">
      {{ text }}
    </p>
    <p v-else>
      {{ text2 }}
    </p>
    <ul>
      <li v-for="(name, index) of names" :key="name" :class="name">
        {{ index }} : {{ name }}
      </li>
    </ul>
    <div>
      <template v-for="user of users">
        <span :key="user.email"> {{ user.name }} </span> - <span :key="user.email"> {{ user.email }}</span>
        <hr :key="user.email">
      </template>
    </div>
  </div>
</template>

<script>

import TodoList from '../components/TodoList'

export default {
  components: { TodoList },
  data: () => ({
    isHidden: true,
    text: 'I\'m visible',
    text2: 'woooouuuuu',
    names: ['Anton', 'Nik', 'Maks'],
    users: [
      {
        name: 'Niki',
        email: '@nik.ru'
      },
      {
        name: 'Prada',
        email: '@prada.ru'
      },
      {
        name: 'Chanel',
        email: '@chanel.ru'
      },
      {
        name: 'Besta',
        email: '@besta.ru'
      }
    ],
    todoList: [
      {
        id: 1,
        title: 'task 1',
        done: true
      },
      {
        id: 2,
        title: 'task 2',
        done: false
      },
      {
        id: 3,
        title: 'task 3',
        done: true
      }
    ]
  })
}
</script>
