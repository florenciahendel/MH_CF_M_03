<template>
<div class="container-fluid">
  <footer class="row pt-3 pb-4 mt-5 d-flex justify-content-center align-items-start bg-dark  fixed-bottom">
    <div class="">
      <a href="#/">
        <img src="../../public/img/ball.png" class="img-fluid"/>
      </a>
    </div>

    <div class="">
      <a href="#/schedule">
        <img src="../../public/img/schedule.png" class="img-fluid"/>
      </a>
    </div>

    <div class="">
      <a href="#/field">
        <img src="../../public/img/field.png" class="img-fluid"/>
      </a>
    </div>

    <div class="">
      <a href="#/team">
        <img src="../../public/img/shirt.png" class="img-fluid"/>
      </a>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped>
img{
  max-width: 50%;
}

</style>
