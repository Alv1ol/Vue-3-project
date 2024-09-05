<script setup>
import card from './card.vue';

defineProps({
  items: Array,
  isFavorite: Boolean
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>
  <div class="grid grid-cols-4 gap-5"  v-auto-animate>
    <card v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :price="item.price"
      :is-favorite="item.isFavorite"
      :is-added="item.isAdded"/>
  </div>
</template>
