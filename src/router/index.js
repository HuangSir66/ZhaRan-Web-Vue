import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import layout from "@/components/Layout";
import homeView from "@/views/HomeView";
import about from "@/views/about";
import history from "@/views/history";
import production from "@/views/production";
import teachGraphic1 from "@/views/TeachGraphic1";
import teachGraphic2 from "@/views/TeachGraphic2";
import teachGraphic3 from "@/views/TeachGraphic3";
import teachVideo1 from "@/views/TeachVideo1";
import teachVideo2 from "@/views/TeachVideo2";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: homeView,
      },
      {
        path: '/about',
        name: 'about',
        component: about,
      },
      {
        path: '/history',
        name: 'history',
        component: history,
      },
      {
        path: '/production',
        name: 'production',
        component: production,
      },
      {
        path: '/teachgraphic1',
        name: 'teachgraphic1',
        component: teachGraphic1,
      },
      {
        path: '/teachgraphic2',
        name: 'teachgraphic2',
        component: teachGraphic2,
      },
      {
        path: '/teachgraphic3',
        name: 'teachgraphic3',
        component: teachGraphic3,
      },
      {
        path: '/teachvideo1',
        name: 'teachvideo1',
        component: teachVideo1,
      },
      {
        path: '/teachvideo2',
        name: 'teachvideo2',
        component: teachVideo2,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
