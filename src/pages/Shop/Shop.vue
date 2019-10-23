<template>
   <div>
     <ShopHeader />
     <router-view></router-view>
   </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
  export default {
    data() {
      return {

      };
    },
    components:{
      ShopHeader
    }
  }
</script>
<style>

</style>