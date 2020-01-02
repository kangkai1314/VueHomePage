<template>
<div class="a-page" >
  <div class="a-page-content">
    <div class="a-page-content-title">
      <el-link class="title_link">正在直播</el-link>
    </div>
    <div class="a-page-container" style="display: flex">
    <div class="a-page-content1" v-for="i in 4" :key="i" style="margin-right: 10px">
      <el-image :src="url" style="width: 170px;height: 96px"></el-image>
      <div class="up_info" style="display: block">
        <el-avatar src="https://i2.hdslb.com/bfs/face/fb3f8cf2139d3da01ccea547e4acb93e382783ea.jpg@36w_36h_1c_100q.webp"></el-avatar>
        <span>title name</span>
        <p>zhibo title</p>
        <p>directory</p>
      </div>

    </div>
  </div>

  </div>
  <div class="a-page-content1">
    <el-tabs>
      <el-tab-pane label="直播排行">
       <ol>
         <li v-for="i in 5" :key="i">
           <el-avatar src="https://i1.hdslb.com/bfs/face/d851f48a579778b06249bf3debaa62d353694e91.jpg@44w_44h_1c_100q.webp"></el-avatar>
           <span>up name</span>
           <div class="count_info">

           </div>
         </li>
       </ol>
      </el-tab-pane>
      <el-tab-pane label="关注的主播"></el-tab-pane>
      <el-tab-pane label="为你推荐">
        <el-image :src="url1"></el-image>
      </el-tab-pane>
    </el-tabs>

  </div>
</div>
</template>

<script>
export default {
  name: 'animateContent',
  data () {
    return {
      url: 'https://i0.hdslb.com/bfs/live/user_cover/a71784f16139bf462643ae3603504080e54c4ffb.jpg@206w_116h_1c_100q.webp',
      url1: 'https://i0.hdslb.com/bfs/live/37caec0ceb23546471ffb18bf5625398b7681a95.jpg@320w_330h_1c_100q.webp'
    }
  }
}
</script>

<style scoped>
  .a-page{
    display: flex;
  }

</style>
