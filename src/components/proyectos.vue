<template>
  <div class="proyectos">
   

    <div class="container dos">
      <h2 >Mensajes</h2>
      <hr style="border-color: rgb(203, 204, 204)">
      <transition-group
      enter-active-class="animated bounceInDown"
      leave-active-class="animated fadeOutLeft"
      mode="out-in"
      > 
       <rectang-p v-for="mensaje in mensajesMostrar" :key="mensaje">
         <p style="font-size:20px">{{mensaje.Asunto}}</p>
         <hr style="border-color: rgb(203, 204, 204); margin-top:0px">
         <p style="font-size:14px">{{mensaje.Contenido}}</p> 
       </rectang-p>   
      </transition-group>     
      <div class="naveg">
        <button class="btn btn-primary navega" @click="prev" :disabled="pag<=0">Previous</button>
        <div class="navega">{{pag}}</div>
        <button class="btn btn-primary navega" @click="next" :disabled="contMensj<=6+pag*6">Next</button>
      </div>
    </div>

    <div class="container uno">
      <h3 style="text-align: center">Médicos Activos</h3>
      <hr style="border-color: rgb(203, 204, 204); margin-top:0px">
      <p class="usermedic">{{bienvenido}}</p> 
      <h3 style="text-align: center">Pacientes Activos</h3>
      <hr style="border-color: rgb(203, 204, 204); margin-top:0px">

    </div>
   
    <div class="form-group mensaj">
      <h3>Escriba su pregunta aqui</h3>
      <input class="form-control" type="text" placeholder="Asunto" v-model="asunto">
      <textarea class="form-control" placeholder="Mensaje" cols="5" rows="5" v-model="texto"></textarea>   
      <button class="btn btn-primary" style="float: right;margin-top:4px;" @click.prevent="postear">Post</button> 
    </div>
    
  </div>
</template>

<script>
import rectangP from './rectang.vue'
export default {
  data:function(){
    return{
    mensajes:[
      {Asunto:"Asunto",Contenido:"Mi primer mensaje"},
      {Asunto: "Asunto 2",Contenido:"Mi segundo mensaje"}
    ],
    mensajesMostrar:[
      {Asunto:"Asunto 2",Contenido:"Mi segundo mensaje"},
      {Asunto: "Asunto",Contenido:"Mi primer mensaje"}
    ],
    texto: "",
    asunto:"",
    contMensj: 2,
    pag:0
    
  }},
  computed:{
     bienvenido(){
       return this.$store.state.nombre;
     }
  },
  methods:{
    postear: function(){
      if(this.asunto!=="" && this.texto!=="")
      {
      this.contMensj++;
      this.mensajes.push({Asunto:this.asunto,Contenido:this.texto}); 
      for (let index = 0; index < 6; index++) {  
        if (index<this.contMensj) {
          this.mensajesMostrar.splice(index,1,this.mensajes[this.contMensj-1-index]); 
        }    
      }
      this.texto="";
      this.asunto="";
      }
    },
    next: function() {   
    if(this.contMensj>6*this.pag+6) 
      this.pag++;
      for (let index = 0; index < 6; index++) {
        if(index<=this.contMensj-1-6*this.pag)
        {this.mensajesMostrar[index]=this.mensajes[this.contMensj-1-index-6*this.pag];}       
        else
        {this.mensajesMostrar.splice(index,6);}
      }
    },
    prev: function () {
      if(this.pag>0)
      {this.pag--;
      for (let index = 0; index < 6; index++) {
        if(index<=this.contMensj-1-6*this.pag)
        {this.mensajesMostrar[index]=this.mensajes[this.contMensj-1-index-6*this.pag];}             
      }
    }}   
  },
  components:{
      rectangP
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bienvenido{
  display: block;
  margin: 5px;
  padding: 5px;
  background-color: rgba(80, 148, 238, 0.616);
  box-shadow: 0px 0px 6px;
  border-radius: 3px;
}
.proyectos{
  padding: 5px;
  height: 350px; 
  border-radius: 3px; 
}
.container{
    float: left; 
    border-radius: 3px;
    background-color: rgba(134, 132, 132, 0.192);
    margin: 0.5%;
    height: 300px; 
    padding: 0;    
}
.uno{
    width: 23%;  
}
.dos{
    width: 75%;
    padding: 20px;
    height: 850px;
}
.naveg{
  text-align: center;
}
.naveg .btn{
  margin: 10px;
}
.navega{
  width: 15%;
  display: inline-block;
  color: rgb(13, 13, 14);
}
.mensaj{
  background-color: rgb(122, 122, 122);
  display: inline-block;
  width: 75.2%;
  margin: 5px;
  padding: 8px;
  border-radius: 3px;
  box-shadow: 0px 0px 8px rgb(122, 122, 122); 
}
.mensaj h3{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: aliceblue;
}
span{
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  background-color: rgb(64, 70, 64);
  border-radius: 3px;  
}
.usermedic{
  background-color: rgb(23, 128, 197);
  display: inline-block;
  margin: 3px;
  padding: 3px;
  border-radius: 2px;
  color: rgb(254, 254, 255);
}

</style>