import vuetify from './plugins/vuetify';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

var vm = new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app');

console.log(vm);
