<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>{{ isEdit ? 'Редактирование' : 'Создание' }} заявки</h2>
        <form @submit.prevent="submitRequest">
          <div>
            <label for="premise">Дом:</label>
            <select v-model="request.premise_id" id="premise">
              <option v-for="premise in premises" :key="premise.id" :value="premise.id">
                {{ premise.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="apartment">Квартира:</label>
            <input type="text" v-model="request.apartment_id" id="apartment" />
          </div>
          <div>
            <label for="applicant">Заявитель:</label>
            <input type="text" v-model="request.applicant.last_name" placeholder="Фамилия" />
            <input type="text" v-model="request.applicant.first_name" placeholder="Имя" />
            <input type="text" v-model="request.applicant.patronymic_name" placeholder="Отчество" />
            <input type="text" v-model="request.applicant.username" placeholder="Телефон" />
          </div>
          <div>
            <label for="description">Описание:</label>
            <textarea v-model="request.description" id="description"></textarea>
          </div>
          <div>
            <label for="due_date">Срок:</label>
            <input type="datetime-local" v-model="request.due_date" id="due_date" />
          </div>
          <button type="submit">{{ isEdit ? 'Сохранить' : 'Создать' }}</button>
          <p v-if="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      isOpen: Boolean,
      isEdit: Boolean,
      requestId: Number
    },
    data() {
      return {
        request: {
          premise_id: '',
          apartment_id: '',
          applicant: {
            last_name: '',
            first_name: '',
            patronymic_name: '',
            username: ''
          },
          description: '',
          due_date: ''
        },
        premises: [],
        error: ''
      };
    },
    watch: {
      isOpen(newVal) {
        if (newVal && this.isEdit) {
          this.fetchRequest();
        } else {
          this.resetForm();
        }
      }
    },
    methods: {
      fetchRequest() {
        axios.get(`https://dev.moydomonline.ru/api/appeals/v1.0/appeals/${this.requestId}/`)
          .then(response => {
            this.request = response.data;
          })
          .catch(error => {
            this.error = 'Ошибка загрузки данных заявки';
          });
      },
      fetchPremises() {
        axios.get('https://dev.moydomonline.ru/api/geo/v2.0/user-premises/')
          .then(response => {
            this.premises = response.data;
          })
          .catch(error => {
            this.error = 'Ошибка загрузки данных домов';
          });
      },
      resetForm() {
        this.request = {
          premise_id: '',
          apartment_id: '',
          applicant: {
            last_name: '',
            first_name: '',
            patronymic_name: '',
            username: ''
          },
          description: '',
          due_date: ''
        };
        this.error = '';
      },
      submitRequest() {
        const url = this.isEdit 
          ? `https://dev.moydomonline.ru/api/appeals/v1.0/appeals/${this.requestId}/`
          : 'https://dev.moydomonline.ru/api/appeals/v1.0/appeals/';
        const method = this.isEdit ? 'patch' : 'post';
  
        axios[method](url, this.request)
          .then(() => {
            this.$emit('update');
            this.close();
          })
          .catch(error => {
            this.error = error.response.data.message || 'Ошибка сохранения заявки';
          });
      },
      close() {
        this.$emit('close');
        this.resetForm();
      }
    },
    mounted() {
      this.fetchPremises();
    }
  };
  </script>
  
  <style scoped lang="scss">
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  
    .modal-content {
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 500px;
      max-width: 100%;
  
      .close {
        float: right;
        font-size: 1.5em;
        cursor: pointer;
      }
  
      h2 {
        margin: 0 0 1em;
        text-align: center;
      }
  
      form {
        display: flex;
        flex-direction: column;
  
        div {
          margin-bottom: 1em;
        }
  
        label {
          margin-bottom: 0.5em;
          font-weight: bold;
        }
  
        input, select, textarea {
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
          background-color: #007bff;
          color: #fff;
          margin-top: 1em;
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
  }
  </style>
  