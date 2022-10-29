<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:53
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-29 00:06:24
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
            <span>{{$t('message.location')}}</span>
          </router-link>
        </a>

        <a href="javascript:;" class="icom-class">
          <router-link to="/houseList" class="router-test">
            <img src="@/assets/images/icon/shuanglieliebiao.png" alt="" />
            <span>{{$t('message.LargePicture')}}</span>
          </router-link>
        </a>

        <a href="javascript:;" class="icom-class active">
          <router-link to="/housetable" class="router-test">
            <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt="" />
            <span>{{$t('message.list')}}</span>
          </router-link>
        </a>
      </div>
    </div>
    <div class="list_box">
      <div class="list_box_content">
        <table class="table table-bordered table-striped table-condensed flip-content margin-top-10">
          <thead>
            <tr>
              <th style="width: 80px">{{$t('message.Photo')}}</th>
              <th style="width: 130px">{{$t('message.address')}}</th>
              <th style="width: 70px">{{$t('message.type')}}</th>
              <th style="width: 50px">{{$t('message.transaction')}}</th>
              <th>{{$t('message.TitleAddress')}}</th>
              <th style="width: 120px">{{$t('message.area')}}</th>
              <th style="width: 120px">{{$t('message.AdditionalInformation')}}</th>
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
                <span>{{ house.familyNum }} {{$t('message.Room')}}</span>
              </td>
              <td class="table_category"><span>{{house.tradeType}}</span></td>
              <td>
                <p style="margin-bottom: 5px">
                  <span v-for="(tags, tIndex) in house.titleLabel" :key="tIndex">
                    <span class="label label-sm label-danger" v-if="tags == 1"> {{$t('message.recommend')}} </span>
                    <span class="label label-sm label-success" v-if="tags == 2"> {{$t('message.Aliexpress')}} </span>
                  </span>

                  <b
                    ><a> [{{ house.homeNum }}] {{ house.title }} </a></b
                  >
                  <!-- <span class="label label-sm label-warning">入住</span> -->
                </p>
                <div class="price_wrap" style="color: #f6910b">
                  <span class="price_sell_span installation_span">{{$t('message.TotalPrice')}}</span>
                  <strong class="price_strong">{{ house.lastPrice }}</strong>
                  <span class="price_sell_span installation_span">{{$t('message.downPayments')}}</span>
                  <strong class="price_strong">{{ house.roomPrice }}</strong>
                  <span class="price_sell_span installation_span installation_loan">{{$t('message.loan')}}</span>
                  <strong class="price_strong" style="font-size: 16px; font-weight: normal">{{ house.loans }}</strong>
                  <span class="price_unit">{{$t('message.TenThousandWon')}}</span>
                </div>
              </td>
              <td class="custom_text_right"><span>{{ house.actualArea }}㎡</span></td>
              <td class="table_etc_td">
                <div class="table_etc_content_1">
                  <span>{{$t('message.waterproof')}}：{{house.familyNum}}</span>
                  <span>{{$t('message.ShowerRoom')}}：{{house.showerRoom}}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--   分页   -->
      <div class="pagination-box" v-if="total > 10">
              <pagination
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getList"
              />
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
      searchFrom: {},
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      searchRoom({ ...this.queryParams, ...this.searchFrom,status: '1' }).then((res) => {
        if (res.code == 200) {
          this.houseList = []
          res.rows.forEach( item =>{
            item.addressName = item.city.split(',').splice(0,2).join("")
            this.houseList.push(item)
          })
          this.total = res.total;
        }
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
