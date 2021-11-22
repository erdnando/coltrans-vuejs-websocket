import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.config.productionTip = false;

const socket = io('http://coltrans');
//const socket = io('http://localhost:9001');

Vue.use(VueSocketIOExt, socket, { store });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')