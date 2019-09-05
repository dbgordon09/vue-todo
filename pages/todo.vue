<template>
  <div class="container">
    <ul>
      <div class="todo__list_item">
        <li v-for="(todo, index) in todos" :key="index" class="flex items-center">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span :class="{ done: todo.done }" class="p-2 flex-1">{{ todo.text }}</span>
          <img src="../assets/todo-remove.svg" alt="Remove ToDo" class="todo__remove invisible p-1" @click="remove(todo)">
        </li>
      </div>
      <li><input placeholder="What needs to be done?" class="pt-2" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove'
    })
  }
}
</script>

<style>
.todo__list_item :hover .todo__remove{
  visibility: visible;
}

.done {
  text-decoration: line-through;
}
</style>
