<template>
<div>
 <el-row>
 
    <Lmenu></Lmenu>
    <Midmenu></Midmenu>
    <Rmenu></Rmenu>
    <Date></Date>
  </el-row>
   
  <el-row>
     <Graph></Graph>
  </el-row>
  
  <el-row>
     <Footer></Footer>
  </el-row>
</div>
</template>
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
<script>



import Lmenu from '@/views/Home/Lmenu.vue'
import Midmenu from '@/views/Home/Midmenu.vue'
import Rmenu from '@/views/Home/Rmenu.vue'
import Date from '@/views/Home/date.vue'
import Graph from '@/views/Home/Graph.vue'
import Footer from '@/views/Home/Footer.vue'

 export default {
   data(){
     return{

     }
   },
  methods : {
  
    },
  components :{
      Lmenu,
      Midmenu,
      Rmenu,
      Date,
      Graph,
      Footer
    }
  }
</script>
