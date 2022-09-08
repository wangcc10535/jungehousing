<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:53
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-31 11:58:30
 * @FilePath: \jungehousing\src\views\orderList\housetable.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div id="container">
    <div class="btn-group">
      <div class="btn-a">
        <a href="javascript:;" class="icom-class">
          <router-link to="/housemap" class="router-test">
            <img src="@/assets/images/icon/weizhi.png" alt="" />
            <span>定位</span>
          </router-link>
        </a>

        <a href="javascript:;" class="icom-class">
          <router-link to="/houseList" class="router-test">
            <img src="@/assets/images/icon/shuanglieliebiao.png" alt="" />
            <span>大图</span>
          </router-link>
        </a>

        <a href="javascript:;" class="icom-class active">
          <router-link to="/housetable" class="router-test">
            <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt="" />
            <span>列表</span>
          </router-link>
        </a>
      </div>
    </div>
    <div class="list_box">
      <div class="list_box_content">
        <table class="table table-bordered table-striped table-condensed flip-content margin-top-10">
          <thead>
            <tr>
              <th style="width: 80px">照片</th>
              <th style="width: 130px">地址</th>
              <th style="width: 70px">类型</th>
              <th style="width: 50px">交易</th>
              <th>标题/地址</th>
              <th style="width: 120px">面积</th>
              <th style="width: 120px">附加信息</th>
            </tr>
          </thead>
          <tbody id="search-items">
            <tr
              class="view_product grid_photo"
              v-for="(house, index) in houseList"
              :key="index"
              @click="seDetail(house)"
            >
              <td><img :src="house.image" class="gallery_wrapper" alt="" /></td>
              <td>
                <p class="address">
                  <span>{{ house.address }}</span>
                </p>
              </td>
              <td>
                <span>{{ house.familyNum }} 间客房</span>
              </td>
              <td class="table_category"><span>{{house.tradeType}}</span></td>
              <td>
                <p style="margin-bottom: 5px">
                  <span v-for="(tags, tIndex) in house.titleLabel" :key="tIndex">
                    <span class="label label-sm label-danger" v-if="tags == 1"> 推荐 </span>
                    <span class="label label-sm label-success" v-if="tags == 2"> 速卖通 </span>
                  </span>

                  <b
                    ><a> [{{ house.homeNum }}] {{ house.title }} </a></b
                  >
                  <!-- <span class="label label-sm label-warning">入住</span> -->
                </p>
                <div class="price_wrap" style="color: #f6910b">
                  <span class="price_sell_span installation_span">总价</span>
                  <strong class="price_strong">{{ house.lastPrice }}</strong>
                  <span class="price_sell_span installation_span">首付</span>
                  <strong class="price_strong">{{ house.roomPrice }}</strong>
                  <span class="price_sell_span installation_span installation_loan">贷款</span>
                  <strong class="price_strong" style="font-size: 16px; font-weight: normal">{{ house.loans }}</strong>
                  <span class="price_unit">万韩元</span>
                </div>
              </td>
              <td class="custom_text_right"><span>{{ house.actualArea }}㎡</span></td>
              <td class="table_etc_td">
                <div class="table_etc_content_1">
                  <span>防水：{{house.waterRepellent}}</span>
                  <span>浴室：{{house.showerRoom}}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { searchRoom, getDicts } from '@/api/http';
export default {
  name: 'housetable',
  data() {
    return {
      houseList: [],
      searchFrom: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let queryParams = {
        pageNum: 1,
        pageSize: 10
      };
      searchRoom({ ...queryParams, ...this.searchFrom }).then((res) => {
        this.houseList = res.rows;
      });
    },
    seDetail(item) {
      this.$router.push({
        name: 'houseDetail',
        query: {
          id: item.id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('@/assets/css/order.css');
// #container {
//   height: 79vh;
// }
</style>
