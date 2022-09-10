<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 15:18:05
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 15:18:06
 * @FilePath: \jungehousing\src\views\terms\terms.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>{{$t('message.Termsofservice')}}</h3>
       <div class="content" v-html="terms.dictValue"></div>
    </div>
  </div>
</template>

<script>
  import { getDicts } from '@/api/http';
export default {
  name: 'terms',
  data() {
    return {
      terms: {}
    };
  },
  created() {
    this.getTerms()
  },
  methods: {
    getTerms() {
      getDicts('terms').then((res) => {
        if (res.code == 200) {
          this.terms = res.data[0];
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
