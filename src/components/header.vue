<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 10:01:35
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-11-02 15:13:45
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
          <span>{{ $t("message.topPhone") }}</span>
          <big>032-361-8884</big>
        </div>
      </div>
      <div class="num-to" v-if="this.$route.name != 'index'">
        <span class="num-to-box toDay"><span>{{ $t("message.toDay") }}</span> <br /> <countTo :startVal='0' :endVal='142' :duration='3000'></countTo></span>
        <span class="num-to-box nowDay"><span>{{ $t("message.nowDay") }}</span> <br /><countTo :startVal='0' :endVal='75201' :duration='6000'></countTo></span>
        <span class="num-to-box losDay"><span>{{ $t("message.losDay") }}</span><br /><countTo :startVal='0' :endVal='715524' :duration='4200'></countTo></span>
      </div>
      <div class="header-navigation pull-right">
        <ul>
          <!-- 웹 메뉴 -->
          <li>
            <router-link to="/housemap" class="router-test">
              <a href="javascript:;">{{$t("message.navList")}}</a>
            </router-link>
          </li>
          <li class="dropdown custom_news_menu">
            <router-link to="/newsList" class="router-test">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">{{$t("message.news")}}</a>
            </router-link>
          </li>
          <li class="dropdown">
            <router-link to="/additional" class="router-test">
              <a href="javascript:;" class="dropdown-toggle">{{$t("message.entrust")}}</a>
            </router-link>
          </li>
          <li>
            <router-link to="/helplist" class="router-test">
              <a href="javascript:;">{{$t("message.problem")}}</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="languageChange">
      <span>{{$t("message.language")}}：</span>
      <div class="selectChange">
        <el-select v-model="value" :placeholder="$t('message.select')" @change="changeLangEvent">
          <el-option v-for="item in languageOptions" :key="item.lg" :label="item.name" :value="item.lg">
          </el-option>
        </el-select>
      </div>

    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
export default {
  name: 'app-header',
  components: {
    countTo
  },
  data() {
    return {
      value: this.$i18n.locale,
      languageOptions: [
        {
          lg: 'cn',
          name: this.$t("message.CN")
        },
        {
          lg: 'en',
          name: this.$t("message.EN")
        },
        {
          lg: 'ko',
          name: this.$t("message.KO")
        },
      ]
    };
  },
  created() {

  },
  mounted() {
  },
  methods: {

    changeLangEvent(e) {
      this.$confirm(this.$t("message.LanguageSwitching"), this.$t("message.Tips"), {
        confirmButtonText: this.$t("message.yes"),
        cancelButtonText: this.$t("message.no"),
        type: 'warning'
      }).then(() => {
        this.$i18n.locale = e
        localStorage.setItem('lang',e)
      }).catch(() => {
        // //console.log('catch');
      });
    }
  },

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

.languageChange {
  display: flex;
  // width: 150px;
  height: 40px;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 0;

  span {
    display: inline-block;
    // width: 40px;
    font-size: 14px;
  }

  .selectChange {
    width: 90px;
  }

  ::v-deep .el-input__inner {
    height: 28px;
    line-height: 28px;
  }

  ::v-deep .el-input__icon {
    line-height: 28px !important;
  }
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

  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
}


.num-to{
  display: inline-flex;
  margin-left: 20px;
  height: 100%;
  &-box {
    display: inline-block;
    text-align: right;
    margin: 0 10px;
    font-weight: 600;
    
  }
  .toDay{
      color:#bd413f;
    }
    .nowDay{
      color: #ee8e1e;
    }
    .losDay{
      color: #6c9ee5;
    }
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

.header-navigation>ul>li {
  float: left;
}

.header-navigation>ul>li>a {
  color: #555;
  display: block;
  padding: 29px 12px 30px;
}
</style>
