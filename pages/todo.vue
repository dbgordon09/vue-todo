<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <Task :task="todo" />
      </li>
      <li><input placeholder="What needs to be done?" class="pt-2" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import Task from '@/components/Task'

export default {
  components: {
    Task
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      if (e.target.value.length > 0) {
        this.$store.commit('todos/add', e.target.value)
      }
      e.target.value = ''
    }
  }
}
</script>
