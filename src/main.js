import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import InputMask from 'vue-input-mask';
 
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import VueMeta from 'vue-meta'
// import Vuesax from 'vuesax'

// import 'vuesax/dist/vuesax.css'

// Vue.component('input-mask', InputMask)
Vue.use(Vuex)
// Vue.use(VueMeta)
// Vue.use(Vuesax)
// Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
	// created() {
	// 	AOS.init()
	// },
	router,
	store,
	render: h => h(App),
}).$mount('#app')
