<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-29 12:03:56
 * @FilePath: \jungehousing\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app" :class="mStyle">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer"  v-if="isRouterAlive" />
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
export default {
  name: 'App',
  data() {
    return {
      header_show: true,
      footer_show: true,
      mStyle: '',
      isRouterAlive: true
    };
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  provide () {
   return{
     reload: this.reload
   }
 },
  mounted() {
    if (this.isMobile()) {
      this.header_show = false;
      this.footer_show = false;
      this.mStyle = 'bodyStyle'
      // this.$router.replace('/m_index');
    } else {
      this.mStyle = ''
      this.header_show = true;
      this.footer_show = true;
      // this.$router.replace('/');
    }
  },
  methods: {
    reload(){
     this.isRouterAlive = false
     this.$nextTick(function(){
       this.isRouterAlive = true
     })
   },
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    //是否显示头部
    header: function (bool) {
      this.header_show = bool;
    },
    //是否显示底部
    footer: function (bool) {
      this.footer_show = bool;
    }
  }
};
</script>
<style>
@import url('@/assets/css/style.css');
body,html {
  height: 100%;
    margin: 0px;
    padding: 0px;
}
.bodyStyle{
  width: 100%;
     /* min-height: 100%; */
  background-color: #f4f4f6;
}
</style>
