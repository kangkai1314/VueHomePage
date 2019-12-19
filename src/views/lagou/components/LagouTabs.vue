<template>
    <el-tabs >
      <el-tab-pane label="24HOUR热门">
        <div class="content" style="display: flex">
          <job-content v-for="i in 6" :key="i"></job-content>
        </div>
        <div class="more" style="display: flex;justify-content: center;padding: 10px">
          <el-button style="width: 400px;   color: #00b38a;border-color: #00b38a">查看更多</el-button>
        </div>

      </el-tab-pane>
      <el-tab-pane label="最新职位">
        <div class="content" style="display: flex">
          <job-content v-for="i in 6" :key="i"></job-content>
        </div>

      </el-tab-pane>
    </el-tabs>
</template>

<script>
import JobContent from './JobContent'
export default {
  name: 'LagouTabs',
  components: {JobContent}
}
</script>

<style scoped>

</style>
