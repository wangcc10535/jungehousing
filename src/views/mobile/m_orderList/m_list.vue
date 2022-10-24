<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-26 21:08:31
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-24 10:41:57
 * @FilePath: \jungehousing\src\views\mobile\m_orderList\m_list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul class="list_widget" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
                <li class="list-item list" v-for="(item,index) in houseList" :key="index" @click="seDetail(item)">
                    <div class="row-box">
                        <div class="rowImg">
                            <img :src="item.image" alt />
                        </div>
                        <div class="marg-right">
                            <p class="marg-title">[{{item.addressName}}] {{item.title}}</p>
                            <div class="price_wrap">
                                <span class="installation_span">{{$t('message.TotalPrice')}}</span>
                                <strong class="price_strong">{{item.lastPrice}}</strong>
                                <span class="installation_span">{{$t('message.downPayments')}}</span>
                                <strong class="price_strong">{{item.roomPrice}}</strong>
                                <span class="installation_span">{{$t('message.loan')}}</span>
                                <strong class="price_strong">{{item.loans}}{{$t('message.TenThousandWon')}}</strong>
                            </div>
                            <p class="list-cm"> {{ item.familyNum }} {{$t('message.between')}}| {{ item.address }}</p>
                            <p>
                                <el-tag type="warning" size="mini" style="margin-right:6px">{{item.actualArea}} ㎡
                                </el-tag>
                                <el-tag type="warning" size="mini">{{$t('message.ShowerRoom')}} {{ item.showerRoom
                                }}{{$t('message.between')}}</el-tag>
                            </p>
                        </div>
                    </div>
                </li>
                <p v-if="loading" style="text-align:center;width: 100%;">加载中...</p>
                <p v-if="noMore" style="text-align:center;width: 100%;">没有更多了</p>

            </ul>
            <!-- <el-empty description="No Data" v-if="houseList.length == 0" style="text-align:center"></el-empty> -->
        </div>
    </div>
</template>
<script>
import { searchRoom } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            count: 10,
            loading: false,
            houseList: []
        }
    },
    created() {
        this.getList();
    },
    computed: {
        noMore() {
            return this.count >= 20
        },
        disabled() {
            return this.loading || this.noMore
        }
    },
    mounted() {
    },
    methods: {
        load() {
            this.loading = true
            this.count += 2
            this.loading = false
        },
        // 获取房产列表
        getList() {
            this.loading = true
            searchRoom({ ...this.searchFrom }).then((res) => {
                if (res.code == 200) {
                    res.rows.forEach(element => {
                        if (element.address) {
                            element.addressName = element.address.slice(0, 6)
                        }

                    })
                    this.houseList = res.rows;
                    this.loading = false;
                }

            });
        },
        seDetail(item) {
            this.$router.push({
                name: 'm_detail',
                query: {
                    id: item.id
                }
            });
        }
    }
};
</script>
<style scoped lang='scss'>
.infinite-list-wrapper {
    height: 88vh;
}

.right-list,
.list_widget {
    //   width: 100%;
    display: table;
    margin-bottom: 40px;
}

.list_widget {

    //   border: 1px solid rgba(0, 0, 0, 0.1);
    .list {
        // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        margin-bottom: 10px;
        background-color: #fff;

        .row-box {
            display: flex;
            justify-content: space-between;

            .rowImg {
                width: 8.12rem;
                height: 7.5rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .marg-right {
                width: 68%;
                padding-left: 10px;

                .marg-title {
                    letter-spacing: 0px;
                    font-weight: bold;
                    font-size: 1rem;
                    cursor: pointer;
                    margin: 10px 0;
                    width: 100%;
                    /*1. 超出的部分隐藏 */
                    overflow: hidden;

                    /*2. 文字用省略号替代超出的部分 */
                    text-overflow: ellipsis;

                    /* 3. 弹性伸缩盒子模型显示 */
                    display: -webkit-box;

                    /* 4. 限制在一个块元素显示的文本的行数 */
                    -webkit-line-clamp: 1;

                    /* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
                    -webkit-box-orient: vertical;
                }

                .marg-title:hover {
                    color: #ebb000;
                    text-decoration: underline;
                }
            }

            .list-cm {
                font-size: 14px;
                line-height: 1.5rem;
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