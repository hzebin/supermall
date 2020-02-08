<template>
  <div>
    <NavBar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    box-shadow: 0px 2px 1px rgba(100, 100, 100, .1);
  }
</style>
