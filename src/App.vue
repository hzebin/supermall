<template>
  <div id="app">
    <!--内容的占位-->
    <router-view/>

    <!--下方的导航条-->
    <MainTarBar/>
  </div>
</template>

<script>
  import MainTarBar from 'components/context/tabbar/MainTabBar';

  export default {
    name: 'App',
    components: {
      MainTarBar
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
