<template>
  <div>
    <button
      type="button" class="btn btn-light mx-1" data-toggle="modal" data-target="#login-modal" id="toggle-btn">Sign In</button>
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">Login</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input class="form-control" type="text" v-model="email" placeholder="Email">
              </div>
              <div class="form-group">
                <input class="form-control" type="password" v-model="password" placeholder="Password">
              </div>
                <button type="submit" class="btn btn-primary mx-3" @click="login">Login</button>
                <button type="button" class="btn btn-secondary mx-3" data-dismiss="modal">Cancel</button>
            </form>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import firebase from 'firebase';
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
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

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  
</style>

