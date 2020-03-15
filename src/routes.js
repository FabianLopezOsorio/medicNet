import proyectos from './components/proyectos.vue'
import usuarios from './components/seleccion.vue'
import home from './components/home.vue'

export const routes = [
    { path: "", component: home, name: "home" },
    { path: "/post", component: proyectos, name: "post" },
    { path: "/usuarios", component: usuarios, name: "usuarios" }
];