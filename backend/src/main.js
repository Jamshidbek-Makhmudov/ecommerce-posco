import { createApp } from 'vue';
import './index.css';
import router from './router';
import store from './store';
//import currencyUSD from './filters/currency.js'

import App from './App.vue';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .mount('#app')
;

// app.config.globalProperties.$filters = {
//   currencyUSD
// }
