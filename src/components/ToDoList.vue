<template>
  <div>
    <to-do-item 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @toogle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo" />
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'

export default {
  components: { 
    ToDoItem,
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    }
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit('toogle-checkbox', value);
    },
    deleteTodo(todoId) {
      this.$emit('click-delete', todoId);
    }
  }
}
</script>

<style>

</style>