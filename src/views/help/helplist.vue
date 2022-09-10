<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:41:12
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:41:13
 * @FilePath: \jungehousing\src\views\help\helplist.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>{{$t('message.commonProblem')}}</h3>
      <div class="content">
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="(item,index) in helpFrom" :title="item.question" :key="index" name="1">
            <div>{{item.answer}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import {listFaq} from '@/api/http';
export default {
  name: 'helplist',
  data() {
    return {
      activeNames: '1',
      helpFrom: []
    };
  },
  created() {
    this.getHelp();
  },
  methods:{
    getHelp() {
      listFaq({}).then( res =>{
        console.log(res);
        this.helpFrom = res.rows;
      })
    }
  }
};
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}
</style>
