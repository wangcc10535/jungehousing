<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:38:13
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-29 11:55:30
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
          <el-tab-pane label="구하기(매수/팔다)" name="first">
            <el-descriptions class="margin-top" :column="1" border>
              <el-descriptions-item label="所需区域" label-class-name="lable-tit">
                <el-select
                  v-model="provinceFrom"
                  @change="cityChange('1', $event)"
                  class="search-select"
                  style="margin-right: 10px"
                  placeholder="选择城市"
                >
                  <el-option
                    v-for="item in cityOptions"
                    :key="item.code"
                    :label="item.name"
                    :value="{ label: item.name, value: item.code }"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="cityFrom"
                  @change="cityChange('2', $event)"
                  class="search-select"
                  style="margin-right: 10px"
                  placeholder="-"
                >
                  <el-option
                    v-for="item in countyOptions"
                    :key="item.code"
                    :label="item.name"
                    :value="{ label: item.name, value: item.code }"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="districtFrom" class="search-select" placeholder="-">
                  <el-option
                    v-for="item in streetOptions"
                    :key="item.code"
                    :label="item.name"
                    style="margin-right: 10px"
                    :value="{ label: item.name, value: item.code }"
                  >
                  </el-option>
                </el-select>
              </el-descriptions-item>
              <el-descriptions-item label="价格" label-class-name="lable-tit">
                <el-input
                  class="contact"
                  style="margin-right: 10px; width: 300px"
                  v-model="fromAddData.lowPrice"
                  placeholder="请输入最低价格"
                ></el-input>
                <el-input
                  class="contact"
                  style="margin-right: 10px; width: 300px"
                  v-model="fromAddData.highPrice"
                  placeholder="请输入最高价格"
                ></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="类型" label-class-name="lable-tit">
                <el-checkbox-group v-model="saleTypecheckList">
                  <el-checkbox :label="item.dictLabel" v-for="(item, index) in saleArr" :key="index"></el-checkbox>
                </el-checkbox-group>
              </el-descriptions-item>
              <el-descriptions-item label="房屋类型" label-class-name="lable-tit">
                <el-checkbox-group v-model="houseTypecheckList">
                  <el-checkbox :label="item.dictLabel" v-for="(item, index) in stuArr" :key="index"></el-checkbox>
                </el-checkbox-group>
              </el-descriptions-item>
              <el-descriptions-item label="委托类型" label-class-name="lable-tit">
                <el-radio-group v-model="fromAddData.type">
                  <el-radio :label="item.dictValue" v-for="(item, index) in entrustType" :key="index">{{
                    item.dictLabel
                  }}</el-radio>
                </el-radio-group>
              </el-descriptions-item>
              <el-descriptions-item label="预计购买/卖时间" label-class-name="lable-tit">
                <el-date-picker
                  v-model="fromAddData.payTime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  type="datetime"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-descriptions-item>
              <el-descriptions-item label="访问日期/时间" label-class-name="lable-tit">
                <el-date-picker
                  v-model="fromAddData.comeTime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  type="datetime"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-descriptions-item>
              <el-descriptions-item label="房屋大小" label-class-name="lable-tit">
                <el-input v-model="fromAddData.homeSize" placeholder="输入房屋大小"></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="信息" label-class-name="lable-tit">
                <el-input class="contact" v-model="fromAddData.name" placeholder="姓名"></el-input>
                <el-input class="contact" v-model="fromAddData.emily" placeholder="电子邮件"></el-input>
                <el-input class="contact" v-model="fromAddData.phone" placeholder="电话"></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="是否同意显示个人信息" label-class-name="lable-tit">
                <el-radio-group v-model="fromAddData.show">
                  <el-radio :label="check.dictValue" v-for="(check, index) in showType" :key="index">{{
                    check.dictLabel
                  }}</el-radio>
                </el-radio-group>
              </el-descriptions-item>
              <el-descriptions-item label="查询或要求" label-class-name="lable-tit">
                <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="fromAddData.info"></el-input>
              </el-descriptions-item>
            </el-descriptions>
            <div class="submit">
              <el-button type="primary" @click="submitFrom">提交</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="부동산 QNA" name="second">
            <el-table :data="tableData" border style="width: 100%" size="small">
              <el-table-column type="index" label="번호" width="80" align="center"></el-table-column>
              <el-table-column label="제목" width="380" align="center">
                <template slot-scope="{ row }">
                  <el-link @click="tional(row)">{{ row.phone }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="이름" align="center"></el-table-column>
              <el-table-column label="상태" align="center">
                <template slot-scope="{ row }">
                  <span v-if="row.type == 1">팔다</span>
                  <span v-if="row.type == 0">매수</span>
                </template>
              </el-table-column>
              <el-table-column prop="updateTime" label="등록일" align="center"></el-table-column>
            </el-table>
            <!--   分页   -->
            <div class="pagination-box" v-if="total > 0">
              <pagination
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getlistQna"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog :title="dialogtitle" :visible.sync="dialogVisible" width="30%">
      <el-descriptions class="margin-top" :column="1" border>
        <el-descriptions-item>
          <template slot="label">이름</template>
          {{rowData.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">전화</template>
          {{rowData.phone}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">이메일</template>
          {{rowData.emily}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">내용</template>
          {{rowData.info}}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
import { address, addQna, getDicts, listQna } from '@/api/http';
export default {
  name: 'additional',
  data() {
    return {
      value1: '',
      dialogVisible: false,
      dialogtitle: null,
      fromAddData: {},
      activeName: 'first',
      houseTypecheckList: [],
      rules: {},
      provinceFrom: {},
      cityFrom: {},
      districtFrom: {},
      tableData: [
        {
          title: '88952634',
          name: '8895263',
          state: '未答复',
          time: '2022-07-01 17:07:51'
        }
      ],
      // 选择城市
      cityOptions: [],
      countyOptions: [],
      streetOptions: [],
      // 交易类型
      dealOptions: [
        {
          value: 1,
          label: '买卖'
        },
        {
          value: 2,
          label: '月租'
        },
        {
          value: 3,
          label: '全税'
        }
      ],
      entrustType: [],
      stuArr: [],
      showType: [],
      saleArr: [],
      saleTypecheckList: [],
      queryParams: {
          pageNum: 1,
          pageSize: 10,
        },
        total: 0,
        rowData: {}
    };
  },
  created() {
    this.getCity();
    this.getEntrustType();
    this.getStuArr();
    this.getShowType();
    this.getSaleArr();
    this.getlistQna();
  },

  methods: {
    handleClick() {},
    tional(row) {
      this.dialogtitle = row.title;
      this.dialogVisible = true;
      this.rowData = row
    },
    handleCheckedCitiesChange() {},
    // 获取城市
    getCity(index, e) {
      console.log(e);
      if (index == 1) {
        this.pid = e.value;
      } else if (index == 2) {
        this.pid = e.value;
      } else {
        this.pid = '0';
      }
      address({ pid: this.pid }).then((res) => {
        console.log(res);
        if (index == 1) {
          this.countyOptions = res.rows;
        } else if (index == 2) {
          this.streetOptions = res.rows;
        } else {
          this.cityOptions = res.rows;
        }
      });
    },
    // 选择城市
    cityChange(index, e) {
      console.log(index);
      console.log(e);
      this.getCity(index, e);
    },
    getEntrustType() {
      getDicts('entrust_type').then((res) => {
        if (res.code == 200) {
          this.entrustType = res.data;
        }
      });
    },
    getStuArr() {
      getDicts('residence_type').then((res) => {
        if (res.code == 200) {
          this.stuArr = res.data;
        }
      });
    },
    getShowType() {
      getDicts('show_type').then((res) => {
        if (res.code == 200) {
          this.showType = res.data;
        }
      });
    },
    getSaleArr() {
      getDicts('sale_type').then((res) => {
        if (res.code == 200) {
          this.saleArr = res.data;
        }
      });
    },
    submitFrom() {
      this.fromAddData.province = this.provinceFrom.label;
      this.fromAddData.city = this.cityFrom.label;
      this.fromAddData.district = this.districtFrom.label;
      this.fromAddData.homeType = this.houseTypecheckList.toString();
      this.fromAddData.dealType = this.saleTypecheckList.toString();
      console.log(this.fromAddData);
      addQna({ ...this.fromAddData }).then((res) => {
        if (res.code == 200) {
          this.$message.success('제출 성공!');
          this.getlistQna();
          this.fromAddData = {};
          this.houseTypecheckList = [];
          this.saleTypecheckList = [];
        }
      });
    },
    getlistQna() {
      this.tableData = [];
      listQna({ type: '-1', show: '1',...this.queryParams}).then((res) => {
        if (res.code == 200) {
          console.log(res);
          this.tableData = res.rows;
          this.total = res.total
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
.submit {
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
.pagination-box {
   width: 100%;
   display: flex;
   justify-content: center;
}
</style>
