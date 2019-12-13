<template>
    <el-carousel height="520px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="i in 6" :key="i">
        <h3>{{i}}</h3>
      </el-carousel-item>

    </el-carousel>
</template>

<script>
export default {
  name: 'AqiyiCarousel'
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
