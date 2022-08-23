<!--
 * @Description: 网站首页
 * @Author: wangcc
 * @Date: 2022-08-23 10:11:24
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 15:49:24
 * @FilePath: \jungehousing\src\views\index.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div>
    <el-carousel height="443px">
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <img class="images" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      imageList:[
        {
          id: 1,
          url:require('@/assets/images/banner1.png')
        },
        {
          id: 2,
          url:require('@/assets/images/banner2.jpg')
        }
      ]
    };
  }
};
</script>

<style  lang='scss' scoped>
// .images{
//   width: 100%;
//   height: 100%;
// }
</style>
