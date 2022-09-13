<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer" />
    <app-footer v-if="footer_show"></app-footer>
    <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
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
      footer_show: true
    };
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  mounted() {

  },
  methods: {

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
