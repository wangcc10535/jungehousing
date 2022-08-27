<template>
  <div class="base-box">
    <div class="_container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  data() {
    return {};
  }
};
</script>

<style  lang='scss' scoped>
</style>