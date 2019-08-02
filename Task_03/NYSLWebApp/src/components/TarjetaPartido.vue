<template>
  <div class="card text-center bg-light" style="width: 15rem;">
    <h3 class="card-title">{{fecha.month}}/{{fecha.day}}</h3>
    <h4 class="card-title">{{hora}}</h4>
    <h3 class="card-subtitle">{{local}} vs. {{visitante}}</h3>
    <a :href="lugar.mapURL" class="btn btn-dark m-3">Open in Maps</a>
   <!--<div>
   
    <button type="button" class="btn btn-dark m-3" data-toggle="modal" data-target="#game-details-modal" id="toggle-btn">Details</button>
    <div class="modal fade" id="game-details-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">Game Details</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4 class="modal-subtitle">{{fecha.month}}/{{fecha.day}}</h4>
            <h4 class="modal-subtitle">{{hora}}</h4>
            <h4 class="modal-subtitle">{{local}} vs. {{visitante}}</h4>
            
           <iframe class="iframe" v-bind:src="lugar.mapEmbed" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
  name: "PartidoDelDia"
};
</script>
<style scoped>

</style>