<template>
  <div id="app">
    <Header></Header>
    <navbar></navbar>
    <proyectos :titulos="titulos"></proyectos>
    
  </div>
</template>

<script>

import Header from './components/Header.vue'
import navbar from './components/navbar.vue'
import proyectos from './components/proyectos.vue'

export default {
  name: 'app',
  data: function(){
return{
  titulos: [
    "Proyecto1",
    "Proyecto2",
    "Proyecto3"
  ]
}
  },
  components: {
    Header,
    navbar,
    proyectos 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;

}
</style>
