<template>
  <div>
    <img style="width: 100%;height: 400px;" src="./../../../../static/assets/backgroundImg/1.jpg"/>
    <div class="body">
      <div style="overflow: hidden;height: 40px">
        <strong style="float: right">Home>About Service</strong>
      </div>
      <div style="display: flex;justify-content: center;align-items: center">
        <div style="width: 100%;padding-left: 70px;padding-right: 70px;">
          <span style="font-weight: bold;font-size: 24px;padding-bottom: 15px;
    border-bottom: solid red;">About Service</span>
          <div class="font">
            <li>
              High-quality Product: We have advanced production and testing equipment, and the most professional engineers to promise the best quality!
            </li>
            <li>
              Extensive Export Experience: we have been exporting for more than 13 years and therefore, we are familiar with all kinds of the steel standard and inspection procedures. Help clients complete their import processes efficiently with low cost.
            </li>
            <li>
              The Fastest and Safest Delivery: We have our own transportation team, and we have built up good cooperative relations with shipping companies such as MSK COSCO, Evergreen, CMA to ensure the fastest and safe delivery.
            </li>
            <li>
              Professional After-sales Service: We have clients call-back system, and we will provide our clients after-sales service twice a year after the goods was sold, aiming to solve the customer's worries.
            </li>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex;height: 200px;justify-content: center;margin-bottom: 40px;">
      <img width="200px" src="./../../../../static/assets/backgroundImg/4.jpg">
      <img width="200px" src="./../../../../static/assets/backgroundImg/5.jpg">
      <img width="200px" src="./../../../../static/assets/backgroundImg/6.jpg">
      <img width="200px" src="./../../../../static/assets/backgroundImg/7.jpg">
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
  li{
    margin-bottom: 10px;
  }
</style>
