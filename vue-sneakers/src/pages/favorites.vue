<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios';

  import Cardlist from '@/components/Cardlist.vue';

  const favorites = ref([])

  onMounted(async () => {
    try{
      const { data } = await axios.get('https://da86a793712b27d4.mokky.dev/favorites?_relations=items')

      favorites.value = data.map((obj) => obj.item)
    } catch(err){
      console.log(err)
    }
  })
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

    <cardlist :items="favorites" is-favorites/>
  </div>
</template>