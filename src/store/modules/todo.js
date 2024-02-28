export default {
  namespaced: true,
  state: { // Data
    todos: [
      { id: 1, text: 'Add a todo to get started', checked: false },
    ],
  },
  mutations: { // Change data
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, {id, checked}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId){
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1); 
    },
  },
  actions: { // Methods, Use whhen you use data-base
    addTodo({commit}, value) {
      // Use asynchronous
      setTimeout(function() {
        commit('ADD_TODO', value);
      }, 500);
    },
    toggleTodo({commit}, payload) {
      // Use asynchronous
      setTimeout(function() {
        commit('TOGGLE_TODO', payload);
      }, 500);
    },
    deleteTodo({commit}, todoId) {
      // Use asynchronous
      setTimeout(function() {
        commit('DELETE_TODO', todoId);
      }, 500);
    },
  },
  getters: { // Computed, Can reuse the values in components
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.checked).length;
    },
  }
}