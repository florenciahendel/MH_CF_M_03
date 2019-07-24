<template>
  <card style="width: 20rem;" class="text-center">
    <h3 class="card-title">{{fecha.month}}/{{fecha.day}}</h3>
    <h4 class="card-subtitle">{{hora}}</h4>
    <hr />
    <p class="card-text display-4">{{local}} vs. {{visitante}}</p>
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

