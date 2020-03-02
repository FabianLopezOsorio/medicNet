<template>
  <div class="rectangulo">
    <slot></slot>
    
  </div>
</template>

<script>
export default {
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rectangulo{
  border: 4px rgb(22, 22, 22) solid;
  padding: 5px;
  border-radius: 3px;
  background-color: black;
  color: blanchedalmond;
  padding: 20px 0 20px 0;
  text-align: center;
}
.rectangulo:hover{
  opacity: 0.5;
}
</style>