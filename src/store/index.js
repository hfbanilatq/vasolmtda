import Vue from 'vue';
import Vuex from 'vuex';
import { KeyObject } from 'crypto';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sex: [
      'Hombre',
      'Mujer',
      'Indefinido',
    ],
    user: [{
      id: KeyObject,
      fisrtName: String,
      lastName: String,
      sex: String,
      email: String,
      pass: String,
      address: String,
      city: String,
      state: String,
      zip: Number,
    },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
