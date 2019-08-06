<template>
  <div id="Chat" v-show="is_signed" class="chat-component mx-auto">
    <div class="card chat-container" v-if="!username">
      <div class="card-header bg-success">
        <h4>NYSL Chat</h4>
      </div>
      <div class="card-body">
        <h5>Hi! Type your name to start</h5>
        <br>
        <input class="input-message" type="text" placeholder="Name" @keyup.enter="updateUsername" />
      </div>
    </div>
        
    <div class="card chat-container" v-else>
      <div class="card-header bg-success">
        <h4>NYSL Chat</h4>
      </div>
      <div class="card-body messages-container">
        <div class="message" v-for="message in messages" :key="message.id">
          <strong>{{message.username}}</strong>
          <p>{{isToday(message.date)}}</p>
          <p>{{message.text}}</p>
        </div>
      </div>
      <div class="card-footer bg-success">
        <form>
          <div class="form-group">
            <input class="form-control" type="text" @keyup.enter="sendMessage" placeholder="New Message">
          </div>
          <button type="submit" class="btn btn-primary mx-3" @click="sendMessage">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import fire from "@/fire";

export default {
  name: "Chat",
  data() {
    return {
      username: "",
      messages: [],
      is_signed:false
    };
  },

  methods: {
    //metodo para formatear la fecha de milisegundos a mes (con nombre), día y año, y hora y minutos en AM/PM
    isToday(date) {
      return this.$moment(date).format("lll");
    },
    //metodo para agregar el username que selecciona el usuario para chatear
    updateUsername(e) {
      e.preventDefault();
      if (e.target.value) {
        this.username = e.target.value;
      }
    },
    //método de envío de mensajes
    sendMessage(e) {
      e.preventDefault();
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value,
          date: new Date().getTime()
        };
        fire
          .database()
          .ref("messages")
          .push(message);
        e.target.value = "";
      }
    }
  },
  created: function(){
    var that = this;
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.is_signed = true;        
      } else {
        that.is_signed = false;
      }
    });
  },
  //para cargar los mensajes al inicio
  mounted() {
    let vm = this;

    const itemsRef = fire
      .database()
      .ref("messages")
      .orderByChild("date").limitToLast(200);
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
          date: data[key].date
        });
      });
      vm.messages = messages;
    });
  }
};
</script>

<style scoped>

.chat-component{
max-width:500px;
}

h4,
p {
  color: #000;
}

.chat-container {
/*max-width:500px;*/
max-height:400px;
max-width:95%;
}

.messages-container {
  overflow-y: scroll;
  overflow-x: auto;
  /* max-width:98%; */
}

.message {
  border: 1px solid #000;
  border-radius: 3px;
  padding: 3px;
  margin: 5px;
  /* max-width: 98%; */
  text-align: left;
  background-color: rgba(92, 184, 92, 0.2);
}


</style>
