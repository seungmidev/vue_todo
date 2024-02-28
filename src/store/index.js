import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // Data
    todos: [
      { id: 1, text: 'Add a todo to get started', checked: false },
    ],
    users: [],
  },
  mutations: { // Change data
    SET_USERS(state, users) {
      state.users = users;
    },
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
    getUsers({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        commit('SET_USERS', res.data);
      });
    },
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
  getters: { // Computed

  }
});