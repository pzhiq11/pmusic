<template>
<!-- 发现歌单详情页顶部 -->
  <div class="listviewTop">
    <img :src="playlist.coverImgUrl" alt="" class="bg" />
    <div class="listviewTopNav">
      <div class="back" @click="$router.push({name:'Home'})">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui1"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true" @click="$router.push({name:'Searchview'})">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          {{ changeVaule(playlist.playCount) }}
        </div>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" alt="" class="header" />
          <span> {{ playlist.creator.nickname }} <i>></i> </span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span> {{ playlist.commentCount }} </span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-share"></use>
        </svg>
        <span> {{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    playlist: {},
  },
  methods: {
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
.listviewTop {
  width: 7.5rem;
  // height: 6rem;

  padding: 0.1rem 0.3rem;
  .bg {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(40px);
  }
  .listviewTopNav {
    font-size: 0.35rem;
    height: 1.2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    .back,
    .right {
      display: flex;
      flex-direction: row;
      color: white;
    }
    .title {
      margin: 0 0.4rem;
    }
    .search {
      margin: 0 0.4rem;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: white;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.1rem;
    .contentLeft {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: #ccc;
        display: flex;
        align-items: center;
      }
    }
    .contentRight {
      width: 3.5rem;
      h3 {
        color: white;
      }
      .author {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        color: #ccc;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin-right: 0.2rem;
        }
        span {
          display: flex;
          align-items: center;
        }
      }
      .description {
        font-size: 0.24rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .iconList {
    width: 7.1rem;
    display: flex;
    justify-content: space-around;
    
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.40rem;
        fill: white;
      }
      span {
        margin-top: 0.15rem;
        font-size: 0.18rem;
        color: white;
      }
    }
  }
}
</style>