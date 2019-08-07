<template>
  <div class="card text-center bg-light" style="width: 18rem;">
    <h4 class="card-title">{{fecha.month}}/{{fecha.day}} - {{hora}}</h4>
    <h4 class="card-subtitle">{{local}} vs. {{visitante}}</h4>
    <button class="btn btn-dark" @click="details=!details">Details</button>
      <div v-show="details">
        <div class="embed-responsive embed-responsive-4by3">
          <iframe class="iframe" v-bind:src="lugar.mapEmbed" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <a :href="lugar.mapURL" class="btn btn-dark m-3">Open in Maps</a>
      </div>
  </div>
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
  name: "PartidoDelDia",
  data(){
    return{
      details:false
    }
  }
};

</script>
<style scoped>

</style>