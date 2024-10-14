import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    requests: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRequests(state, requests) {
      state.requests = requests;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post('https://dev.moydomonline.ru/api/auth/login/', credentials)
        .then(response => {
          commit('setToken', response.data.key);
          axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.key;
        });
    },
    fetchRequests({ commit }) {
      return axios.get('https://dev.moydomonline.ru/api/appeals/v1.0/appeals/')
        .then(response => {
          commit('setRequests', response.data);
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getRequestById: (state) => (id) => {
      return state.requests.find(request => request.id === id);
    }
  }
});
