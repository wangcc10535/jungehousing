<!--
 * @Description: 网站首页
 * @Author: wangcc
 * @Date: 2022-08-23 10:11:24
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-26 10:46:42
 * @FilePath: \jungehousing\src\views\index.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div>
    <el-carousel height="443px">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img class="banner-images" :src="item.url" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="searchbox_wrapper_bottom">
      <div class="searchbox">
        <ul class="nav-search">
          <li v-for="(tabs, index) in tab" :key="index" :class="{ activeX: currentClass == index }"
            @click="tabsClick(index)">
            <a href="javascript:;">{{ tabs.name }}</a>
          </li>
        </ul>
        <div class="search-inner">
          <el-select v-model="searchFrom.deal" class="search-select" placeholder="交易类型">
            <el-option v-for="item in dealOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.sale" class="search-select" placeholder="销售类型">
            <el-option v-for="item in saleOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.city" v-if="currentClass == 0" class="search-select" placeholder="选择城市">
            <el-option v-for="item in cityOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.county" v-if="currentClass == 0" class="search-select" placeholder="-">
            <el-option v-for="item in countyOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.street" v-if="currentClass == 0" class="search-select" placeholder="-">
            <el-option v-for="item in streetOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchFrom.region" v-if="currentClass == 1" class="search-select" placeholder="选择地区">
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
          </el-select>
          <el-input v-model="searchFrom.input" class="search-input" v-if="currentClass == 2" placeholder="地址、地铁、挂牌号、标题">
          </el-input>
          <el-button type="warning" icon="el-icon-search" @click="searchClick">搜索</el-button>
        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>前往地区</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="row theme">
          <div class="col-md-4 col-xs-6" style="width: 22.5%" v-for="(item, index) in homeSpot" :key="index" @click="goList(item)">
            <div class="cell home_spot_cell">
              <div class="cell_holder home_spot">
                <a href="javascript:;" class="cover-wrapper">
                  <span>{{ item.name }}</span>
                </a>
                <img :src="item.url" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section alternative_color">
      <div class="_container">
        <div class="text-center" style="padding-bottom: 10px">
          <h1>热门产品</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="text-center" id="recent_menus">
          <el-radio-group v-model="houseFrom.value" size="small">
            <el-radio-button :label="0">全部</el-radio-button>
            <el-radio-button :label="1">2间客房</el-radio-button>
            <el-radio-button :label="2">3间客房</el-radio-button>
            <el-radio-button :label="3">4间客房</el-radio-button>
            <el-radio-button :label="4">双工</el-radio-button>
            <el-radio-button :label="5">ETC</el-radio-button>
          </el-radio-group>
        </div>
        <div id="recent_wrap" style="display: table">
          <div class="search-item-wide" v-for="(house, index) in houseList" :key="index">
            <div class="view_product grid_photo">
              <div class="photo">
                <img class="holder" :src="house.img" alt />
                <div class="item_title">
                  <h3>[{{ house.id }}] {{ house.title }}</h3>
                  <div class="address">
                    <span>{{ house.address }}</span>
                  </div>
                </div>
                <div class="tags">
                  <div class="tag" v-if="house.tags == 1">
                    <span>建议</span>
                  </div>
                  <div class="tag tag_speed" v-if="house.tagsO == 2">
                    <span>抢购</span>
                  </div>
                  <div class="tag ribbon_orange" v-if="house.tagsZ == 3">
                    <span>最低价格</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="price_info">
                <div>
                  <div class="price_wrap">
                    <span class="installation_span">最少</span>
                    <strong class="price_strong">{{ house.priceSmall }}</strong>
                    <span class="installation_span">房间</span>
                    <strong class="price_strong">{{ house.zoom }}</strong>
                    <span class="installation_span">贷款</span>
                    <strong class="price_strong">{{ house.fullPrice }}万韩元</strong>
                  </div>
                </div>
              </div>
              <div class="meta">
                <div class="meta_cell">
                  面积
                  <span class="help">{{ house.area }}</span>
                </div>
                <div class="meta_cell">{{ house.aces }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="more">
          <router-link to="/housemap" class="router-test">
            <el-button icon="el-icon-plus">查看更多</el-button>
          </router-link>

        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>顾客评论</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <div class="mega-entry-innerwrap" v-for="(mega, index) in innerwrapList" :key="index" >
            <img :src="mega.img" alt />
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
            <el-button icon="el-icon-plus">查看更多</el-button>
          </router-link>

        </div>
      </div>
    </div>
    <div class="home_section alternative_color">
      <div class="_container">
        <div class="text-center">
          <h1>关于所有房地产</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(img, index) in itemList" :key="index">
              <div class="news-box">
                <img :src="img.img" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="home_section main_color">
      <div class="_container">
        <div class="text-center">
          <h1>合作方</h1>
          <hr class="hr_narrow hr_color" />
        </div>
        <div class="megafolio-container">
          <swiper :options="friendshipOption">
            <swiper-slide v-for="(link, index) in cardList" :key="index">
              <div class="friendship-link">
                <img :src="link.url" alt="">
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
  </div>
</template>

<script>
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
      cardList: [
        {
          url: require('@/assets/images/nts.jpg')
        },
        {
          url: require('@/assets/images/onnara.jpg')
        },
        {
          url: require('@/assets/images/rtms.jpg')
        },
      ],
      itemList: [
        {
          img: require('@/assets/images/dbc.jpg')
        },
        {
          img: require('@/assets/images/bbs.jpg')
        },
        {
          img: require('@/assets/images/bbs.jpg')
        },
        {
          img: require('@/assets/images/bbs.jpg')
        },
        {
          img: require('@/assets/images/bbs.jpg')
        }
      ],
      homeSpot: [
        {
          id: 1,
          name: '서울',
          url: require('@/assets/images/1.png')
        },
        {
          id: 2,
          name: '인천/부천',
          url: require('@/assets/images/2.png')
        },
        {
          id: 3,
          name: '고양/파주',
          url: require('@/assets/images/3.png')
        },
        {
          id: 4,
          name: '의정부/양주',
          url: require('@/assets/images/4.png')
        },
        {
          id: 5,
          name: '수원/용인',
          url: require('@/assets/images/5.png')
        },
        {
          id: 6,
          name: '성남/광주',
          url: require('@/assets/images/6.png')
        },
        {
          id: 7,
          name: '구리/남양주',
          url: require('@/assets/images/7.png')
        },
        {
          id: 8,
          name: '안양/군포/의왕시',
          url: require('@/assets/images/8.png')
        }
      ],
      innerwrapList: [
        {
          id: 1,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        },
        {
          id: 2,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        },
        {
          id: 3,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        },
        {
          id: 4,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        },
        {
          id: 5,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        },
        {
          id: 6,
          img: require('@/assets/images/asd.jpg'),
          title: '恭喜坡州签约~*'
        }
      ],
      searchFrom: {},
      houseFrom: {
        value: 0
      },
      // 交易类型
      dealOptions: [
        {
          value: 1,
          label: '买卖'
        },
        {
          value: 2,
          label: '月租'
        },
        {
          value: 3,
          label: '全税'
        }
      ],
      // 销售类型
      saleOptions: [
        {
          value: 0,
          label: '全部住宅'
        },
        {
          value: 1,
          label: '1间'
        },
        {
          value: 2,
          label: '2间'
        },
        {
          value: 3,
          label: '3间'
        },
        {
          value: 4,
          label: '4间'
        },
        {
          value: 5,
          label: '复式'
        },
        {
          value: 6,
          label: '都市型 APT'
        },
        {
          value: 7,
          label: 'Officetel'
        }
      ],
      // 选择城市
      cityOptions: [
        {
          value: 1,
          label: '首尔'
        },
        {
          value: 2,
          label: '仁川'
        },
        {
          value: 3,
          label: '京畿道'
        },
        {
          value: 4,
          label: '忠清南道'
        }
      ],
      countyOptions: [],
      streetOptions: [],
      // 区域
      regionOptions: [
        {
          value: 1,
          label: '都市区'
        }
      ],
      // 地铁线路
      lineOptions: [],
      // 地铁站
      stationOptions: [],
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
      tab: [
        {
          id: 1,
          name: '地址搜索'
        },
        {
          id: 2,
          name: '地铁搜索'
        },
        {
          id: 3,
          name: '搜索'
        }
      ],
      currentClass: 0,
      houseList: [
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        },
        {
          id: 21464,
          title: '★清川洞★特价第一代…',
          address: '仁川富平区清川洞葛山站1.2公里',
          priceSmall: '30500',
          room: '1500',
          fullPrice: '2900',
          tags: 1,
          tagsO: 2,
          tagsZ: 3,
          area: '115.7㎡',
          aces: '卧室 3 / 浴室 2',
          img: require('@/assets/images/0.png')
        }
      ]
    };
  },
  methods: {
    tabsClick(e) {
      this.currentClass = e;
      this.searchFrom = {};
    },
    searchClick() {
      if (JSON.stringify(this.searchFrom) == '{}') {
        this.$message.error('请选择搜索条件！')
        return false;
      }
      this.$router.push({
        name:'houseList',
        query:this.searchFrom
      })
    },
    goList(item) {
      this.$router.push({
        name:'houseList',
        query:{
          id:item.id
        }
      })
    },
    megaHover(item) {
      this.imgVisible = true;
      this.dialogImg = item.img;
    },
    seeClick(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'see',
          id: item.id
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-images {
  width: 100%;
  height: 100%;

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
  width: 160px;
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
  width: 500px;
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
  display: table;
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
</style>
