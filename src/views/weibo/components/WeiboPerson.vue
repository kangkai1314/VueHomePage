<template>
  <div class="view">
    <div class="person_view" >
      <div class="view1">
        <el-avatar :src="user.avatar"></el-avatar>
      </div>
      <div class="view2">
        <h3>{{user.name}}<i class="el-icon-video-camera"></i></h3>
      </div>

    </div>
    <div class="person_info" >
      <el-col :span="8" v-for="i in 3" :key="i" style="padding: 5px;border-right: 1px solid cyan">
        <p >关注</p>
      </el-col>
    </div>
  </div>
</template>

<script>
import {fetchWeiBoUser} from '../../../api/weibo/menu'

export default {
  name: 'WeiboPerson',
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    getUsers: function () {
      fetchWeiBoUser().then(response => {
        console.log(response)
        this.user = response.data
        this.$message.success('get info success')
      }).catch(error => {
        console.log(error)
        this.$message.error('failed')
      })
    }
  }
}
</script>

<style scoped>
  .person_view{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  .view1{
    flex: 1;

  }
  .view2{
    flex: 1;
  }
  .person_info{
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }

</style>
