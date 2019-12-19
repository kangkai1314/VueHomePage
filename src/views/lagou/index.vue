<template>
<div class="lagou_page">
  <lagou-nav></lagou-nav>
  <div class="container">
    <lagou-searcher></lagou-searcher>
    <lagou-category></lagou-category>
    <lagou-tabs></lagou-tabs>
    <company></company>
    <lagou-links></lagou-links>
  </div>
  <div class="footer">
    <el-row>
      <el-col :span="8">
        <el-button style="width: 200px;   color: #00b38a;border-color: #00b38a">下载拉勾APP</el-button>
        <el-button style="width: 200px;   color: #00b38a;border-color: #00b38a">微信小程序</el-button>
        <el-link>拉勾微博</el-link>
        <el-link>拉钩微信</el-link>

      </el-col>
      <el-col :span="1" >      <el-divider direction="vertical" ></el-divider>
      </el-col>
      <el-col :span="15" style="display: flex;justify-content: space-around">
        <div class="link_content" v-for="i in 3" :key="i" style="display: flex;flex-direction:column;align-items: center">
          <h3>企业服务</h3>
          <el-link>招聘抢人宝典</el-link>
          <el-link>公司搜索</el-link>
          <el-link>拉勾APP</el-link>
        </div>

      </el-col>

    </el-row>

  </div>

</div>
</template>

<script>
import LagouNav from './components/LagouNav'
import LagouSearcher from './components/LagouSearcher'
import LagouCategory from './components/LagouCategory'
import LagouTabs from './components/LagouTabs'
import Company from './components/Company'
import LagouLinks from './components/LagouLinks'
export default {
  name: 'index',
  components: {LagouLinks, Company, LagouTabs, LagouCategory, LagouSearcher, LagouNav}
}
</script>

<style scoped>
  .container{
    padding: 0 0 39px;
  }
  /deep/ .el-divider--vertical {
    height: 5em;
  }

</style>
