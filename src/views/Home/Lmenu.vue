<template>
    <el-col :span="6">
      <div class="grid-content bg-purple mouse"><h3>Product-Name</h3>
      <div class="icon">
          <el-col :span="12"><el-button type="text" @click="dialogFormVisible = true"><i class="el-icon-circle-plus-outline"></i></el-button></el-col>
          <el-col :span="12"><el-button type="text" @click="remove"><i class="el-icon-delete-solid"></i></el-button></el-col>
      </div>
    </div>
        <div  style="width: 100%">
          <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
                
        <addStorage v-for="product in searchProducts" :key="product.index" :product="product" ></addStorage>
      </div>
      
      <el-dialog title="Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Product-name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Product-quantity" :label-width="formLabelWidth">
            <el-input v-model="form.quantity" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="type" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="Please select a zone">
              <el-option label="new" value="new"></el-option>
              <el-option label="old" value="old"></el-option>
            </el-select>
          </el-form-item>

           <el-form-item label="Date" :label-width="formLabelWidth">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="time"
                  type="datetime"
                  placeholder="Select date and time"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="Confirm" id="Confirm">Confirm</el-button>
        </span>
      </el-dialog>

  
    </el-col>
</template>

<script>
import AddStorage from '@/components/AddStorage.vue'
import globalBus from "@/GlobalBus";


export default {  
    data(){
        return {
          index : 0,
          search: '',
          time: '',
          dialogFormVisible: false,
          formLabelWidth: '120px',
          form: {
            name: '',
            quantity: 0, 
            type: '',
            date :''
          },
           pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        }
    },
    components :{
      AddStorage
    },
    computed: {
      
      products() {
        return globalBus.products;
      },
      searchProducts(){
            if(this.search.trim().length==0){
              return this.products;
            }
    
            return this.products.filter((product) => {
                return !this.search || product.name.toLowerCase().includes(this.search.toLowerCase())
            })
          },
        nowTime(date){
        var array = date.split(" ")
        //return date.toString().substring(0,15)
        var result = array[3]+"/"+array[1]+"/"+array[2]+"/"+array[0]
        return result
      } 
    },
    methods : {
      
      Confirm(){
        let newData = {
            name:this.form.name,
            quantity: this.form.quantity,
            type : this.form.type,
            date:this.time.toString(),
            nums : []
          }
        let newlog ={
          log :newData.name+"("+newData.type+")를 "+newData.quantity+"만큼 창고에 추가시킴",
          date : newData.date
        }
          newData.quantity *=1
          this.products.push(newData)

          globalBus.log.push(newlog)
          
          this.index +=1

          this.$message({
            type: 'success',
            message: 'Add completed  등록한품목들의 각각의 일렬번호를 등록해 주세요(repair 탭에서 가능)'
          });

          this.dialogFormVisible = false
      },  

      remove() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
          this.products.pop()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      }
      
    }
}


</script>

<style>

  .mouse:hover .icon {
    display: inline-block;
  }

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
     .menu{
    margin: 10px;
    height: 36px;
  }
    .icon{
    height: 36px;
    width: 188px;
    display: none;
  }
  .icon>.el-col{
    margin: 0px;
  }
  #name{
    height: 36px;
    width: 188px;
    
  }
</style>