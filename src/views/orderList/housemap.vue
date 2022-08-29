<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:15
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-29 14:09:47
 * @FilePath: \jungehousing\src\views\orderList\housemap.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div style="position: relative;">
    <div id="container">
      <div class="btn-group">
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
        <div class="list_box_content maps" style="display: block;">
          <div class="map_wrapper maplist_5">
            <div id="map" style="width: 100%;height: 766px; position: relative;"></div>
            <div id="map_tile">
              <div class="tiles">
                <div class="tile bg-blue-hoki" onclick="location.href='/member/hope'">
                  <div class="tile-body">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">心愿单</font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
                <div class="tile bg-red-sunglo" onclick="location.href='/member/history'">
                  <div class="tile-body">
                    <i class="fa fa-eye"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">此次销售</font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
                <div class="tile bg-yellow-saffron bookmarkMeLink">
                  <div class="corner"></div>
                  <div class="tile-body">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">收藏夹</font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
                <div class="tile bg-purple-studio" onclick="location.href='/main/grid'">
                  <div class="corner"></div>
                  <div class="tile-body">
                    <i class="fa fa-list-alt"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">列表</font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="map_list_5" id="map_list">
            <div id="map_search_list">
              <div class="relists relist list_21382">
                <div class="info_image" style="margin-right:5px">
                  <a
                    class="view_product"
                    data-toggle="modal"
                    data-target="#view_dialog"
                    href="#"
                    data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行"
                  >
                    <img src="@/assets/images/0.png" class="thumb img-responsive" />
                  </a>
                </div>
                <div class="info_desc">
                  <div>
                    <a
                      class="view_product"
                      data-toggle="modal"
                      data-target="#view_dialog"
                      href="#"
                      data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">首尔市恩平区恩岩洞</font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">零</font>
                          </font>
                          <div
                            style="display:inline"
                            class="help"
                            data-toggle="tooltip"
                            title="22坪"
                          >
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font>
                            <span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1</font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;"
                >
                  <div class="price_wrap" style="color:#f6910b;">
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">贷款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">225,000</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">韩元</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>
              <div class="relists relist list_21382">
                <div class="info_image" style="margin-right:5px">
                  <a
                    class="view_product"
                    data-toggle="modal"
                    data-target="#view_dialog"
                    href="#"
                    data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行"
                  >
                    <img src="@/assets/images/0.png" class="thumb img-responsive" />
                  </a>
                </div>
                <div class="info_desc">
                  <div>
                    <a
                      class="view_product"
                      data-toggle="modal"
                      data-target="#view_dialog"
                      href="#"
                      data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">首尔市恩平区恩岩洞</font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">零</font>
                          </font>
                          <div
                            style="display:inline"
                            class="help"
                            data-toggle="tooltip"
                            title="22坪"
                          >
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font>
                            <span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1</font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;"
                >
                  <div class="price_wrap" style="color:#f6910b;">
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">贷款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">225,000</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">韩元</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>
              <div class="relists relist list_21382">
                <div class="info_image" style="margin-right:5px">
                  <a
                    class="view_product"
                    data-toggle="modal"
                    data-target="#view_dialog"
                    href="#"
                    data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行"
                  >
                    <img src="@/assets/images/0.png" class="thumb img-responsive" />
                  </a>
                </div>
                <div class="info_desc">
                  <div>
                    <a
                      class="view_product"
                      data-toggle="modal"
                      data-target="#view_dialog"
                      href="#"
                      data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">首尔市恩平区恩岩洞</font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">零</font>
                          </font>
                          <div
                            style="display:inline"
                            class="help"
                            data-toggle="tooltip"
                            title="22坪"
                          >
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font>
                            <span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1</font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;"
                >
                  <div class="price_wrap" style="color:#f6910b;">
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">贷款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">225,000</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">韩元</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>
              <div class="relists relist list_21382">
                <div class="info_image" style="margin-right:5px">
                  <a
                    class="view_product"
                    data-toggle="modal"
                    data-target="#view_dialog"
                    href="#"
                    data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行"
                  >
                    <img src="@/assets/images/0.png" class="thumb img-responsive" />
                  </a>
                </div>
                <div class="info_desc">
                  <div>
                    <a
                      class="view_product"
                      data-toggle="modal"
                      data-target="#view_dialog"
                      href="#"
                      data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">首尔市恩平区恩岩洞</font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">零</font>
                          </font>
                          <div
                            style="display:inline"
                            class="help"
                            data-toggle="tooltip"
                            title="22坪"
                          >
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font>
                            <span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1</font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;"
                >
                  <div class="price_wrap" style="color:#f6910b;">
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong>
                    <span
                      class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">贷款</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">225,000</font>
                      </font>
                    </strong>

                    <span class="price_unit">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">韩元</font>
                      </font>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { MarkerClustering } from '@/utils/MarkerClustering';
import axios from 'axios';
export default {
  name: 'housemap',
  data() {
    return {
      map: null,
      marker: null,
      accidentDeath: {
        searchResult: {
          accidentDeath: [
            {
              year: '2014',
              dt_006: '2014031411',
              dt_006_lv8: '40',
              address: '宜昌东',
              x_coord: '960824  ',
              y_coord: '1905922 ',
              grd_lo: '127.05882791',
              grd_la: '37.15120216'
            },
            {
              year: '2014',
              dt_006: '2014031313',
              dt_006_lv8: '23',
              address: '城东区',
              x_coord: '1045257 ',
              y_coord: '1843983 ',
              grd_lo: '128.01221855',
              grd_la: '36.58983435'
            },
            {
              year: '2014',
              dt_006: '2014031121',
              dt_006_lv8: '10',
              address: '龙山区',
              x_coord: '974095  ',
              y_coord: '1828345 ',
              grd_lo: '127.21091471',
              grd_la: '36.45233748'
            },
            {
              year: '2014',
              dt_006: '2014031205',
              dt_006_lv8: '37',
              address: '城南中原区',
              x_coord: '1094818 ',
              y_coord: '2021380 ',
              grd_lo: '128.58271469',
              grd_la: '38.18770048'
            },
            {
              year: '2014',
              dt_006: '2014031209',
              dt_006_lv8: '50',
              address: '广津区',
              x_coord: '1103199 ',
              y_coord: '1766794 ',
              grd_lo: '128.64345545',
              grd_la: '35.89231981'
            }
          ]
        },
        resultCode: 'Success'
      }
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
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
      this.onLoad(map);
    },
    onLoad(map) {
      var markers = [],
        number = null,
        data = this.accidentDeath.searchResult.accidentDeath;
      var htmlMarker2 = {
        content: '<div class="marker-box-html"></div>',
        size: N.Size(40, 40),
        anchor: N.Point(20, 20)
      };
      for (var i = 0, ii = data.length; i < ii; i++) {
        var spot = data[i],
          number = data[i].dt_006_lv8,
          address = data[i].address,
          latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo);
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
        minClusterSize: 2, // 控制聚点数量从几个开始
        maxZoom: 12, // 最大层级
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
    }
  }
};
</script>

<style  lang='scss' scoped>
@import url('@/assets/css/order.css');

#container {
  height: 79vh;
}
</style>
