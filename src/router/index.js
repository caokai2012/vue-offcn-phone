import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from  '@/components/infos/Info'
import InfoLine from  '@/components/infos/InfoLine'
import InfoNews from "../components/infos/InfoNews";
import InfoGuid from "../components/infos/InfoGuid";
import List  from "@/components/List";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/info',
      name: 'info',
      component: Info,
      children:[
        {path:'/',component: InfoLine},
        {path:'infoline',component: InfoLine},
        {path:'infonews',component: InfoNews},
        {path:'infoguid',component: InfoGuid},
      ],
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
  ]
})
