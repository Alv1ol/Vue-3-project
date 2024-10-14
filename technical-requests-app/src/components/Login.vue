<template>
    <div class="login">
      <h1>Авторизация</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Логин или Телефон:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Войти</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', { username: this.username, password: this.password })
          .then(() => {
            this.$router.push('/');
          })
          .catch(() => {
            this.error = 'Неправильные данные';
          });
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .login {
    max-width: 300px;
    margin: auto;
    padding: 1em;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  
    h1 {
      text-align: center;
      margin-bottom: 1em;
    }
  
    form {
      display: flex;
      flex-direction: column;
      
      div {
        margin-bottom: 1em;
      }
  
      label {
        margin-bottom: .5em;
        color: #333;
        font-weight: bold;
      }
  
      input {
        padding: .5em;
        color: #333;
        background: #eee;
        border: none;
        border-radius: 3px;
      }
  
      button {
        padding: 0.7em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
  
      button:hover {
        background-color: #0056b3;
      }
  
      p {
        color: red;
        text-align: center;
      }
    }
  }
  </style>
  