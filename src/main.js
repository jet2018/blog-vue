import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import PrimeVue from 'primevue/config';
import './registerServiceWorker'
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import VueTimeago from 'vue-timeago'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Toasted from 'vue-toasted';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Toasted, { keepOnHover: true, singleton: true })

Vue.use(PrimeVue, { 'riple': true });
Vue.use(VueTimeago, {
    name: 'Timeago', // Component name, `Timeago` by default
    locale: undefined, // Default locale
    locales: {
        'zh-CN': require('date-fns/locale/zh_cn'),
        'ja': require('date-fns/locale/ja'),
    }
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')