<template>
  <div id="app">
    <!-- Barra navegacion -->
    <Navbar />
    <div id="field">
      <h1>Field</h1>
    </div>
    <div id="team">
      <h1>Team</h1>
    </div>
    <div id="schedule">
      <h1>Schedule</h1>
      <Schedule/>
    </div>
<div id="chat">
  <Chat/>
</div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Schedule from "@/components/Schedule.vue";
import Footer from "@/components/Footer.vue";
import Chat from '@/components/Chat.vue'
export default {
  name: "app",
  components: {
    Navbar,
    Schedule,
    Footer,
    Chat
  }
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
