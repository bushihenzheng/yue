<template>
  <div>
    <img style="width: 100%;height: 400px;" src="./../../../../static/assets/backgroundImg/12.jpg"/>
    <div class="body">
      <div style="display: flex;justify-content: center;align-items: center">
        <img style="width: 50%;height: 400px;" src="./../../../../static/assets/backgroundImg/2.jpg">
        <div style="height: 300px;width: 50%;padding-left: 70px;padding-right: 70px;box-shadow: #ebeef5 5px 10px 18px 5px">
          <span style="font-weight: bold;font-size: 24px;padding-bottom: 15px;
    border-bottom: solid red;">about us</span>
          <div class="font">
            China Royal Group Ltd was established in Tianjin, China in 2008. It is a large and comprehensive group integrating production R&D and trade.Our company is committed to the export of steel products including steel pipes, steel plates, steel profiles, steel coils, and other steel products for more than ten years. Our clients are worldwide with 185 countries and regions, especially in the Americas, Europe, Middle East and Southeast Asia. The annual export volume is about 500,000 tons.
          </div>
        </div>
      </div>
      <div style="display: flex;justify-content: space-between;margin: 30px 0;align-items: center">
        <div class="box">
          <img style="width: 50px;padding-bottom: 20px" src="./../../../assets/backgroundImage/item1.jpg">
          <span style="font-size: 18px;font-weight: bold;margin-bottom: 5px">Vision</span>
          <span style="font-size: 14px;">To be the global</span>
          <span style="font-size: 14px;">leader in steel trade</span>
        </div>
        <div class="box">
          <img style="width: 50px;padding-bottom: 20px" src="./../../../assets/backgroundImage/item2.jpg">
          <span style="font-size: 18px;font-weight: bold;margin-bottom: 5px">Values</span>
          <span style="font-size: 14px;">gratitude</span>
          <span style="font-size: 14px">integrity, efficiency</span>
          <span style="font-size: 14px">environmental protection</span>
        </div>
        <div class="box">
          <img style="width: 50px;padding-bottom: 20px" src="./../../../assets/backgroundImage/item3.jpg">
          <span style="font-size: 18px;font-weight: bold;margin-bottom: 5px">Mission</span>
          <span style="font-size: 14px;">Building a global</span>
          <span style="font-size: 14px">high-quality steel ecosystem</span>
        </div>
        <div class="box">
          <img style="width: 50px;padding-bottom: 20px" src="./../../../assets/backgroundImage/item4.jpg">
          <span style="font-size: 18px;font-weight: bold;margin-bottom: 5px">Corporate culture</span>
          <span style="font-size: 14px;">noble character</span>
          <span style="font-size: 14px;">grateful attitude</span>
          <span style="font-size: 14px;"> marketing wisdom</span>
          <span style="font-size: 14px;">hardworking sweat</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
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
    padding-top: 60px;
     box-shadow: #ebeef5 0px 8px 8px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
