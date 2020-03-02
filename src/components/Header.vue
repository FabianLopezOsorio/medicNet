<template>
  <div class="header">
    <button @click="show=!show">CLICK</button>
    <transition 
     enter-active-class="animated bounce"
     leave-active-class="animated shake"
    >
     <h1 v-if="show">MedicNET</h1>
    </transition>
     
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  }
  name: 'Header',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  color: rgb(128, 125, 125);
  background-color: rgb(5, 5, 5);
  padding:0.3em;
}
h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-shadow: 0px 0px 4px rgb(117, 114, 114);
}
</style>
