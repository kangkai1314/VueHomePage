<template>
  <div class="weibo_page">
     <weibo-nav></weibo-nav>
    <el-container class="container">
      <div class="content" >
        <el-row>
          <el-col  :span="4">
            <weibo-right-nav>
            </weibo-right-nav>
          </el-col>

            <el-col :span="12" >
              <el-row>              <weibo-input></weibo-input>
              </el-row>
              <el-row>
                <weibo-content></weibo-content>
              </el-row>
            </el-col>
            <el-col :span="8" >
              <weibo-person></weibo-person>
            </el-col>

          </el-row>

        </el-row>

      </div>

    </el-container>
  </div>
</template>

<script>
import WeiboNav from './components/WeiboNav'
import WeiboRightNav from './components/WeiboRightNav'
import WeiboInput from './components/WeiboInput'
import WeiboPerson from './components/WeiboPerson'
import WeiboContent from './components/weiboContent'
export default {
  name: 'index',
  components: {WeiboContent, WeiboPerson, WeiboInput, WeiboRightNav, WeiboNav}
}
</script>

<style scoped>
  .container{
    background-image: url("https://img.t.sinajs.cn/t6/skin/skin053/images/body_bg.jpg?id=201503261330");
    display: flex;

  }
  .content{
    width: 1000px;
    min-height: 680px;
    margin: 0 auto;
    padding: 16px 0 0 0;
    background-color: rgba(96,50,49,0.25);
  }

</style>
