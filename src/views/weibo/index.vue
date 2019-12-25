<template>
  <div class="weibo_page">
    <div class="weibo_header" style="height: 48px;width:100%;top:0;left:0;position: fixed">
<weibo-nav></weibo-nav>
    </div>
    <div class="back_top" style="position: fixed;bottom: 10px;right: 10px;background-color: white" @click="returnUp">
      <i class="el-icon-arrow-up">返回</i>
    </div>
    <div class="container" style="display: flex;background-color: azure;justify-content: center;overflow: hidden;margin-top: 48px;padding-top: 16px">
      <div class="weibo_container" style="width: 1000px;height: 9000px;background-color: rgba(96,50,49,0.25);overflow: hidden">
        <div class="weibo_menus" style="width: 150px;position: fixed;height: 100%;margin-right: 150px">
          <weibo-right-nav></weibo-right-nav>
        </div>
        <div class="main_content" style="display: flex;flex-direction: column">
          <div class="first_col" style="display: flex;flex: 1">
            <div class="weibo_input" style="width: 600px;background-color: white;margin-left: 150px;margin-bottom: 10px">
              <weibo-input></weibo-input>

            </div>
            <div class="weibo_person" style="width: 230px;margin-left: 10px;margin-right: 10px;background-color: white;">
              <weibo-person></weibo-person>
            </div>
          </div>
          <div class="sencond_col" style="display: flex;flex-wrap: wrap">
            <div class="weibo_content" style="margin-left: 150px;background-color: white">
              <weibo-content></weibo-content>
            </div>
            <div class="weibo_content1" style="">
              <div class="weibo_ranks" style="background-color: white;margin-top: 20px;padding: 10px;margin-left: 10px">
               <weibo-ranks></weibo-ranks>
              </div>
              <div class="weibo_ranks" style="background-color: white;margin-top: 10px;margin-left: 10px;padding: 10px;">
              <weibo-ranks></weibo-ranks>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeiboNav from './components/WeiboNav'
import WeiboRightNav from './components/WeiboRightNav'
import WeiboInput from './components/WeiboInput'
import WeiboPerson from './components/WeiboPerson'
import WeiboContent from './components/weiboContent'
import {fetchWeiBoMenus} from '../../api/weibo/menu'
import WeiboRanks from './components/weiboRanks'

export default {
  name: 'index',
  components: {WeiboRanks, WeiboContent, WeiboPerson, WeiboInput, WeiboRightNav, WeiboNav},
  data () {
    return {
      ids: []
    }
  },
  created () {
    this.fetchMenus()
  },
  methods: {
    fetchMenus: function () {
      fetchWeiBoMenus().then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    returnUp: function () {
      window.scroll(0, 0)
    }
  }
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
