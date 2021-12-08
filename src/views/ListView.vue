<template>
  <div class="listview">
    <!-- 歌单详情页面顶部组件 -->
    <listview-top :playlist="state.playlist"></listview-top>

    <!-- 歌单详情页面列表组件 -->
    <playList :playlist="state.playlist"></playList>
  </div>
</template>

<script>
import listviewTop from "../components/listviewTop";
import playList from "../components/playList";
import { getPlayDetail } from "../api/index"; 
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import store from '../store/index'
export default {
  components: {
    listviewTop,
    playList
  },
  setup() {
    const route = useRoute();
    let state = reactive({
      list: [],
      playlist: {creator:{},tracks:{}},
    });
    onMounted(async () => {
      // console.log(route);
      let id = route.query.id;
      let result = await getPlayDetail(id);
      state.playlist = result.data.playlist;
      
        store.commit('setPlaylist',state.playlist.tracks)
      
      
      // console.log(result);
    });
    return{
        state
    }
  },

};
</script>

<style>
</style>