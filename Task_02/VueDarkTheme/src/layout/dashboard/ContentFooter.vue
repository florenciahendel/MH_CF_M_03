<template>
  <footer class="footer fixed-bottom bg-dark">
    <div class="container-fluid bg-dark  text-align-center">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard">
            <i class="far fa-futbol fa-3x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/schedule">
            <i class="far fa-calendar-alt fa-3x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/fields">
            <i class="far fa-map fa-3x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/team">
            <i class="far fa-handshake fa-3x"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style scoped>
.nav {
  text-align: center;
}
</style>
