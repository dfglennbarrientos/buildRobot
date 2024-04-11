<template>
<div class="home">
<div>
<img src="../assets/robot-home.png"  aria-hidden="true" alt="robot" class="robot">
</div>
<div class="get-started">
<router-link to="/build"  >Get started.</router-link>
build your robot!
</div>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home{
  text-align: center;
}
.robot{
 width: 150;
}
</style>
