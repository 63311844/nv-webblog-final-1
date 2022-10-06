<template>
  <div>
    <h1><center>User Login</center></h1>
    <form v-on:submit.prevent="onLogin">
    <center><p>Username: <input type="text" v-model="email" /></p></center>
  <center><p>Password: <input type="password" v-model="password" /></p></center>
<center><p><button type="submit">Login</button></p></center>
      <div class="error" v-if="error">{{error}}</div>
    </form>
  </div>
</template>
<script>
import AuthenService from "@/services/AuthenService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.$router.push({
          name: 'users'
        })

      } catch (error) {
        console.log(error);
        this.error = error.response.data.error
        this.email = ''
        this.password = ''
      }
    },
  }
};
</script>
<style scoped>
  .error{
    color:red;
  }
</style>
