<template>
   <el-col :span="10"><div class="grid-content bg-purple mouse" style="margin-bottom:38px;"><h3>Date</h3>
    </div>
    <div class="grid-content bg-purple-light menu" v-for="(product,index) in products" :key="index">{{ nowTime( product.date + '' ) }}</div>
 </el-col>
</template>

<script>
import globalBus from "@/GlobalBus";


export default {  
    computed: {
      products() {
        return globalBus.products;
      }
    },
    methods :
    {
      nowTime(date){
        var array = date.split(" ")
        //return date.toString().substring(0,15)
        var result = array[3]+"/"+array[1]+"/"+array[2]+"/"+array[0]
        return result
      }
      
    }
}
</script>

<style>
 
</style>