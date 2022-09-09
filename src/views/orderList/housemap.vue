<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:15
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-31 11:59:35
 * @FilePath: \jungehousing\src\views\orderList\housemap.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div style="position: relative">
    <div id="container">
      <div class="btn-group">
        <div class="order-search-box">
          <div class="order-search-box-searchEZ">
            <span>模糊搜索：</span>
            <el-input
              class="base-size"
              size="small"
              v-model="searchFrom.searchName"
              placeholder="请输入标题、城市等相关信息搜索"
            ></el-input>
          </div>
          <div class="order-search-box-searchEZ">
            <span>销售类型：</span>
            <el-select class="base-size" size="small" v-model="searchFrom.saleType" collapse-tags placeholder="请选择">
              <el-option
                v-for="item in saleOptions"
                :key="item.dictValue"
                :label="item.dictLabel"
                :value="item.dictValue"
              ></el-option>
            </el-select>
          </div>
          <div class="order-search-box-searchEZ">
            <span>住宅类型：</span>
            <el-select class="base-size" size="small" v-model="searchFrom.house" collapse-tags placeholder="请选择">
              <el-option
                v-for="item in houseOptions"
                :key="item.dictValue"
                :label="item.dictLabel"
                :value="item.dictValue"
              ></el-option>
            </el-select>
          </div>
          <div class="order-search-box-searchEZ">
            <span>按地铁搜索：</span>
            <el-input
              class="base-size"
              size="small"
              v-model="searchFrom.subway"
              placeholder="请输入地铁线路"
            ></el-input>
            <!-- <el-select
              class="base-size"
              size="small"
              v-model="searchFrom.dt"
              multiple
              collapse-tags
              placeholder="请选择"
            >
              <el-option
                v-for="item in lineOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
          </div>
          <!-- <div class="order-search-box-searchEZ">
            <span>供给面积：</span>
            <el-input class="base-size" size="small" v-model="searchFrom.mj1" placeholder="请输入内容"></el-input>
            <span>-</span>
            <el-input class="base-size" size="small" v-model="searchFrom.mj2" placeholder="请输入内容"></el-input>
          </div> -->
          <el-button size="small" @click="searchSub">搜索</el-button>
          <el-button size="small" @click="react">重置</el-button>
        </div>
        <div class="btn-a">
          <a href="javascript:;" class="icom-class active">
            <router-link to="/housemap" class="router-test">
              <img src="@/assets/images/icon/weizhi.png" alt />
              <span>定位</span>
            </router-link>
          </a>

          <a href="javascript:;" class="icom-class">
            <router-link to="/houseList" class="router-test">
              <img src="@/assets/images/icon/shuanglieliebiao.png" alt />
              <span>大图</span>
            </router-link>
          </a>

          <a href="javascript:;" class="icom-class">
            <router-link to="/housetable" class="router-test">
              <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt />
              <span>列表</span>
            </router-link>
          </a>
        </div>
      </div>
      <div class="list_box">
        <div class="list_box_content maps" style="display: block">
          <div class="map_wrapper maplist_5">
            <div id="map" style="width: 100%; height: 766px; position: relative"></div>
          </div>
          <div class="map_list_5" id="map_list">
            <div id="map_search_list">
              <div
                class="relists relist list_21382"
                v-for="(house, index) in houseList"
                :key="index"
                @click="seDetail(house)"
              >
                <div class="info_image" style="margin-right: 5px">
                  <a
                    class="view_product"
                    data-toggle="modal"
                    data-target="#view_dialog"
                    href="#"
                    :data-id="house.homeNum"
                  >
                    <img :src="house.image" class="thumb img-responsive" />
                  </a>
                </div>
                <div class="info_desc">
                  <div>
                    <a class="view_product" data-toggle="modal" data-target="#view_dialog" href="#">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">【 {{ house.familyNum }} 间】 {{ house.title }}</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">{{ house.address }}</font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">区域：</font>
                          </font>
                          <div style="display: inline" class="help" data-toggle="tooltip" title="22坪">
                            <font style="vertical-align: inherit">
                              <font style="vertical-align: inherit">{{ house.actualArea }}㎡ |</font>
                            </font>
                          </div>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit"
                              >&nbsp;防水： {{ house.waterRepellent }}间 | 浴室 {{ house.showerRoom }}间</font
                            >
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear: both"></div>
                <div
                  style="
                    width: 375px;
                    letter-spacing: -1px;
                    padding: 5px 10px;
                    border-top: 1px solid #efefef;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  "
                >
                  <div class="price_wrap" style="color: #f6910b">
                    <span
                      class="price_sell_span installation_span"
                      style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      "
                    >
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">全款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.lastPrice }}</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span"
                      style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        margin-left: 5px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      "
                    >
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">首付</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.roomPrice }}</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span installation_loan"
                      style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        margin-left: 5px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      "
                    >
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">贷款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.loans }}</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">万韩元</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { searchRoom, getDicts } from '@/api/http';
export default {
  name: 'housemap',
  data() {
    return {
      map: null,
      marker: null,
      searchFrom: {},
      // 地铁线路
      lineOptions: [],
      houseList: [],
      accidentDeath: [],
      // 销售类型
      saleOptions: [],
      // 住宅类型
      houseOptions: [],
      waterproofOptions: [],
      showerOptions: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    };
  },
  created() {
    if (JSON.stringify(this.$route.query) != '{}') {
      this.searchFrom = this.$route.query;
    }
    this.getList();
    this.getSaletype();
    this.getHousetype();
  },
  mounted() {},
  methods: {
    searchSub() {
      this.getList();
    },
    react() {
      this.searchFrom = {};
      this.getList();
    },
    // 获取房产列表
    getList() {

      searchRoom({ ...this.queryParams, ...this.searchFrom }).then((res) => {
        this.houseList = res.rows;
        this.total = res.total;
        this.initMap();
      });
    },
    getWaterproof() {
      getDicts('house_waterproof').then((res) => {
        if (res.code == 200) {
          this.waterproofOptions = res.data;
        }
      });
    },
    getShower() {
      getDicts('house_shower').then((res) => {
        if (res.code == 200) {
          this.showerOptions = res.data;
        }
      });
    },
    // 获取销售类型
    getSaletype() {
      getDicts('sale_type').then((res) => {
        if (res.code == 200) {
          this.saleOptions = res.data;
        }
      });
    },
    // 获取住宅类型
    getHousetype() {
      getDicts('residence_type').then((res) => {
        if (res.code == 200) {
          this.houseOptions = res.data;
        }
      });
    },

    initMap() {
      var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: naver.maps.MapTypeControlStyle.DROPDOWN
        },
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.LEFT_BOTTOM,
          style: naver.maps.ZoomControlStyle.SMALL
        }
      };
      this.map = new naver.maps.Map('map', mapOptions);
      this.onLoad(this.map);
    },
    onLoad(map) {
      var markers = [],
        number = null,
        data = this.houseList;
      var htmlMarker2 = {
        content: '<div class="marker-box-html"></div>',
        size: N.Size(40, 40),
        anchor: N.Point(20, 20)
      };
      for (var i = 0, ii = data.length; i < ii; i++) {
        var spot = data[i],
          number = data[i].homeNum,
          address = data[i].address,
          latlng = new naver.maps.LatLng(spot.lat, spot.lon);
        var htmlMarker1 = {
          content:
            '<div class="marker-box"><span class="num">' +
            number +
            '</span><font class="marker-name">' +
            address +
            '</font></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
        };
        this.marker = new naver.maps.Marker({
          position: latlng,
          draggable: false,
          icon: htmlMarker1
        });
        naver.maps.Event.addListener(this.marker, 'click', function (e) {
          //点击marker获取商品列表
          console.log(e);
          console.log(spot);
        });
        markers.push(this.marker);
      }
      var markerClustering = new MarkerClustering({
        minClusterSize: 16, // 控制聚点数量从几个开始
        maxZoom: 14, // 最大层级
        map: map,
        markers: markers, // 标记点数组
        disableClickZoom: false, // 是否可拖动标记点
        gridSize: 120,
        icons: [htmlMarker2], //  聚合点样式
        indexGenerator: [10, 100, 200, 500, 1000],
        stylingFunction: function (clusterMarker, count) {
          $(clusterMarker.getElement()).find('div.marker-box-html').text(count);
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
.order-search-box {
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: left;
  width: 82%;
  margin-left: 10px;
  &-searchEZ {
    margin-right: 6px;
  }
}
.base-size {
  width: 60%;
  // margin: 0 6px;
}
</style>
