<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt=""/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  //轮播图组件
  import {Swiper, SwiperItem} from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        //defalut为函数，return
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
