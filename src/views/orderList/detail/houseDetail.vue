<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-29 13:49:18
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-25 20:46:44
 * @FilePath: \jungehousing\src\views\orderList\detail\houseDetail.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="_container main">
    <div class="left">
      <div class="article">
        <h3>{{ $t('message.ArticleNo') }}：{{ houseData.homeNum }}</h3>
      </div>
      <div class="banner-icon">
        <div class="megafolio-container">
          <div class="firstDiv">
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            <div class="centerDiv">
              <div class="thumb-example">
                <swiper :options="swiperOptionTop" class="swiper gallery-top" ref="swiperTop">
                  <swiper-slide v-for="(item, index) in houseData.roomImages" :key="index">
                    <div class="friendship-link" v-viewer>
                      <video :src="item.image" v-if="item.videoType == 1"></video>
                      <img :src="item.image" v-if="item.videoType == 0" alt="">
                    </div>
                  </swiper-slide>
                </swiper>
                <swiper :options="swiperOptionThumbs" class="swiper gallery-thumbs" ref="swiperThumbs">
                  <swiper-slide class="slide-list" v-for="(item, index) in houseData.roomImages" :key="index">
                    <div class="friendship-Thums">
                      <img :src="item.image" alt="">
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <p class="order-name">【{{ houseData.address }}】{{ houseData.title }}</p>
          <div class="information">
            <el-descriptions :title="$t('message.essentialInformation')" :column="1" border>
              <el-descriptions-item :label="$t('message.AmountInformation')">
                <div class="price_wrap">
                  <span class="installation_span">{{ $t('message.TotalPrice') }}</span>
                  <strong class="price_strong">{{ houseData.lastPrice }}</strong>
                  <span class="installation_span">{{ $t('message.downPayments') }}</span>
                  <strong class="price_strong">{{ houseData.roomPrice }}</strong>
                  <span class="installation_span">{{ $t('message.loan') }}</span>
                  <strong class="price_strong">{{ houseData.loans }}{{ $t('message.TenThousandWon') }}</strong>
                </div>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.LocationInformation')">
                <div class="address">
                  <p>{{ houseData.addresss }}</p>
                  <p>
                    <span v-for="(metro, index) in houseData.roomSubways" :key="index">
                      <span class="metro">{{ metro.name }}</span>{{ metro.info }}
                    </span>
                  </p>
                </div>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.BuildingInformation')">
                <p class="base-row">
                  <span class="tags">{{ $t('message.floor') }}</span>
                  {{ houseData.floor }}
                </p>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.MoreInformation')">
                <p class="base-row">
                  <span class="tags">{{ $t('message.area') }}</span>
                  {{ houseData.actualArea }}㎡
                </p>
                <p class="base-row base-play">
                  <span class="base-play-box">
                    <span class="tags">{{ $t('message.family') }}</span>
                    {{ houseData.familyNum }}{{ $t('message.Room') }}
                  </span>
                  <span class="base-play-box">
                    <span class="tags">{{ $t('message.waterproof') }}</span>
                    {{ houseData.roomNum }}{{ $t('message.Room') }}
                  </span>
                  <span class="base-play-box">
                    <span class="tags">{{ $t('message.ShowerRoom') }}</span>
                    {{ houseData.showerRoom }}{{ $t('message.Room') }}
                  </span>
                </p>
                <p class="base-row base-play">
                  <span class="base-play-box">
                    <span class="tags">{{ $t('message.heating') }}</span>
                    <span v-if="houseData.heat == 1">{{ $t('message.NoHeating') }}</span>
                    <span v-if="houseData.heat == 2">{{ $t('message.UrbanHeating') }}</span>
                  </span>
                  <span class="base-play-box"></span>
                  <!-- <span class="base-play-box">
                    <span class="tags">入住日期</span>
                    面议
                  </span> -->
                </p>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.OptionInformation')">
                <div class="option-box">
                  <!-- <i class="iconfont icon-tingchechang"></i> -->
                  <span class="option-box-label" v-for="(metro, index) in houseData.option" :key="index">{{
                      metro
                  }}</span>
                </div>
              </el-descriptions-item>
              <el-descriptions-item :label="$t('message.phone')">
                <p class="base-row">{{ houseData.phone }}</p>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <div class="order-list-detail">
            <h3>{{ $t('message.detailedDescription') }}</h3>
            <div class="order-list-detail-center" v-html="houseData.item"></div>
          </div>
          <div class="map-box">
            <div id="map" style="width: 100%; height: 100%"></div>
            <ul id="category_icon">
              <li :class="{ on: iconIndex == index }" v-for="(icon, index) in categoryIcon" :key="index"
                @click="iconTab(icon, index)">
                <span class="category_bg pharmacy" :class="icon.className"></span>
                {{ icon.clickName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="agent-box">
        <div class="agent-box-header">
          <h4>{{ houseData.middlemanJob }}</h4>
          <div class="agent-box-header-img" v-viewer>
            <img v-if="houseData.middlemanImg" :src="houseData.middlemanImg" alt />
            <el-avatar v-else :size="50" style="width:100%;height:100%" :src="circleUrl"></el-avatar>
          </div>
          <p class="agent-box-header-name"><i class="iconfont icon-yonghufill"></i> {{ houseData.middlemanName }}</p>
        </div>
        <div class="agent-box-contact">
          <span class="agent-box-contact-phone"> <i class="iconfont icon-dianhua"></i>{{ houseData.phone }} </span>
          <span class="agent-box-contact-kakao">
            <i class="iconfont icon-kakao-talk-fill kakao-talk-fill"></i>{{ houseData.middlemanTalk }}
          </span>
        </div>
        <div class="agent-box-customer">
          <p class="agent-box-customer-ps">{{ $t('message.pis') }}</p>
          <el-input class="agent-box-customer-input" v-model="customerFrom.adsw"
            :placeholder="$t('message.PhoneNumberOrEmail')"></el-input>
          <el-input class="agent-box-customer-textarea" type="textarea" :rows="3"
            :placeholder="$t('message.ConsultationContents')" v-model="customerFrom.qwera"></el-input>
          <div class="agent-box-customer-submit">
            <el-button class="agent-box-customer-submit-btn" type="warning" @click="addRequireUse">
              {{ $t('message.KeepInContact') }}</el-button>
          </div>
        </div>
      </div>
      <rightList :rightTitle="rightTitle" :houseList="houseList"></rightList>
    </div>
  </div>
</template>

<script>
import rightList from '@/components/rightList.vue';
import { roomDetail, roomSelectHot, listmiddleman, addRequire } from '@/api/http';
export default {
  name: 'houseDetail',
  components: { rightList },
  data() {
    return {
      houseId: this.$route.query.id,
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      iconIndex: null,
      categoryIcon: [
        {
          id: 1,
          className: 'MT1',
          clickName: this.$t('message.MT1')
        },
        {
          id: 2,
          className: 'CS2',
          clickName: this.$t('message.CS2')
        },
        {
          id: 3,
          className: 'PS3',
          clickName: this.$t('message.PS3')
        },
        {
          id: 4,
          className: 'SC4',
          clickName: this.$t('message.SC4')
        },
        {
          id: 5,
          className: 'BK9',
          clickName: this.$t('message.BK9')
        },
        {
          id: 6,
          className: 'CT1',
          clickName: this.$t('message.CT1')
        },
        {
          id: 7,
          className: 'PO3',
          clickName: this.$t('message.PO3')
        },
        {
          id: 8,
          className: 'AT4',
          clickName: this.$t('message.AT4')
        },
        {
          id: 9,
          className: 'HP8',
          clickName: this.$t('message.HP8')
        }
      ],
      map: null,
      customerFrom: {},
      rightTitle: this.$t('message.PopularRealEstate'),
      swiperOptionTop: {
        // spaceBetween:10,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false, //操作swiper后不会停止播放

        },
        effect: 'fade',
        loop: true,
        loopedSlides: 4,
        // zoom: true,//双击放大
        // navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev'
        // },
        observer: true,
        observeParents: true,
        grabCursor: true // 抓手
      },
      swiperOptionThumbs: {
        loop: true,    //开启无限轮播  
        slidesPerView: 4,    //显示几个图片
        spaceBetween: 10,	//小图之间得距离 
        direction: 'horizontal',
        // centeredSlides: true, // 设置活动块居中
        grabCursor: true, // 抓手,
        slideToClickedSlide: true,
        watchSlidesVisibility: true // 防止不可点击
      },
      houseList: [],
      iconMarkerArr: [],
      iconMarker: null,
      houseData: {},
      middleman: [],
      iconName: '',
    };
  },
  created() {
    this.getlistmiddleman();
    this.getList();
    this.getDetail();
  },
  watch: {
    '$route.query.id': {
      handler(newName, oldName) {
        location.reload()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 实现swiper双向控制
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
    // this.$nextTick(() => {
    //   const swiperTop = this.$refs.swiperTop.$swiper;
    //   const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    //   swiperTop.controller.control = swiperThumbs;
    //   swiperThumbs.controller.control = swiperTop;
    // });
  },

  methods: {
    // 获取经纪人
    getlistmiddleman() {
      listmiddleman({}).then(res => {
        // console.log(res.rows);
        this.middleman = res.rows
      })
    },
    // 获取详情
    getDetail() {
      roomDetail({ id: this.houseId }).then((res) => {
        this.houseData = res.data;
        // this.houseData.city = this.houseData.city.split(',');
        this.houseData.option = this.houseData.option.split(',');
        let videoLink = 'http://vd3.bdstatic.com/mda-njq43x4n6p63efdc/360p/h264/1666666466379002453/mda-njq43x4n6p63efdc.mp4'
        
        this.houseData.roomImages.forEach(item =>{
          item.videoType = 0
        })
        this.houseData.roomImages.push({
          image: videoLink,
          videoType: 1,
        })
        console.log(this.houseData);
        this.middleman.forEach(item => {
          if (item.id == this.houseData.middlemanId) {
            this.houseData.middlemanImg = item.headerImg;
            this.houseData.middlemanJob = item.job;
            this.houseData.middlemanName = item.name;
            this.houseData.middlemanTalk = item.talk;
          }
        })
        // console.log(this.houseData);
        this.initMap();
      });
    },
    // 用户提交需求
    addRequireUse() {
      this.customerFrom.mid = this.houseData.middlemanId;
      this.customerFrom.homeNum = this.houseData.homeNum;
      addRequire({ ...this.customerFrom }).then(res => {
        if (res.code == 200) {
          this.$message.success('提交成功！')
          this.customerFrom = {}
        }
      })
    },

    // initMap() {
    //   let lat = this.houseData.lat;
    //   let lng = this.houseData.lon;
    //   var mapOptions = {
    //     center: new kakao.maps.LatLng(lat, lng),
    //     level: 4,
    //     mapTypeControl: true,
    //     mapTypeControlOptions: {
    //       style: naver.maps.MapTypeControlStyle.BUTTON,
    //       position: naver.maps.Position.RIGHT_TOP
    //     },
    //     zoomControl: true,
    //     zoomControlOptions: {
    //       position: naver.maps.Position.RIGHT_CENTER
    //       // style: naver.maps.ZoomControlStyle.SMALL
    //     }
    //   };
    //   this.map = new naver.maps.Map('map', mapOptions);
    //   // this.onLoad(map);
    // },
    initMap() {
      let mapInit = document.getElementById('map')
      let lat = this.houseData.lat;
      let lng = this.houseData.lon;
      let mapOption = {
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };
      this.map = new kakao.maps.Map(mapInit, mapOption);

      // 지도에 표시할 원을 생성합니다
      var circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(lat, lng),  // 원의 중심좌표 입니다 
        radius: 100, // 미터 단위의 원의 반지름입니다 
        strokeWeight: 1, // 선의 두께입니다 
        strokeColor: '#75B8FA', // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        //  strokeStyle: 'dashed', // 선의 스타일 입니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다   
      });

      // 지도에 원을 표시합니다 
      circle.setMap(this.map);
    },
    iconTab(icon, index) {
      let _this = this;
      if (this.iconMarkerArr.length > 0) {
        this.iconMarkerArr.forEach((item) => {
          item.setMap(null);
        });
      }
      this.iconMarkerArr = []
      // 장소 검색 객체를 생성합니다
      var ps = new kakao.maps.services.Places(this.map);
      ps.categorySearch(icon.className, this.placesSearchCB, { useMapBounds: true });
      this.iconName = icon.className
      this.iconIndex = index;
    },
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          this.displayMarker(data[i]);
        }
      }
    },
    displayMarker(place) {
      let imageSrc = null
      if (this.iconName == 'MT1') {
        // console.log('超级市场');
        imageSrc = require('@/assets/images/marker/mt1_o.png')
      } else if (this.iconName == 'CS2') {
        // console.log('便利店');
        imageSrc = require('@/assets/images/marker/cs2.png')
      } else if (this.iconName == 'PS3') {
        // console.log('幼儿园');
        imageSrc = require('@/assets/images/marker/ps3.png')
      } else if (this.iconName == 'SC4') {
        // console.log('学校');
        imageSrc = require('@/assets/images/marker/sc4.png')
      } else if (this.iconName == 'BK9') {
        // console.log('银行');
        imageSrc = require('@/assets/images/marker/bk9.png')
      } else if (this.iconName == 'CT1') {
        // console.log('娱乐设施');
        imageSrc = require('@/assets/images/marker/ct1.png')
      } else if (this.iconName == 'PO3') {
        // console.log('公共机构');
        imageSrc = require('@/assets/images/marker/po3.png')
      } else if (this.iconName == 'AT4') {
        // console.log('景点');
        imageSrc = require('@/assets/images/marker/at4.png')
      } else if (this.iconName == 'HP8') {
        // console.log('医院');
        imageSrc = require('@/assets/images/marker/hp8.png')
      }
      let imageSize = new kakao.maps.Size(28, 28);
      let imageOption = { offset: new kakao.maps.Point(28, 28) };
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      // 마커를 생성하고 지도에 표시합니다
      this.iconMarker = new kakao.maps.Marker({
        // map: this.map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage
      });
      this.iconMarkerArr.push(this.iconMarker);
      this.initMarkers(this.map)
    },
    initMarkers(map) {
      if (map != null) {
        this.iconMarkerArr.forEach((item) => {
          item.setMap(map);
        });
      }

    },
    // 获取房产列表
    getList() {
      let queryParams = {
        pageNum: 1,
        pageSize: 10
      };
      roomSelectHot({ ...queryParams }).then((res) => {
        if (res.code == 200) {
          this.houseList = []
          res.rows.forEach(item => {
            item.addressName = item.city.split(',').splice(0, 2).join("")
            if (item.status != 0) {
              this.houseList.push(item)
            }
          })
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  font-weight: bold;
  margin: 20px 0;
  font-size: 16px;
  /* padding: 10px 0; */
  border: 1px solid #dcdcdc;
  text-align: center;

  h3 {
    margin: 0;
    padding: 0;
  }
}

.main {
  padding-top: 20px;
  margin-bottom: 20px;
}

.friendship-link {
  width: 100%;
  height: 458px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #0c0c0c;
  }
}

.friendship-Thums {
  width: 100%;
  height: 72px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.left {
  float: left;
  width: 860px;
}

.right-box {
  width: 300px;
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}

.firstDiv {
  width: 100%;
  height: 550px;
  position: relative;
}

.centerDiv {
  width: 100%;
  height: 550px;
  position: absolute;
  left: 0;
  top: 0;
}

.thumb-example {
  height: 550px;
  background-color: transparent;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  top: 45%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #0c0c0c;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 18px;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.gallery-top {
  height: 83%;
  width: 100%;
}

.gallery-thumbs {
  height: 92px;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  width: 96px;
  height: 72px;
  opacity: 0.4;
}

.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.agent-box {
  padding: 20px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    // padding: 10px 0 10px 0;
    padding-bottom: 10px;

    h4 {
      color: #7a7366;
      padding: 5px 0 5px 0;
      font-size: 14px;
    }

    &-name {
      line-height: 22px;
      display: flex;
      height: 22px;
      align-items: flex-end;
      margin-top: 6px;
    }

    &-img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  &-contact {
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin-top: 10px;

    &-phone {
      color: #fff;
      background-color: #333;
      padding: 4px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      font-weight: 600;

      i {
        position: absolute;
        left: 6px;
        top: 8px;
      }
    }

    &-kakao {
      margin-top: 10px;
      background-color: #fef212 !important;
      color: #333;
      padding: 4px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      font-weight: 500;

      i {
        font-size: 20px;
        position: absolute;
        left: 6px;
        top: 6px;
      }
    }
  }

  &-customer {
    padding: 10px 0;

    &-ps {
      font-size: 14px;
      text-align: left;
    }

    &-input,
    &-textarea,
    &-submit {
      margin-top: 10px;
    }

    &-submit {
      &-btn {
        width: 100%;
      }
    }
  }
}

.address {
  p {
    margin-bottom: 6px;
    color: #000;
  }
}

.metro {
  border: 2px solid #ee5a2a;
  color: #ee5a2a;
  border-radius: 3px;
  padding: 0px 3px 0px 3px;
  font-size: 11px;
  margin-right: 5px;
}

.base-row {
  color: #000;
  margin-bottom: 6px;
}

.base-row:last-child {
  margin-bottom: 0;
}

.tags {
  background-color: #666;
  color: #fff;
  padding: 3px 15px;
  margin-right: 4px;
}

.base-play {
  display: flex;
  justify-content: space-around;
  width: 100%;

  span.base-play-box {
    display: inline-block;
    width: 50%;
  }
}

.map-box {
  width: 100%;
  height: 500px;
  position: relative;
}

#category_icon {
  margin-left: 80px;
}

#category_icon {
  position: absolute;
  margin-top: -56px;
  left: 30px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgb(0 0 0 / 40%);
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  z-index: 2;
  z-index: 999;
  font-size: 11px;
}

#category_icon li.on {
  background: #eee;
}

