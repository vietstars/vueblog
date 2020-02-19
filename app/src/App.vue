<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
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
