import { axiosInstance } from '@/boot/axios';
import { doLogin, getUser, getSelfRouters } from '@/api/auth';
import { getToken, setToken, removeToken } from '@/utils/token';

export function login (state, data) {
    return doLogin(data).then((response) => {
        const token = response.data.result.token;
        state.commit('setUser', response.data.result.user);
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        setToken(token);
    });
}

export function fetch (state) {
    let token = getToken();
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return getUser().then((response) => {
            state.commit('setUser', response.data.result.user);
        });
    }
}

export function getUserRouters (state) {
    return getSelfRouters().then((response) => {
        state.commit('setRouters', response.data.result);
    })
}

export function logout (state) {
    removeToken();
    state.commit('setUser', null)
}
