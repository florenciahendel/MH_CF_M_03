<template>
  <div>
    <ul class="nostyle">
      <li v-for="partido in partidos">
        <partido-del-dia v-bind="partido"> </partido-del-dia>
      </li>
    </ul>

  </div>
</template>

<script>
  import PartidoDelDia from '../components/partidos/PartidoDelDia'
	export default {
    data() {
      return {
        partidos:[
          {
            fecha: "09/01",
            local: "U1",
            lugar: "AJ Katzenmaier",
            lugarURLMap:"",
            visitante: "U4",
            hora: "09:30 AM"
          },{
            fecha: "09/01",
            local: "U3",
            lugar: "Greenbay",
            lugarURLMap:"",
            visitante: "U2",
            hora: "01:00 PM"
          },{
            fecha: "09/08",
            local: "U5",
            lugar: "Howard A Yeager",
            lugarURLMap:"",
            visitante: "U6",
            hora: "09:30 AM"
          },{
            fecha: "09/08",
            local: "U6",
            lugar: "Marjorie P Hart",
            lugarURLMap:"",
            visitante: "U1",
            hora: "01:00 PM"
          },{
            fecha: "09/15",
            local: "U2",
            lugar: "North",
            lugarURLMap:"",
            visitante: "U4",
            hora: "09:30 AM"
          },{
            fecha: "09/15",
            local: "U3",
            lugar: "AJ Katzenmaier",
            lugarURLMap:"",
            visitante: "U5",
            hora: "01:00 PM"
          },{
            fecha: "09/22",
            local: "U1",
            lugar: "South",
            lugarURLMap:"",
            visitante: "U3",
            hora: "09:30 AM"
          },{
            fecha: "09/22",
            local: "U2",
            lugar: "Howard A Yeager",
            lugarURLMap:"",
            visitante: "U6",
            hora: "01:00 PM"
          },{
            fecha: "09/29",
            local: "U4",
            lugar: "Greenbay",
            lugarURLMap:"",
            visitante: "U5",
            hora: "09:30 AM"
          }]
      }
    },
    props: {
    },
	  components: {
	    PartidoDelDia
    },
		name: "Partidos"
	}
</script>

<style scoped>
.nostyle {
  list-style:none;
}

</style>