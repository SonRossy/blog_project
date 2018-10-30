export default {
  computed: {
    filterBlogs: function () {
      // this filter take a parameter(value of search box) and see if it's inside of the blog's title, return the whole array if empty
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  }
}
