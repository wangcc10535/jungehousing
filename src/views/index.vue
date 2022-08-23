<!--
 * @Description: 网站首页
 * @Author: wangcc
 * @Date: 2022-08-23 10:11:24
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 17:57:25
 * @FilePath: \jungehousing\src\views\index.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div>
    <el-carousel height="443px">
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <img class="images" :src="item.url" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="searchbox_wrapper_bottom">
      <div class="searchbox">
        <ul class="nav-search">
          <li v-for="(tabs,index) in tab" :key="index" :class="{active:currentClass==index}"  @click="tabsClick(index)">
            <a href="javascript:;">{{tabs.name}}</a>
          </li>
        </ul>
        <div class="search-inner">
          123
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      imageList: [
        {
          id: 1,
          url: require('@/assets/images/banner1.png')
        },
        {
          id: 2,
          url: require('@/assets/images/banner2.jpg')
        }
      ],
      tab:[
        {
          id:1,
          name:'地址搜索'
        },
        {
          id:2,
          name:'地铁搜索'
        },
        {
          id:3,
          name:'搜索'
        }
      ],
      currentClass: 0
    };
  },
  methods:{
    tabsClick(e) {
      this.currentClass = e;
    }
  }
};
</script>

<style  lang='scss' scoped>
.searchbox_wrapper_bottom {
  margin-top: -30px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  background-color: #363636;
  color: white;
}
.searchbox_wrapper_bottom .searchbox {
  text-shadow: none;
  background: none repeat scroll 0 0 transparent;
  zoom: 1;
  border-radius: 10px;
  margin: 30px auto 0;
  padding: 15px;
  max-width: 685px;
  overflow: hidden;
}
.searchbox {
  max-width: 950px !important;
}
.searchbox_wrapper .searchbox,
.searchbox_wrapper_bottom .searchbox {
  max-width: 816px;
}
.searchbox ul,
.searchbox-ie8 ul {
  margin: 0;
  list-style-type: none;
  display: table;
}
.nav-search {
  margin-bottom: 0px;
}
.nav-search > li {
  position: relative;
  display: table-cell;
  vertical-align: bottom;
  padding: 5px 20px 15px 20px;
  font-size: 17px;
  float: left;
}
.nav-search > li a {
    color: white;
}
.nav-search > li.active a {
  font-weight: bold;
  color: #ffc525;
}
.nav-search > li.active > a:after {
  content: '';
  border-radius: 0 !important;
  bottom: 0;
  background: none !important;
  border-color: transparent transparent #fff transparent;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  display: inline-block;
  left: 50%;
  margin-bottom: -1px;
  margin-left: -5px;
  top: auto;
  position: absolute;
}
.search-inner {
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    margin-bottom: 10px;
    text-align: left;
}
</style>
