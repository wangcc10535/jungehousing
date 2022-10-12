<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <div class="detail-title">
        <h2>{{ detailTitle }}</h2>
        <h3>{{ baseFrom.newsTitle }}</h3>
      </div>
      <div class="brief-box" v-if="requestName == 'news'">
        <i class="el-icon-s-ticket icon-color"></i>
        <p>{{ baseFrom.info }}</p>
      </div>
      <div class="brief-box" v-if="requestName == 'see'">
        <i class="el-icon-date icon-color"></i>
        <p>{{baseFrom.updateTime}}</p>
      </div>
      <div class="content" v-if="requestName == 'news'" v-html="baseFrom.newsBody"></div>
      <div class="content" v-if="requestName == 'see'" v-html="baseFrom.info"></div>
    </div>
  </div>
</template>

<script>
import { newsDetail,applaudDetail } from '@/api/http';
export default {
  name: 'baseDetail',
  data() {
    return {
      requestName: this.$route.query.name,
      qId: this.$route.query.id,
      detailTitle: null,
      baseFrom: {}
    };
  },
  created() {
    if (this.requestName == 'news') {
      this.detailTitle = '新闻';
      newsDetail({ id: this.qId }).then((res) => {
        // console.log(res);
        this.baseFrom = res.data;
      });
    } else if (this.requestName == 'see') {
      this.detailTitle = '评论';
      applaudDetail({id:this.qId}).then (res =>{
        this.baseFrom = res.data;
      })
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.detail-title {
  display: table;
  h2,
  h3 {
    margin-bottom: 10px;
  }
  h3 {
    color: #767f88;
  }
}
.brief-box {
  display: flex;
  line-height: 22px;
  padding: 8px 0;
  border-top: 1px #ecebeb solid;
  border-bottom: 1px #ecebeb solid;
  margin: 20px 0;
}
.icon-color {
  color: #e84d1c;
  margin-right: 10px;
  display: inline-block;
  line-height: 22px;
}
.content {
  padding: 20px 0;
}
</style>
