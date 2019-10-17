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
      name: 'about us',
      href: '/',
    },
    {
      name: 'main products',
      href: '/product',
    },
    {
      name: 'about service',
      href: '/about_service',
    },
    {
      name: 'about honor',
      href: '/honour',
    },
    {
      name: 'contact us',
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
