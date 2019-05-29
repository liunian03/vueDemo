// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

//创建和挂载根实例
const app = new Vue({
  router,
  components: { App },
  template: '<App/>'

}).$mount('#app');


