<template>
    <el-row class="menus_class">
      <el-col :span="8" class="menu_item">
          <a href=""><span>首页</span></a>
          <a href=""><span>动态</span></a>
          <a href=""><span>排行榜</span></a>
      </el-col>
      <el-col :span="12">
            <el-menu class="detail_menu">
              <el-menu-item v-for="menu in menus" :key="menu.id">
                {{menu.name}}
              </el-menu-item>
            </el-menu>
      </el-col>
      <el-col :span="4">
        <ul class="el-row--flex">
          <el-col :span="1">
            <li v-for="menu in menus1" :key="menu.id">
              {{menu.name}}
            </li>
          </el-col>

        </ul>
      </el-col>

    </el-row>

</template>

<script>
export default {
  name: 'PrimaryMenu',
  data () {
    return {
      menus: [{id: 1, name: '动画'}, {id: 2, name: '音乐'}, {id: 3, name: '舞蹈'}, {id: 4, name: '科技'},
        {id: 5, name: '生活'}, {id: 6, name: '时尚'}, {id: 7, name: '娱乐'}, {id: 8, name: '放映厅'}],
      menus1: [{id: 1, name: '专栏'}, {id: 2, name: '小黑屋'}, {id: 3, name: '活动'}, {id: 4, name: '直播'},
        {id: 5, name: '专题'}, {id: 6, name: '赛事'}]
    }
  }
}
</script>

<style scoped>
  .menus_class{

  }
  .menu_item{
    padding: 0;
  }

</style>
