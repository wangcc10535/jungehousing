<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-26 21:16:54
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-26 22:52:44
 * @FilePath: \jungehousing\src\views\mobile\m_search\m_addressSearch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div class="address-box">
            <el-select v-model="cityFrom" @change="cityChange('1', $event)" class="search-select"
                :placeholder="$t('message.selectCity')">
                <el-option v-for="item in cityOptions" :key="item.code" :label="item.name"
                    :value="{ label: item.name, value: item.code }">
                </el-option>
            </el-select>
            <el-select v-model="countyFrom" @change="cityChange('2', $event)" class="search-select" placeholder="-">
                <el-option v-for="item in countyOptions" :key="item.code" :label="item.name"
                    :value="{ label: item.name, value: item.code }">
                </el-option>
            </el-select>
            <el-select v-model="streetFrom" class="search-select" placeholder="-">
                <el-option v-for="item in streetOptions" :key="item.code" :label="item.name"
                    :value="{ label: item.name, value: item.code }">
                </el-option>
            </el-select>
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
    address
} from '@/api/http';
export default {
    name: '',
    data() {
        return {
            // 选择城市
            cityOptions: [],
            countyOptions: [],
            streetOptions: [],
            cityFrom: {},
            countyFrom: {},
            streetFrom: {},
            pid: '0',
            searchFrom: {}
        }
    },
    created() {
        this.getCity();
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
        react() {
            this.cityFrom = {};
            this.countyFrom = {};
            this.streetFrom = {};
        },
        searchClick() {
            if (this.cityFrom.label || this.countyFrom.label || this.streetFrom.label) {
                this.searchFrom.city = this.cityFrom.label + ',' + this.countyFrom.label + ',' + this.streetFrom.label;
            }
            this.$router.push({
                name: 'm_mapList',
                query: this.searchFrom
            });
        }
    }
};
</script>
<style scoped lang='scss'>
.address-box {
    padding: 10px;
}

.search-select {
    width: 100%;
    margin-bottom: 20px;
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