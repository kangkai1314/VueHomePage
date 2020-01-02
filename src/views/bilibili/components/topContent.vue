<template>
    <div class="topContent">
      <div class="header_caro">
        <el-carousel height="202px"  >
          <el-carousel-item>
            <el-image :src="url" style="height: 100%" ></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="caro_content1">

            <div class="caro_content" v-for="i in 6" :key="i">

            </div>

      </div>

    </div>

</template>

<script>
export default {
  name: 'topContent',
  data () {
    return {
      url: 'https://i0.hdslb.com/bfs/sycp/creative_img/201912/bb17849d8ca74dd0d5832877884832b2.jpg@1100w_484h_1c_100q.jpg'
    }
  }
}
</script>

<style scoped>
  .topContent{
    display: flex;
  }
  .header_caro{
    width: 46%;
  }

  .caro_content{
    width: 170px;
    height: 96px;
    margin: 0 0 0 5px;
    background-image: url('//i1.hdslb.com/bfs/archive/21459309c674ffe684c600066d181c36b8bdeacd.jpg@206w_116h_1c_100q.webp');
    background-repeat: no-repeat;
    background-size: 100% 100%;

  }
  .caro_content1{
    display: flex;
    width: 54%;
    flex-wrap: wrap;
    padding-top: 0;
  }

</style>
