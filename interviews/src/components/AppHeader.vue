<script setup lang="ts">
import { ref, computed, type ComputedRef } from 'vue';
import { useUserStore } from '@/stores/User';
import { RouterLink } from 'vue-router';

const UserStore = useUserStore()

interface IMenuItem {
  label: string
  icon: string
  path: string
  show: ComputedRef<boolean>
}

const items = ref<IMenuItem[]>([
  {
    label: 'Авторизация',
    icon: 'pi pi-user',
    path: '/auth',
    show: computed((): boolean => !UserStore.userId),
  },
  {
    label: 'Добавить',
    icon: 'pi pi-plus',
    path: '/',
    show: computed((): boolean => !!UserStore.userId),
  },
  {
    label: 'Список собеседований',
    icon: 'pi pi-list',
    path: '/list',
    show: computed((): boolean => !!UserStore.userId),
  },
  {
    label: 'Статистика',
    icon: 'pi pi-chart-pie',
    path: '/statistic',
    show: computed((): boolean => !!UserStore.userId),
  },
])
</script>

<template>
  <my-menubar :model="items" class="menu">
    <template #item="{ item, props }">
      <template v-if="item.show">
        <router-link
          :to="item.path"
          class="fles align-items-center"
          v-bind="props.action"
        >
          <span :class="item.icon" class="p-menuitem-icon" />
          <span class="ml-2">{{ item.label }}</span>
        </router-link>
      </template>
    </template>
    <template #end>
      <span
        v-if="UserStore.userId"
        @click="UserStore.userId = ''"
        class="flex align-item-center menu-exit"
      >
        <span class="pi pi-sign-out p-menuitem-icon" />
        <span class="ml-2">Выход</span>
      </span>
    </template>
  </my-menubar>
</template>

<style scoped>
.menu {
  margin: 30px 0;
}

.menu-exit {
  cursor: pointer;
}
</style>
