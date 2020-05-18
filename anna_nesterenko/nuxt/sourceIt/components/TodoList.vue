<template>
  <div>
    <h1> Todo List({{ list.length }})</h1>
  <ul class="todo-list">
<todo-item v-for="item of list" :key="item.id" :todo="item"/>
  </ul>
  </div>

</template>

<script>

import TodoItem from './TodoItem'

export default {
  components: { TodoItem },
  name: 'TodoList',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => {
        return ([])
      }
    }
  }
}
</script>

<style lang="sass">
  .todo-list
    width: 50%
    list-style: none
    color: white
    background: darkkhaki
</style>
