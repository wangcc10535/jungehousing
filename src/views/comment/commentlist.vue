<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <div class="list-box">
        <div class="mega-entry-innerwrap" v-for="(mega, index) in innerwrapList" :key="index">
          <img :src="mega.image" alt />
          <div class="mega-hover">
            <span class="mega-hovertitle">{{ mega.title }}</span>
            <div class="mega-hoverlink" @click="seeClick(mega)"></div>
            <div class="mega-hoverview" @click="megaHover(mega)"></div>
          </div>
        </div>
        <div class="more" v-if="innerwrapList.lenght > 12">
          <el-button icon="el-icon-plus" @click="addMore">查看更多</el-button>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="imgVisible" width="30%">
      <div class="logImg">
        <img :src="dialogImg" alt="" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import {listApplaud} from '@/api/http';
export default {
  name: 'commentlist',
  data() {
    return {
      imgVisible: false,
      dialogImg: null,
      innerwrapList: []
    };
  },
  created() {
    this.getComments()
  },
  methods: {
    megaHover(item) {
      this.imgVisible = true;
      this.dialogImg = item.image;
    },
    seeClick(item) {
      this.$router.push({
        name: 'baseDetail',
        query: {
          name: 'see',
          id: item.id
        }
      });
    },
    addMore() {
      console.log('加载更多');
      
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
    }
  }
};
</script>

<style lang="scss" scoped>
.mega-entry-innerwrap {
  width: 176px;
  height: 176px;
  position: relative;
  display: inline-block;
  margin: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.mega-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('@/assets/images/grain.png') repeat;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  top: 0;
  left: 0;
}

.mega-hover:hover {
  opacity: 1;
}

.mega-hovertitle {
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 60%;
  padding: 0px 0px 15px;
  left: 20%;
  bottom: 50%;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  // opacity: 0;
}

.mega-hoverlink,
.mega-hoverview {
  width: 33px;
  height: 33px;
  position: absolute;
  top: 50%;
  text-align: center;
  margin-top: 0px;
  cursor: pointer;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  // opacity: 0;
}

.mega-hoverlink {
  right: 50%;
  margin-right: 10px;
  background: url('@/assets/images/link.png') no-repeat center;
  -webkit-transform: translateZ(10);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

.mega-hoverview {
  left: 50%;
  margin-left: 10px;
  background: url('@/assets/images/lupe.png') no-repeat center;
  -webkit-transform: translateZ(10);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

.logImg {
  width: 100%;

  img {
    width: 100%;
  }
}

.list-box {
  padding: 20px 0;
}
.more {
  width: 100%;
  text-align: center;
  margin: 20px 0 40px;
}
</style>
