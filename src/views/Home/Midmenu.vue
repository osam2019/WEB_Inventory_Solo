<template>
   <el-col :span="4">
     <div class="grid-content bg-purple mouse" style="margin-bottom:38px; "><h3>Quantity</h3>
    </div>
      <div class="grid-content bg-purple-light menu" v-for="(product,index) in products" :key="index">{{product.quantity}}</div>
    </el-col>
</template>

<script>


import globalBus from "@/GlobalBus";
export default {  
    data(){
        return {
        }
    },
    computed:{
      products(){
        return globalBus.products;
      }
    },
    methods : {
        
    }

}
</script>

<style>

  .el-row {
      margin : 20px;
      text-align: center;
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }

</style>