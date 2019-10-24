<template>
<div>
  <el-table
    :data="log.filter(data => !search || data.log.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">

    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="log"
      prop="log">
    </el-table-column>
    <el-table-column
      align="right">


      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>

    </el-table-column>
    
  </el-table>
    <Footer></Footer>
</div>
</template>






<script>
import globalBus from "@/GlobalBus"

import Footer from "@/views/Home/Footer"

  export default {
    data() {
      return {
        search: '',
      }
    },
    computed: {
      log(){
       return globalBus.log
     }
    },
    methods: {
      handleDelete(index, row) {
        console.log(index, row)

        this.$confirm('This will permanently delete the Log. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          globalBus.log.splice(index,1);


          this.$message({
            type: 'success',
            message: 'Delete completed'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
      }
    },
    components : {
      Footer
    }
  }
</script>