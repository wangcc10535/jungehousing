<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:33:28
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-24 16:25:48
 * @FilePath: \jungehousing\src\views\news\newsList.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <div class="left">
        <div class="top-search">
          <div class="search-title">
            <h2>{{ $t('message.AllNews') }}</h2>
            <span v-if="itemList.length > 0">({{ itemList.length }})</span>
          </div>
          <div class="search-box">
            <el-input v-model="searchInput" size="small" :placeholder="$t('message.inputPlaceholder')"></el-input>
            <el-button type="warning" size="small" @click="search">{{ $t('message.SearchBtn') }}</el-button>
          </div>
        </div>
        <div class="news-list">
          <div class="news-box" v-for="(news, index) in itemList" :key="index">
            <a :href="news.name" target="_blank">
              <div class="newsimg-box">
                <img :src="news.image" alt />
              </div>
              <div class="news-title">
                <h2>{{ news.newsTitle }}</h2>
                <span>{{ $t('message.SeeMore') }}</span>
              </div>
            </a>

          </div>
        </div>
      </div>
      <div class="right-box">
        <rightList :rightTitle="rightTitle" :houseList="houseList"></rightList>
      </div>
    </div>
  </div>
</template>

<script>
import rightList from '@/components/rightList.vue';
import { listNews, roomSelectHot } from '@/api/http';
export default {
  name: 'newsList',
  components: {
    rightList
  },
  data() {
    return {
      searchInput: '',
      rightTitle: this.$t('message.LatestProperty'),
      itemList: [],
      houseList: []
    };
  },
  created() {
    this.getNewsList();
    this.getList();
  },
  methods: {
    search() {
      this.getNewsList()
    },
    // 获取房产新闻列表
    getNewsList() {
      listNews({ name: this.searchInput }).then((res) => {
        if (res.code == 200) {
          this.itemList = res.rows;
        }
      });
    },
    setDetail(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'news',
          id: item.id
        }
      });
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

<style  lang='scss' scoped>
.left {
  float: left;
  width: 900px;

  .top-search {
    display: flex;
    justify-content: space-between;
    height: 46px;
    align-items: flex-end;
    margin-bottom: 20px;

    .search-title {
      display: flex;
      height: 46px;
      align-items: flex-end;
    }

    .search-box {
      display: flex;
    }
  }

  .news-list {
    margin-top: 10px;
    display: table;

    .news-box:last-child {
      border-bottom: none;
    }

    .news-box {
      border-bottom: 1px solid #ccc;
      margin: 20px 0;
      padding: 20px 0;
      display: flex;

      .newsimg-box {
        width: 270px;
        height: 270px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .news-title {
        padding: 0 15px 0 30px;

        h2 {
          color: #767f88;
          font-weight: normal;
          margin: 0 0 30px;
        }

        span {
          color: #767f88;
          font-size: 13px;
          cursor: pointer;
        }

        h2:hover,
        span:hover {
          color: #ebb000;
        }
      }
    }
  }
}

.right-box {
  width: 300px;
  float: right;
  margin-top: 80px;
}
</style>
