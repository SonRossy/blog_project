<template>
  <div id="single-blog">
    <h1>{{this.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {

  data () {
    return {
      id: this.$route.params.id, // will get the id call id from the routes array
      blog: {

      }
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
      console.log('here')
      this.blog = data.body
    })
  }
}

</script>
