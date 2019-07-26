<template>
  <nav class="row bg-dark py-1 mb-5 d-flex align-items-center">
    <div class="col">
      <Menu />
    </div>
    <div class="col">
      <img src="../../public/img/nysl_logo.png" class="img-fluid"  alt />
    </div>
    <div class="col">
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from "@/components/Login.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "Navigation",
  components: {
    Login,
    Menu
  }
};
</script>

<style scoped>

</style>
