<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email: tgrafix95@gmail.com</label>
        <input type="email" v-model="loginForm.email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="loginForm.password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Make API request to login endpoint
      axios.post('/api/login', this.loginForm)
        .then(response => {
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('token', token);
          window.location.href = '/dashboard';
          // this.$store.dispatch('auth/saveToken', token);
          // router.push('/dashboard');
          // Save the token in local storage or Vuex store
          // Redirect to the desired page
        })
        .catch(error => {
          console.log("erroe");
          console.log(error.response.data.message);
          // Handle the error message
        });
    },
    logout() {
      const token = localStorage.getItem('token');
      axios.post('/api/logout', null, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log("done");
          // Redirect the user to the login page or perform any other necessary actions
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            console.log("err"+error.response.data.message);
            // User is unauthenticated, handle the logout accordingly
            // Redirect the user to the login page or perform any other necessary actions
          } else {
            console.log(error.response.data.message);
            // Handle other errors
          }
        });
    },
  },
};
</script>
