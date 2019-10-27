// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//初始化设置
import './assets/css/normalize.css'
import './assets/css/Eric.css'

//引入全局组件
import MyHeader from '../src/components/common/MyHeader.vue'
Vue.component("my-header",MyHeader);

import MyFooter from '../src/components/common/MyFooter.vue'
Vue.component("my-footer",MyFooter);


//1.引入第三方组件库element-ui
//1.1完成引入所有组件
import ElementUI from 'element-ui'
//1.2单引入element-ui样式文件
import 'element-ui/lib/theme-chalk/index.css'
//1.3将element-ui 注册vue
Vue.use(ElementUI)

//2. main.js配置axios-
//2.1引入axios库
import axios from "axios"
//2.2配置请求时保存session信息
axios.defaults.withCredentials=true
//2.3：配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
// 注意：地址栏必须输入！！！！！！！
// http://127.0.0.1:8080/！！！！！
// 如果地址http://localhost 报错
//2.4：注册
Vue.prototype.axios = axios;

//3.引入vuex第三方模块
import Vuex from "vuex"
//3.1.先注册vuex
Vue.use(Vuex)
//3.2.创建存储对象
var store=new Vuex.Store({
  state:{//共享数据
    fa:12, //共享:亮哥发量
    cartCount:0 //共享:购物车数量
  },
  mutations:{ //修改共享数据
    addCart(state){  //修改购物车数量
      state.cartCount++;
    },
    subCart(state){  //修改购物车数量
      state.cartCount--;
    },
    clearCart(state){  //修改购物车数量
      state.cartCount=0;
    },
    subItem(state){
      state.fa--; //一次减一根
    },
    clear(state){
      state.fa=0; //清空
    }
  },
  getters:{ //获取共享数据
    getCart(state){ //获取购物车数量
      return state.cartCount;
    },
    getFa(state){
      return state.fa;
    }
  },
  actions:{//异步修改数据
    modifyCount:(context)=>{
      //模拟异步操作
      setTimeout(()=>{
        //调用mutations方法
        context.commit("clear");
      },500)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
