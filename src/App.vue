<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
import listBlogs from './components/listBlogs'
import header from './components/header'

export default {
  components: {
    'addBlog': addBlog,
    'show-blog': showBlog,
    'list-blogs': listBlogs,
    'app-header': header
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
