<template>
  <div >   
      
  </div>
</template>

<script>
export default {
  data: function () {
    return{
      bool: false
    };
  },
  methods:{
    mostrar(){
    this.bool=!this.bool;
  }
  }
}
</script>

<style scoped>
.mostrar{
  display: block;
}
.btn-lg{
  text-align: left;
  border-radius: 0px 50% 50% 0px;
}
</style>
