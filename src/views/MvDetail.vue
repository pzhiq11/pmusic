<template>
  <div class="box">
      <totalTop :title="title" :style="{'backgroundImage':'url('+cover+')'}" class="topimg"
                ></totalTop>
      <video class="video" :src="mvsrc" controls :poster="cover"></video>
      <div class="pinglun" >
          <div class="total">
              <h3>评论({{person.total}})</h3>
          </div>
          <div class="title" >
              <div class="left">评论区</div>
              <div class="right">
                  <span class="hot active"  @click="hot()">最热</span>|<span class="newlist" @click="newlist()">最新</span>
              </div>
          </div>
          <!-- 评论区 -->
          <div v-if="currhotList">
            <div class="conten1" v-for="item,i in person.hotComments " :key="i">
                <!-- 评论上部分 包括头像 昵称 评论时间 点赞数 -->
                <div class="itemTitle">
                    <!-- 昵称和时间 -->
                    <div class="person">
                        <img :src="item.user.avatarUrl" alt="">
                        <div class="cen">
                            <div class="nickname">{{item.user.nickname}}</div>
                            <div class="timer" >
                                <span>{{item.timeStr}}</span><span>精彩评论</span>
                            </div>
                        </div>
                    </div>
                    <div class="liked">
                        <span> {{item.likedCount}}</span>
                        <svg class="icon" aria-hidden="true" @click="$router.push({name:'Login'})">
                            <use xlink:href="#icon-dianzan"></use>
                        </svg>
                        </div>
                </div>
                <div class="itemcont">
                    {{item.content}}
                </div>
                <hr>
            </div>
          </div>
          <div v-if="!currhotList">
            <div class="conten1" v-for="item,i in person.comments " :key="i">
                <!-- 评论上部分 包括头像 昵称 评论时间 点赞数 -->
                <div class="itemTitle">
                    <!-- 昵称和时间 -->
                    <div class="person">
                        <img :src="item.user.avatarUrl" alt="">
                        <div class="cen">
                            <div class="nickname">{{item.user.nickname}}</div>
                            <div class="timer" >
                                <span>{{item.timeStr}}</span><span>精彩评论</span>
                            </div>
                        </div>
                    </div>
                    <div class="liked">
                        <span> {{item.likedCount}}</span>
                        <svg class="icon" aria-hidden="true" @click="$router.push({name:'Login'})">
                            <use xlink:href="#icon-dianzan"></use>
                        </svg>
                        </div>
                </div>
                <div class="itemcont">
                    {{item.content}}
                </div>
                <hr>
            </div>
          </div>
      </div>
      <div> 
          <form class="send">
            <input type="text"  class="inputTxt" placeholder="用评论鼓励一下 吧~" id="content" >
            <button type="submit" @click="send()" class="button">发送</button>
          </form>
        
      </div>
  </div>
</template>

<script>
import api from "../api/index";
import { useRoute } from "vue-router";
import totalTop from '../components/totalTop.vue';
export default {
    components: { totalTop },
    
    
    data(){
        return{
            currhotList:true,
            person:{
                total:{
                    type:Number
                }
            },
            mvsrc:'',
            id:'',
            title:"MV",
            cover:''
        }
    },
    methods:{
        hot(){
            this.currhotList = true
            let hot = document.getElementsByClassName('hot');
            hot[0].classList.add('active')
            let newlist = document.getElementsByClassName('newlist');
            newlist[0].classList.remove('active')
        },
        newlist(){
            this.currhotList = false
            let hot = document.getElementsByClassName('hot');
            let newlist = document.getElementsByClassName('newlist');
            newlist[0].classList.add('active')
            hot[0].classList.remove('active')
        },
        send(){
            let that = this;
            if(localStorage.userData ==null && localStorage.userData ==undefined){//
                alert('请先登录······')   
            }else{
                //发送评论请求  功能缺失
                
                let input = document.getElementById('content')
                // console.log(input.value);
                // console.log(that.id,input.value);
                let result = api.send(that.id,input.value);
                console.log(result);

            }
        }
    },
    async mounted(){
        this.$store.state.playController = false
        let id = useRoute().query.id;
        this.id = id
        let cover = useRoute().query.cover;
        this.cover = cover;
        // 获取mv数据
        let res = await api.getmv(id);
        this.mvsrc = res.data.data.url
        // 获取mv评论
        let dis = await api.discuss(id);
        console.log(dis.data);
        this.person  = dis.data 
    },
    Destroy () {
        this.$store.state.playController = true
    }
    
}
</script>

<style lang="less" scoped>
.box{
        position: relative;
        width: 7.5rem;
        height: 20rem;
        .video{
            position: relative;
            top: 1.2rem;
            width: 100%;
            height: 4.2rem;
        }
        .pinglun{
            position: absolute;
            top: 5.6rem;
            width: 7.5rem;
            height: auto;
            .total{
                text-align: center;
            }
            .title{
                display: flex;
                justify-content: space-between;
                padding: 0 .2rem;
                span{
                    margin: 0 0.1rem;
                }
                .active{
                    font-weight: bolder;
                    color: rgb(160, 79, 79);
                }
            }
            .conten1{
                margin: 0.2rem auto;
                flex-flow: wrap;
                align-self: start;
                .itemTitle{
                    width: 7.5rem;
                    padding: 0 0.25rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img{
                        width: 0.6rem;
                        height: 0.6rem;
                        border-radius: 50%;
                    }
                    .person{
                        width: 5rem;
                        display: flex;
                        align-items: center;
                        .cen{
                            display: flex;
                            flex-flow: column;
                            padding: 0 0.2rem;
                            .nickname{
                                font-size: 0.25rem;
                            }   
                            .timer{
                                font-size: 0.12rem;
                            }
                        }
                    }
                    .liked{
                        align-items: center;
                        font-size: 0.18rem;
                        .icon{
                            margin-left: 0.1rem;
                            width: 0.3rem;
                            height: 0.3rem;
                        }
                    }

                }
                .itemcont{
                    width: 7rem;
                    padding-left: 0.8rem;
                    font-size: 00.25rem;
                    align-items: center;
                    margin: 0.2rem auto;
                    flex-wrap: wrap;
                    
                }
            }
        }
}
.topimg{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    filter: blur(1px);
}
.send{
    border-top: 1px solid #aaa;
    width: 100%;
    height: 0.9rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    justify-content: space-between;
    .inputTxt{
        width: 90%;
        height: 90%;
        align-items: center;
        border: 1px solid #ddd;
        border-radius: 1rem;
        margin-right: 0.1rem;
        font-weight: bolder;
    }
    .button{
        width: 0.8rem;
        height: 0.55rem;
    }
}

</style>