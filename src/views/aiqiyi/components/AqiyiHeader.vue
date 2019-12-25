<template>
  <div class="header_inner">
    <p>爱奇艺</p>
    <div class="searcher">
       <el-input placeholder="海贼王" prefix-icon="el-icon-search">
         <template slot="append" style="background-color: black">
           <el-button style=" border-radius: 0 21px 21px 0;
    background-color: #00be06;" ><i class="el-icon-search"></i>搜全网</el-button>
         </template>
       </el-input>
    </div>
    <div class="searcher_menus">
      <el-menu mode="horizontal" background-color="black">
        <el-menu-item  style="position: relative">
          <i class="el-icon-circle-check" style="position: absolute;top:5px"></i>VIP
        </el-menu-item>
        <el-menu-item  style="position: relative">
          <i class="el-icon-circle-check" style="position: absolute;top:5px"></i>上传
        </el-menu-item>
        <el-menu-item  style="position: relative">
        <i class="el-icon-circle-check" style="position: absolute;top:5px"></i>客户端
      </el-menu-item>
        <el-menu-item  style="position: relative">
        <i class="el-icon-circle-check" style="position: absolute;top:5px"></i>消息
      </el-menu-item>  <el-menu-item  style="position: relative">
        <i class="el-icon-circle-check" style="position: absolute;top:5px"></i>看过
      </el-menu-item>

      </el-menu>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AqiyiHeader'
}
</script>

<style scoped>
  .header_inner{
    display: flex;
    justify-content: space-between;
    height: 64px;
    padding-left: 20px;

  }
  p{
    color: cyan;
  }
  .searcher{
    display: flex;
    padding: 10px;
  }
  .el-input__inner{
    height: 20px;
  }
  .searcher_menus{
  }
  .searcher_menu{

  }
 /deep/ .el-input-group__append {
    background-color: black;
    border: none;
   color: black;
  }

</style>
