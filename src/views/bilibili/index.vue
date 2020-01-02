<template>
    <div class="bilibili_page">
      <div class="bilibili_banner">

      </div>
      <!--<div class="bilibili_menus">-->
        <!--<div class="test_view">-->

        <!--</div>-->
        <!--<div class="center">-->
          <!--<p>这是一个段落。这是一个段落。这是一个段落。这是一个段落。这是一个段落。</p>-->
          <!--<p>这是一个段落。这是一个段落。这是一个段落。这是一个段落。这是一个段落。</p>-->
        <!--</div>-->
        <!--<div class="text">-->
          <!--<div style="display: inline-block;height: 200px;width: 200px"></div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="nav" v-if="show">
        <el-menu mode="vertical">
          <el-menu-item v-for="i in 10" :key="i">菜单</el-menu-item>
        </el-menu>
      </div>
      <div class="content">
       <PrimaryMenu></PrimaryMenu>
        <top-content></top-content>
        <tui-guang></tui-guang>
        <el-image src="https://i0.hdslb.com/bfs/sycp/creative_img/201912/840594a73644df56067b60ba29b28454.jpg"></el-image>
        <animate-content></animate-content>
      </div>

    </div>
</template>

<script>
import NavBar from './components/NavBar'
import PrimaryMenu from './components/PrimaryMenu'
import TopContent from './components/topContent'
import TuiGuang from './components/tuiGuang'
import AnimateContent from './components/animateContent'
export default {
  name: 'index',
  components: {AnimateContent, TuiGuang, TopContent, PrimaryMenu, NavBar},
  data () {
    return {
      show: false,
      scroll1: ''
    }
  },
  methods: {
    scroll: function () {
      this.scroll1 = document.documentElement.scrollTop
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  watch: {
    scroll1: function (newVal, oldVal) {
      console.log(newVal)
      if (newVal > 70) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
   .bilibili_banner{
     background-image:url('http://i0.hdslb.com/bfs/archive/a3f1c43892332aff4860f65d5a3d7a4d2f918869.png');
     width:100%;
     margin: 0 auto;
     position: relative;
     z-index: 0;
     min-height: 155px;
     height: 9.375vw;
     min-width: 999px;
     display: -ms-flexbox;
     display: flex;
     -ms-flex-pack: center;
     justify-content: center;
     background-repeat: no-repeat;
     background-position: center 0;
     background-size: cover;
   }
  .bilibili_page{

  }
  .bilibili_menus{
    padding: 20px;
    margin: 0 auto;
  }
  .test_view{
    border:2px solid;
    border-radius:25px;
    width: 500px;
    height: 500px;
    background-color: black;
    box-shadow: 10px 10px 5px #888888;
    position:relative;
    animation:mymove 5s infinite;
    -moz-animation:mymove 5s infinite; /* Firefox */
    -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
    -o-animation:mymove 5s infinite; /* Opera */
  }
  .test_view:hover{
    background-color: blue;
  }
  .test_view::before{
    content: 'hello';
    background-color: green;
    height: 100%;
  }
  .test_view::after{
    content:'listen'
  }
   .center
   {
     margin:auto;
     width:70%;
     background-color:#b0e0e6;
   }
   @keyframes mymove
   {
     from {top:0px;}
     to {top:200px;}
   }

   @-moz-keyframes mymove /* Firefox */
   {
     from {top:0px;}
     to {top:200px;}
   }

   @-webkit-keyframes mymove /* Safari and Chrome */
   {
     from {top:0px;}
     to {top:200px;}
   }

   @-o-keyframes mymove /* Opera */
   {
     from {top:0px;}
     to {top:200px;}
   }
   .newspaper {
     column-count: 3;
     -moz-column-count: 3; /* Firefox */
     -webkit-column-count: 3; /* Safari and Chrome */

     column-gap: 40px;
     -moz-column-gap: 40px; /* Firefox */
     -webkit-column-gap: 40px; /* Safari and Chrome */

     column-rule: 4px outset #ff00ff;
     -moz-column-rule: 4px outset #ff00ff; /* Firefox */
     -webkit-column-rule: 4px outset #ff00ff; /* Safari and Chrome */
   }

  .view{
    display: inline-block;
    height: 200px;
    background-color: black;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
  .content{
    box-sizing: border-box;
    margin: 0 auto;
    width: 1012px;
    height: 100%;
  }
  .nav{
    position: fixed;
    width: 100px;
    height: 100%;
    background-color: darkgray;
    right: 1px;
    top:70px;
  }

</style>
