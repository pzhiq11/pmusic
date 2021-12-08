<template>
    <div id="searchPage">
        <Search-Top />  
    </div>
</template>

<script>
import SearchTop from '@/components/SearchTop.vue'
export default {
    components:{
        SearchTop
    },
    mounted(){
        this.$store.state.playController = true
    }
}
</script>