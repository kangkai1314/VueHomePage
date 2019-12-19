<template>
    <div class="company_page">
      <el-tabs>
        <el-tab-pane label="互联网公司热门榜" >
          <div class="content" style="display: flex;padding: 10px">          <company-content v-for="i in 6" :key="i" ></company-content>
          </div>
          <div class="more" style="display: flex;justify-content: center;padding: 10px">
            <el-button style="width: 400px;   color: #00b38a;border-color: #00b38a">查看更多</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import CompanyContent from './CompanyContent'
export default {
  name: 'Company',
  components: {CompanyContent}
}
</script>

<style scoped>
  /deep/ .el-button:hover{
    color: #fff;
    background: #00B38A;
  }

</style>
