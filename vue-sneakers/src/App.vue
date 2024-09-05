<script setup>
import { computed, provide, ref, watch } from 'vue'
import axios from 'axios'


import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const cart = ref([])

const isCreatingOrder = ref(false)

const orderId = ref(null)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const drawerOpen = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    const { data } = await axios.post(`https://da86a793712b27d4.mokky.dev/orders`, {
      item: cart,
      totalPrice: totalPrice.value
    })

    cart.value = []

    orderId.value = data.id
  } catch (err) {
    console.log(err)
  } finally {
    isCreatingOrder.value = false
  }
}


watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
},
{deep: true}
)

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
  orderId
})
</script>

<template>
  <Drawer
    v-if="drawerOpen"
    :total-price="totalPrice"
    :vat-price="vatPrice"
    @create-order="createOrder"
    :is-creating-order="isCreatingOrder"
  />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10">
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />
    
    <div class="p-10" id="app">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
