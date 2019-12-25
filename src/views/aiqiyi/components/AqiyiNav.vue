<template>
    <div class="qiyi_nav">
      <div class="view1" v-for="i in 5" :key="i" style="display: flex;margin-right: 20px">
        <div class="view2" v-for="i in 3" :key="i">
          <ul >
            <li v-for="i in 2" :key="i">
              <a>测试</a>
            </li>
          </ul>

        </div>
      </div>
      <div class="vip_view" style="position: relative;text-align: center;padding: 10px" >
        <i class="el-icon-setting" style="position: absolute;top:5px"></i>
        <p>会员精选</p>
      </div>

    </div>
</template>

<script>
export default {
  name: 'AqiyiNav'
}
</script>

<style scoped>
  .qiyi_nav{
    background-color: black;
    height: 88px;
    display: flex;
    padding: 10px 20px 10px 20px;
  }
  ul{
    list-style-type: none;
  }
  a{
    color: white;
  }
  a:hover{
    color: #00be06;
  }

</style>
