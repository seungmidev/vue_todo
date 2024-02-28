<template>
  <input 
      type="text" 
      class="w-100 p-2" 
      placeholder="New ToDos" 
      @keyup.enter="addTodo" 
      v-model="todoText">
</template>

<script>
export default {
  data() {
    return {
      todoText: '',
    }
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch('todo/addTodo', e.target.value); // Actions use dispatch() of Actions
      //this.$store.commit('ADD_TODO', e.target.value); // Mutations use commit()
      this.todoText = '';
      //this.$emit('add-todo', e.target.value);
    }
  }
}
</script>

<style>

</style>