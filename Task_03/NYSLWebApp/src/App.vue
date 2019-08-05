<template>
  <div id="app">
    <!-- Barra navegacion -->
    <Navbar />
    <div id="home">
      <h1>Home</h1>
    </div>
    <div id="field">
      <h1>Field</h1>
    </div>
    <div id="team">
      <h1>Team</h1>
    </div>
    <div id="schedule">
      <h1>Schedule</h1>
      <Schedule />
    </div>
    <div id="chat">
      <Chat />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Schedule from "@/components/Schedule.vue";
import Footer from "@/components/Footer.vue";
import Chat from "@/components/Chat.vue";
import firebase from "firebase";

export default {
  name: "app",
  components: {
    Navbar,
    Schedule,
    Footer,
    Chat
  },
  //Prueba para chequear el estado de usuario
  computed: {
    signed: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         // console.log("Usuario logueado");
          this.signed= true;
        } else {
      //    console.log("Usuario no-logueado");
          this.signed = false;
        }
  
      });
    }
  },
  methods: {
    logged:function(){
    let user= firebase.auth().currentUser;
    if(user != null){
    //  console.log('Usuario autenticado');
      return true; 
      
      }
    else{
    //  console.log('No hay un usuario autenticado');
      return false;
    }
  }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
