<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 10:07:07
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 15:23:31
 * @FilePath: \jungehousing\src\components\footer.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="footer" id="app-footer">
    <div class="_container">
      <div
        class="row"
        style="border-bottom:1px solid rgba(255, 255, 255, .5);padding-bottom:5px;overflow: hidden;"
      >
        <div class="col-md-8">
          <ul class="footer-menu seperator list-unstyled list-inline">
            <li>
              <span>
                <a href="javascript:;">
                  <router-link to="/about" class="router-test">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{ $t("message.aboutUs") }}</font>
                    </font>
                  </router-link>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="javascript:;">
                  <router-link to="/terms" class="router-test">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{ $t("message.Termsofservice") }}</font>
                    </font>
                  </router-link>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="javascript:;">
                  <router-link to="/privacy" class="router-test">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{ $t("message.Privacystatement") }}</font>
                    </font>
                  </router-link>
                </a>
              </span>
            </li>
          </ul>
          <span id="footer_menu"></span>
        </div>
        <div class="col-md-4">
          <ul class="list-unstyled list-inline pull-right"></ul>
        </div>
      </div>
      <div class="row margin-top-20">
        <div class="col-md-3 col-sm6">
          <router-link to="/" class="router-test">
            <a href="javascript:;">
              <img class="footer_logo" src="../assets/images/logow.png" alt="蓝虫" />
            </a>
          </router-link>
        </div>
        <div class="col-md-9 col-sm6">
          <ul class="list-unstyled list-inline seperator">
            <li>
              <span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ $t("message.corporateName") }}：{{ $t("message.junge") }}</font>
                </font>
              </span>
            </li>
            <li>
              <span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ $t("message.representativeFigure") }}：{{ $t("message.TeamLeader") }}</font>
                </font>
              </span>
            </li>

            <li>
              <span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ $t("message.businessCircles") }}：538-01-02515</font>
                </font>
              </span>
            </li>
          </ul>

          <ul class="list-unstyled list-inline seperator">
            <li>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">{{ $t("message.address") }}：</font>
              </font>
              <span class="help" data-toggle="tooltip" title="인천시 남동구 경인로 740 1층 준부동산">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ $t("message.addressInfo") }}</font>
                </font>
              </span>
            </li>
            <li>
              <span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ $t("message.phone") }}：032-361-8884</font>
                </font>
              </span>
            </li>
            <li>
              <span>
                <a href="mailto:blueworm77@gmail.com">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">jun-housing@naver.com</font>
                  </font>
                </a>
              </span>
            </li>
          </ul>

          <p class="margin-top-40">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{ $t("message.copyright") }}</font>
            </font>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {};
  }
};
</script>

<style  lang='scss' scoped>
.footer {
  color: #ffffff;
  background-color: #ebb000;
  font-size: 13px;
  padding: 19px 0;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-8 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
  line-height: 24px;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
.seperator li span {
  padding-right: 10px;
}
.footer ul.footer-menu > li a {
  font-size: 15px;
}
.seperator li:after {
  content: '|';
}
.seperator li:last-child:after {
  content: '';
}
.margin-top-20 {
  margin-top: 20px !important;
}
.footer a {
  color: #ffffff;
  display: inline-block;
}
.footer_logo {
  max-width: 200px;
}
.margin-top-40 {
  margin-top: 30px !important;
}
ul.resp-tabs-list,
p {
  /* margin: 0px; */
  padding: 0px;
}
@media (min-width: 992px) {
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    float: left;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-xs-1,
  .col-sm-1,
  .col-md-1,
  .col-lg-1,
  .col-xs-2,
  .col-sm-2,
  .col-md-2,
  .col-lg-2,
  .col-xs-3,
  .col-sm-3,
  .col-md-3,
  .col-lg-3,
  .col-xs-4,
  .col-sm-4,
  .col-md-4,
  .col-lg-4,
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5,
  .col-xs-6,
  .col-sm-6,
  .col-md-6,
  .col-lg-6,
  .col-xs-7,
  .col-sm-7,
  .col-md-7,
  .col-lg-7,
  .col-xs-8,
  .col-sm-8,
  .col-md-8,
  .col-lg-8,
  .col-xs-9,
  .col-sm-9,
  .col-md-9,
  .col-lg-9,
  .col-xs-10,
  .col-sm-10,
  .col-md-10,
  .col-lg-10,
  .col-xs-11,
  .col-sm-11,
  .col-md-11,
  .col-lg-11,
  .col-xs-12,
  .col-sm-12,
  .col-md-12,
  .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
