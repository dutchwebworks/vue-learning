import Vue from 'vue';
import App from "./App";
import Vuelidate from "vuelidate";
import router from './router'
import { store } from "./store/store.js";
import FancyBackground from "@/plugins/FancyBackground";
import ModalConfirm from "@/plugins/ModalConfirm";

import '@/scss/style.scss'; // https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/

Vue.use(Vuelidate);
Vue.use(FancyBackground);
Vue.use(ModalConfirm);

Vue.config.productionTip = false;

Vue.filter("euroCurrency", function(price){
	return Number(price).toLocaleString("nl-NL", {
		style: "currency",
        currency: "EUR"
	});
});

Vue.filter("slugify", function(title){
	return title.toString().toLowerCase()
	    .replace(/\s+/g, '-')           // Replace spaces with -
	    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
	    .replace(/^-+/, '')             // Trim - from start of text
	    .replace(/-+$/, '');            // Trim - from end of text
});

Vue.filter("inlineList", function(listItems){
	if (listItems.length > 0) {
		return listItems.join(", ");
	} else {
		return listItems[0];
	}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
