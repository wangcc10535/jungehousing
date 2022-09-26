<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-26 21:09:26
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-27 02:48:22
 * @FilePath: \jungehousing\src\views\mobile\m_orderList\m_details\m_detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="index-beader">
            <el-link class="top-icon" icon="el-icon-arrow-left" :underline="false" @click="goRouter"></el-link>
            <span class="header-title">{{$t('message.ArticleNo')}}：{{detailData.homeNum}}</span>
        </div>
        <div class="bottom-box">
            <el-button style="width:60%" @click="dialogVise">{{$t('message.KeepInContact')}}</el-button>
        </div>
        <div class="detail-box">
            <div class="swiper-container-box" id="swiper-area">
                <swiper :options="detailShipOption">
                    <swiper-slide v-for="(link, index) in detailData.roomImages" :key="index">
                        <div class="friendship-link" v-viewer>
                            <img :src="link.image"  alt="" />
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <p class="order-name">【{{ detailData.address }}】{{ detailData.title }}</p>
            <div class="information">
                <el-descriptions :title="$t('message.essentialInformation')" :column="1" border>
                    <el-descriptions-item :label="$t('message.AmountInformation')">
                        <div class="price_wrap">
                            <span class="installation_span">{{$t('message.TotalPrice')}}</span>
                            <strong class="price_strong">{{ detailData.lastPrice }}</strong>
                            <span class="installation_span">{{$t('message.downPayments')}}</span>
                            <strong class="price_strong">{{ detailData.roomPrice }}</strong>
                            <span class="installation_span">{{$t('message.loan')}}</span>
                            <strong class="price_strong">{{ detailData.loans }}{{$t('message.TenThousandWon')}}</strong>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item :label="$t('message.LocationInformation')">
                        <div class="address">
                            <p>{{ detailData.address }}</p>
                            <p>
                                <span v-for="(metro, index) in detailData.roomSubways" :key="index">
                                    <span class="metro">{{ metro.name }}</span>{{ metro.info }}</span>
                            </p>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item :label="$t('message.BuildingInformation')">
                        <p class="base-row">
                            <span class="tags">{{$t('message.floor')}}</span>
                            {{ detailData.floor }}
                        </p>
                    </el-descriptions-item>
                    <el-descriptions-item :label="$t('message.MoreInformation')">
                        <p class="base-row">
                            <span class="tags">{{$t('message.area')}}</span>
                            {{ detailData.actualArea }}㎡
                        </p>
                        <p class="base-row base-play">
                            <span class="base-play-box">
                                <span class="tags">{{$t('message.waterproof')}}</span>
                                {{ detailData.familyNum }}{{$t('message.Room')}}
                            </span>
                            <span class="base-play-box">
                                <span class="tags">{{$t('message.ShowerRoom')}}</span>
                                {{ detailData.showerRoom }}{{$t('message.Room')}}
                            </span>
                        </p>
                        <p class="base-row base-play">
                            <span class="base-play-box">
                                <span class="tags">{{$t('message.heating')}}</span>
                                <span v-if="detailData.heat == 2">{{$t('message.NoHeating')}}</span>
                                <span v-if="detailData.heat == 1">{{$t('message.UrbanHeating')}}</span>
                            </span>
                            <span class="base-play-box"></span>
                        </p>
                    </el-descriptions-item>
                    <el-descriptions-item :label="$t('message.OptionInformation')">
                        <div class="option-box">
                            <!-- <i class="iconfont icon-tingchechang"></i> -->
                            <span class="option-box-label" v-for="(metro, index) in detailData.option" :key="index">{{
                            metro
                            }}、</span>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item :label="$t('message.phone')">
                        <p class="base-row"><a :href="'tel:'+ detailData.phone">{{ detailData.phone }}</a></p>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="order-list-detail">
                <h3>{{$t('message.detailedDescription')}}</h3>
                <div class="order-list-detail-center" v-html="detailData.item"></div>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" width="96%" :before-close="handleClose">
            <div class="agent-box">
                <div class="agent-box-header">
                    <h3>[{{$t('message.ArticleNo')}}：{{detailData.homeNum}}]</h3>
                    <h4>{{detailData.middlemanJob}}</h4>
                    <div class="agent-box-header-img" v-viewer>
                        <img v-if="detailData.middlemanImg" :src="detailData.middlemanImg" alt />
                        <el-avatar v-else :size="50" style="width:100%;height:100%" :src="circleUrl"></el-avatar>
                    </div>
                    <p class="agent-box-header-name"><i class="iconfont icon-yonghufill"></i>
                        {{detailData.middlemanName}}</p>
                </div>
                <div class="agent-box-contact">
                    <span class="agent-box-contact-phone"> <i class="iconfont icon-dianhua"></i>{{detailData.phone}}
                    </span>
                    <span class="agent-box-contact-kakao">
                        <i class="iconfont icon-kakao-talk-fill kakao-talk-fill"></i>{{detailData.middlemanTalk}}
                    </span>

                    <el-button type="success" style="margin-top:15px" icon="el-icon-phone"><a
                            :href="'tel:'+detailData.phone">{{$t('message.call')}}</a>
                    </el-button>

                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { roomDetail, listmiddleman } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            detailShipOption: {
                slidesPerView: 1,
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '#swiper-area .swiper-button-next',
                    prevEl: '#swiper-area .swiper-button-prev',
                },
                pagination: {
                    el: '#swiper-area .swiper-pagination',
                    // 设置点击可切换
                    clickable: true
                },
                autoplay: {
                    delay: 5000 // 5秒切换一次
                }
            },
            detailData: {},
            houseId: this.$route.query.id,
            dialogVisible: false,
        }
    },
    created() {
        this.getDetail();
        this.getlistmiddleman();
    },
    mounted() {
    },
    methods: {
        // 获取经纪人
        getlistmiddleman() {
            listmiddleman({}).then(res => {
                console.log(res.rows);
                this.middleman = res.rows
            })
        },
        // 获取详情
        getDetail() {
            roomDetail({ id: this.houseId }).then((res) => {
                this.detailData = res.data;
                // this.detailData.city = this.detailData.city.split(',');
                this.detailData.option = this.detailData.option.split(',');
                this.middleman.forEach(item => {
                    if (item.id == this.detailData.middlemanId) {
                        this.detailData.middlemanImg = item.headerImg;
                        this.detailData.middlemanJob = item.job;
                        this.detailData.middlemanName = item.name;
                        this.detailData.middlemanTalk = item.talk;
                    }
                })
            });
        },
        goRouter() {
            this.$router.go(-1)
        },
        dialogVise() {
            this.dialogVisible = true;
        },
        handleClose() {
            this.dialogVisible = false;
        }
    }
};
</script>
<style scoped lang='scss'>
::v-deep .index-beader {
    margin-bottom: 0;
}

