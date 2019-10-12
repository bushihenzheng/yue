<template>
   <div class="box">
       <div class="logo">LOGO</div>
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
      name: '关于我们',
      href: '/',
    },
    {
      name: '主营产品',
      href: '/product',
    },
    {
      name: '关于服务',
      href: '/about_service',
    },
    {
      name: '公司荣誉',
      href: '/honour',
    },
    {
      name: '联系我们',
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
  }
  .logo{
    height: 50px;
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
  }
  a {
    text-decoration:none;
    color: white;
  }
</style>
