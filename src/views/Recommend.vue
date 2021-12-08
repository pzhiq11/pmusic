<template>
  <!-- 排行榜页面 -->
  <div>
    <div class="recommendTop">
      <img :src="recommendList.coverImgUrl" alt="" class="bg" />
      <totalTop class="ttop" :title="title"></totalTop>
      <img :src="recommendList.coverImgUrl" alt="" />
    </div>
    <div class="recommendList">
      <playList :playlist="recommendList"></playList>
    </div>
  </div>
</template>

<script>
import { recommend } from "../api/index";
import { getPlayDetail } from "../api/index";
import totalTop from "../components/totalTop.vue";
import { useRoute } from "vue-router";
import playList from "../components/playList.vue";
export default {
  data() {
    return {
      recommendList: [],
      title: "排行榜",
    };
  },
  async mounted() {
    // 加载排行榜歌曲方法
    const route = useRoute();
    let id = route.query.id;
    let res = await getPlayDetail(id);
    // console.log(res);
    this.recommendList = res.data.playlist;
    // console.log(this.recommendList);
    this.$store.commit("setPlaylist", this.recommendList.tracks);
  },
  components: {
    totalTop,
    playList,
  },
};
</script>

<style lang="less" scoped>
.recommendTop {
  width: 7.5rem;
  height: 4rem;
  .bg {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(40px);
  }
  img {
    width: 100%;
    height: 100%;
  }
  
}
.recommendList {
  position: absolute;
  top: 5.2rem;
  width: 7.5rem;
}
</style>