<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-22 22:57:56
 * @FilePath: \jungehousing\src\views\mobile\m_index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <m-header></m-header>
    <div class="index-box">shouye</div>
    <m-footer></m-footer>
  </div>
</template>
<script>
import m_headerVue from '@/components/mobile_c/m_header.vue';
import m_footerVue from '@/components/mobile_c/m_footer.vue';
export default {
  name: '',
  components: {
    'm-header': m_headerVue,
    'm-footer': m_footerVue
  },
  data() {
    return {
      m_header_show: false,
      m_footer_show: false,
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped lang='scss'>

</style>