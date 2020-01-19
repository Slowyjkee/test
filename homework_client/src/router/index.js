import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from "../components/Admin";
import Persons from "../components/routes/Persons";
import Debts from "../components/routes/Debts";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: Admin,
    redirect:
        {
          name: 'persons'
        },
    children:[
      {
        path: 'persons',
        name: 'persons',
        component: Persons
      },
      {
        path: 'debts',
        name: 'debts',
        component: Debts
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
