<template>
    <div v-if="request">
      <h1>Редактирование заявки №{{ request.number }}</h1>
      <form @submit.prevent="saveRequest">
        <div>
          <label>Описание:</label>
          <textarea v-model="request.description"></textarea>
        </div>
        <div>
          <label>Срок:</label>
          <input type="datetime-local" v-model="request.due_date" />
        </div>
        <button type="submit">Сохранить</button>
        <button @click="close">Отмена</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    computed: {
      request() {
        return this.$store.getters.getRequestById(this.$route.params.id);
      }
    },
    data() {
      return {
        error: ''
      };
    },
    methods: {
      saveRequest() {
        axios.patch(`https://dev.moydomonline.ru/api/appeals/v1.0/appeals/${this.$route.params.id}/`, {
          description: this.request.description,
          due_date: this.request.due_date
        })
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          this.error = error.response.data.message || 'Ошибка сохранения заявки';
        });
      },
      close() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    background: #fff;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    div {
      margin-bottom: 1em;
    }
  
    label {
      margin-bottom: 0.5em;
      font-weight: bold;
    }
  
    textarea,
    input[type='datetime-local'] {
      padding: 0.5em;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 3px;
      width: 100%;
    }
  
    button {
      padding: 0.7em;
      font-size: 1em;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  
    button[type='submit'] {
      background-color: #007bff;
      color: #fff;
      margin-bottom: 0.5em;
    }
  
    button[type='submit']:hover {
      background-color: #0056b3;
    }
  
    button[type='button'] {
      background-color: #ccc;
      color: #333;
    }
  
    button[type='button']:hover {
      background-color: #999;
    }
  
    p {
      color: red;
      text-align: center;
    }
  }
  </style>
  