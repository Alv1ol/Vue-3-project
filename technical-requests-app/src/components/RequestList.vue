<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Создана</th>
            <th>Адрес</th>
            <th>Заявитель</th>
            <th>Описание</th>
            <th>Срок</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.id" @click="editRequest(request.id)">
            <td>{{ request.number }}</td>
            <td>{{ request.created_at }}</td>
            <td>{{ request.premise }} {{ request.apartment }}</td>
            <td>{{ request.applicant }}</td>
            <td>{{ request.description }}</td>
            <td>{{ request.due_date }}</td>
            <td>{{ request.status }}</td>
          </tr>
        </tbody>
      </table>
      <EditRequestModal 
        :isOpen="isEditModalOpen" 
        :isEdit="true" 
        :requestId="selectedRequestId" 
        @close="isEditModalOpen = false" 
        @update="fetchRequests" />
    </div>
  </template>
  
  <script>
  import EditRequestModal from './EditRequestModal.vue';
  
  export default {
    components: {
      EditRequestModal
    },
    data() {
      return {
        isEditModalOpen: false,
        selectedRequestId: null
      };
    },
    computed: {
      requests() {
        return this.$store.state.requests;
      }
    },
    created() {
      this.fetchRequests();
    },
    methods: {
      fetchRequests() {
        this.$store.dispatch('fetchRequests');
      },
      editRequest(id) {
        this.selectedRequestId = id;
        this.isEditModalOpen = true;
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
  
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  
    tr:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
  </style>
  