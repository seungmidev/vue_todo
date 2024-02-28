<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App</h1>
    <completed-to-do />
    <add-to-do />
    <hr>
    <to-do-list />
    <hr>
    <user-list />
  </div>
</template>

<script>
import AddToDo from './components/AddToDo.vue';
import CompletedToDo from './components/CompletedToDo.vue';
import ToDoList from './components/ToDoList.vue';
import UserList from './components/UserList.vue';

export default {
  components: { 
    ToDoList,
    AddToDo,
    CompletedToDo,
    UserList,
  },
  data() {
    return {
      todoText: '',
      // todos: [
      //   { id: 1, text: 'Add a todo to get started', checked: false },
      // ]
    }
  },
  methods: {
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false,
    //   });
    //   this.todoText = '';
    // },
    // toggleCheckbox({ id, checked }) {
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
    // deleteTodo(id) {
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos.splice(index, 1); 
    //   //this.todos = this.todos.filter(todo => todo.id !== id);
    // }
  }
}
</script>

<style>

</style>