#category_icon li {
  float: left;
  list-style: none;
  width: 75px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}

// #category_icon li.on .category_bg.MT1 {
//     background: url('@/assets/images/marker/mt1_o.png') no-repeat;
// }
#category_icon li .category_bg.MT1 {
  background: url('@/assets/images/marker/mt1_o.png') no-repeat;
}

#category_icon li .category_bg.CS2 {
  background: url('@/assets/images/marker/cs2.png') no-repeat;
}

#category_icon li .category_bg.PS3 {
  background: url('@/assets/images/marker/ps3.png') no-repeat;
}

#category_icon li .category_bg.SC4 {
  background: url('@/assets/images/marker/sc4.png') no-repeat;
}

#category_icon li .category_bg.BK9 {
  background: url('@/assets/images/marker/bk9.png') no-repeat;
}

#category_icon li .category_bg.CT1 {
  background: url('@/assets/images/marker/ct1.png') no-repeat;
}

#category_icon li .category_bg.PO3 {
  background: url('@/assets/images/marker/po3.png') no-repeat;
}

#category_icon li .category_bg.AT4 {
  background: url('@/assets/images/marker/at4.png') no-repeat;
}

#category_icon li .category_bg.HP8 {
  background: url('@/assets/images/marker/hp8.png') no-repeat;
}

#category_icon li span {
  display: block;
  margin: 0 auto 3px;
  width: 28px;
  height: 28px;
}

.order-list-detail {
  width: 100%;
  margin-top: 20px;

  h3 {
    font-weight: normal;
    margin-bottom: 10px;
    text-align: left;
  }

  &-center {
    margin-bottom: 20px;
  }
}

::v-deep .el-descriptions__header {
  margin-bottom: 10px;
}

.order-name {
  margin: 10px 0;
  position: relative;
  height: 20px;
  line-height: 20px;
  padding-left: 5px;
}

.order-name::after {
  content: '';
  width: 4px;
  height: 20px;
  background-color: #0286b7;
  position: absolute;
  left: 0;
}

.option-box {
  padding: 0 20px;

  &-label {
    // width: 120px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    display: inline-flex;
    align-items: center;
    justify-content: left;
    margin-right: 20px;
  }

  &-label:last-child {
    margin-right: 0;
  }
}
</style>
