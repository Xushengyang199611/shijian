import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Header from '../../src/components/common/Header.vue'
// import Footer from '../../src/components/common/Footer.vue'
import Index from '../components/index/Index.vue'//首页
import Product from '../components/product/Product'//鲜花产品
import Class from '../components/class/Class.vue'//花语课堂
import Rose from '../components/class/flowerlanguage/Rose'//玫瑰
import Tulips from '../components/class/flowerlanguage/Tulips'//郁金香

import Encyclopedias from '../components/encyclopedias/Encyclopedias.vue'//拾间百科
import AboutWe from '../components/aboutwe/AboutWe.vue'//关于我们
import NotFound from '../components/common/NotFound.vue'//404页面



Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:"/",component:Index}, //首页
    {path:"/Index",component:Index}, //首页
    {path:"/Product",component:Product}, //鲜花产品
    {path:"/Class",component:Class}, //花语课堂
    {path:"/Rose",component:Rose}, //玫瑰
    {path:"/Tulips",component:Tulips}, //郁金香
    {path:"/Encyclopedias",component:Encyclopedias}, //拾间百科
    {path:"/AboutWe",component:AboutWe}, //关于我们
    {path:"*",component:NotFound} //404页面
    // {path:'/Header',component:Header},
    // {path:'/Footer',component:Footer}
  ]
})
