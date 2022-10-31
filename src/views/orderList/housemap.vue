<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:15
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-31 22:14:20
 * @FilePath: \jungehousing\src\views\orderList\housemap.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div style="position: relative">
    <div id="container">
      <div class="btn-group">
        <div class="order-search-box">
          <div class="order-search-box-searchEZ">
            <span>{{ $t("message.SearchBtn") }}：</span>
            <el-input class="base-size" size="small" v-model="searchFrom.searchName"
              :placeholder="$t('message.fuzzySearch')"></el-input>
          </div>
          <div class="order-search-box-searchEZ">
            <span>{{ $t('message.SalesType') }}：</span>
            <el-select class="base-size" size="small" v-model="searchFrom.saleType" collapse-tags
              :placeholder="$t('message.PleaseSelect')">
              <el-option v-for="item in saleOptions" :key="item.dictValue" :label="item.dictLabel"
                :value="item.dictValue"></el-option>
            </el-select>
          </div>
          <div class="order-search-box-searchEZ">
            <span>{{ $t('message.ResidentialType') }}：</span>
            <el-select class="base-size" size="small" v-model="searchFrom.house" collapse-tags
              :placeholder="$t('message.PleaseSelect')">
              <el-option v-for="item in houseOptions" :key="item.dictValue" :label="item.dictLabel"
                :value="item.dictValue"></el-option>
            </el-select>
          </div>
          <div class="order-search-box-searchEZ">
            <span>{{ $t('message.MetroSearch') }}：</span>
            <el-input class="base-size" size="small" v-model="searchFrom.subway" placeholder="请输入地铁线路"></el-input>
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
          <el-button size="small" @click="searchSub">{{ $t('message.SearchBtn') }}</el-button>
          <el-button size="small" @click="react">{{ $t('message.Reset') }}</el-button>
        </div>
        <div class="btn-a">
          <a href="javascript:;" class="icom-class active">
            <router-link to="/housemap" class="router-test">
              <img src="@/assets/images/icon/weizhi.png" alt />
              <span>{{ $t('message.location') }}</span>
            </router-link>
          </a>

          <a href="javascript:;" class="icom-class">
            <router-link to="/houseList" class="router-test">
              <img src="@/assets/images/icon/shuanglieliebiao.png" alt />
              <span>{{ $t('message.LargePicture') }}</span>
            </router-link>
          </a>

          <a href="javascript:;" class="icom-class">
            <router-link to="/housetable" class="router-test">
              <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt />
              <span>{{ $t('message.list') }}</span>
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
            <div id="map_search_list" v-if="houseList.length > 0">
              <div class="relists relist list_21382" v-for="(house, index) in houseList" :key="index"
                @click="seDetail(house)">
                <div class="top-mokeer">
                  <div class="info_image" style="margin-right: 5px">
                    <a class="view_product" data-toggle="modal" data-target="#view_dialog" href="#"
                      :data-id="house.homeNum">
                      <img :src="house.image" class="thumb img-responsive" />
                    </a>
                  </div>
                  <div class="info_desc">
                    <div>
                      <a class="view_product" data-toggle="modal" data-target="#view_dialog" href="#">
                        <font style="vertical-align: inherit">
                          <p class="order-title" style="vertical-align: inherit; ">【 {{ house.familyNum }}
                            {{ $t('message.between') }}】 {{
                                house.title
                            }}</p>
                        </font>
                      </a>
                      <div class="address">
                        <small>
                          <div class="link">
                            <i class="fa fa-map-marker"></i>
                            <font style="vertical-align: inherit">
                              <font style="vertical-align: inherit">{{ house.addressName }}</font>
                            </font>
                            <!--비밀메모-->
                          </div>
                          <div class="link">
                            <font style="vertical-align: inherit">
                              <font style="vertical-align: inherit">{{ $t('message.region') }}：</font>
                            </font>
                            <div style="display: inline" class="help" data-toggle="tooltip" title="22坪">
                              <font style="vertical-align: inherit">
                                <font style="vertical-align: inherit">{{ house.actualArea }}㎡ |</font>
                              </font>
                            </div>
                            <font style="vertical-align: inherit">
                              <font style="vertical-align: inherit">&nbsp;{{ $t('message.waterproof') }}： {{
                                  house.familyNum
                              }}{{ $t('message.between') }} | {{ $t('message.ShowerRoom') }} {{
    house.showerRoom
}}{{ $t('message.between') }}</font>
                            </font>
                          </div>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>


                <div style="clear: both"></div>
                <div style="
                    width: 375px;
                    letter-spacing: -1px;
                    padding: 5px 10px;
                    border-top: 1px solid #efefef;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  ">
                  <div class="price_wrap" style="color: #f6910b">
                    <span class="price_sell_span installation_span" style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      ">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ $t('message.TotalPrice') }}</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.lastPrice }}</font>
                      </font>
                    </strong>
                    <span class="price_sell_span installation_span" style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        margin-left: 5px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      ">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ $t('message.downPayments') }}</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.roomPrice }}</font>
                      </font>
                    </strong>
                    <span class="price_sell_span installation_span installation_loan" style="
                        font-size: 12px;
                        color: white;
                        padding: 1px 5px 1px 5px;
                        margin-right: 3px;
                        margin-left: 5px;
                        background-color: #f6910b;
                        margin-right: 5px;
                      ">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ $t('message.loan') }}</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size: 16px; font-weight: normal">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ house.loans }}</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit">{{ $t('message.TenThousandWon') }}</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>

            </div>
            <el-empty v-else :description="$t('message.NoDataYet')"></el-empty>
            <!--   分页   -->
            <div class="pagination-box" v-if="total >10">
              <pagination :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
                @pagination="getList" />
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
  mounted() { },
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
      searchRoom({ ...this.queryParams, ...this.searchFrom, status: '1' }).then((res) => {
        if (res.code == 200) {
          this.houseList = []
          res.rows.forEach(item => {
            item.addressName = item.city.split(',').splice(0, 2).join("")
            item.addressDong = item.city.split(',').splice(2).join(''),
              this.houseList.push(item)
          })
          this.total = res.total;
        }

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
      let _this = this;
      var markers = [],
        data = this.houseList;
      var htmlMarker2 = {
        content: '<div class="marker-box-html"></div>',
        size: N.Size(40, 40),
        anchor: N.Point(20, 20)
      };
      var obj = this.getEleNums(data);
      const cache = [];
      for (const t of data) {
        // 检查缓存中是否已经存在
        if (cache.find(c => c.addressDong === t.addressDong)) {
          // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
          continue;
        }
        t.numberR = obj[t.addressDong]
        // 不存在就说明以前没遇到过，把它记录下来
        cache.push(t);
      }
      cache.forEach((item, index) => {
        let latlng = new naver.maps.LatLng(item.lat, item.lon);
        let number = item.numberR;
        let address = item.city.split(',').splice(2).join('');
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
        _this.marker = new naver.maps.Marker({
          position: latlng,
          draggable: false,
          icon: htmlMarker1
        });
        naver.maps.Event.addListener(_this.marker, 'click', function (e) {
          //点击marker获取商品列表
          _this.searchFrom.city = item.city
          _this.getList()
        });
        markers.push(_this.marker);

      })
      var markerClustering = new MarkerClustering({
        minClusterSize: 5, // 控制聚点数量从几个开始
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
    getEleNums(data) {
      var map = {}
      for (let i = 0; i < data.length; i++) {
        var key = data[i];
        let cityName = key.city.split(',').splice(2).join('')
        if (map[cityName]) {
          map[cityName] += 1
        } else {
          map[cityName] = 1
        }
      }
      return map
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
  width: 50%;
  // margin: 0 6px;
}

.top-mokeer {
  display: flex;
}

::v-deep .info_desc {
  width: 270px;
}

.order-title {
  width: 97%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

::v-deep .pagination-container {
  padding: 2px 16px;
  text-align: center;
}
</style>
