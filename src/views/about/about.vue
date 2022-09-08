<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 15:13:46
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 15:16:24
 * @FilePath: \jungehousing\src\views\about\about.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>关于我们</h3>
       <div class="content" v-html="aboutUs.dictValue">
      </div>
    </div>
  </div>
</template>

<script>
  import { getDicts } from '@/api/http';
export default {
  name: 'about',
  data() {
    return {
      aboutUs:{}
    };
  },
  created() {
    this.getAboutus()
  },
  methods: {
    getAboutus() {
      getDicts('aboutus').then((res) => {
        if (res.code == 200) {
          this.aboutUs = res.data[0];
        }
      });
    }
  }
};
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}
</style>
