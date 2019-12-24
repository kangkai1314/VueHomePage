<template>
    <el-menu mode="vertical" style="width:150px;height: 50px" background-color="rgba(96,50,49,0.25)">
      <el-menu-item>首页</el-menu-item>
      <el-menu-item>我的收藏</el-menu-item>
      <el-menu-item>我的赞</el-menu-item>
      <el-menu-item-group style="padding-top: 20px">
        <el-menu-item>热门微博</el-menu-item>
        <el-menu-item>热门视频</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group style="overflow: scroll;height: 400px">
        <el-menu-item>最新微博</el-menu-item>
        <el-menu-item>好友圈</el-menu-item>
        <el-menu-item>特别关注</el-menu-item>
        <el-menu-item>名人明星</el-menu-item>
        <el-menu-item>同学</el-menu-item>
        <el-menu-item>软件</el-menu-item>
        <el-menu-item>休闲</el-menu-item>
      </el-menu-item-group>
    </el-menu>
</template>

<script>
export default {
  name: 'WeiboRightNav'
}
</script>

<style scoped>

</style>
