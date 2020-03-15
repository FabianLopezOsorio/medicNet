<template>
  <div class="container"> 
      
       <div v-show="show1" class="paciente" @click="paciente">
         <h2 class="b">Paciente</h2>
         <transition
          enter-active-class="animated fadeInDown"               
         >
         <div class="form-group" v-if="!show2">
             <hr>
             <p class="b"><strong>Usuario:</strong></p>
             <input v-model="nombre" type="text" class="form-control b" >
             <p class="b"><strong>Password:</strong></p>
             <input v-model="password" type="text" class="form-control b">
             <router-link  tag="div"  :to="{name: 'post', query:{nombre:nombre,password:password}}">
                 <a class="btn btn-info c" @click="usuario({name:nombre, pass:password, nav:true})">Entrar</a>
             </router-link>
    
         </div>
         </transition>
       </div>
        
      
      <div v-show="show2" class="medico" @click="medico">
         <h2 class="a">Médico</h2> 
         <transition
          enter-active-class="animated fadeInDown"               
         >      
         <div class="form-group" v-if="!show1">
             <hr>
             <p class="a"><strong>Usuario:</strong></p>
             <input v-model="nombre" type="text" class="form-control" style="display: inline-block; width: 48%">
             <p class="a"><strong>Password:</strong></p>
             <input v-model="password" type="text" class="form-control" style="display: inline-block; width: 48%">
              <router-link tag="div" :to="{name: 'post',query:{nombre:nombre,password:password}}" >
                  <a @click="usuario({name:nombre, pass:password, nav:true})" class="btn btn-info d">Entrar</a>
              </router-link>
         </div>
         </transition>
      </div> 

      <button v-if="showb" class="btn btn-success" @click="show1=true;show2=true;showb=!showb;eventoClick=true">Atras</button>
      
  </div>
</template>

<script>
export default {
  data: function () {
    return{
      show1: true,
      show2: true,
      showb: false,
      eventoClick: true,
      nombre: "",
      password:""
    };
  },
  methods:{
      usuario(a) {
         this.$store.dispatch('usuario',a); 
      },
      
    paciente: function () {
    if (this.eventoClick) {
        this.show2=!this.show2;
        this.showb=!this.showb;
    } 
        this.eventoClick=false;
    },
    medico: function () {
    if (this.eventoClick) {
        this.show1=!this.show1;
        this.showb=!this.showb;
    }
        this.eventoClick=false; 
    }
  }
}
</script>

<style scoped>
.paciente, .medico{
width: 30%;
margin: 10%;
display: inline-block;
text-align: center;
box-shadow: 0px 0px 8px ;
border-radius: 4px;

}
.paciente:hover, .medico:hover{
    cursor: pointer;
    transform: scale(1.1);
}
.medico{
    background-color: rgba(0, 0, 255, 0.616);
    transition: all 1s ease-out ;
}
.paciente{
    background-color: rgba(0, 255, 255, 0.733);
    transition: all 1s ease-out ;
}

.container{
    text-align: center;
}
.paciente h2, .medico h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.a{
    display: inline-block;
    width: 48%;
    color: rgb(255, 255, 255);
}
.b{
    display: inline-block;
    width: 48%;
    color: rgb(0, 0, 0);
}
.c{
   background-color: rgba(0, 0, 255, 0.616);
   margin: 4px; 
   text-decoration: none;
   color: rgb(255, 255, 255);
}
.d{
    background-color: rgba(0, 255, 255, 0.733);
    margin: 4px; 
    color: rgb(22, 22, 22);
    text-decoration: none;
}

</style>
