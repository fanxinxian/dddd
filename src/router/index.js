import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Left from '../components/Left'
import Right from '../components/Right'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },{
    path:'/home',
    name:'home',
    component:Home,
    children:[
      {
        path:'/home',
        redirect:'/home/left'
      },{
        path:'/home/left',
        name:'left',
        component:Left
      },{
        path:'/home/right',
        name:'right',
        component:Right
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
