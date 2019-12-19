<template>
  <div class="header">
    <el-menu mode="horizontal" background-color="#32373e">
      <el-menu-item><el-image :src="url1" style="width: 43px;
    height: 40px;    background-position: -10px -1px;"></el-image></el-menu-item>
      <el-menu-item><span>杭州站</span></el-menu-item>
      <el-menu-item v-for="m in menus" :key="m.id" :index="m.index">{{m.name}}</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'LagouNav',
  data () {
    return {
      menus: [{id: 1, name: '首页', index: '/'}, {id: 2, name: '公司', index: '/compony'},
        {id: 3, name: '校园招聘', index: '/socialJob'}, {id: 4, name: '言职', index: '/job'},
        {id: 5, name: '课程', index: '/course'}],
      url1: 'http://www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/sprite_361857f.png'
    }
  }
}
</script>

<style scoped>
 .logo{
 background-image: url(//www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/sprite_361857f.png)
 }

</style>
