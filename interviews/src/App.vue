<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAuth , onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './stores/User';
import AppHeader from '@/components/AppHeader.vue';

const UserStore = useUserStore();

const isLoading = ref<boolean>(true);

onMounted(() => { 
  onAuthStateChanged(getAuth(), (user) => { 
    if (user){ 
      UserStore.userId = user.uid
    } else { 
      UserStore.userId = ''
    }
    isLoading.value = false
  })
})
</script>

<template>
  <app-progress v-if="isLoading"/>
  <div class="container">
    <app-header/>
    <div class="content"><RouterView /></div>
  </div>
  

</template>

<style scoped>
  .container{ 
    max-width: 1280px;
    margin: auto;
    padding: 20px;
  }
</style>
