import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 根据前端的跨域方式做调整 （如接口代理）/a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let resp = response.data;
  if(resp.status == 0) {
    // 此data为接口返回值
    return resp.data;
  }else if(resp.status == 10) {
    window.location.href = '/#/login';
  }else{
    alert(resp.msg)
  }
})

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
