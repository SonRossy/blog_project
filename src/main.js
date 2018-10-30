// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

// custom directives, here is how you create one
Vue.directive('rainbow', {

  // bind fire when this directive is called
  bind (el, binding, vnode) {
    /**
     * el means the element that that directive will be called on
     * binding the value passed to directive
     * below we use the elemnt and give style a random color
     */
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

// filters filter name is to-uppercase and will return the value in upper case
Vue.filter('to-uppercase', function (value) {
  // value is the value of that we are going to filter
  return value.toUpperCase()
})

// another filter
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '.....'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
