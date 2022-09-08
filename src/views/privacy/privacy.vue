<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 15:19:05
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 15:19:07
 * @FilePath: \jungehousing\src\views\privacy\privacy.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
<div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>隐私声明</h3>
      <div class="content" v-html="privacy.dictValue"></div>
    </div>
  </div>
</template>

<script>
  import { getDicts } from '@/api/http';
export default {
  name:'privacy',
  data(){
   return {
    privacy: {}
   }
  },
  created() {
    this.getPrivacy()
  },
  methods: {
    getPrivacy() {
      getDicts('statement').then((res) => {
        if (res.code == 200) {
          this.privacy = res.data[0];
        }
      });
    }
  }
}
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}
</style>
