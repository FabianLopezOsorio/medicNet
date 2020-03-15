<template>
<div>
  <ul class="nav nav-pills barra">
     <router-link tag="li" active-class="active" :to="{name: 'home'}" exact><a >Home</a></router-link>
     <router-link tag="li" active-class="active" :to="{name: 'post'}"><a >Post</a></router-link>
     <router-link :to="{name:'home'}" tag="li" style="float: inline-end">
       <a class="btn btn-danger" @click="logOut({nav:false})">Log out</a>
     </router-link>
  </ul>
  
</div>
</template>

<script>
export default {
  data: function () {
    return{     
    };
  },
  methods:{ 
    logOut(data){
      this.$store.dispatch('logOut',data);
    }  
  }
}
</script>
<style scoped>
ul{
  margin-top: 5px;
}
.barra{
  background-color: rgba(178, 183, 187, 0.616);
  box-shadow: 0px 0px 6px;
}
.barra li a{
  color: black;
}
.barra li.active>a
{
  background-color: #8a8c8d;
}
.btn-danger{
  padding: 8px;
}

</style>
