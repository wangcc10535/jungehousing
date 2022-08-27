<template>
  <div  class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <div class="detail-title">
        <h2>{{detailTitle}}</h2>
        <h3>기획부동산/일반부동산/부동산컨설팅</h3>
      </div>
      <div class="brief-box" v-if="requestName == 'news'">
        <i class="el-icon-s-ticket icon-color"></i>
        <p>기획부동산,일반부동산,부동산컨설팅</p>
      </div>
      <div class="brief-box" v-if="requestName == 'see'">
        <i class="el-icon-date icon-color"></i>
        <p>2021-12-29 11:57:58</p>
      </div>
      <div class="content">
        内容
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'baseDetail',
    data() {
        return{
          requestName:this.$route.query.name,
          detailTitle: null,
        }
    },
    created() {
      console.log(this.requestName);
      if (this.requestName == 'news') {
        this.detailTitle = '新闻'
      }else if(this.requestName == 'see') {
        this.detailTitle = '评论'
      }
    },
    methods:{

    }
}
</script>

<style lang='scss' scoped>
.detail-title{
  display: table;
  h2,h3{
    margin-bottom: 10px;
  }
  h3 {
    color: #767F88;
  }
}
.brief-box{
  display: flex;
  line-height: 22px;
  padding: 8px 0;
  border-top: 1px #ECEBEB solid;
  border-bottom: 1px #ECEBEB solid;
  margin: 20px 0;
}
.icon-color{
  color: #E84D1C;
  margin-right: 10px;
  display: inline-block;
  line-height: 22px;
}
.content {
  padding: 20px 0;
}
</style>