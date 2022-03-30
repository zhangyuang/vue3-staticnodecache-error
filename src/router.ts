import foo from './components/foo.vue'
import Hello from './components/HelloWorld.vue'
import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', component: foo },
  { path: '/hello', component:  Hello},
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, 
})

export {
  router
}