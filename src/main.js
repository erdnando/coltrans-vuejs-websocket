import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.config.productionTip = false;

const socket = io('http://192.168.0.4');
//const socket = io(process.env.websocket_host);


Vue.use(VueSocketIOExt, socket, { store });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')