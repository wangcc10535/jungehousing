<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-25 00:13:47
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-25 00:29:44
 * @FilePath: \jungehousing\src\views\mobile\m_news\m_newsDetail\m_newsDetail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="title-img">
            <img :src="baseFrom.image" alt="">
        </div>
        <div class="text-new">
            <h2 class="title-new">{{baseFrom.newsTitle}}</h2>
            <div class="new-body" v-html="baseFrom.newsBody"></div>
        </div>
    </div>
</template>
<script>
import { newsDetail } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            qId: this.$route.query.id,
            baseFrom: {}
        }
    },
    created() {
        newsDetail({ id: this.qId }).then((res) => {
            console.log(res);
            this.baseFrom = res.data;
        });
    },
    mounted() {
    },
    methods: {
    }
};
</script>
<style scoped lang='scss'>
.title-img {
    width: 100%;
    height: 414px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.text-new {
    padding: 10px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    line-height: 1.4em;

    .title-new {
        padding-left: 10px;
        border-left: 4px solid #ebb000;
        margin: 20px;
    }


}

.new-body {
    width: 100%;

    ::v-deep p {
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>