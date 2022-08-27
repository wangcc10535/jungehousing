<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:38:13
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:38:18
 * @FilePath: \jungehousing\src\views\additional\additional.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>委托</h3>
      <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="구하기(매수)" name="first">

          </el-tab-pane>
          <el-tab-pane label="부동산 QNA" name="second">
            <el-table :data="tableData" border style="width: 100%" size="small">
              <el-table-column type="index" label="번호" width="80" align="center">
              </el-table-column>
              <el-table-column prop="title" label="제목" width="680" align="center">
                <template slot-scope="{row}">
                  <el-link @click="tional(row)">{{ row.title }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="이름" align="center">
              </el-table-column>
              <el-table-column prop="state" label="상태" align="center">
              </el-table-column>
              <el-table-column prop="time" label="등록일" align="center">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog :title="dialogtitle" :visible.sync="dialogVisible" width="30%">
      <el-descriptions class="margin-top" :column="1" :size="size" border>
        <el-descriptions-item>
          <template slot="label">
            이름
          </template>
          88952634
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            전화
          </template>
          비공개
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            이메일
          </template>
          safe3q@gmail.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            내용
          </template>
          88952634
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            답변
          </template>
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'additional',
  data() {
    return {
      activeName: 'first',
      dialogVisible: false,
      dialogtitle: null,
      tableData: [
        {
          title: '88952634',
          name: '8895263',
          state: '未答复',
          time: '2022-07-01 17:07:51'
        }
      ]
    };
  },
  methods: {
    handleClick() { },
    tional(row) {
      this.dialogtitle = row.title;
      this.dialogVisible = true;
    }
  }
};
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}

::v-deep .el-tabs__item.is-active {
  color: #ebb000;
}

::v-deep .el-tabs__active-bar {
  background-color: #ebb000;
}

::v-deep .el-tabs__item:hover {
  color: #ebb000;
}
</style>
