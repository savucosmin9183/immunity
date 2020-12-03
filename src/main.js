import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import {MediaQueries} from 'vue-media-queries';
import{ init } from 'emailjs-com';
import router from './router'

init("user_rRupyXkWqsXLDbeKmHA6w");

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);


Vue.config.productionTip = false

Vue.use(VModal);



new Vue({
  render: h => h(App),
  router,
  mediaQueries: mediaQueries
}).$mount('#app')
