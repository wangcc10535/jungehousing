<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-26 21:16:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-26 22:27:39
 * @FilePath: \jungehousing\src\views\mobile\m_search\m_typeSearch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="search-Box">
            <div class="top-input">
                <el-input v-model="searchFrom.searchName" class="search-input" :placeholder="$t('message.fuzzySearch')">
                </el-input>
            </div>
            <el-divider></el-divider>
            <h4>{{$t('message.TransactionType')}}</h4>
            <el-radio-group v-model="searchFrom.tradeType" size="medium">
                <el-radio-button :label="item.dictValue" v-for="(item,index) in dealOptions" :key="index">
                    {{item.dictLabel}}</el-radio-button>
            </el-radio-group>
            <el-divider></el-divider>
            <h4>{{$t('message.SalesType')}}</h4>
            <el-radio-group v-model="searchFrom.saleType" size="medium">
                <el-radio-button :label="item.dictValue" v-for="(item,index) in saleOptions" :key="index">
                    {{item.dictLabel}}</el-radio-button>
            </el-radio-group>
            <el-divider></el-divider>
            <h4>{{$t('message.ResidentialType')}}</h4>
            <el-radio-group v-model="searchFrom.sale" size="medium">
                <el-radio-button :label="item.dictValue" v-for="(item,index) in houseOptions" :key="index">
                    {{item.dictLabel}}</el-radio-button>
            </el-radio-group>
            <div class="footer">
                <el-button icon="el-icon-refresh-right" class="btn-width" @click="react">{{$t('message.Reset')}}
                </el-button>
                <el-button type="warning" icon="el-icon-search" class="btn-width" @click="searchClick">{{
                $t('message.SearchBtn') }}</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {
    getSaletype,
    getDicts,
} from '@/api/http';
export default {
    name: '',
    data() {
        return {
            searchFrom: {},
            // 交易类型
            dealOptions: [],
            // 住宅类型
            houseOptions: [],
            // 销售类型
            saleOptions: [],
        }
    },
    created() {
        this.getTransaction();
        this.getHouseType();
        this.getSaletype();
    },
    mounted() {
    },
    methods: {
        searchClick() {
            this.$router.push({
                name: 'm_mapList',
                query: this.searchFrom
            });
        },
        react() {
            this.searchFrom = {}
        },
        getTransaction() {
            getDicts('transaction_type').then((res) => {
                if (res.code == 200) {
                    this.dealOptions = res.data;
                }
            });
        },
        // 获取住宅类型
        getHouseType() {
            getDicts('residence_type').then((res) => {
                if (res.code == 200) {
                    this.houseOptions = res.data;
                }
            });
        },
        // 获取销售类型
        getSaletype() {
            getSaletype().then((res) => {
                this.saleOptions = res.data;
            });
        },
    }
};
</script>
<style scoped lang='scss'>
.search-Box {
    padding: 10px;

    h4 {
        margin-bottom: 10px;
    }
}

.btn-width {
    width: 48%;
}

.footer {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>