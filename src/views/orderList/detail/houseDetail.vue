<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-29 13:49:18
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-31 10:46:44
 * @FilePath: \jungehousing\src\views\orderList\detail\houseDetail.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="_container main">
    <div class="left">
      <div class="article">
        <h3>货号：21502</h3>
      </div>
      <div class="banner-icon">
        <div class="megafolio-container">
          <div class="firstDiv">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="centerDiv">
              <div class="thumb-example">
                <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                  <swiper-slide v-for="(link, index) in cardList" :key="index">
                    <div class="friendship-link">
                      <img :src="link.url" alt />
                    </div>
                  </swiper-slide>
                </swiper>
                <swiper
                  class="swiper gallery-thumbs"
                  :options="swiperOptionThums"
                  ref="swiperThumbs"
                >
                  <swiper-slide class="slide-list" v-for="(link, index) in cardList" :key="index">
                    <div class="friendship-Thums">
                      <img :src="link.url" alt />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <p class="order-name">【东山洞】我喜欢剩下的家庭基础设施</p>
          <div class="information">
            <el-descriptions title="基本信息" :column="1" border>
              <el-descriptions-item label="金额信息">
                <div class="price_wrap">
                  <span class="installation_span">最少</span>
                  <strong class="price_strong">22000</strong>
                  <span class="installation_span">房间</span>
                  <strong class="price_strong">3000</strong>
                  <span class="installation_span">贷款</span>
                  <strong class="price_strong">19000万韩元</strong>
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="地点信息">
                <div class="address">
                  <p>京畿道高阳市德阳区东山洞</p>
                  <p>
                    <span class="metro">3号线</span>松站 1.2 公里
                    <span class="metro">3号线</span>直竹站 1.5 公里
                    <span class="metro">3号线</span>古帕巴尔站 1.9 公里
                  </p>
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="建筑信息">
                <p class="base-row">
                  <span class="tags">楼层</span>
                  4楼
                </p>
              </el-descriptions-item>
              <el-descriptions-item label="更多信息">
                <p class="base-row">
                  <span class="tags">面积</span>
                  92.56㎡
                </p>
                <p class="base-row base-play">
                  <span class="base-play-box">
                    <span class="tags">防水</span>
                    3室
                  </span>
                  <span class="base-play-box">
                    <span class="tags">浴室</span>
                    2室
                  </span>
                </p>
                <p class="base-row base-play">
                  <span class="base-play-box">
                    <span class="tags">加热</span>
                    城市燃气
                  </span>
                  <span class="base-play-box">
                    <span class="tags">入住日期</span>
                    面议
                  </span>
                </p>
              </el-descriptions-item>
              <el-descriptions-item label="选项信息">
                <div class="option-box">
                  <span class="option-box-label"><i class="iconfont icon-tingchechang"></i>停车场</span>
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="电话">
                <p class="base-row">050-7872-6008</p>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <div class="order-list-detail">
            <h3>详细说明</h3>
            <div class="order-list-detail-center">详情内容</div>
          </div>
          <div class="map-box">
            <div id="map" style="width: 100%; height: 100%"></div>
            <ul id="category_icon">
              <li
                :class="{ on: iconIndex == index }"
                v-for="(icon, index) in categoryIcon"
                :key="index"
                @click="iconTab(icon, index)"
              >
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
          <h4>经理</h4>
          <div class="agent-box-header-img">
            <img src="@/assets/images/liheying.jpg" alt />
          </div>
          <p class="agent-box-header-name">
            <i class="iconfont icon-yonghufill"></i> 李贺英
          </p>
        </div>
        <div class="agent-box-contact">
          <span class="agent-box-contact-phone">
            <i class="iconfont icon-dianhua"></i>050-7872-6008
          </span>
          <span class="agent-box-contact-kakao">
            <i class="iconfont icon-kakao-talk-fill kakao-talk-fill"></i>电源
          </span>
        </div>
        <div class="agent-box-customer">
          <p class="agent-box-customer-ps">留下您的联系方式，我们会与您联系。</p>
          <el-input
            class="agent-box-customer-input"
            v-model="customerFrom.input"
            placeholder="电话号码或邮箱"
          ></el-input>
          <el-input
            class="agent-box-customer-textarea"
            type="textarea"
            :rows="3"
            placeholder="咨询内容"
            v-model="customerFrom.textarea"
          ></el-input>
          <div class="agent-box-customer-submit">
            <el-button class="agent-box-customer-submit-btn" type="warning">保持联系</el-button>
          </div>
        </div>
      </div>
      <rightList :rightTitle="rightTitle" :houseList="houseList"></rightList>
    </div>
  </div>
