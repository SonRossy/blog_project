<template>
  <div v-theme:column="'wide'" id="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filterBlogs" :key="blog.id">
     <router-link v-bind:to="'/blog/'+ blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>

  </div>
</template>

<script>
import searchMixing from '../mixins/searchMixing'
export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created () {
    this.$http.get('https://vue-blog-6d617.firebaseio.com/posts.json', {
    }).then(function (data) {
      return data.json()
    }).then(function (data) {
      let blogsArray = []
      for (let key in data) { // retreiving unique key from objects
        data[key].id = key // giving data objecta new property call id
        blogsArray.push(data[key]) // saving object in blogsArray
      }
      console.log(blogsArray)
      this.blogs = blogsArray
    })
  },
  computed: {
  },
  mixins: [searchMixing]
}
</script>

<style scoped>

  #show-blog{
    max-width: 1000px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eeeeee;
  }

</style>