.index-beader {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 3.75rem;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: left;
    -webkit-box-shadow: 0px 0px 8px 2px #d2ded8;
    -moz-box-shadow: 0px 0px 8px 2px #d2ded8;
    box-shadow: 0px 0px 8px 2px #d2ded8;

    .top-icon {
        width: 2.8rem;
        height: 2.8rem;
        font-size: 24px;
        color: #EBB000;
    }

    .top-logo {
        height: 36px;
        width: 120px;
    }

    .header-title {
        margin-right: 1rem;
        display: inline-flex;
        width: 100%;
        justify-content: center;
    }
}

.swiper-container-box {
    width: 25.875rem;
    position: relative;
}

.swiper-pagination {
    bottom: 10px;
    /* left: 36%; */
    /* text-align: center; */
    display: flex;
    justify-content: center;
    width: 100%;
}

::v-deep .swiper-pagination-bullet {
    margin: 0 2px;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
    font-size: 1.5rem;
    font-weight: 700;
}

.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
    font-size: 1.5rem;
    font-weight: 700;
}

.detail-box {
    margin-top: 3.75rem;
    background-color: #ffffff;
    padding-bottom: 60px;
}

.friendship-link {
    height: 15.6rem;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

::v-deep .el-descriptions-item__label.is-bordered-label {
    width: 24%;
}

.tags {
    background-color: #666;
    color: #fff;
    padding: 3px 15px;
    margin-right: 4px;
}

.base-row {
    color: #000;
    margin-bottom: 6px;
}

.base-row:last-child {
    margin-bottom: 0;
}

.base-play {
    display: flex;
    justify-content: space-around;
    width: 100%;

    span.base-play-box {
        display: inline-block;
        width: 50%;
    }
}

.address {
    p {
        margin-bottom: 6px;
        color: #000;
    }
}

.metro {
    border: 2px solid #ee5a2a;
    color: #ee5a2a;
    border-radius: 3px;
    padding: 0px 3px 0px 3px;
    font-size: 11px;
    margin-right: 5px;
}

.bottom-box {
    padding: 10px;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    justify-content: center;
    display: flex;
    background-color: #eeeeee;
    z-index: 10;
}

.order-name {
    margin: 10px 0;
    position: relative;
    // height: 20px;
    line-height: 20px;
    padding-left: 5px;
}

.order-list-detail {
    width: 100%;
    margin-top: 20px;

    h3 {
        font-weight: normal;
        margin-bottom: 10px;
        text-align: left;
    }

    &-center {
        margin-bottom: 20px;
        padding: 0 10px;
    }
}

.agent-box {
    padding: 20px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        // padding: 10px 0 10px 0;
        padding-bottom: 10px;

        h4 {
            color: #7a7366;
            padding: 5px 0 5px 0;
            font-size: 14px;
        }

        &-name {
            line-height: 22px;
            display: flex;
            height: 22px;
            align-items: flex-end;
            margin-top: 6px;
        }

        &-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            padding: 2px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }

    &-contact {
        border-top: 1px dashed rgba(0, 0, 0, 0.1);
        border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        margin-top: 10px;

        &-phone {
            color: #fff;
            background-color: #333;
            padding: 4px;
            border-radius: 10px;
            text-align: center;
            position: relative;
            font-weight: 600;

            i {
                position: absolute;
                left: 6px;
                top: 8px;
            }
        }

        &-kakao {
            margin-top: 10px;
            background-color: #fef212 !important;
            color: #333;
            padding: 4px;
            border-radius: 10px;
            text-align: center;
            position: relative;
            font-weight: 500;

            i {
                font-size: 20px;
                position: absolute;
                left: 6px;
                top: 6px;
            }
        }
    }

    &-customer {
        padding: 10px 0;

        &-ps {
            font-size: 14px;
            text-align: left;
        }

        &-input,
        &-textarea,
        &-submit {
            margin-top: 10px;
        }

        &-submit {
            &-btn {
                width: 100%;
            }
        }
    }
}

::v-deep .el-dialog__header {
    padding: 0;
}

::v-deep .el-dialog__body {
    padding: 0;
}
</style>