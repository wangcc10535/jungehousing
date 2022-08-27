<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:21:53
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:21:54
 * @FilePath: \jungehousing\src\views\orderList\housetable.vue
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

        <a href="javascript:;" class="icom-class ">
          <router-link to="/houseList" class="router-test">
            <img src="@/assets/images/icon/shuanglieliebiao.png" alt="">
            <span>大图</span>
          </router-link>
        </a>


        <a href="javascript:;" class="icom-class active">
          <router-link to="/housetable" class="router-test">
            <img src="@/assets/images/icon/liebiaomoshi_kuai.png" alt="">
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
                <th style="width:80px;">照片</th>
                <th style="width:130px;">地址</th>
                <th style="width:70px;">类型</th>
                <th style="width:50px;">交易</th>
                <th>标题/地址</th>
                <th style="width:120px;">面积</th>
                <th style="width:120px;">附加信息</th>
              </tr>
            </thead>
            <tbody id="search-items">
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
                  </div>
                </td>
              </tr>
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
                  </div>
                </td>
              </tr>
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
                  </div>
                </td>
              </tr>
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
                  </div>
                </td>
              </tr>
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
                  </div>
                </td>
              </tr>
              <tr class="view_product grid_photo">
                <td> <img src="@/assets/images/0.png" class="gallery_wrapper" alt=""></td>
                <td>
                  <p class="address"><span>仁川富平区清川洞葛山站1.2公里</span></p>
                </td>
                <td><span>3 间客房</span></td>
                <td class="table_category"><span>打包</span></td>
                <td>
                  <p style="margin-bottom:5px;">
                    <span class="label label-sm label-danger">
                      推荐快速销售
                    </span>
                    <span class="label label-sm label-success">
                      奢侈品
                    </span>
                    <b><a>
                        [21464] 清川洞特价第一代快速
                      </a></b>
                    <span class="label label-sm label-warning">入住</span>
                  </p>
                  <div class="price_wrap" style="color:#f6910b;">
                    <span class="price_sell_span installation_span">最少</span>
                    <strong class="price_strong">30,500</strong>
                    <span class="price_sell_span installation_span">房间</span>
                    <strong class="price_strong">1,500</strong>
                    <span class="price_sell_span installation_span installation_loan">贷款</span>
                    <strong class="price_strong" style="font-size:16px; font-weight:normal;">2900</strong>
                    <span class="price_unit">万韩元</span>
                  </div>
                </td>
                <td class="custom_text_right"><span>115.7㎡</span></td>
                <td class="table_etc_td">
                  <div class="table_etc_content_1">
                    <span>防水：3</span>
                    <span>浴室：2</span>
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
export default {
  name: 'housetable',
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
