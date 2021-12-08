<template>
  <div class="marginleft">
    <router-view class="appH"/> 
    <playController v-if="$store.state.playController"></playController>
    
  </div>
  
</template>
<script>
 
import playController from './components/playController.vue'
export default {
  components:{
    playController,
  },
  mounted(){
    if(localStorage.userData ==null && localStorage.userData ==undefined){
      return   
    }
    let userData = JSON.parse(localStorage.userData);
    // console.log(userData)
    
    this.$store.commit('setUser',userData);
    
  },
  methods:{
    
      
   
    }
  }

</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
  
}
.icon{
  width: 0.3rem;
  height: 0.3rem;
}
a{
  color: #333;
  text-decoration: none;
}
.appH{
  height: calc(100vh - 1.2rem);
  overflow: scroll;
  
  
}
// .marginleft{
//   margin-left: 5.75rem;
// }
</style>
