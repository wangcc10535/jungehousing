<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-24 22:15:16
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-25 00:43:02
 * @FilePath: \jungehousing\src\views\mobile\m_additional\m_additional.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="fromBox">
            <div class="title-box">
                <img src="@/assets/images/m_ing/qna.jpg" alt="">
                <span class="title-from">{{$t('message.tabFirst')}}</span>
            </div>
            <div class="from">
                <el-form :model="fromAddData" :rules="rules" label-position="top" ref="fromAddData" label-width="100px"
                    class="demo-ruleForm">
                    <el-form-item :label="$t('message.RequiredArea') + ':'">
                        <el-select v-model="provinceFrom" @change="cityChange('1', $event)" class="search-select"
                            style="margin-right: 10px" :placeholder="$t('message.selectCity')">
                            <el-option v-for="item in cityOptions" :key="item.code" :label="item.name"
                                :value="{ label: item.name, value: item.code }">
                            </el-option>
                        </el-select>
                        <el-select v-model="cityFrom" @change="cityChange('2', $event)" class="search-select"
                            style="margin-right: 10px" placeholder="-">
                            <el-option v-for="item in countyOptions" :key="item.code" :label="item.name"
                                :value="{ label: item.name, value: item.code }">
                            </el-option>
                        </el-select>
                        <el-select v-model="districtFrom" class="search-select" placeholder="-">
                            <el-option v-for="item in streetOptions" :key="item.code" :label="item.name"
                                style="margin-right: 10px" :value="{ label: item.name, value: item.code }">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('message.Price') + ':'">
                        <el-input class="contact" style="margin-right: 14px; " v-model="fromAddData.lowPrice"
                            :placeholder="$t('message.floorPrice')"></el-input>
                        <el-input class="contact" v-model="fromAddData.highPrice"
                            :placeholder="$t('message.ceilingPrice')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.type') + ':'">
                        <el-checkbox-group v-model="saleTypecheckList">
                            <el-checkbox :label="item.dictLabel" v-for="(item, index) in saleArr" :key="index">
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="$t('message.ResidentialType') + ':'">
                        <el-checkbox-group v-model="houseTypecheckList">
                            <el-checkbox :label="item.dictLabel" v-for="(item, index) in stuArr" :key="index">
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="$t('message.CommissionType') + ':'">
                        <el-radio-group v-model="fromAddData.type">
                            <el-radio :label="item.dictValue" v-for="(item, index) in entrustType" :key="index">{{
                            item.dictLabel
                            }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item :label="$t('message.EstimatedTime') + ':'">
                        <el-date-picker v-model="fromAddData.payTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime"
                            :placeholder="$t('message.selectTile')"></el-date-picker>
                    </el-form-item>
                    <el-form-item :label="$t('message.accessTime') + ':'">
                        <el-date-picker v-model="fromAddData.comeTime" value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetime" :placeholder="$t('message.selectTile')"></el-date-picker>
                    </el-form-item>
                    <el-form-item :label="$t('message.HouseSize') + ':'">
                        <el-input v-model="fromAddData.homeSize" :placeholder="$t('message.HouseSize')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.information') + ':'">
                        <el-input style="margin-bottom:10px" v-model="fromAddData.name"
                            :placeholder="$t('message.name')">
                        </el-input>
                        <el-input style="margin-bottom:10px" v-model="fromAddData.emily"
                            :placeholder="$t('message.eMail')">
                        </el-input>
                        <el-input v-model="fromAddData.phone" :placeholder="$t('message.phone')">
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.Display') + ':'">
                        <el-radio-group v-model="fromAddData.show">
                            <el-radio :label="check.dictValue" v-for="(check, index) in showType" :key="index">{{
                            check.dictLabel
                            }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item :label="$t('message.demand') + ':'">
                        <el-input type="textarea" :rows="6" :placeholder="$t('message.inputPlaceholder')"
                            v-model="fromAddData.info"></el-input>
                    </el-form-item>
                </el-form>
                <div class="submit">
                    <el-button class="sub-btn" type="primary" @click="submitFrom">{{$t('message.Submit')}}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { address, addQna, getDicts } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            fromAddData: {},
            provinceFrom: {},
            cityFrom: {},
            districtFrom: {},
            rules: {},
            // 选择城市
            cityOptions: [],
            countyOptions: [],
            streetOptions: [],
            saleArr: [],
            stuArr: [],
            showType: [],
            entrustType: [],
            saleTypecheckList: [],
            houseTypecheckList: []
        }
    },
    created() {
        this.getCity();
        this.getEntrustType();
        this.getStuArr();
        this.getShowType();
        this.getSaleArr();
    },
    mounted() {
    },
    methods: {
        // 获取城市
        getCity(index, e) {
            // console.log(e);
            if (index == 1) {
                this.pid = e.value;
            } else if (index == 2) {
                this.pid = e.value;
            } else {
                this.pid = '0';
            }
            address({ pid: this.pid }).then((res) => {
                // console.log(res);
                if (index == 1) {
                    this.countyOptions = res.rows;
                } else if (index == 2) {
                    this.streetOptions = res.rows;
                } else {
                    this.cityOptions = res.rows;
                }
            });
        },
        // 选择城市
        cityChange(index, e) {
            // console.log(index);
            // console.log(e);
            this.getCity(index, e);
        },
        getEntrustType() {
            getDicts('entrust_type').then((res) => {
                if (res.code == 200) {
                    this.entrustType = res.data;
                }
            });
        },
        getStuArr() {
            getDicts('residence_type').then((res) => {
                if (res.code == 200) {
                    this.stuArr = res.data;
                }
            });
        },
        getShowType() {
            getDicts('show_type').then((res) => {
                if (res.code == 200) {
                    this.showType = res.data;
                }
            });
        },
        getSaleArr() {
            getDicts('sale_type').then((res) => {
                if (res.code == 200) {
                    this.saleArr = res.data;
                }
            });
        },
        submitFrom() {
            this.fromAddData.province = this.provinceFrom.label;
            this.fromAddData.city = this.cityFrom.label;
            this.fromAddData.district = this.districtFrom.label;
            this.fromAddData.homeType = this.houseTypecheckList.toString();
            this.fromAddData.dealType = this.saleTypecheckList.toString();
            addQna({ ...this.fromAddData }).then((res) => {
                if (res.code == 200) {
                    this.$message.success('제출 성공!');
                    this.getlistQna();
                    this.fromAddData = {};
                    this.houseTypecheckList = [];
                    this.saleTypecheckList = [];
                }
            });
        }
    }
};
</script>
<style scoped lang='scss'>
::v-deep .index-beader {
    margin-bottom: 0;
}

.fromBox {
    overflow: hidden;

    .title-box {
        position: relative;
        width: 100%;
        height: 10.8rem;
        background-color: black;

        img {
            opacity: 0.6;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .title-from {
            position: absolute;
            font-size: 1.5rem;
            font-weight: 600;
            bottom: 3rem;
            left: 5rem;
            color: #fff;
        }
    }
}

.from {
    padding: 10px;
}

.search-select {
    width: 30%;
}

.contact {
    width: 46%;
}

.submit {
    width: 100%;
    text-align: center;

    .sub-btn {
        width: 70%;
    }
}
</style>