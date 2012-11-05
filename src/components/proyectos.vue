<template>
  <div class="proyectos">
    <div class="container uno">
 <titulos-p v-for="(titulo,i) in titulos" :key="i">{{titulo}}</titulos-p>
    </div>
    <div class="container dos">

    </div>
    
  </div>
</template>

<script>
import titulosP from './proyect_title.vue'
export default {
  props: ["titulos"],
  components:{
      titulosP
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.proyectos{
  padding: 5px;
  height: 350px; 
  border-radius: 3px;
}
.container{
    float: left; 
    border-radius: 3px;
    background-color: rgb(54, 53, 53);
    margin: 0.5%;
    height: 300px; 
    padding: 0;
}
.uno{
    width: 20%;  
}
.dos{
    width: 75%;
    padding: 10px;
}
</style>