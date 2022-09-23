<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-22 20:44:38
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-24 01:54:26
 * @FilePath: \jungehousing\src\components\mobile_c\m_nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-drawer :visible.sync="navDrawer" size="80%" direction="ltr" :before-close="handleClose" :show-close="true">
      <div class="logo">
        <router-link to="/m_index" class="router-test">
          <img src="@/assets/images/m_ing/mlogo.jpg" alt="">
        </router-link>
      </div>
      <div class="nav-box">
        <ul>
          <li>
            <i class="el-icon-house"></i>
            <span>{{$t('message.home')}}</span>
          </li>
          <li>
            <i class="el-icon-location-outline"></i>
            <span>{{$t('message.AddressSearch')}}</span>
          </li>
          <li>
            <i class="el-icon-search"></i>
            <span>{{$t('message.SearchBtn')}}</span>
          </li>
          <li>
            <i class="iconfont icon-chakan"></i>
            <span>{{$t('message.news')}}</span>
          </li>
          <li>
            <i class="el-icon-s-comment"></i>
            <span>{{$t('message.entrust')}}</span>
          </li>
          <li>
            <i class="iconfont icon-50wenti"></i>
            <span>{{$t('message.problem')}}</span>
          </li>
        </ul>
      </div>
      <div class="nav-phone">
        <a href="tel:+032-361-8884">
          032-361-8884 <i class="iconfont icon-dianhua2"></i>
        </a>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'm_nav',
  data() {
    return {
      navDrawer: false
    }
  },
  methods: {
    openNav() {
      this.navDrawer = true;
    },
    handleClose() {
      this.navDrawer = false;
    }
  }
}
</script>

<style lang='scss' scoped>
.logo {
  padding: 0 22px;
  margin-bottom: 2rem;

  img {
    width: 12.5rem;
    height: 3.75rem;
  }
}

.nav-box {
  padding: 0 22px;
  overflow: hidden;

  ul {
    li {
      height: 3.125rem;
      line-height: 3.125rem;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0px;
      border-bottom: 2px solid #fafafa;
      font-size: 13px;
      text-decoration: none;

      i {
        color: #ebb000;
        font-size: 22px;
        margin-right: 26px;
      }

      span {
        font-size: 1rem;
      }
    }
  }
}

::v-deep .el-drawer__header {
  margin-bottom: 0;
}

.box-drawer {
  position: relative;
}

.nav-phone {
  position: fixed;
  bottom: 20px;
  display: flex;
  width: 80%;
  justify-content: center;
  height: 40px;
  align-items: center;
  font-size: 24px;
  font-weight: 600;

  i {
    font-size: 24px;
    margin-left: 12px;
    color: #ebb000;
  }
}
</style>