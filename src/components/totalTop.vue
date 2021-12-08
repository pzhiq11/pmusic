<template>
<!-- 每一页顶部组件，包括返回，搜索，分享等 -->
  <div class="listviewTopNav">
      <div class="back" @click="go()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui1"></use>
        </svg>
        <div class="title">{{title}}</div>
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
</template>

<script>
export default {
  props:{
    title:{
      type:String
    }
  },
  methods:{
    go(){
      this.$router.go(-1);
      this.$store.state.playController = true
    }
  }
}
</script>

<style lang="less" scoped>
.listviewTopNav {
    font-size: 0.35rem;
    height: 1.2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
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
</style>