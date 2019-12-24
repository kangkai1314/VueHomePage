<template>
    <el-menu mode="horizontal" class="top_menu">
      <el-menu-item><el-image :src="logoUrl"></el-image></el-menu-item>
      <el-menu-item><el-input prefix-icon="el-icon-search"></el-input></el-menu-item>
      <el-menu-item index="/" ><i class="el-icon-home">首页</i></el-menu-item>
      <el-menu-item index="/video">视频</el-menu-item>
      <el-menu-item>发现</el-menu-item>
      <el-menu-item>游戏</el-menu-item>
      <el-menu-item>{{user.nickName}}</el-menu-item>
      <el-menu-item><i class="el-icon-message"></i></el-menu-item>
      <el-menu-item><i class="el-icon-setting"></i></el-menu-item>
      <el-menu-item><i class="el-icon-document"></i></el-menu-item>

    </el-menu>
</template>

<script>
export default {
  name: 'WeiboNav',
  data () {
    return {
      logoUrl: 'https://img.t.sinajs.cn/t6/style/images/global_nav/WB_logo.png?id=1404211047727',
      user: {
        nickName: 'kangkai'
      }
    }
  }
}
</script>

<style scoped>
  .top_menu{

  }

</style>
