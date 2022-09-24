<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-22 20:44:38
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-24 21:02:31
 * @FilePath: \jungehousing\src\components\mobile_c\m_header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="index-beader">
      <el-link class="top-icon" icon="el-icon-s-unfold" :underline="false" @click="navClick"></el-link>
      <el-link class="top-icon" icon="el-icon-arrow-left" :underline="false" @click="goRouter"></el-link>
      <span class="header-title">{{this.$route.meta.title}}</span>
    </div>
    <nav-list ref="navRef"></nav-list>
  </div>
</template>

<script>
import navList from '@/components/mobile_c/m_nav.vue'
export default {
  name: 'm_header',
  components: {
    navList
  },
  data() {
    return {

    }
  },
  methods: {
    navClick() {
      this.$refs.navRef.openNav()
    },
    goRouter() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.index-beader {
  background-color: #ffffff;
  height: 3.75rem;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: left;
  -webkit-box-shadow: 0px 0px 8px 2px #d2ded8;
    -moz-box-shadow: 0px 0px 8px 2px #d2ded8;
    box-shadow: 0px 0px 8px 2px #d2ded8;
    margin-bottom: 20px;
  .top-icon {
    width: 2.8rem;
    height: 2.8rem;
    font-size: 24px;
    color: #EBB000;
  }

  .top-logo {
    height: 36px;
    width: 120px;
  }
  .header-title{
    margin-left: 5rem;
  }
}
</style>