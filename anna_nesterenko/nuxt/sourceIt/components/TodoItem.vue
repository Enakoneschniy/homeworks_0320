<template>
  <li class="todo-item">
    <span class="todo-status" :class="{done: todo.done, 'not-done': !todo.done}"/>
    <strong class="todo-title"> {{ todo.title }} </strong>
  </li>

</template>

<script>
export default {
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  .todo-item
    display: flex
    align-items: center
  .todo-title
    margin-left: 10px
  .todo-status
    display: inline-block
    height: 10px
    width: 10px
    border-radius: 50%
    &.done
      background: greenyellow
    &.not-done
      background: orangered
</style>
