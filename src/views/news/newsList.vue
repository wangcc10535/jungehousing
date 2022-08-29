<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:33:28
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-29 17:56:51
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
            <h2>所有房地产新闻</h2>
            <span v-if="itemList.length >0">({{ itemList.length }})</span>
          </div>
          <div class="search-box">
            <el-input v-model="searchInput" size="small" placeholder="请输入内容"></el-input>
            <el-button type="warning" size="small">搜索</el-button>
          </div>
        </div>
        <div class="news-list">
          <div
            class="news-box"
            v-for="(news,index) in itemList"
            :key="index"
            @click="setDetail(news)"
          >
            <div class="newsimg-box">
              <img :src="news.img" alt />
            </div>
            <div class="news-title">
              <h2>{{news.name}}</h2>
              <span>查看更多</span>
            </div>
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
export default {
  name: 'newsList',
  components: {
    rightList
  },
  data() {
    return {
      searchInput: '',
      rightTitle: '最新房产',
      itemList: [
        {
          id: '123',
          name: '规划不动产 / 一般不动产 / 不动产咨询',
          img: require('@/assets/images/dbc.jpg')
        },
        {
          id: '123',
          name: '规划不动产 / 一般不动产 / 不动产咨询',
          img: require('@/assets/images/bbs.jpg')
        },
        {
          id: '123',
          name: '规划不动产 / 一般不动产 / 不动产咨询',
          img: require('@/assets/images/bbs.jpg')
        },
        {
          id: '123',
          name: '规划不动产 / 一般不动产 / 不动产咨询',
          img: require('@/assets/images/bbs.jpg')
        },
        {
          id: '123',
          name: '规划不动产 / 一般不动产 / 不动产咨询',
          img: require('@/assets/images/bbs.jpg')
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
  methods: {
    setDetail(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'news',
          id: item.id
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
