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
            <el-descriptions class="margin-top" :column="1" border>
              <el-descriptions-item label="所需区域" label-class-name="lable-tit">
                88952634
              </el-descriptions-item>
              <el-descriptions-item label="交易类型" label-class-name="lable-tit">
                88952634
              </el-descriptions-item>
              <el-descriptions-item label="价格范围" label-class-name="lable-tit">
                88952634
              </el-descriptions-item>
              <el-descriptions-item label="类型" label-class-name="lable-tit">

              </el-descriptions-item>
              <el-descriptions-item label="预计购买时间" label-class-name="lable-tit">

              </el-descriptions-item>
              <el-descriptions-item label="访问日期/时间" label-class-name="lable-tit">


              </el-descriptions-item>
              <el-descriptions-item label="区域" label-class-name="lable-tit">
                <el-input v-model="fromData.region" placeholder="输入区域大小"></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="接触" label-class-name="lable-tit">
                <el-input class="contact" v-model="fromData.name" placeholder="姓名"></el-input>
                <el-input class="contact" v-model="fromData.email" placeholder="电子邮件"></el-input>
                <el-input class="contact" v-model="fromData.phone" placeholder="电话"></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="查询或要求" label-class-name="lable-tit">
                <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="fromData.textarea">
                </el-input>
              </el-descriptions-item>
              <el-descriptions-item label-class-name="lable-tit">
                <template slot="label">
                  同意使用个人信息<el-link @click="tional()">[查看]</el-link>
                </template>
                <el-radio-group v-model="fromData.radioLook">
                  <el-radio :label="3">同意</el-radio>
                  <el-radio :label="6">不同意</el-radio>
                </el-radio-group>
              </el-descriptions-item>
            </el-descriptions>
            <div class="submit">
              <el-button type="primary">提交</el-button>
            </div>

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
      <el-descriptions class="margin-top" :column="1" border>
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
      value1: '',
      activeName: 'first',
      dialogVisible: false,
      dialogtitle: null,
      fromData: {
        checkList: []
      },
      rules: {},
      tableData: [
        {
          title: '88952634',
          name: '8895263',
          state: '未答复',
          time: '2022-07-01 17:07:51'
        }
      ],
      stutes: [{
        id: 1,
        label: '2 间客房'
      }, {
        id: 1,
        label: '3 间客房'
      }, {
        id: 1,
        label: '4 间客房'
      }, {
        id: 1,
        label: '双工'
      }, {
        id: 1,
        label: ' ETC'
      }]
    };
  },
  methods: {
    handleClick() { },
    tional(row) {
      this.dialogtitle = row.title;
      this.dialogVisible = true;

    },
    handleCheckedCitiesChange() { }
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

::v-deep .lable-tit {
  width: 229px;
  text-align: right !important;
}

.contact {
  margin-bottom: 10px;
}

.contact:last-child {
  margin-bottom: 0;
}
.submit{
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
</style>
