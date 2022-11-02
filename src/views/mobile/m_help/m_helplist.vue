<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-24 14:55:29
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-11-02 15:14:14
 * @FilePath: \jungehousing\src\views\mobile\m_help\m_helplist.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <navDrawer></navDrawer>
    <div class="m_collapse">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="(item,index) in helpFrom" :title="item.question" :key="index" name="1">
          <div>{{item.answer}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
  
<script>
import { listFaq } from '@/api/http';
export default {
  name: 'm_helplist',
  data() {
    return {
      activeNames: '',
      helpFrom: []
    };
  },
  created() {
    this.getHelp();
  },
  methods: {
    getHelp() {
      listFaq({}).then(res => {
        // //console.log(res);
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

.m_collapse {
  background-color: #fff;
  padding: 20px 10px;

  .el-collapse {
    border-left: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
  ::v-deep .el-collapse-item__header{
    padding-left: 10px;
    background-color: #f5f5f5;
  }
  ::v-deep .el-collapse-item__wrap{
    padding-left: 10px;
  }
}
</style>