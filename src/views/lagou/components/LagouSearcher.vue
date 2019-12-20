<template>
  <div class="searcher">
    <div class="input_search">
      <el-input>  <el-button slot="append">搜索</el-button></el-input>
    </div>
    <div class="hot_items">
      <span>热门推荐</span>
      <div class="item_links">
        <a href="">高薪招聘</a>
        <a href="">JAVA面试</a>
        <a href="">架构设计</a>
        <a href="">C++</a>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'LagouSearcher'
}
</script>

<style scoped>
  .searcher{
    background-color:#F2F5F4 ;
    padding: 30px 0 28px;
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .input_search{
   padding: 20px 40px;

  }
  .hot_items{
    display: flex;
    justify-content: center;

  }
  .hot_items span{
    padding: 20px;
  }
  .item_links{
    padding: 20px;
  }
  a{
    text-decoration: none;
    color: #00b38a;
  }

</style>
