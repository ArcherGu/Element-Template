import axios from 'axios';
import { Message } from 'element-ui';

const axiosInstance = axios.create({});
axiosInstance.defaults.baseURL = process.env.VUE_APP_API;

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (!error.response) {
        Message.error('网络错误！');
    }
    return Promise.reject(error);
})

export default ({ Vue }) => {
    Vue.prototype.$axios = axiosInstance;
    Vue.axios = Vue.prototype.$axios;
}

export { axiosInstance };
