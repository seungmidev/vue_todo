<template>
  <div>
    <h2>User List</h2>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      //users: [],
    }
  },
  created() {
    this.getUsers();
  },
  computed: {
    ...mapState('user', ['users']), // It's the same to users()
    // users() {
    //   return this.$store.state.users;
    // }
  },  
  methods: {
    ...mapActions('user',['getUsers',]),// It's the same to getUsers()
    // getUsers() {
    //   this.$store.dispatch('getUsers');
    //   // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   //   this.users = res.data;
    //   // });
    // },
  }
}
</script>

<style>

</style>