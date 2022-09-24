<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-24 17:47:33
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-25 00:18:24
 * @FilePath: \jungehousing\src\views\mobile\m_news\m_newsList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="new-box">
            <div class="search-box">
                <el-input v-model="searchInput" size="small" @input="search"
                    :placeholder="$t('message.inputPlaceholder')"></el-input>
                <el-button type="warning" size="small" @click="search">{{$t('message.SearchBtn')}}</el-button>
            </div>
            <ul class="news-list-box">
                <li v-for="(item,index) in itemList" :key="index" @click="setDetail(item)">
                    <div class="new-list">
                        <div class="img">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="title">
                            <h2 class="title-new">{{item.newsTitle}}</h2>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { listNews } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            searchInput: '',
            itemList: []
        }
    },
    created() {
        this.getNewsList()
    },
    mounted() {
    },
    methods: {
        search() {
            this.getNewsList();
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
                name: 'm_newsDetail',
                query: {
                    name: 'news',
                    id: item.id
                }
            });
        },
    }
};
</script>
<style scoped lang='scss'>
.new-box {
    background-color: #fff;
    padding: 10px;
}

.search-box {
    display: flex;
    margin-bottom: 20px;
}

.news-list-box {
    overflow: hidden;

    li {
        margin-bottom: 25px;
        box-shadow: #e3e3e3 0px 0px 6px 0px;

        .new-list {
            width: 100%;

            .img {
                height: 12.5rem;
                width: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .title {
                padding: 10px;
                border: 1px solid #e6e6e6;
                background-color: white;

                .title-new {
                    padding-left: 10px;
                    border-left: 4px solid #ebb000;
                    font-size: 1rem;
                    width: 96%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>