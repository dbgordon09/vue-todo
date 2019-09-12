<template>
  <div class="flex items-center todo__list_item p-2">
    <input type="checkbox" :checked="task.done" @change="toggle(task)">
    <span :class="{ done: task.done }" class="p-2 flex-1">{{ task.text }}</span>
    <img src="../assets/images/todo-remove.svg" alt="Remove Task" class="todo__remove invisible" @click="remove(task)">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }

  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove'
    })
  }
}
</script>

<style scoped>
.todo__list_item:hover {
  background-color: rgba(0, 0, 0, 0.075);
  transition: background-color 150ms ease-in;
}

.todo__list_item:hover .todo__remove {
  visibility: visible;
}

.done {
  text-decoration: line-through;
}
</style>
