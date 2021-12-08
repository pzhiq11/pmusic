<template>
<!-- 发现好歌单组件 -->
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mList">
      <div class="swiper-container" id="musicSwiper">
        <div class="swiper-wrapper">
          <router-link :to="{name:'listview',query:{id:item.id}}" class="swiper-slide" v-for="item in state.musicList" :key="item.id">
            <img :src="item.picUrl" :alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="count">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
              </svg>  
              {{ changeVaule(item.playCount) }}
            </div>
          </router-link>
        </div>
        <!-- Add Pagination -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { getMusicList } from "../api/index";
import store from '../store/index'
import { reactive, onMounted, onUpdated } from "vue";

export default {
  setup() {
    let state = reactive({ musicList: [] });
    // 改变数值展示方式
    function changeVaule(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num >= 1000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    onMounted(async () => {
      //   请求歌单列表;
      let res = await getMusicList(10);
      // console.log(res);
      state.musicList = res.data.result;
      // console.log(this.musicList);
      // store.commit('setPlaylist',state.musicList.tracks)
    });
    onUpdated(() => {
      //   歌单列表swiper配置
      var swiper = new Swiper("#musicSwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      state,
      changeVaule,
    };
  },
};

// vue2
// export default {
//   data() {
//     return {
//       musicList: [],
//     };
//   },
//   methods:{
//       // 将获取的播放量数据做处理 超过一亿和一万则将播放量换算成拼接单位
//       changeVaule(num){
//           let res = 0
//           if(num >= 100000000){
//               res = num/100000000;
//               res = res.toFixed(2) +'亿'
//           }else if(num >=1000){
//                res = num/10000;
//               res = res.toFixed(2) +'万'
//           }
//           return res
//       }
//   },

//   async mounted() {
//        //请求歌单列表
//     let res = await getMusicList(10);
//     // console.log(res);
//     this.musicList = res.data.result;
//     // console.log(this.musicList);
//   },
//   updated() {
//     //   歌单列表swiper配置
//     var swiper = new Swiper("#musicSwiper", {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     });
//   },

// };
</script>


<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0.3rem;
  box-sizing: border-box;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 0.36 rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      width: 1.2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
    }
  }
  .mList {
    .swiper-container {
      width: 100%;
      height: 2.8rem;
    }
    .swiper-slide {
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        height: 70%;
        width: 100%;
        border-radius: 0.1rem;
      }
      .name {
        height: 0.6rem;
        width: 100%;
        font-size: 0.24rem;
        line-height: 0.34rem;
        overflow: hidden;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: white;
        display: flex;
        align-items: center;
        .icon {
          fill: white;
        }
      }
    }
  }
}
</style>