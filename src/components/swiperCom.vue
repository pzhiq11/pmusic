<template>
<!-- 获取轮播图组件 -->
  <div id="swiperCom1">
    <div class="swiper-container" id="bannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item, in imgs" :key="item.id">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import axios from "axios";
import { getBanner } from "../api/index";

export default {
  data() {
    return {
      imgs: [
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper2.jpg") },
       
      ],
    };
  },
  async mounted() {
    var mySwiper = new Swiper("#bannerSwiper", {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });

    // 获取banner的图片 通过axios获取
    let res = await getBanner(1);
    // console.log(res);
    this.imgs = res.data.banners;
    // console.log(this.imgs);
  },
};
</script>

<style lang="less" scoped>
#swiperCom1 {
  width: 7.5rem;
  .swiper-container {
    width: 7.1rem;
    height: 2.8rem;
    border-radius: 0.1rem;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
}
</style>