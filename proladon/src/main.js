import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import Vueprlx from "vue-prlx";

Vue.config.productionTip = false;
Vue.use(Vueprlx)
new Vue({
    created() {
        AOS.init({
            duration: 1000,
        });
    },
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
