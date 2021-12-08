<template>
  <div class="daily">
    <top-nav @showAside="showAside" :active3="active"></top-nav>
    <asideList
      class="asideList"
      v-if="asideShow"
      @changeAside="changeAside"
      
    ></asideList>
    <konbai
      class="konbai"
      v-if="asideShow"
      @changeAside="changeAside"
    ></konbai>

    <div class="detail">
      <div class="listItem" v-for="(item, i) in MVlist" :key="i" @click="changemv(item)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang3"></use>
        </svg>
        <video ref="vid" src="cloudmusic/obj/core/11662304630/5cc56f569b24180c833c76edac68de16.mp4" :poster="item.cover">
        </video>
        <div style="text-align:center;font-size: 0.28rem;">
          {{item.artistName}} 
        </div>
        <div class="MVname"> 
        {{ item.name}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import topNav from "../components/topNav.vue";
import asideList from "../components/asideList.vue";
import konbai from "../components/konbai.vue";
import api from "../api/index";

export default {
  components: {
    topNav,
    asideList,
    konbai,
    
  },
  data() {
    return {
      asideShow: false,
      active: "active3",
      mvitem:false,
      MVlist: {
        artistName:'',
        id:'',
        mv:{
          desc:'tets'
        }
      },
    };
  },
  methods: {

    // play(){
    //   console.log(this.$refs.vid.play());
    // },
    showAside() {
      this.asideShow = true;
    },
    changeAside() {
      this.asideShow = false;
    },
    changemv(e){
    // console.log(e);
    this.$router.push({name:'mvDetail',query:{id:e.id,cover:e.cover}})
    // this.$store.state. = false
    },
  },
  async mounted() {
    let res = await api.daily(16);
    this.MVlist = res.data.data;
    // console.log(res);
    // console.log(this.MVlist);
    
  },
  
};
</script>

<style lang="less" scoped>
.asideList {
  width: 6rem;
  height: 16rem;
  background-color: rgb(212, 212, 212);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: scroll;
}
.konbai {
  width: 7.5rem;
  height: 16rem;
  background-color: rgb(212, 212, 212);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0.1;
}
.daily {
  width: 7.5rem;
  .detail {
    width: 7.5rem;
    margin: 0 auto;
    // background-color: black;
    .listItem {
      display: inline-block;
      position: relative;
      height: 2.8rem;
      width: 3rem;
      margin: 0 0.33rem;
      .icon {
        position: absolute;
        width: 0.55rem;
        height: 0.55rem;
        top: 0.55rem;
        left: 1.25rem;
        opacity: 0.8;

        // fill: white;
      }
      .MVname{
        position: absolute;
        width: 100%;
        height: 0.4rem;
        left: 0;
        top: 2.3rem;
        font-size: 0.2rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      video {
        width: 3rem;
        height: 1.75rem;
      }
    }
  }
}
// .mvpos{
//   position: absolute;
//   top: 2rem;
//   left: 0;
//   background-color: black;
// }
</style>