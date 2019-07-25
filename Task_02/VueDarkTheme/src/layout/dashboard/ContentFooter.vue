<template>
  <footer class="footer sticky-bottom bg-dark d-flex">
    <div class="container-fluid bg-dark d-flex justify-content-center">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link mx-2" href="#/dashboard">
           <img src="../../../public/img/img/1x/ballmdpi.png" alt="">
           
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#/schedule">
   <img src="../../../public/img/img/1x/schedulemdpi.png" alt="">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#/fields">
 <img src="../../../public/img/img/1x/fieldmdpi.png" alt="">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#/team">
             <img src="../../../public/img/img/1x/shirtmdpi.png" alt="">
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
