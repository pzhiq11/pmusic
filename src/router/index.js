import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/listview',
    name: 'listview',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue')
  },
  {
    path: '/Searchview',
    name: 'Searchview',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Recommend.vue')
  },
  {
    path: '/Daily',
    name: 'daily',
    component: () => import(/* webpackChunkName: "about" */ '../views/Daily.vue')
  },
  {
    path: '/MvDetail',
    name: 'mvDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/MvDetail.vue')
  },
  {
    path: '/magic',
    name: 'magic',
    component: () => import(/* webpackChunkName: "about" */ '../views/magic.vue')
  },
  {
    path: '/me',
    name: 'me',
    beforeEnter:(to,from,next)=>{

      if(store.state.user.isLogin){
        next()
      }else{
        next('/Login')
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(process.env.BASE_URL),
  routes
})


export default  router