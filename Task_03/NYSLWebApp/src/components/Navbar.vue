<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container d-flex justify-content-between"> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#rules">Rules</a>
          </li>
        </ul>
      </div>
      <a class="navbar-brand" href="#"><img src="img/icons/apple-icon-57x57.png" alt=""></a>
     <Login />
     <Signup />
    </div>
  </nav>
</div>
</template>

<script>
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
export default {
  components:{
    Login,
    Signup
  }

}
</script>