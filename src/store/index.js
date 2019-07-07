import Vue from "vue";
import Vuex from "vuex";

//modules
import auth from './auth'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },
    strict: process.env.NODE_ENV !== 'production'
});
