// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/view';
import axios from 'axios';

Vue.prototype.axios = axios;

//  element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
//注册使用
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('listIcon',{
  bind(el,binding){
    if(binding.arg === 'iconBg'){
      el.style.paddingLeft = '0.4rem';
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
