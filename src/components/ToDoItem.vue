<template>
  <div class="mb-2 d-flex">
    <p>
      <input 
        type="checkbox" 
        :checked="todo.checked" 
        @change="toggleCheckbox">
    </p>
    <span 
      class="flex-grow-1" 
      :class="todo.checked ? 'text-muted' : ''" 
      :style="todo.checked ? 'text-decoration: line-through' : ''">
      {{ todo.text }}
    </span>
    <button 
      class="btn btn-danger btn-sm"
      @click="clickDelete"
    >Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleCheckbox(e) {
      this.$store.dispatch('toggleTodo', {
        id: this.todo.id, 
        checked: e.target.checked
      });

      // this.$store.commit('TOGGLE_TODO', {
      //   id: this.todo.id, 
      //   checked: e.target.checked
      // });

      // this.$emit('toogle-checkbox', {
      //   id: this.todo.id,
      //   checked: e.target.checked,
      // });
    },
    clickDelete() {
      this.$store.commit('DELETE_TODO',this.todo.id);
      //this.$emit('click-delete', this.todo.id);
    }
  }
}
</script>

<style>

</style>