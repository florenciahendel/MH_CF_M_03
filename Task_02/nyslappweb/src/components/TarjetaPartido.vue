<template>
  <b-card style="width: 15rem;" bg-variant="dark" text-variant="light" class="text-center">
    <h3 class="card-title">{{fecha.month}}/{{fecha.day}}</h3>
    <h4 class="card-subtitle">{{hora}}</h4>
    <hr />
    <p class="card-text">{{local}} vs. {{visitante}}</p>
    <b-button :href="lugar.mapURL" variant="light">{{lugar.name}}</b-button>

    <!--     <a :href="lugar.mapURL">{{lugar.name}}</a> -->
  </b-card>
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
</style>