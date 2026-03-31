import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    user: null,
    inventory: [
      { id: 1, name: 'Mouse Gamer', price: 150 },
      { id: 2, name: 'Teclado Mecânico', price: 300 },
      { id: 3, name: 'Monitor 144hz', price: 1200 }
    ]
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      // Aqui você poderia adicionar lógica de validação ou API
      commit('ADD_TO_CART', product);
    }
  },
  getters: {
    cartItemCount: state => state.cart.length,
    cartTotal: state => state.cart.reduce((total, item) => total + item.price, 0)
  }
});
