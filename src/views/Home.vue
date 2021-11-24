<template>
  <div class="home">
    
    
   <table v-if="this.$store.state.session.autenticado" width=100%>
     <tr>
    <button v-on:click="incrementarEvent('Hello world')" >Incrementar</button>
    &nbsp;
    <button v-on:click="decrementarEvent('Hello world')" >Decrementar</button>
     </tr>
     <tr>
       <br>
       <label style="font-size:30px">{{this.$store.state.contadorGeneral}}</label>
        <br>
       <label style="font-size:20px;color:red">{{this.msgError}}</label></tr>
        <span>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</span>
   </table>
   <div v-else>
     <br><br>
     <label style="font-size:30px">Ingrese su email para acceder</label>
      <br><br>
      <input type=text v-model="$store.state.session.email" placeholder="email@domain.com" />
      <br><br><br>
    <button v-on:click="loginEvent" >Ingresar</button>

<br><br>
     <label style="font-size:20px;color:red">{{$store.state.session.mensaje}}</label>
     <br>
        <span>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</span>
   </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

//https://www.npmjs.com/package/vue-socket.io-extended
export default {
  name: 'Home',
  components: {
    
  },
  data: function(){
    return {
      msgError:''
    }
  },
  methods: {
    loginEvent(){
       this.$socket.client.emit('login',{email:this.$store.state.session.email});
    },
     incrementarEvent: function(message) {
        this.$socket.client.emit('incrementar',{counter:this.$store.state.contadorGeneral});
        //show message about this request or a loading efect
    },
     decrementarEvent: function(message) {
         this.$socket.client.emit('decrementar');
         //show message about this request or a loading efect
    },
  },
  created: function() {
    //publishing an event
      //this.$socket.client.emit('getContador');
      //show message about this request or a loading efect
     //------------------------------------------------------------

     //to unsubscribe
     //this.$socket.$unsubscribe('event_name');

     //subscibe section
     //------------------------------------------------------------
     /*this.$socket.$subscribe('ONINCREMENTAR', payload => {
       console.log('SOCKET_ONINCREMENTAR');
       this.$store.state.contadorGeneral = payload.contador;
    });*/

   /* this.$socket.$subscribe('ONDECREMENTAR', payload => {
       console.log('SOCKET_ONDECREMENTAR');
       this.$store.state.contadorGeneral = payload.contador;
    });*/

    /* this.$socket.$subscribe('ONGETCONTADOR', payload => {
       console.log('SOCKET_ONGETCONTADOR');
       this.$store.state.contadorGeneral = payload.contador;
    });*/

  }
}
</script>
