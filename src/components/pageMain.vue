<template>
  <div style="overflow-x:hidden;">
    <page_header></page_header>
    <router-view/>
    <page_footer></page_footer>
  </div>
</template>

<script>
  import page_header from './common/page_header.vue'
  import page_footer from './common/page_footer.vue'
  export default{
    components:{
      page_header: page_header,
      page_footer:page_footer
    }
  }
</script>

<style scoped>

</style>
