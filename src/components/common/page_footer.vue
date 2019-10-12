<template>
  <div>
    <div class="roayl">
      <div class="item">R O Y A L</div>
    </div>
    <div class="footer">
      <div id="item1">LOGO</div>
      <div id="item2">
        <span>Adress: RM504 Fortune zone park Tianjin China</span>
        <span>Email：chinaroyalsteel@163.com</span>
        <span>Mobile:+86 136 5209 1506</span>
      </div>
      <div id="item3">
        <img width="200px;" height="200px" src="./../../../static/assets/timg.jpg">
        <span>公司二维码</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  .roayl{
    height: 50px;
    width: 100%;
    background-color: rgb(218,24,24);
    position: relative;
  }
  .item{
    position: absolute;
    right: 400px;
    top: 14px;
    color: white;
  }
  .footer{
    display: flex;
    height: 300px;
    width: 100%;
    padding: 0 300px;
  }
  #item1{
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-weight: 600;
  }
  #item2{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 30px;
  }
  #item3{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
