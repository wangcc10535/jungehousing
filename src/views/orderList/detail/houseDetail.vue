<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-29 13:49:18
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-30 15:28:40
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
              <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
              <el-descriptions-item label="选项信息">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
              <el-descriptions-item label="电话">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
            </el-descriptions>
          </div>
          <div class="order-list-detail">
            <h3>详细说明</h3>
            <div></div>
          </div>
          <div class="map-box">地图</div>
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
export default {
  name: 'houseDetail',
  components: { rightList },
  data() {
    return {
      customerFrom: {},
      rightTitle: '附近房产',
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
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
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
.base-play{
  display: flex;
  justify-content: space-around;
  width: 100%;
  span.base-play-box{
    display: inline-block;
    width: 50%;
  }
}
</style>
