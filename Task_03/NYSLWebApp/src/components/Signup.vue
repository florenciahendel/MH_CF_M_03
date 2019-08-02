<template>
  <div>
    <button type="button" class="btn btn-light mx-1" data-toggle="modal" data-target="#signup-modal"
      id="toggle-btn">Sign Up</button>
   <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalCenterTitle">Sign Up</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <p>New Account</p>
    <input type="text" v-model="username" placeholder="Username"><br>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary"@click="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

 <script>
  import firebase from 'firebase';
  export default {
    name: 'Signup',
    data() {
      return {
        username:'',
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.username, this.email, this.password).then(
          (user) => {
            alert('Congrats!');
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>
