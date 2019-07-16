import Bus from 'vue';

export default ({ Vue }) => {
    Vue.prototype.$bus = new Bus();
};