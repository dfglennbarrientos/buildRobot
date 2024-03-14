<template>
  <header>
    <nav>
      <ul>
 <li class="nav-item">
Build a Bot
 </li>       
      </ul>
    </nav>
  </header>
   <main>
    <div class="robot-name">
      This is a test
    </div>
    <RobotBuilder></RobotBuilder>
    <!-- <ProductSearch></ProductSearch> -->
   </main>
</template>

<script>
import RobotBuilder from './build/RobotBuilder.vue';
// import ProductSearch from './search/ProductSearch.vue';
export default {
  name: 'App',
  components: {
    RobotBuilder,
    // ProductSearch,
  },
};
</script>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    body{
      background: linear-gradient(to bottom,#555,#999);
      background-attachment: fixed;
    }
</style>
<style scoped>
.robot-name{
  color: red;
}
  main{
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    width: 1400px;
    min-height: 300px;
  }
  header{
    background-color: #999;
    width: 1460px ;
    margin: 0 auto;
  }
</style>