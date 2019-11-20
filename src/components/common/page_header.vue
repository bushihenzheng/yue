<template>
   <div class="box">
       <div class="logo">
         <img style="width: 80px;height: 80px" src="./../../../static/assets/backgroundImage/logo.jpg">
       </div>
       <div class="right">
         <router-link v-for="(item,index) in tab" :key="index" :to="item.href">
           <span style="margin-left: 50px">{{item.name}}</span>
         </router-link>
       </div>
   </div>
</template>

<script>
  const TAB = [
    {
      name: 'About Us',
      href: '/',
    },
    {
      name: 'Main Products',
      href: '/product',
    },
    {
      name: 'About Service',
      href: '/about_service',
    },
    {
      name: 'About Honor',
      href: '/honour',
    },
    {
      name: 'Contact Us',
      href: '/call_us',
    },
  ]
    export default {
      name: "page_header",
      data(){
        return {
          tab:TAB
        }
      },
    }
</script>

<style scoped>
  .box{
    display:flex;
    background-color: rgb(218,24,24);
    height: 90px;
  }
  .logo{
    height: 90px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .right{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  a {
    text-decoration:none;
    color: white;
  }
</style>
