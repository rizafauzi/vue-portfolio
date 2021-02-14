import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0c1c1c8 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _26a18a3c = () => interopDefault(import('../pages/project/_slug.vue' /* webpackChunkName: "pages/project/_slug" */))
const _45f1ada0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/projects",
    component: _c0c1c1c8,
    name: "projects"
  }, {
    path: "/project/:slug?",
    component: _26a18a3c,
    name: "project-slug"
  }, {
    path: "/",
    component: _45f1ada0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
