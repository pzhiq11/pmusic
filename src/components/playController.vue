<template>
<!-- 播放音乐控制条 -->
  <div class="playController">
      <div class="left" @click="clickshow">
          <img :src="$store.state.playlist[$store.state.playCurrentIndex].al.picUrl" alt="">
          <div class="content">
              <div class="title"> {{$store.state.playlist[$store.state.playCurrentIndex].name}} </div>
              <div class="tips">横划可以切换上下首歌</div>
          </div>
      </div>
      <div class="right">
          <svg class="icon playeare"  v-show="$store.state.bofang" aria-hidden="true" @click="play">
            <use xlink:href="#icon-bofang2" ></use>
          </svg>
          <svg  class="icon playeare"  v-show="!$store.state.bofang" aria-hidden="true" @click="play">
            <use xlink:href="#icon-zanting" ></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="this.myshow = !this.myshow">
            <use xlink:href="#icon-chakantiezigengduo"></use>
          </svg>
      </div>
      <playMusic ref="test1" v-show="show" @back="this.show = !this.show"></playMusic> <!--:playDetail="$store.state.playlist[$store.state.playCurrentIndex]"-->
      <!-- <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${$store.state.playlist[$store.state.playCurrentIndex].id}.mp3`" ></audio> -->

      <myList v-show="myshow" @uptop="uptop"></myList>
  </div>
</template>

<script>
// import {mapState,mapMutations} from 'vuex'
import playMusic from '../components/playMusic.vue'
import myList from '../components/myList.vue'
export default {
  components:{
    playMusic,
    myList
  },
  data(){
    return{
      myshow:false,
      show:false
    }
  },

  methods:{
    uptop(){
      this.myshow = false
    },
    play(){
      // 让子组件audio播放，实现同步
      // console.log(this.$refs.test1.play);
       this.$refs.test1.play()
      // // console.log(this);
      // if(this.$refs.audio.paused){
      //   this.$refs.audio.play();
      //   this.$store.state.bofang =false
      //   // this.zanting =true
        
      // }else{
      //   this.$refs.audio.pause()
      //   this.$store.state.bofang=true
      //   // this.zanting =false
        
      // }
      
    },
    clickshow(){
      this.show = !this.show;
      if(this.myshow == true){
      this.myshow = !this.myshow
      }
    }
   
  },
  updated(){
    // 歌词同步改变
    this.$store.dispatch('reqLyric',{id:this.$store.state.playlist[this.$store.state.playCurrentIndex].id})
  },
  mounted(){
    // 歌词同步改变
    this.$store.dispatch('reqLyric',{id:this.$store.state.playlist[this.$store.state.playCurrentIndex].id})
  },
}
</script>

<style lang="less" scoped>
.playController{
  border-radius: 0.1rem 0.1rem 0 0;
  z-index: 100;
  background-color: white;
  padding: 0 0.2rem;
  width: 100%;
  height: 1.3rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  .left{
    display: flex;
    align-items: center;
    .content{
     width: 4.3rem;
    }
    .title{
      font-size: 0.35rem;
      margin-bottom: 0.1rem ;
    }
    .tips{
      font-size: 0.24rem;
      color: #666;
    }
    img{
      width: 0.8rem;
      height: 0.8rem;
      margin: 0 0.2rem 0 0 ;
      border-radius: 50%;
    }
  }
  .right{
    .icon{
      width: 0.6rem;
      height: 0.6rem;
      margin: 0 0.1rem;
    }
    
    
  }
}
</style>