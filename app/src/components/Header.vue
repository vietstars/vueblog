<template>
  <header>
    <div class="top-left">
      <img src="../assets/logo.png" alt="blog logo png" class="app-logo" />
    </div>
    <div class="top-center">
      <div class="title">
        <h3 class="header-top">Inside</h3>
        <h1>Vue blog</h1>
        <h3 class="header-bottom">Vietstar</h3>  
      </div>
    </div>
    <div class="top-right">
      <label for="search-bar">
        <img src="../assets/search-icon.svg" alt="search-icon" class="search-icon" />
        <input type="text" id="search-bar"  name="search-bar" placeholder="search..." />
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="scss" scoped>
header{
  display:flex;
  justify-content: center;
  padding:50px 50px 25px;

  .top-left{
    flex:1;
    
    .app-logo{
      width:75px;
      border-radius: 50%;
    }
  }

  .top-center{

    h3{
      font-size: 32px;
      font-style: italic;
      font-weight: 400;
      margin:0;
      &.header-bottom{
        text-align: right;
        font-size: 25px;
      }
    }

    h1{
      color:#171717;
      font-size: 72px;
      margin:0;
    }
  }

  .top-right{
    flex:1;
    display:flex;
    justify-content: flex-end;

    label{
      position: relative;
      display:block;
      width: 300px;
      height: auto;

        input{
          width:100%;
          height: 35px;
          background-color: #FFF;
          box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
          font-family: "Rockwell",serif;
          padding: 5px 0px 0px 35px;
          border-radius: 17.5px;
          appearance: none;
          font-size: 16px;
          color:#171717;
          border:none;
          outline:none;
          margin:0;
          &::placeholder{
            color:#888888;
          }
        }

        .search-icon{
          position: absolute;
          width: 25px;
          margin: 8px 5px 5px;
        }
    }
  }
}  
</style>
