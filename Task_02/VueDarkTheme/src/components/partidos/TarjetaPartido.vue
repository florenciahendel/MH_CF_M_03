<template>
  <card style="width: 20rem;" class="text-center">
    <h3 class="card-title">{{fecha.month}}/{{fecha.day}}</h3>
    <h4 class="card-subtitle">{{hora}}</h4>
    <hr />
    <p class="card-text display-4">{{local}} vs. {{visitante}}</p>
    <hr />
    <iframe class="embed-responsive" :src="lugar.mapEmbed"></iframe>
    <hr />
    <a :href="lugar.mapURL" class="btn btn-teal">{{lugar.name}}</a>
  </card>
</template>

<script>
export default {
  props: {
    fecha: String,
    local: String,
    visitante: String,
    lugar: String,
    hora: String
  },
  name: "PartidoDelDia"
};
</script>
<style scoped>
.google-maps {
  position: relative;
  padding-bottom: 75%;
  overflow: hidden;
}
.google-maps iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>

<!--
<div class="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12698.017302765014!2d-5.924386855443038!3d37.28317952472348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12705c945f7355%3A0x1f6735c306757c59!2sDos+Hermanas%2C+Sevilla%2C+Espa%C3%B1a!5e0!3m2!1ses!2s!4v1387797719272"
        width="320"
        height="180"
        frameborder="0"
        style="border:0"
      ></iframe>
    </div>