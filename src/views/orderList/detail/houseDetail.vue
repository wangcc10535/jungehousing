<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-29 13:49:18
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-29 14:29:49
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
                      <img :src="link.url" alt="" />
                    </div>
                  </swiper-slide>
                </swiper>
                <swiper class="swiper gallery-thumbs" :options="swiperOptionThums" ref="swiperThumbs">
                  <swiper-slide class="slide-list" v-for="(link, index) in cardList" :key="index">
                    <div class="friendship-Thums">
                      <img :src="link.url" alt="" />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
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
  margin-top: 80px;
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
</style>
