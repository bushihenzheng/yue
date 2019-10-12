<template>
  <div>
    <img style="width: 100%;height: 500px" src="./../../../../static/assets/backgroundImg/Nipic_4666914_20190417173126936000.jpg"/>
    <div class="body">
      <div style="overflow: hidden;margin-bottom: 30px">
        <strong style="float: right">首页>联系我们</strong>
      </div>
      <div style="display: flex;justify-content: center;align-items: center">
        <div style="height: 600px;width: 50%;padding-left: 70px;padding-right: 70px;box-shadow: #ebeef5 5px 10px 18px 5px">
          <span style="font-weight: bold;font-size: 24px;">联系我们</span>
          <div class="font">
             <ul style="list-style-type:none;margin-left: -40px;">
               <li>
                 <label>*您的姓名</label>
                 <el-input class="input" v-model="name" placeholder="请填写您的姓名"></el-input>
               </li>
               <li>
                 <label>*您的邮箱</label>
                 <el-input class="input" v-model="email" placeholder="请填写您的邮箱"></el-input>
               </li>
               <li>
                 <label>*您的电话</label>
                 <el-input class="input" v-model="telephone" placeholder="请填写您的电话"></el-input>
               </li>
               <li>
                 <label>*您的留言</label>
                 <el-input class="input" v-model="message" placeholder="请填写您的留言"></el-input>
               </li>
             </ul>
            <div style="display: flex;justify-content: center;align-items: center;height: 260px">
              <el-button style="background-color: red;color: white;width: 200px">立即提交</el-button>
            </div>
          </div>
        </div>
        <img style="width: 50%;height: 600px;" src="./../../../../static/assets/call_us/callus.png">
      </div>
    </div>
    <img height="900px" width="100%" src="./../../../../static/assets/call_us/map.jpg">
  </div>
</template>

<script>
  export default {
    name: "call_us",
    data(){
      return {
        name:null,
        email:null,
        telephone:null,
        message:null
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
  }
  .input{
    width: 260px;
    margin-left: 30px;
  }
  label{
    font-size: 18px;
  }
  li{
    margin-bottom: 40px;
  }
</style>
