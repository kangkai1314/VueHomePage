<template>
  <div style='position: relative;'>
    <el-tabs v-model="activeName" @tab-click="handleClick" style='width:100%'>
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth" >定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-input  style='position: absolute;right:10px;top:5px;'></el-input>
  </div>
</template>

<script>
export default {
  name: 'weiboContent'
}
</script>

<style scoped>

</style>
