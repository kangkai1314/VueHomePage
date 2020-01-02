<template>
    <div class="tuiguang_view">
      <div class="t-view1">
<div class="t-view1-title">
<el-link class="title_link" ><i class="el-icon-alarm-clock"></i>推广</el-link>
  <el-link class="title_name">{{content}}</el-link>

</div>
        <div class="t-view1-content" >
          <div class="page_content" v-for="i in 4" :key="i" style="margin-right: 5px">
            <el-image :src="url" style="width: 170px;height: 96px"></el-image>
            <p>this is a description</p>
            <a>author</a>
          </div>
        </div>
      </div>
      <div class="t-view2">
        <el-button style="width: 100%;margin-bottom: 10px">在线列表</el-button>
        <el-image :src="url1"></el-image>

      </div>

    </div>
</template>

<script>
export default {
  name: 'tuiGuang',
  data () {
    return {
      content: '这是一段附内容的标题',
      url: 'http://i0.hdslb.com/bfs/archive/fdc91a65955c801c4267d0a8e34a695e754b0ccb.jpg@412w_232h_1c_100q.jpg',
      url1: 'http://i0.hdslb.com/bfs/archive/25cdb2ccbdc90c0e2806d6823ee767607a48ba0d.jpg'
    }
  }
}
</script>

<style scoped>
  .tuiguang_view{
   display: flex;
  }
  .t-view1-title{
    padding: 10px;
  }
  .title_name:before{
    content: "\E743";
  }
  .t-view1-content{
    display: flex;
  }
  a:hover, p:hover{
    color: deepskyblue;
  }
  .title_link{
    font-size: 20px;
  }

</style>
