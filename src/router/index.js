import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import showBlog from '../components/showBlog'
import addBlog from '../components/addBlog'

Vue.use(Router)

// this is how you add a route.  make sure you import first
export default new Router({
  routes: [
    {
      path: '/',
      name: 'show Blog',
      component: showBlog
    },
    {
      path: '/add', component: addBlog
    }
  ],
  mode: 'history'
})
