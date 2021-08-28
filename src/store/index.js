import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        access: localStorage.getItem('access') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        refresh: localStorage.getItem('refresh') || null,
        image: null
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.access = payload.access
            state.user = payload.user
            state.refresh = payload.refresh
        },
        LOGOUT(state) {
            state.access = null
            state.user = null
            state.refresh = null
            localStorage.removeItem("access")
            localStorage.removeItem("user")
            localStorage.removeItem("refresh")
        },
        set(state, [variable, value]) {
            state[variable] = value
        },
    },
    actions: {

    },
    modules: {}
})