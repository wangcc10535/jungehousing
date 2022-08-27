<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:15
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:31:11
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
              <img src="@/assets/images/icon/weizhi.png" alt="">
              <span>定位</span>
            </router-link>

          </a>

          <a href="javascript:;" class="icom-class">
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
        <div class="list_box_content maps" style="display: block;">
          <div class="map_wrapper maplist_5">
            <div id="map" style="width: 100%;height: 766px; position: relative;">
            </div>
            <div id="map_tile">
              <div class="tiles">
                <div class="tile bg-blue-hoki" onclick="location.href='/member/hope'">
                  <div class="tile-body">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          心愿单
                        </font>
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
                        <font style="vertical-align: inherit;">
                          此次销售
                        </font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
                <div class="tile bg-yellow-saffron bookmarkMeLink">
                  <div class="corner">
                  </div>
                  <div class="tile-body">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          收藏夹
                        </font>
                      </font>
                    </div>
                    <div class="number"></div>
                  </div>
                </div>
                <div class="tile bg-purple-studio" onclick="location.href='/main/grid'">
                  <div class="corner">
                  </div>
                  <div class="tile-body">
                    <i class="fa fa-list-alt"></i>
                  </div>
                  <div class="tile-object">
                    <div class="name">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          列表
                        </font>
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
                  <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行">
                    <img src="@/assets/images/0.png" class="thumb img-responsive"></a>
                </div>
                <div class="info_desc">
                  <div>
                    <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              首尔市恩平区恩岩洞 </font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              零</font>
                          </font>
                          <div style="display:inline" class="help" data-toggle="tooltip" title="22坪">
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font><span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1 </font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;">
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          贷款</font>
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
                  <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行">
                    <img src="@/assets/images/0.png" class="thumb img-responsive"></a>
                </div>
                <div class="info_desc">
                  <div>
                    <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              首尔市恩平区恩岩洞 </font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              零</font>
                          </font>
                          <div style="display:inline" class="help" data-toggle="tooltip" title="22坪">
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font><span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1 </font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;">
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          贷款</font>
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
                  <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行">
                    <img src="@/assets/images/0.png" class="thumb img-responsive"></a>
                </div>
                <div class="info_desc">
                  <div>
                    <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              首尔市恩平区恩岩洞 </font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              零</font>
                          </font>
                          <div style="display:inline" class="help" data-toggle="tooltip" title="22坪">
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font><span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1 </font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;">
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          贷款</font>
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
                  <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                    title="【 2 间】 E-Mart 和 Eungam 站步行">
                    <img src="@/assets/images/0.png" class="thumb img-responsive"></a>
                </div>
                <div class="info_desc">
                  <div>
                    <a class="view_product " data-toggle="modal" data-target="#view_dialog" href="#" data-id="21382"
                      title="【 2 间】 E-Mart 和 Eungam 站步行">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          【 2 间】 ★E-Mart 和 Eungam 站…</font>
                      </font>
                    </a>
                    <div class="address">
                      <small>
                        <div class="link">
                          <i class="fa fa-map-marker"></i>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              首尔市恩平区恩岩洞 </font>
                          </font>
                          <!--비밀메모-->
                        </div>
                        <div class="link">
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                              零</font>
                          </font>
                          <div style="display:inline" class="help" data-toggle="tooltip" title="22坪">
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">72.73㎡</font>
                            </font><span style="display:none" id="custom_py">
                              <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">(22坪)</font>
                              </font>
                            </span>
                          </div>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">&nbsp;卧室 2 / 浴室 1 </font>
                          </font>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div
                  style="width:375px;letter-spacing:-1px; padding: 5px 10px; border-top: 1px solid #efefef; overflow:hidden;white-space:nowrap; text-overflow:ellipsis;">
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          最低</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">25,500</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          房间</font>
                      </font>
                    </span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">3,000</font>
                      </font>
                    </strong> <span class="price_sell_span installation_span installation_loan"
                      style="font-size:12px;color:white;padding:1px 5px 1px 5px;margin-right:3px;margin-left:5px;background-color:#f6910b; margin-right: 5px;">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          贷款</font>
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
export default {
  name: 'housemap',
  data() {
    return {

    }
  }
}
</script>

<style  lang='scss' scoped>
@import url('@/assets/css/order.css');

#container {
  height: 79vh;
}
</style>
