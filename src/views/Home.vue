<template>
  <div class="home">
    <!-- 顶部导航组件 -->
    <top-nav @showAside = "showAside" :active2="active"></top-nav>

    <!-- banner区域组件 -->
    <swiper-com></swiper-com>

    <!-- 图标部分组件 -->
    <icon-list></icon-list>

    <!-- 获取歌单的组件 -->
    <musicList></musicList>
    <asideList class="asideList" v-show="asideShow" @changeAside="changeAside"></asideList>
    <konbai class="konbai" v-show="asideShow" @changeAside="changeAside"></konbai>
  </div>
</template>

<script>

// 导入组件
import TopNav from "../components/topNav.vue";
import SwiperCom from "../components/swiperCom"
import iconList from "../components/iconList"
import musicList from "../components/musicList"
import asideList from "../components/asideList"
import konbai from "../components/konbai"

export default {
  name: "Home",
  data() {
    return {
      asideShow:false,
      active:"active2"
    };
  },
  methods:{
    changeAside(){
      this.asideShow = false
    },
    showAside(){
      this.asideShow = true
    }
  },
  // 注册组件
  components: {
    TopNav,
    SwiperCom,
    iconList,
    musicList,
    asideList,
    konbai
  },

  computed: {},
  
};
</script>
<style lang="less" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: aqua;
}

.asideList{
  width: 6rem;
  height: 16rem;
  background-color: rgb(212, 212, 212);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: scroll;
  
}
.konbai{
  width: 7.5rem;
  height: 16rem;
  background-color: rgb(212, 212, 212);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0.1;
}
</style>
