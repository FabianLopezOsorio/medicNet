import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre: "",
        password: "",
        nav: false
    },
    mutations: {
        usuario: (state, nombre) => {
            state.nombre = nombre.name;
            state.password = nombre.pass;
            state.nav = nombre.nav;
        },
        logOut: (state, data) => {
            state.nav = data.nav;
        }
    },
    actions: {
        usuario: ({ commit }, nombre) => {
            commit('usuario', nombre);
        },
        logOut: ({ commit }, data) => {
            commit('logOut', data);
        }
    }
});