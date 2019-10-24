<template>
  <div>
  <el-row v-for="(product,index) in products" :key="index"> <h3>{{product.name}}({{product.quantity}})</h3>

    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="detail" :name= "product.index">

        <Checkbox value="fish" v-model="num.checked" v-for="num in product.nums" :key="num.index"> {{ num.name }}</Checkbox>
        <el-col :span="8"><el-button type="text" class="button" @click="add(product)">add</el-button></el-col>
        <el-col :span="8"><el-button type="text" class="button" @click="remove(product)">delete</el-button></el-col>
        <el-col :span="8"><el-button type="text" class="button">Repair</el-button></el-col>
          </el-collapse-item>
    </el-collapse>

  </el-row>
  
  <Footer></Footer>
  </div>
</template>

<script>
import globalBus from "@/GlobalBus";
import Checkbox from 'vue-material-checkbox'
import Footer from "@/views/Home/Footer"
export default {
   data () {
     return{
       values : [],
       activeNames: '1'
     }
   },
   computed: {
     products(){
       return globalBus.products
     }
   },
   methods: {
      handleChange(val) {
        console.log(val);
      },

      add(product){
        this.$prompt('Input serial number', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(({ value }) => {
          
          product.nums.push(
            {
            name:value,
            checked:false
          })
          
          if(product.nums.length>product.quantity){
             product.quantity +=1
            this.$message({
            type: 'success',
            message: '성공'
          });
          }
          else{
            this.$message({
            type: 'success',
            message: product.quantity-product.nums.length+"만큼 추가해야 됩니다."
          });
          }


        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      },


      remove(product){
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {

          var num =product.nums
          var i=num.length-1
          for(i;i>=0;i--){
            if(num[i].checked==true){
              num.splice(i,1)
              product.quantity -=1
            }
          }
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
  components: {
    Checkbox,
    Footer
    }

}
</script>

<style>

</style>