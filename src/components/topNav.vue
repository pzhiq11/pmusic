<template>
<!-- 首页顶部组件 -->
  <div class="topNav">
      <div class="topLeft" @click="toLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn" :class="{active1}" @click="$router.push({name:'me'})">我的</span>
        <span class="navBtn" :class="{active2}" @click="$router.push({name:'Home'})">发现</span>
        <span class="navBtn" :class="{active3}" @click="$router.push({name:'daily'})">MV推荐</span>
        <!-- <span class="navBtn">视频</span> -->
      </div>
      <div class="topRight">
        <svg class="icon search" aria-hidden="true" @click="$router.push('/Searchview')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
</template>

<script>

export default {
  props:{
    active1:{
      type:String
    },
    active2:{
      type:String
    },
    active3:{
      type:String
    }
  },
  // mounted(){
  //   console.log(this.active2);
  // },
  methods:{
    toLeft(){
      this.$emit('showAside')
      
    }
  }
}
</script>

<style lang="less" scoped>
.topNav{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.3rem; 
    .icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .topCenter{
        width: 4.5rem;
        display: flex;
        justify-content: space-around;
        .navBtn{
          cursor: pointer;
        }
        .active{
            font-weight: 900;
        }
        .active2{
            font-weight: 900;
        }
        .active3{
            font-weight: 900;
        }
    }
}
</style>