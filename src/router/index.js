import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    name: 'Members',
    path: '/members',
    component: () => import('@/views/members/members.vue')
  },
  {
    name: 'Publications',
    path: '/publications',
    component: () => import('@/views/publications/publications.vue')
  },
  {
    name: 'Highlights',
    path: '/highlights',
    component: () => import('@/views/highlights/highlights.vue')
  },
  {
    name: 'Presentations',
    path: '/presentations',
    component: () => import('@/views/presentations/presentations.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

export default router
