<!--
 * @Description: 网站首页
 * @Author: wangcc
 * @Date: 2022-08-23 10:11:24
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-25 15:15:10
 * @FilePath: \jungehousing\src\views\index.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div>
    <el-carousel height="443px">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img class="banner-images" :src="item.dictValue" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="searchbox_wrapper_bottom">
      <div class="searchbox">
        <ul class="nav-search">
          <li v-for="(tabs, index) in tabList" :key="index" :class="{ activeX: currentClass == index }"
            @click="tabsClick(index)">
            <a href="javascript:;">{{ tabs.name }}</a>
          </li>
        </ul>
        <div class="search-inner">
          <el-select v-model="searchFrom.tradeType" class="search-select" :placeholder="$t('message.TransactionType')">
            <el-option v-for="item in dealOptions" :key="item.dictValue" :label="item.dictLabel"
              :value="item.dictValue">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.saleType" class="search-select" :placeholder="$t('message.SalesType')">
            <el-option v-for="item in saleOptions" :key="item.dictValue" :label="item.dictLabel"
              :value="item.dictValue">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.sale" class="search-select" :placeholder="$t('message.ResidentialType')">
            <el-option v-for="item in houseOptions" :key="item.dictValue" :label="item.dictLabel"
              :value="item.dictLabel">
            </el-option>
          </el-select>
          <el-select v-model="cityFrom" v-if="currentClass == 0" @change="cityChange('1', $event)" class="search-select"
            :placeholder="$t('message.selectCity')">
            <el-option v-for="item in cityOptions" :key="item.code" :label="item.name"
              :value="{ label: item.name, value: item.code }">
            </el-option>
          </el-select>
          <el-select v-model="countyFrom" v-if="currentClass == 0" @change="cityChange('2', $event)"
            class="search-select" placeholder="-">
            <el-option v-for="item in countyOptions" :key="item.code" :label="item.name"
              :value="{ label: item.name, value: item.code }">
            </el-option>
          </el-select>
          <el-select v-model="streetFrom" v-if="currentClass == 0" class="search-select" placeholder="-">
            <el-option v-for="item in streetOptions" :key="item.code" :label="item.name"
              :value="{ label: item.name, value: item.code }">
            </el-option>
          </el-select>
          <!-- <el-select v-model="searchFrom.region" v-if="currentClass == 1" class="search-select" placeholder="选择地区">
            <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.line" v-if="currentClass == 1" class="search-select" placeholder="-">
            <el-option v-for="item in lineOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.station" v-if="currentClass == 1" class="search-select" placeholder="-">
            <el-option v-for="item in stationOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select> -->
          <el-input v-model="searchFrom.searchName" class="search-input" v-if="currentClass == 2 || currentClass == 1"
            :placeholder="$t('message.fuzzySearch')">
          </el-input>
          <el-button type="warning" icon="el-icon-search" @click="searchClick">{{ $t('message.SearchBtn') }}</el-button>
        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>{{ $t('message.Gotoarea') }}</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="row theme">
          <div class="col-md-4 col-xs-6" style="width: 22.5%" v-for="(item, index) in homeSpot" :key="index"
            @click="goList(item)">
            <div class="cell home_spot_cell">
              <div class="cell_holder home_spot">
                <a href="javascript:;" class="cover-wrapper">
                  <span>{{ item.dictLabel }}</span>
                </a>
                <img :src="item.dictValue" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section alternative_color">
      <div class="_container">
        <div class="text-center" style="padding-bottom: 10px">
          <h1>{{ $t('message.PopularProducts') }}</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="text-center" id="recent_menus">
          <el-radio-group v-model="houseFrom.value" size="small" @change="radioChange">
            <el-radio-button :label="''">{{ $t('message.whole') }}</el-radio-button>
            <el-radio-button v-for="(item, index) in saleList" :key="index" :label="item.id">{{
                item.name
            }}</el-radio-button>
          </el-radio-group>
        </div>
        <div id="recent_wrap" style="overflow: hidden">
          <div v-if="houseList.length > 0">
            <div class="search-item-wide" v-for="(house, index) in houseList" :key="index" @click="seDetail(house)">
              <div class="view_product grid_photo">
                <div class="photo">
                  <img class="holder" :src="house.image" alt />
                  <div class="item_title">
                    <h3>[{{ house.homeNum }}] {{ house.title }}</h3>
                    <div class="address">
                      <span>{{ house.address }}</span>
                    </div>
                  </div>
                  <div class="tags">
                    <div v-for="(tags, tIndex) in house.titleLabel" :key="tIndex">
                      <span class="tag" v-if="tags == 1">{{ $t('message.recommend') }}</span>
                      <span class="tag tag_speed" v-if="tags == 2">{{ $t('message.Aliexpress') }}</span>
                    </div>
                    <!-- <div class="tag tag_speed" v-if="house.tagsO == 2">
                      <span>抢购</span>
                    </div>
                    <div class="tag ribbon_orange" v-if="house.tagsZ == 3">
                      <span>最低价格</span>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="price_info">
                  <div>
                    <div class="price_wrap">
                      <span class="installation_span">{{ $t('message.TotalPrice') }}</span>
                      <strong class="price_strong">{{ house.lastPrice }}</strong>
                      <span class="installation_span">{{ $t('message.downPayments') }}</span>
                      <strong class="price_strong">{{ house.roomPrice }}</strong>
                      <span class="installation_span">{{ $t('message.loan') }}</span>
                      <strong class="price_strong">{{ house.loans }}{{ $t('message.TenThousandWon') }}</strong>
                    </div>
                  </div>
                </div>
                <div class="meta">
                  <div class="meta_cell">
                    {{ $t('message.area') }}：
                    <span class="help">{{ house.actualArea }}㎡</span>
                  </div>
                  {{ $t('message.floor') }}：
                  <div class="meta_cell">{{ house.floor }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <el-empty :description="$t('message.NoDataYet')"></el-empty>
          </div>
        </div>
        <div class="more" v-if="houseList.length > 16">
          <router-link to="/housemap" class="router-test">
            <el-button icon="el-icon-plus">{{ $t('message.SeeMore') }}</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>{{ $t('message.CustomerComments') }}</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <div class="mega-entry-innerwrap" v-for="(mega, index) in innerwrapList" :key="index">
            <img :src="mega.image" alt />
            <!-- <el-image style="width: 100px; height: 100px" :src="mega.img" :preview-src-list="srcList"> </el-image> -->
            <div class="mega-hover">
              <span class="mega-hovertitle">{{ mega.title }}</span>
              <div class="mega-hoverlink" @click="seeClick(mega)"></div>
              <div class="mega-hoverview" @click="megaHover(mega)"></div>
            </div>
          </div>
        </div>
        <div class="more">
          <router-link to="/commentlist" class="router-test">
            <el-button icon="el-icon-plus">{{ $t('message.SeeMore') }}</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="home_section alternative_color">
      <div class="_container">
        <div class="text-center">
          <h1>{{ $t('message.RealEstateNews') }}</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(img, index) in itemList" :key="index">
              <a :href="img.name" target="_blank" >
                <div class="news-box">
                  <img :src="img.image" alt="" />
                  <h3>{{ img.newsTitle }}</h3>
                </div>
              </a>

            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>{{ $t('message.Partner') }}</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <swiper :options="friendshipOption">
            <swiper-slide v-for="(link, index) in cardList" :key="index">
              <div class="friendship-link">
                <a :href="link.dictLabel" target="_blank" rel="noopener noreferrer">
                  <img :src="link.dictValue" alt="" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="imgVisible" width="30%">
      <div class="logImg">
        <img :src="dialogImg" alt="" />
      </div>
    </el-dialog>
    <div class="main_admin_banner visible-lg no_print">
      <h3>준각하우징</h3>
      <img src="@/assets/images/logo.png" class="avatar-lg" alt="프로필">
      <!-- <h4>{{ $t("message.representativeFigure") }} : {{ $t("message.TeamLeader") }}</h4> -->
      <!-- <h4>대표담당자: 소해은</h4> -->
      <p class="text-muted m-t-sm">{{ $t("message.addressInfo") }}</p>
      <h5><i class="el-icon-phone"></i> 032-361-8884</h5>
      <h5><i class="el-icon-mobile"></i> 032-361-8884</h5>
      <h5><i class="el-icon-chat-dot-round"></i> weChat:
        <div><img style="width:80px;height:80px" src="@/assets/images/weChatimg.png" alt="" /></div>
      </h5>
      <div class="snsBox">
        <a href="https://open.kakao.com/me/zjlik" class="btn btn-kakao_open btn-xs" target="_blank">
          <h5><i class="el-icon-chat-line-round"></i> 오픈채팅</h5>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBanners,
  getRegion,
  searchRoom,
  getCooperation,
  listNews,
  listApplaud,
  getSaletype,
  getTitleType,
  getDicts,
  address
} from '@/api/http';
export default {
  name: 'index',
  data() {
    return {
      imgVisible: false,
      dialogImg: null,
      swiperOption: {
        slidesPerView: 4,
        // 设置分页器
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        // 设置自动轮播
        autoplay: {
          delay: 4000 // 5秒切换一次
        }
        // 设置轮播可循环
        // loop: true
      },
      friendshipOption: {
        slidesPerView: 6,
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        autoplay: {
          delay: 5000 // 5秒切换一次
        }
      },
      cardList: [],
      itemList: [],
      homeSpot: [],
      innerwrapList: [],
      searchFrom: {},
      houseFrom: {
        value: ''
      },
      // 交易类型
      dealOptions: [],
      // 住宅类型
      houseOptions: [],
      // 销售类型
      saleOptions: [],
      // 选择城市
      cityOptions: [],
      countyOptions: [],
      streetOptions: [],
      // 区域
      regionOptions: [],
      // 地铁线路
      lineOptions: [],
      // 地铁站
      stationOptions: [],
      imageList: [],
      tab: [
        {
          id: 1,
          name: this.$t('message.AddressSearch')
        },
        {
          id: 2,
          name: this.$t('message.MetroSearch')
        },
        {
          id: 3,
          name: this.$t('message.seach')
        }
      ],
      currentClass: 0,
      pid: '0',
      houseList: [],
      titleType: [],
      cityFrom: {},
      countyFrom: {},
      streetFrom: {}
    };
  },
  created() {
    this.getBanner();
    this.getRengon();
    this.getCooperation();
    this.getNewsList();
    this.getComments();
    this.getSaletype();
    this.getList();
    this.getTitleLabel();
    this.getTransaction();
    this.getCity();
    this.getHouseType();
  },
  computed: {
    tabList() {
      return [
        {
          id: 1,
          name: this.$t('message.AddressSearch')
        },
        {
          id: 2,
          name: this.$t('message.MetroSearch')
        },
        {
          id: 3,
          name: this.$t('message.seach')
        }
      ];
    },
    saleList() {
      return [
        {
          id: 1,
          name: this.$t('message.room1')
        },
        {
          id: 2,
          name: this.$t('message.room2')
        },
        {
          id: 3,
          name: this.$t('message.room3')
        },
        {
          id: 4,
          name: this.$t('message.room4')
        },
        {
          id: 5,
          name: this.$t('message.compound')
        },
      ];
    }
  },
  methods: {
    // 获取广告banner
    getBanner() {
      getBanners().then((res) => {
        if (res.code == 200) {
          this.imageList = res.data;
        }
      });
    },
    // 获取地区
    getRengon() {
      getRegion().then((res) => {
        if (res.code == 200) {
          this.homeSpot = res.data;
        }
      });
    },
    getTransaction() {
      getDicts('transaction_type').then((res) => {
        if (res.code == 200) {
          this.dealOptions = res.data;
        }
      });
    },
    // 获取住宅类型
    getHouseType() {
      getDicts('residence_type').then((res) => {
        if (res.code == 200) {
          this.houseOptions = res.data;
        }
      });
    },
    // 获取城市
    getCity(index, e) {
      if (index == 1) {
        this.pid = e.value;
      } else if (index == 2) {
        this.pid = e.value;
      } else {
        this.pid = '0';
      }
      address({ pid: this.pid }).then((res) => {
        if (index == 1) {
          this.countyOptions = res.rows;
        } else if (index == 2) {
          this.streetOptions = res.rows;
        } else {
          this.cityOptions = res.rows;
        }
      });
    },
    // 选择城市
    cityChange(index, e) {
      this.getCity(index, e);
    },
    // 获取房产列表
    getList(saleType) {
      let queryParams = {
        pageNum: 1,
        pageSize: 16
      };
      searchRoom({ saleType: saleType, ...queryParams }).then((res) => {
        this.houseList = res.rows;
        this.houseList.forEach((item) => {
          item.titleLabel = item.titleLabel.split(',');
        });
        // console.log(this.houseList);
      });
    },
    // 获取标题标签
    getTitleLabel() {
      getTitleType().then((res) => {
        this.titleType = res.data;
      });
    },
    // 获取房产新闻列表
    getNewsList() {
      listNews({}).then((res) => {
        if (res.code == 200) {
          this.itemList = res.rows;
        }
      });
    },
    // 获取合作企业列表
    getCooperation() {
      getCooperation().then((res) => {
        this.cardList = res.data;
      });
    },
    // 获取客户评论列表
    getComments() {
      let queryParams = {
        pageNum: 1,
        pageSize: 12
      };
      listApplaud({ ...queryParams }).then((res) => {
        if (res.code == 200) {
          this.innerwrapList = res.rows;
        }
      });
    },
    // 新闻详情跳转
    geoNews(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'news',
          id: item.id
        }
      });
    },
    // 获取销售类型
    getSaletype() {
      getSaletype().then((res) => {
        this.saleOptions = res.data;
      });
    },
    // 选项改变
    radioChange(e) {
      this.getList(e);
    },
    tabsClick(e) {
      this.currentClass = e;
      this.searchFrom = {};
    },
    searchClick() {
      if (this.cityFrom.label || this.countyFrom.label || this.streetFrom.label) {
        this.searchFrom.city = this.cityFrom.label + ',' + this.countyFrom.label + ',' + this.streetFrom.label;
      }

      // console.log(this.searchFrom);
      if (JSON.stringify(this.searchFrom) == '{}') {
        this.$message.error('请选择搜索条件！');
        return false;
      }
      this.$router.push({
        name: 'housemap',
        query: this.searchFrom
      });
    },
    goList(item) {
      // console.log(item);
      let search = {
        searchName: item.dictLabel
      }
      this.$router.push({
        name: 'housemap',
        query: search
      });
    },
    megaHover(item) {
      this.imgVisible = true;
      this.dialogImg = item.image;
    },
    seeClick(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'see',
          id: item.id
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
.banner-images {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

.nav-search>li {
  position: relative;
  display: table-cell;
  vertical-align: bottom;
  padding: 5px 20px 15px 20px;
  font-size: 17px;
  float: left;
}

.nav-search>li a {
  color: white;
}

.nav-search>li.activeX a {
  font-weight: bold;
  color: #ffc525;
  background-color: transparent;
}

.nav-search>li.activeX>a:after {
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

  .el-button--warning {
    // #ffc525
    background-color: #ffc525;
    border-color: #ffc525;
  }

  .el-button {
    padding: 9px 20px;
  }
}

.search-select {
  width: 126px;
  padding-right: 10px;
}

::v-deep .el-input__inner {
  height: 34px;
  line-height: 34px;
  border: 1px solid #e5e5e5;
}

::v-deep .el-input__icon {
  line-height: 34px;
}

.search-input {
  width: 398px;
  padding-right: 10px;
}

.home_section {
  padding: 35px 0px 0px 0px !important;
}

.main_color {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: #666666;
}

.home_section .text-center {
  padding-bottom: 40px;
  text-align: center;

  h1 {
    font-weight: 600;
    margin: 0 0 10px;
    font-size: 24px;
  }

  ::v-deep .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #e6e6e6;
    border-color: #adadad;
    box-shadow: -1px 0 0 0 #adadad;
    color: #000;
  }

  ::v-deep .el-radio-button--small .el-radio-button__inner:hover {
    color: #000;
  }
}

hr.hr_narrow {
  margin: 0 auto 15px;
  clear: both;
  height: 2px;
  width: 7%;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.hr_color,
.hr_color hr,
.hr_dots span {
  color: #636363;
  background: #636363;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
  overflow: hidden;
}

.col-md-4,
.col-xs-6 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col-md-4 {
  float: left;
}

.theme .cell {
  background-size: cover !important;
  border-radius: 0px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  height: 310px;
  background-position: center center !important;
  cursor: pointer;
  /* box-shadow: 0 0 10px 6px #000; */
}

.cell_holder {
  // opacity: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #cacaca;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  -ms-transition: opacity 0.5s;
  transition: opacity 0.5s;
  margin: 0px;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.theme .cell .cover-wrapper {
  pointer-events: none;
  font-family: 'Malgun Gothic';
  position: absolute !important;
  /* width: 90%; */
  /* text-align: center; */
  left: 11%;
  top: 14%;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 0px 0px 4px #010101;
}

.alternative_color {
  position: relative;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 10%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #f8f8f8;
  background-position: top left;
  background-color: #f6f6f6;
  background-size: cover;
  border-color: #e5e4e4;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-bottom-style: solid;
  border-top-style: solid;
}

.more {
  width: 100%;
  text-align: center;
  margin: 20px 0 40px;
}

.megafolio-container {
  padding-bottom: 30px;
}

.mega-entry-innerwrap {
  width: 176px;
  height: 176px;
  position: relative;
  display: inline-block;
  margin: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.mega-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('@/assets/images/grain.png') repeat;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  top: 0;
  left: 0;
}

.mega-hover:hover {
  opacity: 1;
}

.mega-hovertitle {
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 60%;
  padding: 0px 0px 15px;
  left: 20%;
  bottom: 50%;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  // opacity: 0;
}

.mega-hoverlink,
.mega-hoverview {
  width: 33px;
  height: 33px;
  position: absolute;
  top: 50%;
  text-align: center;
  margin-top: 0px;
  cursor: pointer;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  // opacity: 0;
}

.mega-hoverlink {
  right: 50%;
  margin-right: 10px;
  background: url('@/assets/images/link.png') no-repeat center;
  -webkit-transform: translateZ(10);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

.mega-hoverview {
  left: 50%;
  margin-left: 10px;
  background: url('@/assets/images/lupe.png') no-repeat center;
  -webkit-transform: translateZ(10);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

::v-deep .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: -1px 4px;
}

.news-box {
  width: 272px;
  height: 272px;
  overflow: hidden;
  position: relative;

  h3 {
    position: absolute;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: center;
    bottom: 0;
  }
}

.news-box img {
  cursor: pointer;
  /* 手指指针 */
  transition: all 0.5s;
  /* 浮动；所有属性，0.5秒 */
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.news-box img:hover {
  transform: scale(1.1);
  /* 变形：缩放，放大比例(1.1) */
  overflow: hidden;
}

.logImg {
  width: 100%;

  img {
    width: 100%;
  }
}

.friendship-link {
  width: 192px;
  height: 80px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
}

.main_admin_banner {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 200px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  text-align: center;
  position: fixed;
  z-index: 10;
  bottom: 10px;
  right: 10px;
}

.main_admin_banner h3 {
  margin: 0;
}

.avatar-lg {
  width: 200px !important;
  height: 60px !important;
  // border-radius: 50%;
  max-width: 100%;
}

.main_admin_banner h4 {
  margin: 10px 0;
}

.m-t-sm {
  margin-top: 10px;
}

.text-muted {
  color: #777;
}

.main_admin_banner .snsBox {
  display: inline-block;
  width: 100%;
  margin-bottom: -5px;
  float: left;
}

.main_admin_banner .snsBox>*:not(:last-child) {
  margin-right: 5px;
}

.main_admin_banner .snsBox>* {
  margin-bottom: 5px;
}

.btn-naver_talk {
  color: #fff !important;
  background-color: #00c73c;
}

.btn-kakao_open {
  color: #fff !important;
  background-color: #ffb341;
}

.btn-group-xs>.btn,
.btn-xs {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>
