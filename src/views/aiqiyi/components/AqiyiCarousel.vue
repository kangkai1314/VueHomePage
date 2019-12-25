<template>
    <el-carousel direction="vertical" :autoplay="false" ref="carousel">
      <div class="zhishi-area" style="height: 100%">
        <ul style="float: right;background-color: rgb(0,0,0);height: 100%;margin-right: 20px;">
          <li v-for="i in 6" :key="i" style="padding: 10px" @mouseenter="show(i)">
            <span style="margin-right: 20px" >精英律师</span></li>
        </ul>
      </div>
      <el-carousel-item v-for="i in 6" :key="i" :name="i" >
        <div class="caro_item"
             style="background-image: url(https://pic1.iqiyipic.com/common/lego/20191223/252666b458b54b15885dcc1de910918d.jpg);width: 100%;height: 100%;overflow: hidden">
        </div>

      </el-carousel-item>
    </el-carousel>

</template>

<script>
export default {
  name: 'AqiyiCarousel',
  data () {
    return {
      url: 'https://pic1.iqiyipic.com/common/lego/20191223/252666b458b54b15885dcc1de910918d.jpg',
      styleObj: {
        width: '100%',
        height: '100%'
      }
    }
  },
  methods: {
    show: function (name) {
      console.log(name)
      this.$refs.carousel.setActiveItem(name)
    }
  }
}
</script>

<style scoped>
  li:hover{
    color: darkgreen;
    font-size: 19px;
    background-color: #f8f8f8;
  }
  ul{
    padding: 0;
  }

</style>
