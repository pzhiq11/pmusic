import {
  createStore
} from 'vuex'
import {
  getLyric
} from "../api/index";
import api from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      al: {
        id: 85836671,
        name: "浮生若梦",
        pic: 109951165673546300,
        picUrl: "http://p3.music.126.net/gYnPb2mqT7kqF7P3NXdHew==/109951165673546297.jpg",
        pic_str: "109951165673546297"
      },
      name: "有幸",
      id: 1433810301
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime:0,
    intervalId:0,
    user:{
      isLogin:false,
      account:{},
      userDetail:{
        profile:{
          avatarUrl:'',
          nickname:'请登录'
        }
      }
    },
    bofang:true,
    playController:true
  },
  mutations: {
    // 设置播放列表
    setPlaylist: function (state, value) {

      state.playlist = value

      // console.log(state.playlist);

    },
    // 设置播放音乐的索引值，来改变歌曲
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    },
    // 设置歌曲歌词
    setLyric(state, value) {
      state.lyric = value
      // console.log(state.lyric);
    },
    // 设置歌词的展示时间
    setCurrentTime(state,value){
      state.currentTime = value
    },
    // 添加歌曲到列表中
    pushPlaylist:function(state,value){
      state.playlist.push(value)
    },
    // 设置登录用户信息
    setUser(state,value){
      state.user = value
    },
    
  },
  actions: {
    // 获取歌词
    async reqLyric(content, payload) {
      //  console.log(payload);
      let result = await getLyric(payload.id);
      content.commit('setLyric', result.data.lrc.lyric)
      // console.log(result);


    },
    // 获取登录信息
    async phoneLogin(content,payload){
      // console.log(payload)
      let result = await  api.phoneLogin(payload.phone,payload.password)
      // console.log(result)
      
      if(result.data.code==200){
        content.state.user.isLogin = true;
        
        content.state.user.account = result.data.account
        
        let userDetail =  await api.userDetail(result.data.account.id)
        content.state.user.userDetail = userDetail.data;
        localStorage.userData = JSON.stringify(content.state.user)
        // console.log(userDetail)
        content.commit('setUser',content.state.user)
      }
     
      return result
      
    }
   
  }, 
  modules: {},
  getters: {
    // 歌词的处理
    lyricList:function(state){
      let arr = state.lyric.split(/\n/igs).map((item,i,arr)=>{
         let min = parseInt(item.slice(1,3)) ;
         let sec = parseInt(item.slice(4,6)) ;
         let mill = parseInt(item.slice(7,10));

         
        return {
          
         min,sec,mill,
         lyric:item.slice(11,item.length),
         content:item,
         time:mill+sec*1000+min*60*1000
       }
     })
     
     arr.forEach((item,i)=>{
       if(i==0){
         item.pre = 0;
       }else{
         item.pre = arr[i-1].time
       }
       
     })
     return arr
 }
  }
})