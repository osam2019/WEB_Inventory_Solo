<template>
  <div id="main">
    <h1>Inventory</h1>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">Storage</el-menu-item>
    <el-menu-item index="/repair">Repair</el-menu-item>
    <el-menu-item index="/history">History</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>


  </el-menu>
  
      <router-view/>
  </div>
  
</template>

<style >
 h1{
   text-align: center;
 }
 #main{
    margin-right: 60px;
    margin-left: 60px;
  
  
 }

</style>
<script>

export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };  
    },
    methods: { 
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push({path:key})
      }
    }

  }
</script>
