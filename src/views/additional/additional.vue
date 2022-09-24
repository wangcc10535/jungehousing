<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:38:13
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-25 00:03:37
 * @FilePath: \jungehousing\src\views\additional\additional.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>{{$t('message.entrust')}}</h3>
      <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('message.tabFirst')" name="first">
            <el-descriptions class="margin-top" :column="1" border>
              <el-descriptions-item :label="$t('message.RequiredArea')" label-class-name="lable-tit">
                <el-select v-model="provinceFrom" @change="cityChange('1', $event)" class="search-select"
                  style="margin-right: 10px" :placeholder="$t('message.selectCity')">
                  <el-option v-for="item in cityOptions" :key="item.code" :label="item.name"
                    :value="{ label: item.name, value: item.code }">
                  </el-option>
                </el-select>
                <el-select v-model="cityFrom" @change="cityChange('2', $event)" class="search-select"
                  style="margin-right: 10px" placeholder="-">
                  <el-option v-for="item in countyOptions" :key="item.code" :label="item.name"
                    :value="{ label: item.name, value: item.code }">
                  </el-option>
                </el-select>
                <el-select v-model="districtFrom" class="search-select" placeholder="-">
                  <el-option v-for="item in streetOptions" :key="item.code" :label="item.name"
                    style="margin-right: 10px" :value="{ label: item.name, value: item.code }">
                  </el-option>
                </el-select>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.Price')" label-class-name="lable-tit">
                <el-input class="contact" style="margin-right: 10px; width: 300px" v-model="fromAddData.lowPrice"
                  :placeholder="$t('message.floorPrice')"></el-input>
                <el-input class="contact" style="margin-right: 10px; width: 300px" v-model="fromAddData.highPrice"
                  :placeholder="$t('message.ceilingPrice')"></el-input>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.type')" label-class-name="lable-tit">
                <el-checkbox-group v-model="saleTypecheckList">
                  <el-checkbox :label="item.dictLabel" v-for="(item, index) in saleArr" :key="index"></el-checkbox>
                </el-checkbox-group>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.ResidentialType')" label-class-name="lable-tit">
                <el-checkbox-group v-model="houseTypecheckList">
                  <el-checkbox :label="item.dictLabel" v-for="(item, index) in stuArr" :key="index"></el-checkbox>
                </el-checkbox-group>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.CommissionType')" label-class-name="lable-tit">
                <el-radio-group v-model="fromAddData.type">
                  <el-radio :label="item.dictValue" v-for="(item, index) in entrustType" :key="index">{{
                  item.dictLabel
                  }}</el-radio>
                </el-radio-group>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.EstimatedTime')" label-class-name="lable-tit">
                <el-date-picker v-model="fromAddData.payTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime"
                  :placeholder="$t('message.selectTile')"></el-date-picker>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.accessTime')" label-class-name="lable-tit">
                <el-date-picker v-model="fromAddData.comeTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime"
                  :placeholder="$t('message.selectTile')"></el-date-picker>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.HouseSize')" label-class-name="lable-tit">
                <el-input v-model="fromAddData.homeSize" :placeholder="$t('message.HouseSize')"></el-input>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.information')" label-class-name="lable-tit">
                <el-input class="contact" v-model="fromAddData.name" :placeholder="$t('message.name')"></el-input>
                <el-input class="contact" v-model="fromAddData.emily" :placeholder="$t('message.eMail')"></el-input>
                <el-input class="contact" v-model="fromAddData.phone" :placeholder="$t('message.phone')"></el-input>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.Display')" label-class-name="lable-tit">
                <el-radio-group v-model="fromAddData.show">
                  <el-radio :label="check.dictValue" v-for="(check, index) in showType" :key="index">{{
                  check.dictLabel
                  }}</el-radio>
                </el-radio-group>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.demand')" label-class-name="lable-tit">
                <el-input type="textarea" :rows="6" :placeholder="$t('message.inputPlaceholder')"
                  v-model="fromAddData.info"></el-input>
              </el-descriptions-item>
            </el-descriptions>
            <div class="submit">
              <el-button type="primary" @click="submitFrom">{{$t('message.Submit')}}</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('message.tabSecond')" name="second">
            <el-table :data="tableData" border style="width: 100%" size="small">
              <el-table-column type="index" :label="$t('message.SerialNumber')" width="80" align="center">
              </el-table-column>
              <el-table-column :label="$t('message.phone')" width="380" align="center">
                <template slot-scope="{ row }">
                  <el-link @click="tional(row)">{{ row.phone }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="name" :label="$t('message.CommissionType')" align="center"></el-table-column>
              <el-table-column label="상태" align="center">
                <template slot-scope="{ row }">
                  <span v-if="row.type == 1">{{$t('message.sell')}}</span>
                  <span v-if="row.type == 0">{{$t('message.buy')}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="updateTime" :label="$t('message.SubmissionDate')" align="center"></el-table-column>
            </el-table>
            <!--   分页   -->
            <div class="pagination-box" v-if="total > 0">
              <pagination :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
                @pagination="getlistQna" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog :title="dialogtitle" :visible.sync="dialogVisible" width="30%">
      <el-descriptions class="margin-top" :column="1" border>
        <el-descriptions-item>
          <template slot="label">{{$t('message.name')}}</template>
          {{rowData.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">{{$t('message.phone')}}</template>
          {{rowData.phone}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">{{$t('message.eMail')}}</template>
          {{rowData.emily}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">{{$t('message.demand')}}</template>
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
      tableData: [],
      // 选择城市
      cityOptions: [],
      countyOptions: [],
      streetOptions: [],
      // 交易类型
      dealOptions: [],
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
    handleClick() { },
    tional(row) {
      this.dialogtitle = row.title;
      this.dialogVisible = true;
      this.rowData = row
    },
    handleCheckedCitiesChange() { },
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
      listQna({ type: '-1', show: '1', ...this.queryParams }).then((res) => {
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
