<template>
<div>
    <div class="grid-content bg-purple-light menu"><el-button type="text"  @click="dialogFormVisible = true"> {{product.name}}</el-button></div>
     
     
     <el-dialog title="Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Product-name" :label-width="formLabelWidth">{{product.name}}
          </el-form-item>
          <el-form-item label="Product-quantity" :label-width="formLabelWidth">{{product.quantity}}
          </el-form-item>
          <el-form-item label="type" :label-width="formLabelWidth">{{product.name}}
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
        </span>
      </el-dialog>

</div>

</template>

<script>

export default {  
    data(){
        return {
          dialogFormVisible: false,
          formLabelWidth: '120px',
          form: {
            name: '',
            quantity: 0, 
            type: '',
        }
        }
    },
    props :{
        product:{
            type:Object,
            required:true
        }
    },
    computed: {
     
    },
    methods: {
        Info() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>

<style>

</style>