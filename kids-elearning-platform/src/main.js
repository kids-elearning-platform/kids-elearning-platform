import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";











// import 'vue-chartkick'

// import chart from 'chart.js' 
// import Chartkick from "vue-chartkick";
// App.use(Chartkick.use(chart))
// App.config.productionTip=false

// new App({
//     render : data =>data(App),
// }).$mount('#app')





createApp(App).use(router).mount("#app");
exports.default={App}
