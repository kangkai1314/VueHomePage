<template>
    <ol>
      <h3 >{{title}}           <i class="el-icon-circle-check" style="margin-left: 30px">换一换</i></h3>
      <li v-for="rank in ranks" :key="rank.id">#{{rank.title}}# <span style="float: right">{{rank.nums}}亿</span></li>
    </ol>
</template>

<script>
import {fetchWeiboRanks} from '../../../api/weibo/menu'

export default {
  name: 'weiboRanks',
  data () {
    return {
      ranks: [],
      title: '热门话题'
    }
  },
  created () {
    this.getRanks()
  },
  methods: {
    getRanks: function () {
      fetchWeiboRanks().then(response => {
        console.log(response)
        this.ranks = response.data.dataList
      })
    }
  }
}
</script>

<style scoped>
  *{
    font-size: 14px;
  }

</style>
