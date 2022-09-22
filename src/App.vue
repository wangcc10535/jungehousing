<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <m-header v-if="m_header_show"></m-header>
    <router-view v-on:header="header" v-on:footer="footer" />
    <app-footer v-if="footer_show"></app-footer>
    <m-footer v-if="m_footer_show"></m-footer>
    <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
  </div>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
import m_headerVue from './components/mobile_c/m_header.vue';
import m_footerVue from './components/mobile_c/m_footer.vue';
export default {
  name: 'App',
  data() {
    return {
      header_show: true,
      footer_show: true,
      m_header_show: false,
      m_footer_show: false,
    };
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'm-header'  : m_headerVue,
    'm-footer'  : m_footerVue
  },
  mounted() {
    if (this.isMobile()) {
      console.log('移动端');
      this.header_show = false;
      this.footer_show = false;
      this.m_header_show = true;
      this.m_footer_show = true;
      this.$router.replace('/m_index');
    } else {
      console.log('pc端');
      this.header_show = true;
      this.footer_show = true;
      this.m_header_show = false;
      this.m_footer_show = false;
      this.$router.replace('/');
    }
  },
  methods: {
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
</style>
