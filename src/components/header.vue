<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 10:01:35
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:45:07
 * @FilePath: \jungehousing\src\components\header.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="header">
    <div class="_container">
      <router-link to="/" class="router-test">
        <a href="javascript" class="site-logo">
          <img src="@/assets/images/logo.png" alt />
        </a>
      </router-link>
      <div class="call_box">
        <div class="description">
          <span>연중무휴 문의</span>
          <big>050-7872-6000</big>
        </div>
      </div>
      <div class="header-navigation pull-right">
        <ul>
          <!-- 웹 메뉴 -->
          <li>
            <router-link to="/houseList" class="router-test">
              <a href="javascript:;">매물검색</a>
            </router-link>
          </li>
          <li class="dropdown custom_news_menu">
            <router-link to="/newsList" class="router-test">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">뉴스</a>
            </router-link>
          </li>
          <li class="dropdown">
            <router-link to="/additional" class="router-test">
              <a href="javascript:;" class="dropdown-toggle">의뢰하기</a>
            </router-link>
          </li>
          <li>
            <router-link to="/helplist" class="router-test">
              <a href="javascript:;">공지사항</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style  lang='scss' scoped>
.header {
  box-shadow: 0 1px 3px #ddd;
  background: #fff;
  border-radius: 0;
  z-index: 999;
  position: relative;
}

.site-logo {
  // float: left;
  font-size: 23px;
  font-weight: 400;
  padding-top: 10px;
  padding-right: 10px;
  width: 200px;
  height: 60px;
  display: inline-block;
  margin-bottom: 10px;
}
img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.call_box {
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 13px;
  display: inline-block;
  color: #676767;
}
.description {
  margin-top: 12px;
  margin-left: 30px;
  span {
    margin-right: 6px;
  }
  big {
    color: #000;
  }
}
.header-navigation {
  font-size: 15px;
  padding: 0;
  float: left;
  text-transform: uppercase;
  font-weight: 500;
}
.pull-right {
  float: right !important;
}
.header-navigation ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header-navigation > ul > li {
  float: left;
}
.header-navigation > ul > li > a {
  color: #555;
  display: block;
  padding: 29px 12px 30px;
}
</style>
