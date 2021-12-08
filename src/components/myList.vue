<template>
  <!-- 展示我的歌曲列表 -->

  <div class="test" @click="test">
    <div class="konbai" @click="uptop"></div>
    <div class="center">
      <div class="ttop" @click="uptop">········收起列表·······</div>
      <div class="playlist-top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang2 "></use>
          </svg>
          <div class="text">
            <div class="title">播放全部</div>
            <div class="num">(共 {{ $store.state.playlist.length }} 首)</div>
          </div>
        </div>
        <!-- <div class="right">
        <div class="btn">
          + 收藏 ({{ changeVaule($store.state.playlist.subscribedCount) }})
        </div>
      </div> -->
      </div>
      <div class="list">
        <div
          class="playItem"
          v-for="(item, index) in $store.state.playlist"
          :key="item.id"
          @click="play(index)"
        >
          <div class="left">
            <div class="index">{{ index + 1 }}</div>
            <div class="content">
              <div class="title">{{ item.name }}</div>
              <!-- <div class="author">
              <span class="tag" v-for="tags in playlist.tags" :key="tags.id">
                {{ tags }}
              </span>
              <span>{{ item.ar[0].name }}</span>
            </div> -->
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
    </div>
  </div>
</template>

<script>
import playList from "./playList.vue";
export default {
  components: { playList },
  methods: {
    test() {
      // console.log(this.$store.state.playlist);
    },
    uptop() {
      // 收起列表 让父组件接受
      this.$emit("uptop");
    },
    // 设置播放歌曲
    play(index) {
      this.$store.commit("setPlayIndex", index);
    },
    // 改变数值展示方式
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
  },
};
</script>

<style lang="less" scoped>
.konbai {
  width: 7.5rem;
  height: 4.8rem;
  // background-color: blue;
}
.test {
  position: fixed;
  bottom: 1.3rem;
  left: 0;
  z-index: 100;

  .center {
    height: 7rem;
    padding: 0  0.15rem;
    width: 7.5rem;
    background-color: white;
    border-radius: 0.3rem 0.3rem 0 0;
    border: solid 1px dimgrey;
    overflow: scroll;
  }
  .ttop {
    width: 7.15rem;
    height: 0.6rem;
    // background-color: blue;
    text-decoration: underline;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
  }
  .playlist-top {
    position: sticky;
    top: 0.6rem;
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center;
    border-bottom: 1px solid darkgray;
    background-color: white;
    z-index: 100;
    // line-height: 0.8rem;
    .left {
      display: flex;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
      }
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: black;
      }
      .title {
        font-size: 0.37rem;
        color: black;
        // font-weight: bold;
        margin-left: 0.2rem;
      }
      .num {
        font-size: 0.25rem;
        color: #aaa;
      }
    }
    .btn {
      font-size: 0.3rem;
      background-color: rgb(241, 31, 31);
      height: 0.7rem;
      line-height: 0.7rem;
      color: white;
      border-radius: 0.35rem;
      padding: 0 0.15rem;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      margin: 0.1rem 0;
      border-bottom: 0.5px solid darkgray;
      .content {
        width: 5.2rem;
      }
      .left {
        display: flex;
        align-items: center;
        .index {
          margin: 0 0.2rem;
        }
        .title {
          margin: 0 0 0.1rem 0.1rem;
          font-size: 0.35rem;
        }
        .author {
          margin-left: 0.1rem;
          font-size: 0.24rem;
          color: #666;
        }
        .tag {
          font-size: 0.12rem;
          border: 1px solid rgb(233, 96, 47);
          color: rgb(219, 127, 94);
          border-radius: 0.1rem;
          margin-right: 0.05rem;
          opacity: 0.7;
        }
      }
      .right {
        .icon {
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

