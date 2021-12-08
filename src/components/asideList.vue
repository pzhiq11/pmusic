<template>
  <div>
    <div class="asideTop">
      <div class="left" >
        <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="" />
        <span @click="$router.push({name:'me'})">{{ $store.state.user.userDetail.profile.nickname }} > </span>
      </div>
      <div class="right" >
        <svg class="icon" aria-hidden="true" @click="changeAside">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="item">
        <ul>
            <li>消息中心 <span>></span></li>
            <li>云贝中心 <span>></span></li>
            <li>创作者中心 <span>></span></li>
        </ul>
    </div>
    <div class="item">
        <p>音乐服务</p>
        <ul >
            <li>演出 <span>></span></li>
            <li>商城 <span>></span></li>
            <li>口袋彩铃 <span>></span></li>
            <li>游戏专区 <span>></span></li>
        </ul>
    </div>
    <div class="item">
        <p>其他</p>
        <ul >
            <li>设置 <span>></span></li>
            <li>夜间模式 <span>></span></li>
            <li>个性装扮 <span>></span></li>
            <li>关于 <span>></span></li>
        </ul>
    </div>
    <div class="item">
       <h1 @click="noLogin">退出登录</h1>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        changeAside(){
            this.$emit('changeAside')
        },
       noLogin(){
           this.$store.state.user.userDetail.profile = ''
           localStorage.removeItem("userData");
           
           alert('退出登录成功')
           location.reload()
        
       }
    }
};
</script>

<style lang="less" scoped>
.asideTop{
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    height: 1rem;
    background-color: white;
    box-sizing: border-box;
    .left{
        display: flex;
        align-items: center;
        img{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin: 0 0.2rem;
        }
    }
}
.item{
    width: 90%;
    height: auto;
    background-color: white;
    border-radius: 0.2rem;
    margin: 0.3rem auto;
    padding: 0 0.2rem;
    h1{
        color: red;
        font-size: 0.4rem;
        text-align: center;
        padding: 0.2rem;
    }
    p{
        line-height: 0.8rem;
        border-bottom: 1px solid darkgray;
        font-size: 0.25rem;
        color: #aaa;
    }
    li{
        list-style: none;
        border-bottom: 1px solid darkgray;
        line-height: 0.8rem;
        span{
            float: right;
            color: #aaa;
        }
    }
}
</style>