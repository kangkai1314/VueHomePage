<template>
    <div class="category">
      <el-row>
        <el-col :span="6">
          <el-popover
            placement="right"
            width="200"
            trigger="click"
            v-for="i in 6"
            :key="i"
            >
            <div class="prop_content">
            <h3>后端开发</h3>

            </div>
            <div slot="reference" style="display: flex">
              <h4>技术</h4>
              <a><span>JAVA</span></a>
              <a><span>JAVA</span></a>
              <a><span>JAVA</span></a>
              <i class="el-icon-arrow-right"></i>
            </div>
          </el-popover>

        </el-col>
        <el-col :span="18">
          <el-carousel>
            <el-carousel-item>
              <el-image :src="url"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'LagouCategory',
  data () {
    return {
      url: 'https://www.lgstatic.com/thumbnail_1000x0/i/image3/M01/58/F9/CgpOIF3563aARooDAAGBX7neLt0907.JPG'
    }
  }
}
</script>

<style scoped>
  a{
    padding: 20px;
  }

</style>
