<template>
  <div class="home">
    <Navigation />
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center pb-5">
        <div class="icon-container d-inline-block px-5">
          <a href="#/schedule">
            <img src="../../public/img/schedule.png" alt />
          </a>
        </div>
        <div class="icon-container d-inline-block px-5">
          <a href="#/field">
            <img src="../../public/img/field.png" alt />
          </a>
        </div>
        <div class="icon-container d-inline-block px-5">
          <a href="#/team">
            <img src="../../public/img/shirt.png" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style scoped>
</style>
