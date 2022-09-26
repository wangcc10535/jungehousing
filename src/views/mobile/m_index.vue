<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-27 01:15:31
 * @FilePath: \jungehousing\src\views\mobile\m_index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="index-beader">
      <el-link class="top-icon" icon="el-icon-s-unfold" :underline="false" @click="navClick"></el-link>
      <img class="top-logo" src="@/assets/images/m_ing/mlogo.jpg" alt="">
      <el-link class="top-icon" icon="el-icon-search" :underline="false" @click="jumpSearch"></el-link>
    </div>
    <el-carousel :interval="5000" height="115px" arrow="always">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img class="banner-images" :src="item.dictValue" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="index-box">
      <!-- 定位功能 -->
      <div class="search-box">
        <div class="left-map">
          <img src="@/assets/images/m_ing/mBan_1.png" alt="" @click="jumpList">
        </div>
        <div class="right-search">
          <img src="@/assets/images/m_ing/mBan_2.png" alt="" @click="jumpAddressSearch">
          <img src="@/assets/images/m_ing/mBan_3.png" alt="" @click="jumpSearch">
        </div>
      </div>
      <!-- 前往区域 -->
      <div class="padding-box">
        <div class="top-title"><i class="iconfont icon-dituleiditu"></i>{{ $t('message.Gotoarea') }}</div>
        <div class="swiper-container-box" id="swiper-area">
          <swiper :options="friendshipOption">
            <swiper-slide v-for="(link, index) in homeSpot" :key="index">
              <div class="friendship-link" @click="jumpList">
                <img :src="link.dictValue" alt="" />
                <span class="pos-title">{{link.dictLabel}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- 热门房产 -->
      <div class="padding-box">
        <div class="top-title"><i class="iconfont icon-remen"></i>{{ $t('message.PopularProducts') }}</div>
        <div class="swiper-container-box" id="swiper-house">
          <swiper :options="houseOption">
            <swiper-slide v-for="(link, index) in houseList" :key="index">
              <div class="friendship-link" @click="setList(link)">
                <img :src="link.image" alt="" />
                <span class="pos-title">{{link.title}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- 房产类型-->
      <div class="padding-box">
        <div class="top-title"><i class="iconfont icon-fangwu"></i>{{ $t('message.SalesType') }}</div>
        <div class="swiper-container-box" id="swiperType">
          <swiper :options="typeSwiperOption">
            <swiper-slide v-for="(link, index) in saleList" :key="index">
              <div class="sale-type" @click="jumpSearch">
                <i class="iconfont icon-classfangwujiaju fonSize"></i>
                <span class="pos-title">{{link.name}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- 客户评论-->
      <div class="padding-box">
        <div class="top-title"><i class="iconfont icon-pinglun"></i>{{ $t('message.CustomerComments') }}</div>
        <div class="swiper-container-box" id="swiperCustomer">
          <swiper :options="CustomerSwiperOption">
            <swiper-slide v-for="(link, index) in innerwrapList" :key="index">
              <div class="friendship-link" @click="customerClick(link)">
                <img :src="link.image" alt="" />
                <span class="pos-title">{{link.title}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>{{ $t("message.corporateName") }}：{{ $t("message.junge") }}</p>
      <p>{{ $t("message.representativeFigure") }}：{{ $t("message.TeamLeader") }}</p>
      <p>{{ $t("message.businessCircles") }}：538-01-02515</p>
      <p>{{ $t("message.address") }}：{{ $t("message.addressInfo") }}</p>
      <p>{{ $t("message.phone") }}：032-361-8884</p>
      <p>jun-housing@naver.com {{ $t("message.copyright") }}</p>
    </div>
    <nav-list ref="navRef"></nav-list>

    <el-dialog :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <span>
        <img width="100%" :src="dialogImg" alt="">
      </span>
    </el-dialog>
  </div>
</template>
<script>
import navList from '@/components/mobile_c/m_nav.vue'
import {
  getBanners,
  getRegion,
  searchRoom,
  getCooperation,
  listApplaud,
} from '@/api/http';
export default {
  name: 'm_index',
  components: {
    navList
  },
  data() {
    return {
      dialogVisible: false,
      dialogImg: '',
      imageList: [],
      homeSpot: [],
      cardList: [],
      houseList: [],
      innerwrapList: [],
      friendshipOption: {
        slidesPerView: 3,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '#swiper-area .swiper-button-next',
          prevEl: '#swiper-area .swiper-button-prev',
        },
        pagination: {
          el: '#swiper-area .swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        autoplay: {
          delay: 5000 // 5秒切换一次
        }
      },
      houseOption: {
        slidesPerView: 3,
        navigation: {
          nextEl: '#swiper-house .swiper-button-next',
          prevEl: '#swiper-house .swiper-button-prev',
        },
        pagination: {
          el: '#swiper-house .swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        autoplay: {
          delay: 5000 // 5秒切换一次
        }
      },
      typeSwiperOption: {
        slidesPerView: 3,
        navigation: {
          nextEl: '#swiperType .swiper-button-next',
          prevEl: '#swiperType .swiper-button-prev',
        },
        pagination: {
          el: '#swiperType .swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        autoplay: {
          delay: 5000 // 5秒切换一次
        }
      },
      CustomerSwiperOption: {
        slidesPerView: 3,
        navigation: {
          nextEl: '#swiperCustomer .swiper-button-next',
          prevEl: '#swiperCustomer .swiper-button-prev',
        },
        pagination: {
          el: '#swiperCustomer .swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        autoplay: {
          delay: 5000 // 5秒切换一次
        }
      }
    }
  },
  computed: {
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
  created() {
    this.getBanner();
    this.getRengon();
    this.getCooperation();
    this.getList();
    this.getComments();
  },
  mounted() {
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
    // 获取合作企业列表
    getCooperation() {
      getCooperation().then((res) => {
        this.cardList = res.data;
      });
    },
    // 获取房产列表
    getList() {
      let queryParams = {
        pageNum: 1,
        pageSize: 18
      };
      searchRoom({ ...queryParams }).then((res) => {
        this.houseList = res.rows;
        this.houseList.forEach((item) => {
          item.titleLabel = item.titleLabel.split(',');
        });
        console.log(this.houseList);
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
    navClick() {
      this.$refs.navRef.openNav()
    },
    customerClick(item) {
      console.log(item);
      this.dialogVisible = true;
      this.dialogImg = item.image
    },
    handleClose() {
      this.dialogVisible = false;
    },
    jumpList() {
      this.$router.push({ name: 'm_mapList' })
    },
    setList(item) {
      console.log(item);
      this.$router.push({ name: 'm_detail', query: {id:item.id} })
    },
    jumpSearch() {
      this.$router.push({ name: 'm_typeSearch' })
    },
    jumpAddressSearch() {
      this.$router.push({ name: 'm_addressSearch' })
    }
  }
};
</script>
<style scoped lang='scss'>
.index-beader {
  background-color: #ffffff;
  height: 3.75rem;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;

  .top-icon {
    width: 2.8rem;
    height: 2.8rem;
    font-size: 24px;
    color: #EBB000;
  }

  .top-logo {
    height: 36px;
    width: 120px;
  }
}

.banner-images {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.index-box {
  padding: 0 10px;
}

.search-box {
  height: 9.625rem;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .left-map {
    width: 49.5%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right-search {
    width: 49.5%;
    height: 100%;

    img {
      width: 100%;
      height: 49.5%;
    }
  }
}

.padding-box {
  overflow: hidden;
  padding: 10px 0;
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 0px 0px 4px 1px #dfdfe0;
  -moz-box-shadow: 0px 0px 4px 1px #dfdfe0;
  box-shadow: 0px 0px 4px 1px #dfdfe0;
  margin-bottom: 15px;
  background-color: #ffffff;

  .top-title {
    font-size: 1rem;
    color: #565656;
    line-height: 25px;
    margin-bottom: 5px;
    padding-left: 10px;
    font-weight: 600;
    display: flex;

    i {
      color: #ebb000;
      margin-right: 3px;
      font-size: 1.4rem;
    }
  }

  .friendship-link {
    width: 6.9rem;
    height: 6.3rem;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }

    .pos-title {
      position: absolute;
      width: 92%;
      height: 2rem;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 1rem;
      padding: 0 4px;
      font-weight: 600;
      display: block;
      text-align: center;
      line-height: 2rem;
      bottom: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

.swiper-container-box {
  margin-top: .1rem;
  width: 22.8rem;
  padding-left: 4px;
  // height: 6.3rem;
  overflow: visible !important;
}

.swiper-slide {
  width: 6.9rem !important;
  margin-right: 0.8rem;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
  width: 19px;
  height: 20px;
  color: #767676;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
}

.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  font-size: 1rem;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  font-size: 1rem;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: unset;
  right: 40px;
  width: 19px;
  height: 20px;
  color: #767676;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
}

.swiper-button-prev,
.swiper-button-next {
  top: 23%;
}

.swiper-pagination {
  top: 8%;
  right: 23%;
}

::v-deep .swiper-pagination-bullet {
  margin: 0 2px;
}

.sale-type {
  display: flex;
  flex-direction: column;
  color: #ebb000;
  width: 7.5rem;
  height: 7.5rem;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #efefef;

  .fonSize {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
}

.footer {
  margin-top: 15px;
  padding: 6px 10px;
  overflow: hidden;
  font-size: 12px;
  border-top: 1px solid #cacaca;
}
</style>