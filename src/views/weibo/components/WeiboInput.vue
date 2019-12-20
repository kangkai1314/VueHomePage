<template>
    <div class="weibo_send">
      <el-input type="textarea" style="min-height: 160px"></el-input>
      <el-button>发送</el-button>
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

</style>
