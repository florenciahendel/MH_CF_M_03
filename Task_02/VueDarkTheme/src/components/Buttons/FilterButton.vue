<template>
<button @click="filterElements"></button>    
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
  name: "FiltrarElementos"
};
</script>


