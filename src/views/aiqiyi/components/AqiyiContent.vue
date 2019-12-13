<template>
  <div class="today_focus">
    <div class="qiyi_content">
      <h1>{{title}}</h1>
      <h3>{{subtitle}}</h3>
      <p>更多热点</p>
    </div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  name: 'AqiyiContent',
  data () {
    return {
      title: '今日焦点',
      subtitle: '第二个“百年目标”将实现哪些目标？'
    }
  }
}
</script>

<style scoped>
  .qiyi_content{
    display: flex;
    justify-content: space-around;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
