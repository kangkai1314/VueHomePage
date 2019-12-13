<template>
  <div class="home">
    <p>使用vue前端框架实现各类网站首页</p>
    <ul>
      <li><a href="/bilibili">B站</a></li>
      <li><a href="/zhihu">知乎</a></li>
      <li><a href="/liepin">猎聘</a></li>
      <li><a href="/aiqiyi">爱奇艺</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .home{
    display: flex;
    justify-content: flex-start;
    background-color: cyan;
  }

</style>
