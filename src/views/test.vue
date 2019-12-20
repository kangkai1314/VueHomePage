<template>
    <div class="test_page">
      <div class="test_header">
          <p>this is header</p>
      </div>
      <div class="test_right_nav">
           <p>this is right nav</p>
      </div>
      <div class="test_content">
             <p>this is content</p>
      </div>
      <div class="float_content" ></div>
    </div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style scoped>
  .test_page{
    display: flex;
  }
  .test_header{
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: cyan;
    top:0;
    right: 0;

  }
  .test_content{
    height: 2000px;
    width: 100%;
    background-color: black;
  }
  .test_right_nav{
    height: 1000px;
    width: 200px;
    background-color: red;
    overflow: hidden;
    top:70px;
    left: 0;
  }
  .float_content{
    height: 50px;
    width: 50px;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: white;
    margin: 10px;
  }

</style>
