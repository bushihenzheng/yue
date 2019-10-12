import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../components/pageMain.vue'),
      meta: {
        global_header: true,
        global_footer: true
      },
      children: [
        {path: '/', redirect: {path: 'home'}},
        {
          path: 'home',
          name: 'Home',
          meta: {
            breadcrumb: {
              name: '关于我们'
            },
            title: '关于我们',
            global_header: true,
            global_footer: true
          },
          component: () => import('../components/page/about_us/pageIndex.vue')
        },
        // {
        //   path: 'about_us',
        //   name: 'About_us',
        //   meta: {
        //     breadcrumb: {
        //       name: '关于我们'
        //     },
        //     title: '关于我们',
        //     global_header: true,
        //     global_footer: true
        //   },
        //   component: () => import('../components/page/about_us/pageIndex.vue')
        // },
        {
          path: 'about_service',
          name: 'About_service',
          meta: {
            breadcrumb: {
              name: '关于服务'
            },
            title: '关于服务',
            global_header: true,
            global_footer: true
          },
          component: () => import('../components/page/about_service/PageIndex.vue')
        },
        {
          path: 'honour',
          name: 'Honour',
          meta: {
            breadcrumb: {
              name: '关于荣誉'
            },
            title: '关于荣誉',
            global_header: true,
            global_footer: true
          },
          component: () => import('../components/page/honour/PageIndex.vue')
        },
        {
          path: 'product',
          name: 'product',
          meta: {
            breadcrumb: {
              name: '主营产品'
            },
            title: '主营产品',
            global_header: true,
            global_footer: true
          },
          component: () => import('../components/page/product/PageIndex.vue')
        },
        {
          path: 'call_us',
          name: 'call_us',
          meta: {
            breadcrumb: {
              name: '联系我们'
            },
            title: '联系我们',
            global_header: true,
            global_footer: true
          },
          component: () => import('../components/page/call_us/PageIndex.vue')
        }
      ]
    }
  ]
})
