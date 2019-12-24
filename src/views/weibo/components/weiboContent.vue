<template>
  <div style='position: relative;width: 600px;height: 100%;overflow: auto'  >
    <el-tabs>
      <el-tab-pane label="全部" name="first" style="display: flex;flex-direction: column">
        <div class="content_info" v-for="i  in 100" :key="i" style="padding: 10px">
          <p>this is content</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="原创" name="second">原创博文</el-tab-pane>
      <el-tab-pane label="图片" name="third">图片管理</el-tab-pane>
      <el-tab-pane label="视频" name="fourth" >视频</el-tab-pane>
      <el-tab-pane label="音乐" name="music">音乐</el-tab-pane>
      <el-tab-pane label="文章" name="paper">文章</el-tab-pane>
    </el-tabs>
    <el-input  style='position: absolute;left:400px;top:0' prefix-icon="el-icon-search"></el-input>
  </div>
</template>

<script>
export default {
  name: 'weiboContent'
}
</script>

<style scoped>
  /deep/ .el-input__inner{
    width: 150px;
    height: 28px;
  }

</style>
