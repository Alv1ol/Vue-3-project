import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles.scss';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
