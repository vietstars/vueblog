<template>
  <section class="view-more">
    <div class="posts" v-if="counted>6">
      <div v-for="(post,i) in topics.slice(6,counted)" :key="post._id" :class="`post ${i==1?'col-2 row-2':(i==2||i==3?'row-2':(i==5?'col-2':''))}`">
          <div class="image" :style="{'background-image':'url('+require('../assets/post-'+(i+1)+'-image@2x.png')+')'}"></div>
          <h4 :title="post.title">{{ post.title }} {{i}}</h4>
      </div>
    </div>
    <button class="load" @click="$emit('showMore')" v-if="counted < topics.length">See More</button>
  </section>
</template>

<script>
export default {
  name: 'posts',
  props: ['topics','counted']
}
</script>

<style lang="scss" scoped>
.view-more{
  display: block;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

    
  .load{
    display: block;
    max-width: 250px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    outline: none;
    border: none;
    border-radius: 3px;
    appearance: none;
    background-color: #FFCE00;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.2);
    color: #171717;
    font-family: 'Rockwell',serif;
    font-size: 28px;
    box-sizing: border-box;
  }
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
