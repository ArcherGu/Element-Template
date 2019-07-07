import { isArrayOrString } from "@/utils";
import setRoutes from "@/router/utils";
import { getToken } from '@/utils/token';

const whiteList = ['/login'];

export default ({ router, store, Vue }) => {
    router.beforeEach((to, from, next) => {
        if (getToken()) {
            if (!store.getters['auth/loggedIn']) {
                store.dispatch('auth/fetch').then(() => {
                    next({ ...to });
                }).catch(() => {
                    store.dispatch('auth/logout').then(() => {
                        next();
                    })
                })
            }
            else if (!store.getters['auth/gotRouters']) {
                store.dispatch('auth/getUserRouters').then(() => {
                    setRoutes({ store, router });
                    next({ ...to, replace: true });
                }).catch((error) => {
                    console.log(error);
                    store.dispatch('auth/logout').then(() => {
                        next();
                    })
                });
            }
            else if (to.path === '/login'){
                next({ path: '/' });
            }
            else {
                next();
            }
        }
        else {
            if (whiteList.indexOf(to.path) !== -1) {
                next();
            } else {
                next('/login');
            }
        }
    })

    var helper = {}
    helper.loggedIn = () => {
        return store.getters['auth/loggedIn']
    }
    helper.login = (data) => {
        return store.dispatch('auth/login', data)
    }
    helper.logout = () => {
        return store.dispatch('auth/logout')
    }
    helper.fetch = () => {
        return store.dispatch('auth/fetch')
    }
    helper.user = () => {
        return store.getters['auth/user']
    }
    Vue.prototype.$auth = helper
}
