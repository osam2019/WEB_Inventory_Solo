import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import Repair from "../views/Repair"
import History from "../views/History"
import About from "../views/About"
Vue.use(Router);

export default new Router({
    mode : "history",
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/repair',
            name: 'repair',
            component: Repair
          },{
            path: '/history',
            name: 'history',
            component: History
          },{
            path: '/About',
            name: 'About',
            component: About
          }  
    ]
})