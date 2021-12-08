<template>
<!-- 歌单的列表 -->
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang2 "></use>
        </svg>
        <div class="text">
          <div class="title"> 播放全部 </div>
          <!-- <div class="num"> (共 {{playlist.tracks.length}} 首)</div> -->
        </div>
      </div>
      <div class="right">
        <div class="btn">
          +  收藏 ({{changeVaule(playlist.subscribedCount)}})
        </div>
      </div>
    </div>
    <div class="list" >
      <div class="playItem" v-for="(item,index) in playlist.tracks" :key="item.id" @click="play(index)">
        <div class="left">
          <div class="index"> {{index+1}} </div>
          <div class="content">
            <div class="title"> {{item.name}} </div>
            <div class="author">  
              <span class="tag" v-for="tags in playlist.tags" :key="tags.id">
                {{tags}}
              </span>
              <span>{{item.ar[0].name}}</span>
              
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang3 "></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo1 "></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>

export default {
    props:{
        playlist:{

        }
    },
    methods: {
    changeVaule(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num >= 1000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    },
    // 播放音乐
    play(index){
      this.$store.commit('setPlayIndex',index)
    }
  },
};
</script>


 <style lang="less" scoped>
  .playlist{
    background-color: white;
    border-radius: 0.3rem 0.3rem 0 0 ;
    width: 7.5rem;
    padding: 0 0.3rem;
    margin-top: 0.3rem;
    .playlist-top{
      display: flex;
      justify-content: space-between;
      height: 0.8rem;
      align-items: center;
      // line-height: 0.8rem;
      .left{
        display: flex;
        align-items: center;
        .text{
          display: flex;
          align-items: center;
        }
        .icon{
          width: 0.4rem;
          height: 0.4rem;
          fill: black;
        }
        .title{
          font-size: 0.37rem;
          color: black;
          // font-weight: bold;
          margin-left:0.2rem;
        }
        .num{
          font-size: 0.25rem;
          color: #aaa;
        }
      }
      .btn{
        font-size: 0.30rem;
        background-color: rgb(241, 31, 31);
        height: 0.7rem;
        line-height: 0.7rem;
        color: white;
        border-radius: 0.35rem;
        padding: 0 0.15rem;
      }
    }
    .list{
      .playItem{
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
        
        border-bottom: 0.5px solid darkgray;
        .content{
          width: 5.2rem;
        }
        .left{
          
          display: flex;
          align-items: center;
          .index{
            margin: 0 0.2rem;
          }
          .title{
            
            margin: 0 0 0.1rem 0.1rem;
            font-size: 0.35rem;
          }
          .author{
            margin-left: 0.1rem;
            font-size: 0.24rem;
            color: #666;
          }
          .tag{
            font-size: 0.12rem;
            border: 1px solid rgb(233, 96, 47);
            color: rgb(219, 127, 94);
            border-radius: 0.1rem;
            margin-right: 0.05rem;
            opacity: 0.7;
          }
        }
        .right{
          display: flex;
          .icon{
            width: 0.4rem;
            height: 0.4rem;
            opacity: 0.6;
          }
          .icon:first-child {
            margin-right: 0.2rem;
          }
        }
      }
    }
   
  }
 </style>