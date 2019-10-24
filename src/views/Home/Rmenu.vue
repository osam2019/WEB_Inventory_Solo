<template>
   <el-col :span="4"><div class="grid-content bg-purple mouse" style="margin-bottom:38px;"><h3>type</h3>
    </div>
   <div class="grid-content bg-purple-light menu" v-for="(product,index) in products" :key="index">{{product.type}}</div>
    </el-col>
</template>

<script>

import globalBus from "@/GlobalBus";

export default {  
    computed:{
      products(){
        return globalBus.products;
      }
    }

}
</script>

<style>
</style>