<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:33:28
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:35:09
 * @FilePath: \jungehousing\src\views\news\newsList.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <div class="_container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻</el-breadcrumb-item>
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
