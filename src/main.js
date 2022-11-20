import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'tachyons/css/tachyons.css';
import Cloudinary from "cloudinary-vue";

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "moerayo",
    secure: true }
});
