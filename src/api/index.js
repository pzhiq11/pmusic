import axios from "axios";
 

// let baseUrl = 'http://localhost:3000'
let baseUrl = 'http://music.cpengx.cn'

//获取轮播图api的函数
// type:资源类型,对应以下类型,默认为 0 即PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(type = 0) {
    return  axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单 limit: 取出数量 , 默认为 30 (不支持 offset)
export function getMusicList(limit = 10) {
    return  axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单的详情
export function getPlayDetail(id) {
    return  axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词的详情

export function getLyric(id) {
    return  axios.get(`${baseUrl}/lyric?id=${id}`)
}
// 搜索歌曲 
export function searchMusic(keyword){
    return axios.get(`${baseUrl}/search?keywords=${keyword}`)
}

// 手机登录
export function phoneLogin(phone,password){
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户的详情
export function userDetail(uid){
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}
// 获取排行榜
export function recommend(){
    return axios.get(`${baseUrl}/toplist`)
}
// 获取每日推荐mv
export function daily(count){
    return axios.get(`${baseUrl}/top/mv?limit=${count}`)
}
// 获取mv详细
export function getmv(id){
    return axios.get(`${baseUrl}/mv/url?id=${id}`)
}
// 获取mv评论
export function discuss(id){
    return axios.get(`${baseUrl}/comment/mv?id=${id}&limit=500`)
}
// 发送评论  功能缺失
export function send(id,content){
    return axios.get(`${baseUrl}/comment?t=1&type=6&threadId=${id}&content=${content}`)
}

export default{
    getBanner,getMusicList,getPlayDetail,getLyric,searchMusic,phoneLogin,userDetail,recommend,daily,getmv,discuss,send
}