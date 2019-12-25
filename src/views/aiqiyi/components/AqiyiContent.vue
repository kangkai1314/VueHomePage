<template>
  <div class="today_focus">
    <div class="qiyi_content">
      <h1><i class="el-icon-document" style="color: #00be06;"></i>{{title}}</h1>
      <span style="margin-left: 10px;margin-top: 28px">{{subtitle}}</span>
      <p style="margin-left: 10px;margin-top: 28px"><i class="el-icon-arrow-right"></i>更多热点
      <i class="el-icon-s-platform"></i></p>
    </div>
    <div class="caro_view" >
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item" >
          <div class="img_views" style="display: flex" >
            <div class="video_view" style="position: relative;margin: 10px" v-for="i in 5" :key="i">
              <el-image :src="url1" ></el-image>
              <p style="background-color:#f8f8f8;margin: 0;padding: 0">这是一段文字描述</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

</template>

<script>
export default {
  name: 'AqiyiContent',
  data () {
    return {
      title: '今日焦点',
      subtitle: '第二个“百年目标”将实现哪些目标？',
      url1: 'https://pic2.iqiyipic.com/image/20191224/61/54/v_143018415_m_601_220_124.jpg'
    }
  }
}
</script>

<style scoped>
  .qiyi_content{
    display: flex;
    justify-content: flex-start;
    text-align: center;
  }
  /deep/ .el-carousel__item{
    height: auto;
  }
  /deep/ .el-carousel__container{
    height: 200px;
  }
  p:hover{
    color: #00be06;;
  }

</style>
