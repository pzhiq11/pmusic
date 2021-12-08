<template>
  <div class="playMusic">
    <div
      class="bg"
      :style="{
        backgroundImage: `url(${
          $store.state.playlist[$store.state.playCurrentIndex].al.picUrl
        })`,
      }"
    ></div>
    <div class="playTop">
      <!-- 播放页面顶部区域 -->
      <div class="back" @click="changeValue" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui1"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scoll" direction="left">{{
            $store.state.playlist[$store.state.playCurrentIndex].name
          }}</marquee>
        </div>
        <!-- <div class="author"></div> -->
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-share"></use>
        </svg>
      </div>
    </div>
    <div class="playcontent" v-show="!lyric" @click="lyric = !lyric">
      <!-- 背景图区域 -->
      <img src="../assets/img/bkg-st.png" alt="" class="bkgT" :class="active" />
      <img src="../assets/img/bkg.png" alt="" />
      <img
        :src="$store.state.playlist[$store.state.playCurrentIndex].al.picUrl"
        alt=""
        class="playImg"
      />
    </div>
    <div
      class="playLyric"
      v-show="lyric"
      @click="lyric = !lyric"
      ref="playlyric"
    >
    <!-- 歌词区域 -->
      <p
        v-for="(item, i) in $store.getters.lyricList"
        :key="i"
        :class="{
          active:
            currentTime * 1000 >= item.pre && currentTime * 1000 < item.time,
        }"
      >
        {{ item.lyric }}
      </p>
    </div>
    <div class="progress"></div>
    <!-- 播放页面五个按钮 -->
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>

      <svg class="icon play" v-show="$store.state.bofang" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon play" v-show="!$store.state.bofang" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${
          $store.state.playlist[$store.state.playCurrentIndex].id
        }.mp3`"
      ></audio>

      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="this.myshow = !this.myshow">
        <use xlink:href="#icon-gengduo2"></use>
      </svg>
    </div>
    <!-- 我的播放列表组件 -->
    <myList v-show="myshow" id="test"  @uptop="uptop"></myList>
    <konbai class="konbai" v-show="myshow" @changeAside="uptop"></konbai>
  </div>
</template>

<script>
// import { watch } from 'vue'

import { mapState } from "vuex";
import myList from '../components/myList.vue'
import konbai from "../components/konbai"
export default {
  data() {
    return {
      myshow:false,
      lyric: false,
      active: "",
    };
  },
  components:{
    myList,
    konbai
 
  },
  computed: { 
    ...mapState(["lyric", "currentTime", "playlist", "playCurrentIndex"]),
  },
  methods: {
    // 设置播放音乐，并相应改变样式
    play() {
      // console.log(this);
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.$store.state.bofang =false
        console.log(this.$refs);
        this.active = "active";
        this.UpdateTime();
      } else {
        this.$refs.audio.pause();
        this.$store.state.bofang = true;

        this.active = "";
        clearInterval(this.$store.state.id);
      }
    },
    // 改变我的播放列表显示与隐藏
    uptop(){
      this.myshow = false
    },
    // 收起播放页面
    changeValue(){
        this.$emit('back');
        this.myshow = false
    },

    // 改变歌词的显示时间戳
    UpdateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit("setCurrentTime", this.$refs.audio.currentTime);
      }, 2000);
    },
    // 上下首歌曲切换
    goPlay(num) {
      // console.log(num);
      // console.log(this.playlist);
      // console.log(this.playCurrentIndex);
      let index = this.playCurrentIndex + num;
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index == this.playlist.length) {
        index = 0;
      }
      this.$store.commit("setPlayIndex", index);
    },
  },
  watch: {
    currentTime: function (newValue) {
      // console.log(newValue)
      // console.log([this.$refs.playlyric])
      let p = document.querySelector("p.active");
      if (p) {
        let offsetTop = p.offsetTop;
        this.$refs.playlyric.scrollTop = p.offsetTop;
        // console.log([p])
      }
    },
  },
};
</script>

<style lang="less" scoped>
.konbai{
  width: 7.5rem;
  height: 16rem;
  background-color: rgb(212, 212, 212);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0.2;
}
#test{
  opacity: 0.85;
  padding: 0.15rem;
  width: 7.5rem;
  
  position: fixed;
  bottom: 2rem;
  left: 0;
  z-index: 100;
  // background-color: darkgray;
  overflow: scroll;
  border-radius: 0.3rem 0.3rem 0 0;
  border: solid 1px dimgrey;
}
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    filter: blur(60px);
    background-position: center;
  }
  .playTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    right: 0;
    color: white;
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      fill: white;
    }
    marquee {
      flex: 1;
      width: 5rem;
    }
  }
  .playcontent {
    position: relative;
    width: 7.5rem;
    height: 5rem;
    top: 1rem;
    left: 0;
    .bkgT {
      width: 2.3rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 2;
      transform-origin: 0 0;
      transform: rotate(-20deg);
      transition: all 1s;
    }
    .active {
      width: 2.3rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 2;
      transform-origin: 0.1rem 0;
      transform: rotate(0deg);
      transition: all 1s;
    }
    :nth-child(2) {
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 2.2rem;
      z-index: 1;
    }
    .playImg {
      width: 3.5rem;
      height: 3.5rem;
      position: absolute;
      left: calc(50% - 1.75rem);
      top: 3.2rem;
      z-index: 1;
      border-radius: 50%;
    }
  }
  .playLyric {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    top: calc(50% - 4rem);
    left: 0;
    overflow: scroll;
    text-align: center;
    color: white;
    .active {
      color: red;
      font-size: 0.38rem;
    }
    p {
      margin: 0.3rem 0;
      font-size: 0.32rem;
    }
  }
  .playFooter {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.3rem;
    bottom: 0.5rem;
    left: 0;
    z-index: 10;
    .icon {
      width: 0.55rem;
      height: 0.55rem;
      fill: #fff;
    }
    .play {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
}
</style>