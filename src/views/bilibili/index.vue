<template>
    <div class="bilibili_page">
      <nav-bar></nav-bar>
      <div class="main_content">
        <primary-menu></primary-menu>

      </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar'
import PrimaryMenu from './components/PrimaryMenu'
export default {
  name: 'index',
  components: {PrimaryMenu, NavBar}
}
</script>

<style scoped>
  .main_content{
    display: flex;
    justify-content: center;
  }

</style>
