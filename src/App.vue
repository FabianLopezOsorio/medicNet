<template>
  <div id="app">
    <Header></Header>
    <navbar v-if="nav"></navbar>
    <transition 
    enter-active-class="animated slideInUp"
    mode="out-in"
    >
      <router-view></router-view> 
    </transition>
     
  </div>
</template>

<script>

import Header from './components/Header.vue'
import navbar from './components/navbar.vue'


export default {
  name: 'app',
  data: function(){
return{
  
}
  },
  components: {
    Header,
    navbar
  },
  computed:{
    nav(){
     return this.$store.state.nav;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);

}
</style>
