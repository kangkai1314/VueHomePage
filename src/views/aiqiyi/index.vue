<template>
    <div class="aiqiyi_page">
      <div class="header">
        <aqiyi-header></aqiyi-header>
      </div>
      <aqiyi-carousel></aqiyi-carousel>
      <aqiyi-nav></aqiyi-nav>
      <div class="qiyi_item" v-for="i in 8" :key="i">
        <aqiyi-content></aqiyi-content>
      </div>
    </div>
</template>

<script>
import AqiyiHeader from './components/AqiyiHeader'
import AqiyiCarousel from './components/AqiyiCarousel'
import AqiyiNav from './components/AqiyiNav'
import AqiyiContent from './components/AqiyiContent'
export default {
  name: 'index',
  components: {AqiyiContent, AqiyiNav, AqiyiCarousel, AqiyiHeader}
}
</script>

<style scoped>
  .aiqiyi_page{

  }
  .header{
    width: 100%;
    margin:  0 32px 32px 0;
    background-color: black;
  }

</style>
