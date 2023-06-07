<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label>Name:</label>
          <input type="text" v-model="registerForm.name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="registerForm.email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="registerForm.password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registerForm: {
          name: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      register() {
        // Make API request to register endpoint
        axios.post('/api/register', this.registerForm)
          .then(response => {
            const token = response.data.token;
            // Save the token in local storage or Vuex store
            // Redirect to the desired page
          })
          .catch(error => {
            console.log(error.response.data.message);
            // Handle the error message
          });
      },
    },
  };
  </script>
  