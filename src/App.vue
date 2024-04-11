<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Home'}" >
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo">
            Home
          </router-link>

        </li>      
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Build'}" >
            Build
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Search'}" >
            Search
          </router-link>
        </li> 
      </ul>
    </nav>
  </header>
   <main>
    <router-view></router-view>
   </main>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  provide:{
    UserName:"Glenn",
  },
};
</script>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px; */
    }
    body{
      background: linear-gradient(to bottom,#555,#999);
      background-attachment: fixed;
    }


</style>
<style scoped>
  main{
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    width: 800px;
    min-height: 300px;
  }
  header{
    background-color: #999;
    width: 800x ;
    margin: 0 auto;
  }
  .nav-link{
text-decoration: none ;
color: inherit;  
}
  .nav-item{
    display: inline-block;
    padding: 5px,10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
  }
  
  ul{
    padding: 3px;
    display: flex;
  }
  .robot-name{
    color: red;
  }
  
  .logo{
      vertical-align: middle;
      height: 30px;
    }
    .router-link-active{
      color: white;
    }

</style>