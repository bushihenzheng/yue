<template>
  <div>
    <img style="width: 100%;height: 300px" src="./../../../../static/assets/backgroundImg/9.jpg"/>
    <div class="body">
      <div style="overflow: hidden">
        <strong style="float: right">home>about honor</strong>
      </div>
      <div style="display: flex;justify-content: center;align-items: center">
        <div style="height: 200px;width: 100%;padding-left: 70px;padding-right: 70px;">
          <span style="font-weight: bold;font-size: 24px;padding-bottom: 15px;
    border-bottom: solid red;">about honor</span>
          <div class="font">
            China Royal Group Co., Ltd. has entered a factory from a very small factory, from a customer to a large number of customers, from only domestic business, but now exports to the world, from the initial performance of 8,000 US dollars to the current performance more than 100 million US dollars. Based on the principle of “customer, quality is everything”, we have gradually won the trust of most customers. These achievements are based on high quality products, and our products are certified by various authorities.
          </div>
        </div>
      </div>
      <div style="width: 800px;margin-left: 150px">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in 7" :key="item">
            <img width="100%;"  :src="getHonourImg(item)">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "honour",
    data(){
      return {

      }
    },
    methods:{
      getHonourImg(index){
        return `./../../../../static/assets/honour/${index}.jpg`
      }
    },
  }
</script>

<style scoped>
  .body{
    padding: 20px 400px;
  }
  .font{
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
  }
</style>
