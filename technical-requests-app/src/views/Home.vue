<template>
    <div>
      <h1>Список заявок</h1>
      <button @click="openCreateModal">Создать новую заявку</button>
      <RequestList />
      <EditRequestModal 
        :isOpen="isCreateModalOpen" 
        :isEdit="false" 
        @close="isCreateModalOpen = false" 
        @update="fetchRequests" />
    </div>
  </template>
  
  <script>
  import RequestList from '@/components/RequestList.vue';
  import EditRequestModal from '@/components/EditRequestModal.vue';
  
  export default {
    components: {
      RequestList,
      EditRequestModal
    },
    data() {
      return {
        isCreateModalOpen: false
      };
    },
    methods: {
      openCreateModal() {
        this.isCreateModalOpen = true;
      },
      fetchRequests() {
        this.$store.dispatch('fetchRequests');
      }
    },
    created() {
      this.fetchRequests();
    }
  };
  </script>
  