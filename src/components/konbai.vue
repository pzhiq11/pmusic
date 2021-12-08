<template>
  <div @click="changeAside"></div>
</template>

<script>
export default {
    methods:{
        changeAside(){
            this.$emit('changeAside')
        },
       
    }
}
</script>

<style>

</style>