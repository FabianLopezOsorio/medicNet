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
  border: 1px rgb(211, 199, 199) solid;
  padding: 5px;
  border-radius: 3px;
  background-color: rgb(255, 254, 254);
  color: rgb(14, 13, 13);
  padding: 10px 5px 10px 5px;
  text-align: left;
}
.rectangulo:hover{
  opacity: 0.5;
  cursor: pointer;
}
</style>