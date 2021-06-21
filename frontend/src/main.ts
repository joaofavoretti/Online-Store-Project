import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import VueCurrencyFilter from 'vue-currency-filter';
import App from './App.vue';
import configToasted from './plugins/toasted';
import configFilters from './plugins/filters';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueTheMask);
Vue.use(VueCurrencyFilter, [
  {
    name: 'toCurrency',
    symbol: 'R$ ',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: false,
    avoidEmptyDecimals: '00',
  },
]);

configToasted(Vue);
configFilters(Vue);

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});

app.$mount('#app');
