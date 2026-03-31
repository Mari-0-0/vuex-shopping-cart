import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store, // Injeção da store na instância raiz
  render: h => h(App),
}).$mount('#app');
