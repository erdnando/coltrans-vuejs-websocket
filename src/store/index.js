import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        session: {
            autenticado: false,
            nombre: '',
            email: '',
            id: 0,
            mensaje: ''
        },
        contadorGeneral: 0,
        /* socket: {
             isConnected: false,
             message: '',
             reconnectError: false
         },*/
    },
    mutations: { //My kind of Webhooks
        //https://www.npmjs.com/package/vue-socket.io-extended
        // SOCKETS SUBSCRIBERS
        SOCKET_ONLOGIN(state, even) {
            console.log('SOCKET_ONLOGIN');
            state.session.email = even.email;
            state.session.autenticado = even.autenticado;
            state.session.mensaje = even.msg;
            if (even.autenticado)
                Vue.prototype.$socket.client.emit('getContador');


        },
        SOCKET_ONINCREMENTAR(state, even) {
            console.log('SOCKET_ONINCREMENTAR');
            state.contadorGeneral = even.contador;
        },
        SOCKET_ONDECREMENTAR(state, even) {
            console.log('SOCKET_ONDECREMENTAR');
            state.contadorGeneral = even.contador;
        },
        SOCKET_ONGETCONTADOR(state, even) {
            console.log('SOCKET_ONGETCONTADOR');
            state.contadorGeneral = even.contador;
        },
        /*
        SOCKET_ONOPEN(state, event) {
            console.log('SOCKET_ONOPEN');
            Vue.prototype.$socket = event.currentTarget;
            state.socket.isConnected = true;
        },
        SOCKET_ONCLOSE(state, event) {
            console.log('SOCKET_ONCLOSE');
            state.socket.isConnected = false;
        },
        SOCKET_ONERROR(state, event) {
            console.log('SOCKET_ONERROR');
            console.error(state, event);
        },
        // mutations for reconnect methods
        SOCKET_RECONNECT(state, count) {
            console.log('SOCKET_RECONNECT');
        },

        SOCKET_RECONNECT_ERROR(state) {
            console.log('SOCKET_RECONNECT_ERROR');
            state.socket.reconnectError = true;
        },*/
    },
    actions: {},
    modules: {}
})