<template>
  <div class="header_inner">
    <p>爱奇艺</p>
    <div class="searcher">
       <el-input placeholder="海贼王" prefix-icon="el-icon-search"></el-input>
      <el-button>搜索</el-button>
    </div>
    <div class="searcher_menus">
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
    padding: 20px;
  }
  .searcher_menu{

  }

</style>
