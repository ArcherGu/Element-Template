import Vue from "vue";
import Router from "vue-router";
import constantRouterMap from "./routes"

Vue.use(Router);

export default new Router({
    mode: "history", //后端支持可启用
    scrollBehavior: () => ({ x: 0, y: 0 }),
    base: process.env.BASE_URL,
    routes: constantRouterMap
});