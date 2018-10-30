<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
import listBlogs from './components/listBlogs'

export default {
  components: {
    'addBlog': addBlog,
    'show-blog': showBlog,
    'list-blogs': listBlogs
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
