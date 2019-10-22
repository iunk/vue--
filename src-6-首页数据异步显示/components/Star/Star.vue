<template>
   <div class="star star-24">
        <span class="star-item" v-for="(starClass, index) in starClasses" :key="index" :class="starClass"></span>
   </div>
</template>

<script>
  export default {
    props:{
        score: Number
    },
    computed: {
        starClasses(){
            const {score} = this
            const spanArr=[]
            const onNum = Math.floor(score)
            for(let i = 0; i<onNum; i++){
                spanArr.push('on')
            }
            if((score*10) % (onNum*10) >= 5){
                spanArr.push('on')
            }else{
                spanArr.push('half')
            }
            while(spanArr.length < 5){
                spanArr.push('off')
            }
            console.log(spanArr)
            return spanArr
        }
    }
  }
</script>

<style>

</style>