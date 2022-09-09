<!--
 * @Description: 房产列表
 * @Author: wangcc
 * @Date: 2022-08-23 14:20:18
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-31 11:57:12
 * @FilePath: \jungehousing\src\views\orderList\houselist.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div id="container">
    <div class="btn-group">
      <div class="btn-a">
        <a href="javascript:;" class="icom-class ">
            <router-link to="/housemap" class="router-test">
              <img src="@/assets/images/icon/weizhi.png" alt="">
              <span>定位</span>
            </router-link>

          </a>

          <a href="javascript:;" class="icom-class active">
            <router-link to="/houseList" class="router-test">
              <img src="@/assets/images/icon/shuanglieliebiao.png" alt="">
              <span>大图</span>
            </router-link>

          </a>


          <a href="javascript:;" class="icom-class">
            <router-link to="/housetable" class="router-test">
              <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt="">
              <span>列表</span>
            </router-link>

          </a>
      </div>

    </div>
    <div class="list_box">
      <div class="list_box_content">
        <ul class="list">
          <li class="list_1" id="list_1" v-for="(house,index) in houseList" :key="index" @click="seDetail(house)">
            <div class="search-item-wide">
              <div class="view_product grid_photo">
                <div class="photo">
                  <img class="holder" :src="house.image" alt="">
                  <div class="item_title">
                    <h3>[{{house.familyNum}}] {{house.title}}</h3>
                    <div class="address">
                      <span>{{house.address}}</span>
                    </div>
                  </div>
                  <div class="tags">
                    <div v-for="(tags,tIndex) in house.titleLabel" :key="tIndex">
                      <span class="tag" v-if="tags == 1">推荐</span>
                      <span class="tag tag_speed" v-if="tags == 2">速卖通</span>
                    </div>
                    <!-- <div class="tag"><span>建议</span></div>
                    <div class="tag tag_speed"><span>抢购</span></div>
                    <div class="tag ribbon_orange"><span>最低价格</span></div> -->
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="price_info">
                  <div>
                    <div class="price_wrap">
                      <span class="installation_span">总价</span> <strong class="price_strong">{{ house.lastPrice }}</strong>
                      <span class="installation_span">首付 </span><strong class="price_strong">{{ house.roomPrice }}</strong>
                      <span class="installation_span">贷款</span> <strong class="price_strong">{{ house.loans }}万韩元</strong>
                    </div>
                  </div>
                </div>
                <div class="meta">
                  <div class="meta_cell">
                    面积<span class="help">{{ house.actualArea }}㎡</span>
                  </div>
                  <div class="meta_cell">
                    楼层：
                  <span class="help">{{ house.floor }}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
  name: 'houselist',
  data() {
    return {
      searchFrom: {},
      houseList: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  created() {
    this.getList();
  },
  methods:{
    getList() {

      searchRoom({ ...this.queryParams,...this.searchFrom }).then((res) => {
        this.houseList = res.rows;
        this.total = res.total
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
}
</script>

<style  lang='scss' scoped>
@import url('@/assets/css/order.css');
// #container {
//   height: 79vh;
// }
</style>
