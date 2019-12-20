<template>
    <div class="person_view" >
      <el-avatar src="https://tva4.sinaimg.cn/crop.0.1.638.638.180/832fa4aajw8fcrafdio24j20hs0hs750.jpg?KID=imgbed,tva&Expires=1576818916&ssig=rzSHtngiu%2F"></el-avatar>
      <h3>花开花落_kk<i class="el-icon-video-camera"></i></h3>
      <div class="person_info el-row">
        <el-col :span="8" v-for="i in 3" :key="i" style="padding: 5px;border-right: 1px solid cyan">
          <p >关注</p>
        </el-col>
      </div>
    </div>
</template>

<script>
export default {
  name: 'WeiboPerson'
}
</script>

<style scoped>
  .person_view{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin: 10px;
    background-color: white;

  }
  .person_view:nth-child(2){
    justify-content: space-around;
  }

</style>
