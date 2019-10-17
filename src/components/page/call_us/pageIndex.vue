<template>
  <div>
    <img style="width: 100%;height: 500px" src="./../../../../static/assets/backgroundImg/Nipic_4666914_20190417173126936000.jpg"/>
    <div class="body">
      <div style="overflow: hidden;margin-bottom: 30px">
        <strong style="float: right">home>contact us</strong>
      </div>
      <div style="display: flex;justify-content: center;align-items: center">
        <div style="height: 600px;width: 50%;padding-left: 70px;padding-right: 70px;box-shadow: #ebeef5 5px 10px 18px 5px">
          <span style="font-weight: bold;font-size: 24px;">contact us</span>
          <div class="font">
             <ul style="list-style-type:none;margin-left: -40px;">
               <li>
                 <label>*your Name</label>
                 <el-input class="input" v-model="name" placeholder="Please fill in your name"></el-input>
               </li>
               <li>
                 <label>*your Email</label>
                 <el-input class="input" v-model="email" placeholder="Please fill in your email"></el-input>
               </li>
               <li>
                 <label>*your Mobile</label>
                 <el-input class="input" v-model="telephone" placeholder="Please fill in your phone number"></el-input>
               </li>
               <li>
                 <label>*leave a Message</label>
                 <el-input class="input" v-model="message" placeholder="Please fill in your message"></el-input>
               </li>
             </ul>
            <div style="display: flex;justify-content: center;align-items: center;height: 260px">
              <el-button style="background-color: red;color: white;width: 200px">submit</el-button>
            </div>
          </div>
        </div>
        <img style="width: 50%;height: 600px;" src="./../../../../static/assets/call_us/callus.jpg">
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
    width: 240px;
    float: right;
  }
  label{
    font-size: 18px;
  }
  li{
    margin-bottom: 40px;
  }
</style>
