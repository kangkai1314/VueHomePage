<template>
    <div class="weibo_send">
      <el-input type="textarea" ></el-input>
      <el-button style="float: right">发送</el-button>
    </div>
</template>

<script>
export default {
  name: 'WeiboInput'
}
</script>

<style scoped>
  .weibo_send{
    margin: 10px;
    background-color: white;
  }
  /deep/ .el-textarea__inner{
    height: 100px;
  }

</style>
