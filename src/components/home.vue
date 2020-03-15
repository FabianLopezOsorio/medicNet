<template>
<div class="home">
 <h1>Willkommen</h1>
 
 <router-link :to="{name:'usuarios'}" tag="li">
    <a class="btn btn-info">Log in</a>
 </router-link>

 <div>
    <div class="ajuste divAct" @click="progresso(1)"></div>
    <hr class="ccc" :class="{activo:clase1}">
    <div class="ajuste" :class="{divAct:clase1}" @click="progresso(2)"></div>
    <hr class="ccc" :class="{activo:clase2}">
    <div class="ajuste" :class="{divAct:clase2}" @click="progresso(3)"></div>
    <hr class="ccc" :class="{activo:clase3}">
    <div class="ajuste" :class="{divAct:clase3}" @click="progresso(4)"></div>
    <hr class="ccc" :class="{activo:clase4}">
    <div class="ajuste" :class="{divAct:clase4}" @click="progresso(5)"></div>

  </div>
</div>
    
</template>

<script>
export default {
    data: function(){
return{
    clase1: false,
    clase2: false,
    clase3: false,
    clase4: false,
    valor:0
}
  },
    methods:{
      progresso: function (a) {
          if (a==1) {
              this.clase1=false;
              this.clase2=false;
              this.clase3=false;
              this.clase4=false;
          }
          if (a==2) {
              this.clase1=true;
              this.clase2=false;
              this.clase3=false;
              this.clase4=false;
          }
          if (a==3) {
              this.clase1=true;
              this.clase2=true;
              this.clase3=false;
              this.clase4=false;
          }
          if (a==4) {
              this.clase1=true;
              this.clase2=true;
              this.clase3=true;
              this.clase4=false;
          }
          if (a==5) {
              this.clase1=true;
              this.clase2=true;
              this.clase3=true;
              this.clase4=true;
          }
          
          this.valor=a;          
      }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}
.home{
    text-align: center;
}
.home li{
    list-style: none;
}
.ajuste{
  transition: 0.5s all ease-in;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: rgb(132, 132, 133);
}
.ccc{
  transition: 0.5s all ease-in;
  border-color:rgb(99, 99, 100);
  width:10%;
  margin-bottom: 7px;
}
.ajuste, .ccc{
display:inline-block;
}
.activo{
    transition: 0.5s all ease-out;
    border-color:rgb(9, 255, 0);
    border-bottom: 4px solid #00ff00;
    margin-bottom: 5px;
}
.divAct{
    transition: 0.5s all ease-out;
    border: 4px solid #00ff00;
    width: 20px;
    height: 20px;
    background-color: rgb(5, 100, 1);
}
.ajuste:hover{
    cursor: pointer;
    
}
</style>