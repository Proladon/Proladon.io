import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      current_section: 0
  },
    mutations: {
        changeSection(state, data) {
            state.current_section = data
        }
  },
    actions: {

  },
  modules: {
  }
})
