<template>
  <div>     
    <button class="btn btn-outline-danger mr-1" v-if="is_signed" @click="logout">Log Out</button>
    <button type="button" class="btn btn-light mx-1" v-else data-toggle="modal" data-target="#login-modal" id="toggle-btn">Sign In</button>
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
                <button type="submit" class="btn btn-primary mx-3" data-dismiss="modal" @click="login">Login</button>
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
        password: '',
        is_signed:false
      }
    },
    created: function(){
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.is_signed = true;        
      } else {
        that.is_signed = false;
      }
    });
  },
  
     methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alertify.set('notifier','position', 'top-right');
            alertify.notify('Successfully Logged In', 'success',4);
           
          },
          (err) => {
            alertify.alert('NYSL Schedule', 'Oops. ' + err.message)
          }
        );
      },
       logout: function(){ 
      firebase.auth().signOut().then(function() {
        alertify.set('notifier','position', 'top-right');
        alertify.notify('Successfully Logged Out', 'success',4);
      }).catch(function(err) {
        alertify.alert('NYSL Schedule', 'Oops.'+ err.message);
      });
    }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  
</style>