</template>

<script>
import rightList from '@/components/rightList.vue';
import {roomDetail, searchRoom} from '@/api/http';
export default {
  name: 'houseDetail',
  components: { rightList },
  data() {
    return {
      houseId:this.$route.query.id,
      iconIndex: null,
      categoryIcon: [
        {
          className: 'MT1',
          clickName: '超级市场'
        },
        {
          className: 'CS2',
          clickName: '便利店'
        },
        {
          className: 'PS3',
          clickName: '幼儿园'
        },
        {
          className: 'SC4',
          clickName: '学校'
        },
        {
          className: 'BK9',
          clickName: '银行'
        },
        {
          className: 'CT1',
          clickName: '娱乐设施'
        },
        {
          className: 'PO3',
          clickName: '公共机构'
        },
        {
          className: 'AT4',
          clickName: '景点'
        },
        {
          className: 'HP8',
          clickName: '医院'
        }
      ],
      map: null,
      customerFrom: {},
      rightTitle: '热门房产',
      swiperOptionTop: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 10,

        navigation: {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        }
      },
      swiperOptionThums: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      cardList: [
        {
          url: require('@/assets/images/0 (1).png')
        },
        {
          url: require('@/assets/images/0 (2).png')
        },
        {
          url: require('@/assets/images/0 (3).png')
        },
        {
          url: require('@/assets/images/0 (4).png')
        },
        {
          url: require('@/assets/images/0 (5).png')
        }
      ],
      houseList: [],
      iconMarkerArr: [],
      iconMarker: null,
      houseData: {}
    };
  },
  created() {
    // this.getImg()
    this.getList();
    this.getDetail();
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
    
  },

  methods: {
    // 获取详情
    getDetail() {
      roomDetail({id:this.houseId}).then( res =>{
        console.log(res);
        // this.houseData
        this.initMap();
      })
    },
    initMap() {
      var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 16,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: naver.maps.MapTypeControlStyle.BUTTON,
          position: naver.maps.Position.RIGHT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.RIGHT_CENTER
          // style: naver.maps.ZoomControlStyle.SMALL
        }
      };
      this.map = new naver.maps.Map('map', mapOptions);
      // this.onLoad(map);
    },
    getHousData() {
      roomDetail().then(res =>{
        console.log(res);
      })
    },
    iconTab(icon, index) {
      if (this.iconMarker) {
        this.iconMarker.setMap(null);
        this.iconMarkerArr = [];
      }
      const marr = [
        {
          grd_lo: '128.64345545',
          grd_la: '35.89231981'
        },
        {
          grd_lo: '128.58271469',
          grd_la: '38.18770048'
        }
      ];
      if (icon.className == 'MT1') {
        console.log('超级市场');
        // this.iconMarker.remove()
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/mt1_o.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'CS2') {
        console.log('便利店');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/cs2.png')
          });
          // this.iconMarkerArr.push(iconMarker)
        });
      } else if (icon.className == 'PS3') {
        console.log('幼儿园');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/ps3.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'SC4') {
        console.log('学校');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/sc4.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'BK9') {
        console.log('银行');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/bk9.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'CT1') {
        console.log('娱乐设施');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/ct1.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'PO3') {
        console.log('公共机构');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/po3.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'AT4') {
        console.log('景点');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/at4.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      } else if (icon.className == 'HP8') {
        console.log('医院');
        marr.forEach((item) => {
          let latlng = new naver.maps.LatLng(item.grd_la, item.grd_lo);
          this.iconMarker = new naver.maps.Marker({
            position: latlng,
            draggable: false,
            map: this.map,
            icon: require('@/assets/images/marker/hp8.png')
          });
          this.iconMarkerArr.push(this.iconMarker);
        });
      }
      this.iconIndex = index;
    },
      // 获取房产列表
  getList() {
      let queryParams = {
        pageNum: 1,
        pageSize: 10
      };
      searchRoom({...queryParams }).then((res) => {
        this.houseList = res.rows;
      });
    }
  },

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
  }
}
.friendship-Thums {
  width: 96px;
  height: 72px;
  img {
    width: 100%;
    height: 100%;
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
.option-box{
  padding: 0 20px;
  &-label {
    width: 120px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-right: 10px;
  }
  &-label:last-child {
    margin-right: 0;
  }
}
</style>
