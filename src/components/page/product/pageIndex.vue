<template>
  <div>
    <img style="width: 100%;height: 400px" src="./../../../../static/assets/backgroundImg/10.jpg"/>
    <div class="body">
      <div style="overflow: hidden">
        <strong style="float: right;">Home>Main Products</strong>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;margin-bottom: 100px;">
        <img style="width: 50%;height: 300px;" src="./../../../../static/assets/backgroundImg/8.jpg">
        <div style="height: 250px;width: 50%;padding-left: 70px;padding-right: 70px;margin-top:50px;box-shadow: #ebeef5 5px 10px 18px 5px">
          <span style="font-weight: bold;font-size: 24px;padding-bottom: 15px;
    border-bottom: solid red;">Main Products</span>
          <div class="font">

          </div>
        </div>
      </div>
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 3" :key="item">
          <div class="product_image">
            <img v-for="index in 6" width="30%;" height="200px" style="color: blue;" :src="getHonourImg(item,index)">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    data(){
      return {

      }
    },
    methods:{
      getHonourImg(item,index){
        return `./../../../../static/assets/product/${index*item}.jpg`
      }
    },
  }
</script>

<style scoped>
  .body{
    padding: 20px calc(50% - 550px);
    width: 1100px;
  }
  .font{
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
  }
  .box{
    height: 220px;
    width: 220px;
    box-shadow: #ebeef5 0px 8px 8px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .product_image{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
