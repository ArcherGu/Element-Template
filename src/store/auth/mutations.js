import constantRoutes from "@/router/routes";

export function setUser (state, data) {
    state.user = data
}

export function setRouters (state, data) {
    state.routers = constantRoutes.concat(data);
}
