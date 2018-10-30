<template>
  <div v-theme:column="'wide'" id="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filterBlogs" :key="blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts', {
    }).then(function (data) {
      console.log(data)
      this.blogs = data.body.slice(0, 10)
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
