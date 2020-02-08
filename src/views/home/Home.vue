<template>
  <div id="home">
    <!--导航条-->
    <NavBar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </NavBar>
    <!--轮播图组件-->
    <HomeSwiper :banners="banners"/>
    <!--推荐展示图-->
    <HomeHomeRecommendView :recommend="recommend"/>
    <!--推荐图-->
    <HomeFeatureView/>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  //轮播图组件
  import HomeSwiper from './childComps/HomeSwiper';
  //推荐组件
  import HomeHomeRecommendView from './childComps/HomeRecommendView';
  //推荐图
  import HomeFeatureView from './childComps/HomeFeatureView';

  //请求home的多种数据
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeHomeRecommendView,
      HomeFeatureView
    },
    data() {
      return {
        //轮播图数据
        banners: [],
        //推荐数据
        recommend: [],
        dKeyword: [],
        keywords: []

      }
    },
    // 组件生命周期created()
    created() {
      //获取多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    box-shadow: 0px 2px 1px rgba(100, 100, 100, .1);

    /*让导航条固定不动*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 9;
  }

  #home {
    padding-top: 44px;
  }
</style>
