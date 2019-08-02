<template>
  <div id="Chat" class="chat-component m-1">
    <div class="row d-block" v-if="!username">
      <p>You can't chat without a name. What's your name?</p>
      <input class="input-message" type="text" placeholder="Name" @keyup.enter="updateUsername" />
    </div>
    <div class="row d-inline-bolck justify-content-center align-item-start" v-else>
      <div class="col-lg-3">
       <h4 class="text-center pb-1"> {{username}}</h4>
        
        <textarea class="input-message" cols="30" rows="5" placeholder="New Message" @keyup.enter="sendMessage"></textarea>
      </div>

      <div class="messages col-lg-3">
        <h4 class="text-center pb-1">Messages</h4>
        
        <div class="message-cont">
          <div class="message" v-for="message in messages">
            <strong>{{message.username}}</strong>
            <p>{{message.text}}</p>
          </div>
        </div>
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
      messages: []
    };
  },
  methods: {
    updateUsername(e) {
      e.preventDefault();
      if (e.target.value) {
        this.username = e.target.value;
      }
    },
    sendMessage(e) {
      e.preventDefault();
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value,
          date: (new Date()).getTime()
          
        };
        fire
          .database()
          .ref("messages")
          .push(message);
        e.target.value = "";
      }
    }
  },
  mounted() {
   let vm = this;
    const itemsRef = fire.database().ref('messages').orderByChild('date').limitToLast(5);
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let messages = [];
        Object.keys(data).forEach(key => {
            messages.push({
                id: key,
                username: data[key].username,
                text: data[key].text
        });
      });
      vm.messages = messages;
    });
  }
};
</script>

<style scoped>
h4, p{
  color:#000;
}
.messages {
  text-align: left;
}
.message {
  border: 1px solid #000;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  max-width: 95%;
}
.input-message{
  border: 1px solid #000;
  border-radius: 3px;
}
.message-cont {
  overflow-y: scroll;
  overflow-x: auto;
  border: #000 solid 2px;
  max-height: 300px;
  background-color: rgba(155, 155, 155, 0.3);
}
.chat-component{
  max-width: 98%;
}
</style>