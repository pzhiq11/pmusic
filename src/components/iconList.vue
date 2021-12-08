<template>
<!-- 四个排行榜列表图标组件 -->
  <div class="iconList">
    <router-link class="iconItem" :to="{name:'Recommend',query:{id:commit[0].id}}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-meirituijian"></use>
      </svg>
      <span>{{commit[0].name}}</span>
    </router-link>
    <div class="iconItem" @click="$router.push({name:'Recommend',query:{id:commit[1].id}})">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faxian_sirenFM"></use>
      </svg>
      <span>{{commit[1].name}}</span>
    </div>
    <div class="iconItem" @click="$router.push({name:'Recommend',query:{id:commit[2].id}})">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faxian_gedan"></use>
      </svg>
      <span>{{commit[2].name}}</span>
    </div>
    <div class="iconItem" @click="$router.push({name:'Recommend',query:{id:commit[3].id}})">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang3"></use>
      </svg>
      <span>{{commit[3].name}}</span>
    </div>
  </div>
</template>

<script>
import { recommend } from "../api/index";
import Recommend from '../views/Recommend'

export default {
   data(){
    return{
      commit:[{
        id:19723756,
        name:'飙升榜'
      },
      {
        id:3779629,
        name:'新歌榜'
      },
      {
        id:2884035,
        name:'原创榜'
      },
      {
        id:3778678,
        name:'热歌榜'
      }]
    }
  },
  components:{
    Recommend
  },
  async mounted(){
    // 获取排行榜数据
    
    let resid = await recommend();
      // console.log(resid.data);
    this.commit = resid.data.list;
    // console.log(this.commit);
  },
 
};
</script>

<style lang="less" scoped>
.iconList {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .icon {
      width: 1.2rem;
      height: 1.2rem;
    }
    span{
        font-size: 0.22rem;
    }
  }
}
</style>