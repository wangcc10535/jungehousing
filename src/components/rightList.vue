<template>
  <div class="right-list">
    <h4 class="h4">{{rightTitle}}</h4>
    <ul class="list_widget">
      <li class="list" v-for="(item,index) in houseList" :key="index" @click="setDetail(item)">
        <div class="row-box">
          <div class="rowImg">
            <img :src="item.image" alt />
          </div>
          <div class="marg-right">
            <p class="marg-title">[{{item.address.slice(0,6)}}] {{item.title}}</p>
            <div class="price_wrap">
              <span class="installation_span">{{$t('message.TotalPrice')}}</span>
              <strong class="price_strong">{{item.lastPrice}}</strong>
              <span class="installation_span">{{$t('message.downPayments')}}</span>
              <strong class="price_strong">{{item.roomPrice}}</strong>
              <span class="installation_span">{{$t('message.loan')}}</span>
              <strong class="price_strong">{{item.loans}}{{$t('message.TenThousandWon')}}</strong>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'rightList',
  props: {
    rightTitle: {
      type: String,
      required: true
    },
    houseList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    setDetail(item) {
        this.$router.push({
            name:'houseDetail',
            query: {
                id:item.id
            }
        }).catch(err=>err)
    }
  }
};
</script>

<style  lang='scss' scoped>
.h4{
    line-height: 40px;
}
.right-list,
.list_widget {
  width: 100%;
  display: table;
  margin-bottom: 40px;
}
.list_widget {
  border: 1px solid rgba(0, 0, 0, 0.1);
  .list {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    .row-box {
      padding: 20px 15px;
      display: flex;
      justify-content: space-between;
      .rowImg {
        width: 75px;
        height: 58px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .marg-right {
        width: 68%;
        .marg-title {
          letter-spacing: 0px;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
          width: 100%;
          /*1. 超出的部分隐藏 */
          overflow: hidden;

          /*2. 文字用省略号替代超出的部分 */
          text-overflow: ellipsis;

          /* 3. 弹性伸缩盒子模型显示 */
          display: -webkit-box;

          /* 4. 限制在一个块元素显示的文本的行数 */
          -webkit-line-clamp: 2;

          /* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-box-orient: vertical;
        }
        .marg-title:hover {
          color: #ebb000;
          text-decoration: underline;
        }
      }
    }
  }
  .list:last-child {
    border-bottom: none;
  }
}
.price_wrap {
  line-height: 20px;
  margin-top: 6px;
}
.installation_span {
  font-size: 12px;
  color: white;
  padding: 1px 5px 1px 5px;
  margin-right: 3px;
  background-color: #f6910b;
  margin-right: 5px;
}
.price_strong {
  color: #f6910b;
  font-size: 12px;
}
</style>