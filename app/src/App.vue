<template>
  <div id="app">
    <Top/>
    <Latest :topics="posts" />
    <Posts :topics="posts" :counted="postCount" @showMore="this.showMore"/>
  </div>
</template>

<script>
import Top from './components/Header'
import Latest from './components/Latest'
import Posts from './components/Posts'
export default {
  name: 'App',
  data () {
    return{
      API_URL: "http://dev.vn:3000/api/",
      posts: [],
      postCount: 6
    }
  },
  components: { Top, Latest, Posts },
  methods: {
    getPosts () {
      fetch(this.API_URL + 'post/list')
      .then(data =>{
        return data.json();
      })
      .then( json => {
        this.posts = json.data;
        this.posts = this.posts.sort((a,b) => {
          if(a.timestamp < b.timestamp)return 1;
          if(a.timestamp > b.timestamp)return -1;
          return 0;
        })
      })
    },
    showMore () {
      this.postCount += 6;
    }
  },
  beforeMount () {
    this.getPosts();
  }
}
</script>

<style lang="scss" scoped>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body{
  background-color: #F3F3F3;
  font-family: "Rockwell",serif;
  h3{
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
