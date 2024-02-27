<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App</h1>
    <input type="text" class="w-100 p-2" placeholder="New ToDos" @keyup.enter="addTodo" v-model="todoText">
    <hr>
    <to-do-item 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @toogle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo" />
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  components: { 
    ToDoItem 
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'Add a todo to get started', checked: false },
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.todoText = '';
    },
    toggleCheckbox({ id, checked }) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1); 
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style>

</style>
