<template>
  <base-button class="btn btn-lg btn-block">
    <div class="row">
      <div class="col-4">{{fecha}}</div>
      <div class="col-4">{{local}} vs. {{visitante}}<p>{{lugar.name}} - {{lugar.address}}</p></div>
      <div class="col-4">{{hora}}</div>
    </div>
  </base-button>
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
	}
</script>

<style scoped>
  .btn-primary{
   /* background-image: linear-gradient(#611, #A33, #611);*/
    border-radius: 1;
    border-color: white;
  }
</style>