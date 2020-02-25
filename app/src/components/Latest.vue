<template>
  <section class="latest">
    <h3>Latest Post</h3>
    <div class="posts">
      <div v-for="(post,i) in topics.slice(0,6)" :key="post._id" :class="`post ${i==1?'col-2 row-2':(i==2||i==3?'row-2':(i==5?'col-2':''))}`">
        <div class="image" :style="{'background-image':'url('+require('../assets/post-'+(i+1)+'-image@2x.png')+')'}"></div>
        <h4 :title="post.title">{{ post.title}}</h4>
      </div>
    </div>    
  </section>
</template>

<script>
   
export default {
  name: 'latest',
  props: ['topics']
}
</script>

<style lang="scss" scoped>
.latest{
  display: block;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  .posts{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 196px);
    grid-gap: 20px;
    margin: 15px;

    .post{
      
      display: flex;
      flex-direction: column;

      background-color: #FFF;
      box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.2);

      h4{
        box-sizing: border-box;
        padding: 3px 15px 0px 15px;
        line-height: 50px;
        height: 50px;
        margin: 0px;
        color: #171717;
        font-size: 20px;
        font-weight: 400;
        text-overflow: ellipsis;
      }
      .image{
        flex:1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      &.col-2{
        grid-column: span 2;
      }
      &.col-3{
        grid-column: span 3;
      }
      &.row-2{
        grid-row: span 2;
      }
      &.row-3{
        grid-row: span 3;
      }  
    }
  }
}
</style>
